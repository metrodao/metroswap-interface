import React, { ReactNode, useCallback, useRef } from 'react'
import { ChainId } from 'dxswap-sdk'
import styled from 'styled-components'
import Option from './Option'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useCloseModals, useAddPopup } from '../../state/application/hooks'

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
