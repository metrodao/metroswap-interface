import React, { ReactNode, useCallback, useRef } from 'react'
import { ChainId } from 'dxswap-sdk'
import styled from 'styled-components'
import Option from './Option'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useCloseModals, useAddPopup } from '../../state/application/hooks'

import EthereumPoWLogo from '../../assets/images/ethw-logo.png'
import EthereumFairLogo from '../../assets/images/ethw-logo.png'
import ArbitrumLogo from '../../assets/images/arbitrum-logo.jpg'
import XDAILogo from '../../assets/images/xdai-stake-logo.png'
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
import Popover from '../Popover'
import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { NETWORK_DETAIL } from '../../constants'
import { CustomNetworkConnector } from '../../connectors/CustomNetworkConnector'

const OptionGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    grid-gap: 10px;
  `};
`

export default function NetworkSwitcherPopover({ children }: { children: ReactNode }) {
  const { connector } = useActiveWeb3React()
  const networkSwitcherPopoverOpen = useModalOpen(ApplicationModal.NETWORK_SWITCHER)
  const popoverRef = useRef(null)
  const addPopup = useAddPopup()
  const closeModals = useCloseModals()
  useOnClickOutside(popoverRef, () => {
    if (networkSwitcherPopoverOpen) closeModals()
  })

  const { chainId, account } = useActiveWeb3React()

  const selectNetwork = useCallback(
    (optionChainId: ChainId) => {
      if (optionChainId === chainId) return
      if (!!!account && connector instanceof CustomNetworkConnector) {
        connector.changeChainId(optionChainId)
      }
      if (
        window.ethereum &&
        window.ethereum.isMetaMask &&
        NETWORK_DETAIL[optionChainId] &&
        NETWORK_DETAIL[optionChainId].metamaskAddable
      ) {
        addPopup({ newNetworkChainId: optionChainId })
      }
      closeModals()
    },
    [account, addPopup, chainId, closeModals, connector]
  )

  return (
    <div ref={popoverRef} style={{ height: 22 }}>
      <Popover
        content={
          <OptionGrid>
            <Option
              onClick={() => {
                selectNetwork(ChainId.ETHW)
              }}
              header={'EthereumPoW'}
              logoSrc={EthereumPoWLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.ETF)
              }}
              header={'EthereumFair'}
              logoSrc={EthereumFairLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.XDAI)
              }}
              header={'xDai'}
              logoSrc={XDAILogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.MATIC)
              }}
              header={'Polygon'}
              logoSrc={MaticLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.AVALANCHE)
              }}
              header={'Avalanche'}
              logoSrc={AvalancheLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.BINANCE)
              }}
              header={'Binance'}
              logoSrc={BinanceLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.BITTORRENT)
              }}
              header={'BitTorrent'}
              logoSrc={BittorrentLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.FUSE)
              }}
              header={'FUSE'}
              logoSrc={FuseLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.IOTEX)
              }}
              header={'IoTeX'}
              logoSrc={IotexLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.FANTOM)
              }}
              header={'Fantom'}
              logoSrc={FantomLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.HARMONY)
              }}
              header={'Harmony'}
              logoSrc={HarmonyLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.CALLISTO)
              }}
              header={'Callisto'}
              logoSrc={CallistoLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.MOONBEAM)
              }}
              header={'Moonbeam'}
              logoSrc={MoonbeamLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.CELO)
              }}
              header={'Celo'}
              logoSrc={CeloLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.EVMOS)
              }}
              header={'Evmos'}
              logoSrc={EvmosLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.ASTAR)
              }}
              header={'Astar'}
              logoSrc={AstarLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.SMARTBCH)
              }}
              header={'SmartBCH'}
              logoSrc={SmartBCHLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.TELOS)
              }}
              header={'Telos'}
              logoSrc={TelosLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.ZYX)
              }}
              header={'Zyx'}
              logoSrc={ZyxLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.THUNDERCORE)
              }}
              header={'ThunderCore'}
              logoSrc={ThunderCoreLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.ECHELON)
              }}
              header={'Echelon'}
              logoSrc={EchelonLogo}
            />
            <Option
              onClick={() => {
                selectNetwork(ChainId.ARBITRUM_TESTNET_V3)
              }}
              header={'Arbitrum'}
              logoSrc={ArbitrumLogo}
              disabled={true}
              clickable={false}
            />
          </OptionGrid>
        }
        show={networkSwitcherPopoverOpen}
      >
        {children}
      </Popover>
    </div>
  )
}
