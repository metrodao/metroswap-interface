import { ChainId, Currency, Token, Fetcher, DXD } from 'dxswap-sdk'
import React, { ReactNode, useMemo } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import EthereumLogo from '../../assets/images/ethereum-logo.png'
import EthereumPoWLogo from '../../assets/images/ethw-logo.png'
import EthereumFairLogo from '../../assets/images/ethw-logo.png'
import PoaLogo from '../../assets/images/poa-logo.png'
import XDAILogo from '../../assets/images/xdai-logo.png'
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
import DXDLogo from '../../assets/svg/dxd.svg'
import { useActiveWeb3React } from '../../hooks'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  border: solid 1px ${props => props.theme.bg1};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Wrapper = styled.div<{ size: string; marginRight: number; marginLeft: number; loading?: boolean }>`
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  background-color: ${props => (props.loading ? 'transparent' : props.theme.bg1)};
  position: relative;
`

const NATIVE_CURRENCY_LOGO: { [chainId in ChainId]: string } = {
  [ChainId.ARBITRUM_TESTNET_V3]: EthereumLogo,
  [ChainId.MAINNET]: EthereumLogo,
  [ChainId.ETHW]: EthereumPoWLogo,
  [ChainId.ETF]: EthereumFairLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.SOKOL]: PoaLogo,
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

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
  className,
  loading,
  marginRight = 0,
  marginLeft = 0
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
  className?: string
  loading?: boolean
  marginRight?: number
  marginLeft?: number
}) {
  const { chainId } = useActiveWeb3React()
  const nativeCurrencyLogo = NATIVE_CURRENCY_LOGO[(chainId as ChainId) || ChainId.XDAI]
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency && Currency.isNative(currency) && !!nativeCurrencyLogo) return [nativeCurrencyLogo]
    if (currency instanceof Token) {
      if (Token.isNativeWrapper(currency)) return [nativeCurrencyLogo]
      if (chainId && DXD[chainId] && DXD[chainId].address === currency.address) return [DXDLogo]
      return [getTokenLogoURL(currency.address), Fetcher.getCachedTokenLogo(currency), ...uriLocations]
    }
    return []
  }, [chainId, currency, nativeCurrencyLogo, uriLocations])

  if (loading)
    return (
      <Skeleton
        wrapper={({ children }: { children: ReactNode }) => (
          <Wrapper
            loading={loading}
            size={size}
            marginRight={marginRight}
            marginLeft={marginLeft}
            className={className}
          >
            {children}
          </Wrapper>
        )}
        circle
        width={size}
        height={size}
      />
    )
  return (
    <Wrapper size={size} marginRight={marginRight} marginLeft={marginLeft} className={className}>
      <StyledLogo
        size={size}
        defaultText={currency?.symbol || '?'}
        srcs={srcs}
        alt={`${currency?.symbol ?? 'token'} logo`}
        style={style}
      />
    </Wrapper>
  )
}
