/* eslint-disable @typescript-eslint/no-empty-function */
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { darken, transparentize } from 'polished'
import React, { useMemo } from 'react'
import { Activity, ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { NetworkContextName } from '../../constants'
import useENSName from '../../hooks/useENSName'
import { useWalletModalToggle, useNetworkSwitcherPopoverToggle } from '../../state/application/hooks'
import { isTransactionRecent, useAllTransactions } from '../../state/transactions/hooks'
import { TransactionDetails } from '../../state/transactions/reducer'
import { shortenAddress } from '../../utils'
import { TYPE } from '../../theme'
import { ButtonSecondary } from '../Button'
import Loader from '../Loader'

import { RowBetween } from '../Row'
import WalletModal from '../WalletModal'
import NetworkSwitcherPopover from '../NetworkSwitcherPopover'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import EthereumPoWLogo from '../../assets/images/ethw-logo.png'
import EthereumFairLogo from '../../assets/images/ethw-logo.png'
import XDAILogo from '../../assets/images/xdai-stake-logo.png'
import ArbitrumLogo from '../../assets/images/arbitrum-logo.jpg'
import MaticLogo from '../../assets/images/matic-logo.png'
import AvalancheLogo from '../../assets/images/avalanche-logo.png'
import BinanceLogo from '../../assets/images/bsc-logo.png'
import FuseLogo from '../../assets/images/fuse-logo.png'
import IotexLogo from '../../assets/images/iotex-logo.png'
import FantomLogo from '../../assets/images/fantom-logo.png'
import HarmonyLogo from '../../assets/images/harmony-logo.png'
import BittorrentLogo from '../../assets/images/bittorrent-logo.png'
import CallistoLogo from '../../assets/images/callisto-logo.png'
import MoonbeamLogo from '../../assets/images/moonbeam-logo.png'
import CeloLogo from '../../assets/images/celo-logo.png'
import EvmosLogo from '../../assets/images/evmos-logo.png'
import AstarLogo from '../../assets/images/astar-logo.png'
import SmartBCHLogo from '../../assets/images/smartbch-logo.png'
import TelosLogo from '../../assets/images/telos-logo.png'
import ZyxLogo from '../../assets/images/zyx-logo.png'
import ThunderCoreLogo from '../../assets/images/thundercore-logo.png'
import EchelonLogo from '../../assets/images/echelon-logo.jpg'
import { ChainId } from 'dxswap-sdk'
import { useActiveWeb3React } from '../../hooks'

const ChainLogo: any = {
  [ChainId.MAINNET]: EthereumLogo,
  [ChainId.ETHW]: EthereumPoWLogo,
  [ChainId.ETF]: EthereumFairLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.ARBITRUM_TESTNET_V3]: ArbitrumLogo,
  [ChainId.SOKOL]: '',
  [ChainId.XDAI]: XDAILogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.AVALANCHE]: AvalancheLogo,
  [ChainId.BINANCE]: BinanceLogo,
  [ChainId.FUSE]: FuseLogo,
  [ChainId.IOTEX]: IotexLogo,
  [ChainId.FANTOM]: FantomLogo,
  [ChainId.HARMONY]: HarmonyLogo,
  [ChainId.BITTORRENT]: BittorrentLogo,
  [ChainId.CALLISTO]: CallistoLogo,
  [ChainId.MOONBEAM]: MoonbeamLogo,
  [ChainId.CELO]: CeloLogo,
  [ChainId.EVMOS]: EvmosLogo,
  [ChainId.ASTAR]: AstarLogo,
  [ChainId.SMARTBCH]: SmartBCHLogo,
  [ChainId.TELOS]: TelosLogo,
  [ChainId.ZYX]: ZyxLogo,
  [ChainId.THUNDERCORE]: ThunderCoreLogo,
  [ChainId.ECHELON]: EchelonLogo
}

const ChainLabel: any = {
  [ChainId.MAINNET]: 'Choose network',
  [ChainId.ETHW]: 'EthereumPoW',
  [ChainId.ETF]: 'EthereumFair',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ARBITRUM_TESTNET_V3]: 'Arbitrum',
  [ChainId.SOKOL]: 'Sokol',
  [ChainId.XDAI]: 'xDai',
  [ChainId.MATIC]: 'Matic',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.BINANCE]: 'Binance',
  [ChainId.FUSE]: 'Fuse',
  [ChainId.IOTEX]: 'IoTeX',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.BITTORRENT]: 'BitTorrent',
  [ChainId.CALLISTO]: 'Callisto',
  [ChainId.MOONBEAM]: 'Moonbeam',
  [ChainId.CELO]: 'Celo',
  [ChainId.EVMOS]: 'Evmos',
  [ChainId.ASTAR]: 'Astar',
  [ChainId.SMARTBCH]: 'SmartBCH',
  [ChainId.TELOS]: 'Telos',
  [ChainId.ZYX]: 'Zyx',
  [ChainId.THUNDERCORE]: 'ThunderCore',
  [ChainId.ECHELON]: 'Echelon'
}

const IconWrapper = styled.div<{ size?: number | null }>`
  ${({ theme }) => theme.flexColumnNoWrap};
  align-items: center;
  justify-content: center;
  & > img,
  span {
    height: ${({ size }) => (size ? size + 'px' : '30px')};
  }
  ${({ theme }) => theme.mediaWidth.upToMedium`
    align-items: center;
  `};
`

const Web3StatusGeneric = styled(ButtonSecondary)`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  :focus {
    outline: none;
  }
`
const Web3StatusError = styled(Web3StatusGeneric)`
  background-color: ${({ theme }) => theme.red1};
  border: 1px solid ${({ theme }) => theme.red1};
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  :hover,
  :focus {
    background-color: ${({ theme }) => darken(0.1, theme.red1)};
  }
`

const Web3StatusConnect = styled(Web3StatusGeneric)<{ faded?: boolean }>`
  background-color: ${({ theme }) => transparentize(0.25, theme.bg1)};
  color: ${({ theme }) => theme.text4};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  padding: 9px 0px 9px 14px;
  outline: none;
  :hover,
  :focus {
    outline: none;
    border: none;
    box-shadow: none;
    background-color: ${({ theme }) => transparentize(0.1, theme.bg1)};
  }
`

const Web3StatusConnected = styled(Web3StatusGeneric)<{ pending?: boolean }>`
  background-color: ${({ pending, theme }) => (pending ? theme.primary1 : theme.dark2)};
  border: none;
  color: ${({ pending, theme }) => (pending ? theme.white : theme.text4)};
  border-radius: 8px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
  transition: background-color 0.3s ease;
  padding: 9px 14px;
  :hover,
  :focus {
    border: none;
    background-color: ${({ pending, theme }) => (pending ? theme.primary1 : transparentize(0.1, theme.purple3))};
  }
`

const Web3StatusNetwork = styled(Web3StatusGeneric)<{ pending?: boolean }>`
  background-color: ${({ theme }) => theme.dark1};
  padding: 0px 18px 0px 14px;
  border: 1px solid ${({ theme }) => theme.dark1};
`

const Text = styled.p<{ fontSize?: number }>`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 1rem;
  width: fit-content;
  font-weight: 500;
  ${({ fontSize }) => (fontSize ? `font-size:${fontSize}px` : '')};
`

const NetworkIcon = styled(Activity)`
  width: 15px;
  height: 15px;
`

// we want the latest one to come first, so return negative if a is after b
function newTransactionsFirst(a: TransactionDetails, b: TransactionDetails) {
  return b.addedTime - a.addedTime
}

function Web3StatusInner() {
  const { t } = useTranslation()
  const { account, error } = useWeb3React()
  const { chainId: networkConnectorChainId } = useActiveWeb3React()

  const { ENSName } = useENSName(account ?? undefined)

  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)

  const hasPendingTransactions = !!pending.length
  const toggleWalletModal = useWalletModalToggle()
  const toggleNetworkSwitcherPopover = useNetworkSwitcherPopoverToggle()

  if (error) {
    return (
      <Web3StatusError onClick={toggleWalletModal}>
        <NetworkIcon />
        <Text>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}</Text>
      </Web3StatusError>
    )
  }
  if (networkConnectorChainId) {
    return (
      <>
        {!!account ? (
          <Web3StatusConnected id="web3-status-connected" onClick={toggleWalletModal} pending={hasPendingTransactions}>
            {hasPendingTransactions ? (
              <RowBetween>
                <Text fontSize={13}>{pending?.length} Pending</Text> <Loader />
              </RowBetween>
            ) : (
              ENSName || shortenAddress(account)
            )}
          </Web3StatusConnected>
        ) : (
          <Web3StatusConnect id="connect-wallet" onClick={toggleWalletModal} faded={!account}>
            {t('No wallet connected')}
          </Web3StatusConnect>
        )}
        <NetworkSwitcherPopover>
          <Web3StatusNetwork onClick={!!!account ? toggleNetworkSwitcherPopover : () => {}}>
            <IconWrapper size={20}>
              <img src={ChainLogo[networkConnectorChainId]} alt={''} />
            </IconWrapper>
            <TYPE.white ml="8px" mr={!!!account ? '4px' : '0px'} fontWeight={700} fontSize="12px">
              {ChainLabel[networkConnectorChainId]}
            </TYPE.white>
            {!!!account && <ChevronDown size={16} />}
          </Web3StatusNetwork>
        </NetworkSwitcherPopover>
      </>
    )
  }
  return null
}

export default function Web3Status() {
  const { active, account } = useWeb3React()
  const contextNetwork = useWeb3React(NetworkContextName)

  const { ENSName } = useENSName(account ?? undefined)

  const allTransactions = useAllTransactions()

  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  const pending = sortedRecentTransactions.filter(tx => !tx.receipt).map(tx => tx.hash)
  const confirmed = sortedRecentTransactions.filter(tx => tx.receipt).map(tx => tx.hash)

  if (!contextNetwork.active && !active) {
    return null
  }

  return (
    <>
      <Web3StatusInner />
      <WalletModal ENSName={ENSName ?? undefined} pendingTransactions={pending} confirmedTransactions={confirmed} />
    </>
  )
}
