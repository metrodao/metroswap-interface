import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { abi as IDXswapRouterABI } from 'dxswap-periphery/build/IDXswapRouter.json'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, Pair, RoutablePlatform } from 'dxswap-sdk'
import { TokenAddressMap } from '../state/lists/hooks'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  1: '',
  4: 'rinkeby.',
  [ChainId.ARBITRUM_TESTNET_V3]: '',
  [ChainId.SOKOL]: '',
  [ChainId.XDAI]: '',
  [ChainId.MATIC]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BINANCE]: '',
  [ChainId.FUSE]: '',
  [ChainId.IOTEX]: '',
  [ChainId.FANTOM]: '',
  [ChainId.HARMONY]: '',
  [ChainId.BITTORRENT]: '',
  [ChainId.CALLISTO]: '',
  [ChainId.MOONBEAM]: '',
  [ChainId.CELO]: '',
  [ChainId.EVMOS]: '',
  [ChainId.ASTAR]: '',
  [ChainId.SMARTBCH]: '',
  [ChainId.TELOS]: '',
  [ChainId.ZYX]: '',
  [ChainId.THUNDERCORE]: ''
}

const getExplorerPrefix = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.ARBITRUM_TESTNET_V3:
      return 'https://explorer.arbitrum.io/#'
    case ChainId.SOKOL:
      return 'https://blockscout.com/poa/sokol'
    case ChainId.XDAI:
      return 'https://blockscout.com/xdai/mainnet'
    case ChainId.MATIC:
      return 'https://polygonscan.com/'
    case ChainId.AVALANCHE:
      return 'https://snowtrace.io'
    case ChainId.BINANCE:
      return 'https://bscscan.com'
    case ChainId.FUSE:
      return 'https://explorer.fuse.io'
    case ChainId.IOTEX:
      return 'https://iotexscan.io'
    case ChainId.FANTOM:
      return 'https://ftmscan.com'
    case ChainId.HARMONY:
      return 'https://explorer.harmony.one'
    case ChainId.BITTORRENT:
      return 'https://scan.bt.io'
    case ChainId.CALLISTO:
      return 'https://explorer.callisto.network'
    case ChainId.MOONBEAM:
      return 'https://moonbeam.moonscan.io'
    case ChainId.CELO:
      return 'https://explorer.celo.org'
    case ChainId.EVMOS:
      return 'https://evm.evmos.org'
    case ChainId.ASTAR:
      return 'https://blockscout.com/astar/'
    case ChainId.SMARTBCH:
      return 'https://smartscan.cash'
    case ChainId.TELOS:
      return 'https://teloscan.io'
    case ChainId.ZYX:
      return 'https://zyxscan.com/'
    case ChainId.THUNDERCORE:
      return 'https://viewblock.io/thundercore/'
    default:
      return `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}etherscan.io`
  }
}

export function getExplorerLink(
  chainId: ChainId,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  const prefix = getExplorerPrefix(chainId)

  // exception. blockscout doesn't have a token-specific address
  if (chainId === ChainId.XDAI && type === 'token') {
    return `${prefix}/address/${data}`
  }

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber, blockGasLimit: BigNumber): BigNumber {
  const gasWithMargin = value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
  return gasWithMargin.gt(blockGasLimit) ? blockGasLimit : gasWithMargin
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000))
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(
  chainId: ChainId,
  library: Web3Provider,
  platform: RoutablePlatform,
  account?: string
): Contract {
  return getContract(
    platform.routerAddress[chainId ? chainId : ChainId.XDAI] as string,
    IDXswapRouterABI,
    library,
    account
  )
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency: Currency): boolean {
  if (Currency.isNative(currency)) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}

export function isPairOnList(pairs: Pair[], pair?: Pair): boolean {
  if (!pair) return false
  return !!pairs.find(loopedPair => loopedPair.equals(pair))
}
