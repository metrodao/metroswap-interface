import { AbstractConnector } from '@web3-react/abstract-connector'
import { ChainId, JSBI, Percent, CurrencyAmount, WETH, WSPOA, WXDAI, Token, Currency, WMATIC, WAVAX, WBNB, WFUSE, WIOTX, WFTM, WONE } from 'dxswap-sdk'
import { tokens } from './tokens'
import { injected, walletConnectMATIC, walletConnectXDAI, walletlink } from '../connectors'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x6b175474e89094c44da98b954eedeac495271d0f',
    18,
    'DAI',
    'Dai Stablecoin'
  ),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0x44fa8e6f47987339850636f88629646662444217', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'Dai Stablecoin'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Binance-Peg Dai Token'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, '0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA', 18, 'DAI', 'Dai Stablecoin on Fuse'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0x62a9D987Cbf4C45a550DEEd5B57b200d7a319632', 18, 'DAI-matic', 'Dai Matic Stablecoin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339', 18, '1DAI', 'Dai Stablecoin')
}

export const USDC: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC', 'USD//C'),
  [ChainId.XDAI]: new Token(
    ChainId.XDAI,
    '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
    6,
    'USDC',
    'USD//C from Ethereum'
  ),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 6, 'USDC', 'PoS USDC'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', 6, 'USDC.e', 'USD Coin'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', 6, 'USDC', 'Binance-Peg USD Coin'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, '0x620fd5fa44BE6af63715Ef4E65DDFA0387aD13F5', 6, 'USDC', 'USD Coin on Fuse'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0x3B2bf2b523f54C4E454F08Aa286D03115aFF326c', 6, 'ioUSDC', 'USD Coin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75', 6, 'USDC', 'USD Coin'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x985458E523dB3d53125813eD68c274899e9DfAb4', 6, '1USDC', 'USD Coin')
}

export const USDT: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
  [ChainId.XDAI]: new Token(
    ChainId.XDAI,
    '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
    6,
    'USDT',
    'Tether USD from Ethereum'
  ),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', 6, 'USDT', 'PoS Tether USD'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xc7198437980c041c805a1edcba50c1ce5db95118', 6, 'USDT.e', 'Tether USD'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, '0x55d398326f99059ff775485246999027b3197955', 6, 'USDT', 'Tether USD'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, '0xFaDbBF8Ce7D5b7041bE672561bbA99f79c532e10', 6, 'USDT', 'Tether USD on Fuse'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0x6fbCdc1169B5130C59E72E51Ed68A84841C98cd1', 6, 'ioUSDT', 'Tether USD'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x049d68029688eAbF473097a2fC38ef61633A3C7A', 6, 'fUSDT', 'Frapped USDT'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f', 6, '1USDT', 'Tether USD')
}

export const WBTC: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    18,
    'WBTC',
    'Wrapped BTC'
  ),
  [ChainId.XDAI]: new Token(
    ChainId.XDAI,
    '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
    18,
    'WBTC',
    'Wrapped BTC from Ethereum'
  ),
  [ChainId.MATIC]: new Token(
    ChainId.MATIC,
    '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    18,
    'WBTC',
    '(PoS) Wrapped BTC'
  ),
  [ChainId.AVALANCHE]: new Token(
    ChainId.AVALANCHE,
    '0x50b7545627a5162f82a992c33b87adc75187b218',
    18,
    'WBTC',
    'Wrapped BTC'
  ),
  // no WBTC on Binance, yet
  [ChainId.BINANCE]: new Token(
    ChainId.BINANCE,
    '0x50b7545627a5162f82a992c33b87adc75187b218',
    18,
    'BTCB',
    'Binance-Peg BTCB Token (BTCB)'
  ),
  [ChainId.FUSE]: new Token(
    ChainId.FUSE,
    '0x33284f95ccb7B948d9D352e1439561CF83d8d00d',
    18,
    'WBTC',
    'Wrapped BTC on Fuse'
  ),
  [ChainId.IOTEX]: new Token(
    ChainId.IOTEX,
    '0xC7b93720F73b037394cE00f954f849Ed484a3dEA',
    18,
    'ioWBTC',
    'Wrapped BTC'
  ),
  [ChainId.FANTOM]: new Token(
    ChainId.FANTOM,
    '0x321162Cd933E2Be498Cd2267a90534A804051b11',
    18,
    'BTC',
    'Bitcoin'
  ),
  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
    18,
    '1WBTC',
    'Wrapped BTC'
  )
}

export const HONEY: { [key: number]: Token } = {
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9', 18, 'HNY', 'Honey'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0xb371248dd0f9e4061ccf8850e9223ca48aa7ca4b', 18, 'HNY', 'Honey')
}

export const METRO: { [key: number]: Token } = {
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9', 18, 'HNY', 'Honey'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0xc9616280Cc74B3B2196D32325f5278a7c2B593C4', 18, 'METRO', 'Metro')
}

export const STAKE = new Token(
  ChainId.XDAI,
  '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
  18,
  'STAKE',
  'Stake Token on xDai'
)

export const BAO = new Token(
  ChainId.XDAI,
  '0x82dFe19164729949fD66Da1a37BC70dD6c4746ce',
  18,
  'BAO',
  'BaoToken from Ethereum'
)

export const AGAVE = new Token(ChainId.XDAI, '0x3a97704a1b25F08aa230ae53B352e2e72ef52843', 18, 'AGVE', 'Agave token')

export const SURF = new Token(ChainId.MATIC, '0x1e42edbe5376e717c1b22904c59e406426e8173f', 18, 'SURF', 'SURF.Finance')
export const WAVE = new Token(ChainId.MATIC, '0x4de7fea447b837d7e77848a4b6c0662a64a84e14', 18, 'WAVE', 'WAVE Token')

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.MAINNET]: [
    WETH[ChainId.MAINNET],
    DAI[ChainId.MAINNET],
    USDC[ChainId.MAINNET],
    WBTC[ChainId.MAINNET],
    USDT[ChainId.MAINNET]
  ],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.ARBITRUM_TESTNET_V3]: [WETH[ChainId.ARBITRUM_TESTNET_V3]],
  [ChainId.SOKOL]: [WSPOA[ChainId.SOKOL]],
  [ChainId.XDAI]: [
    WXDAI[ChainId.XDAI],
    WETH[ChainId.XDAI],
    USDC[ChainId.XDAI],
    USDT[ChainId.XDAI],
    WBTC[ChainId.XDAI],
    HONEY[ChainId.XDAI],
    METRO[ChainId.XDAI],
    STAKE,
    AGAVE,
    BAO
  ],
  [ChainId.MATIC]: [
    WETH[ChainId.MATIC],
    WMATIC[ChainId.MATIC],
    HONEY[ChainId.MATIC],
    METRO[ChainId.MATIC],
    DAI[ChainId.MATIC],
    USDC[ChainId.MATIC],
    USDT[ChainId.MATIC],
    SURF,
    WAVE
  ],
  [ChainId.AVALANCHE]: [
    WETH[ChainId.AVALANCHE],
    WAVAX[ChainId.AVALANCHE],
    DAI[ChainId.AVALANCHE],
    USDC[ChainId.AVALANCHE],
    USDT[ChainId.AVALANCHE]
  ],
  [ChainId.BINANCE]: [
    WETH[ChainId.BINANCE],
    WBNB[ChainId.BINANCE],
    DAI[ChainId.BINANCE],
    USDC[ChainId.BINANCE],
    USDT[ChainId.BINANCE]
  ],
  [ChainId.FUSE]: [
    WETH[ChainId.FUSE],
    WFUSE[ChainId.FUSE],
    DAI[ChainId.FUSE],
    USDC[ChainId.FUSE],
    USDT[ChainId.FUSE]
  ],
  [ChainId.IOTEX]: [
    WETH[ChainId.IOTEX],
    WIOTX[ChainId.IOTEX],
    DAI[ChainId.IOTEX],
    USDC[ChainId.IOTEX],
    USDT[ChainId.IOTEX]
  ],
  [ChainId.FANTOM]: [
    WETH[ChainId.FANTOM],
    WFTM[ChainId.FANTOM],
    DAI[ChainId.FANTOM],
    USDC[ChainId.FANTOM],
    USDT[ChainId.FANTOM]
  ],
  [ChainId.HARMONY]: [
    WETH[ChainId.HARMONY],
    WONE[ChainId.HARMONY],
    DAI[ChainId.HARMONY],
    USDC[ChainId.HARMONY],
    USDT[ChainId.HARMONY]
  ]
}

// used for display in the default list when adding liquidity (native currency is already shown
// by default, so no need to add the wrapper to the list)
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [DAI[ChainId.MAINNET], USDC[ChainId.MAINNET], USDT[ChainId.MAINNET], WBTC[ChainId.MAINNET]],
  [ChainId.RINKEBY]: [],
  [ChainId.ARBITRUM_TESTNET_V3]: [],
  [ChainId.SOKOL]: [],
  [ChainId.XDAI]: [WETH[ChainId.XDAI], USDC[ChainId.XDAI], HONEY[ChainId.XDAI]],
  [ChainId.XDAI]: [WETH[ChainId.XDAI], USDC[ChainId.XDAI], METRO[ChainId.XDAI]],
  [ChainId.MATIC]: [WETH[ChainId.MATIC], HONEY[ChainId.MATIC]],
  [ChainId.MATIC]: [WETH[ChainId.MATIC], METRO[ChainId.MATIC]],
  [ChainId.AVALANCHE]: [DAI[ChainId.AVALANCHE], USDC[ChainId.AVALANCHE], USDT[ChainId.AVALANCHE], WBTC[ChainId.AVALANCHE]],
  [ChainId.BINANCE]: [DAI[ChainId.BINANCE], USDC[ChainId.BINANCE], USDT[ChainId.BINANCE], WBTC[ChainId.BINANCE]],
  [ChainId.FUSE]: [DAI[ChainId.FUSE], USDC[ChainId.FUSE], USDT[ChainId.FUSE], WBTC[ChainId.FUSE]],
  [ChainId.IOTEX]: [DAI[ChainId.IOTEX], USDC[ChainId.IOTEX], USDT[ChainId.IOTEX], WBTC[ChainId.IOTEX]],
  [ChainId.FANTOM]: [DAI[ChainId.FANTOM], USDC[ChainId.FANTOM], USDT[ChainId.FANTOM], WBTC[ChainId.FANTOM]],
  [ChainId.HARMONY]: [DAI[ChainId.HARMONY], USDC[ChainId.HARMONY], USDT[ChainId.HARMONY], WBTC[ChainId.HARMONY]]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET], DAI[ChainId.MAINNET], USDC[ChainId.MAINNET], USDT[ChainId.MAINNET]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.ARBITRUM_TESTNET_V3]: [WETH[ChainId.ARBITRUM_TESTNET_V3]],
  [ChainId.SOKOL]: [Token.WSPOA[ChainId.SOKOL]],
  [ChainId.XDAI]: [WXDAI[ChainId.XDAI], WETH[ChainId.XDAI], USDC[ChainId.XDAI], STAKE],
  [ChainId.MATIC]: [
    WMATIC[ChainId.MATIC],
    WETH[ChainId.MATIC],
    HONEY[ChainId.MATIC],
    METRO[ChainId.MATIC],
    DAI[ChainId.MATIC],
    USDC[ChainId.MATIC],
    USDT[ChainId.MATIC]
  ],
  [ChainId.AVALANCHE]: [WETH[ChainId.AVALANCHE], DAI[ChainId.AVALANCHE], USDC[ChainId.AVALANCHE], USDT[ChainId.AVALANCHE]],
  [ChainId.BINANCE]: [WETH[ChainId.BINANCE], DAI[ChainId.BINANCE], USDC[ChainId.BINANCE], USDT[ChainId.BINANCE]],
  [ChainId.FUSE]: [WETH[ChainId.FUSE], DAI[ChainId.FUSE], USDC[ChainId.FUSE], USDT[ChainId.FUSE]],
  [ChainId.IOTEX]: [WETH[ChainId.IOTEX], DAI[ChainId.IOTEX], USDC[ChainId.IOTEX], USDT[ChainId.IOTEX]],
  [ChainId.FANTOM]: [WETH[ChainId.FANTOM], DAI[ChainId.FANTOM], USDC[ChainId.FANTOM], USDT[ChainId.FANTOM]],
  [ChainId.HARMONY]: [WETH[ChainId.HARMONY], DAI[ChainId.HARMONY], USDC[ChainId.HARMONY], USDT[ChainId.HARMONY]]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [USDC[ChainId.MAINNET], USDT[ChainId.MAINNET]],
    [DAI[ChainId.MAINNET], USDT[ChainId.MAINNET]]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  WALLET_CONNECT_XDAI: {
    connector: walletConnectXDAI,
    name: 'WalletConnect for xDai',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_CONNECT_MATIC: {
    connector: walletConnectMATIC,
    name: 'WalletConnect for Polygon',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH

export const DEFAULT_TOKEN_LIST = tokens

export const ZERO_USD = CurrencyAmount.usd('0')

interface NetworkDetails {
  chainId: string
  chainName: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
  blockExplorerUrls?: string[]
  iconUrls?: string[] // Currently ignored.
  metamaskAddable?: boolean
}

export const MATIC_PROJECT_ID = '917500540ed6561baeb650de48df44949ed21baf'

export const NETWORK_DETAIL: { [chainId: number]: NetworkDetails } = {
  [ChainId.MAINNET]: {
    chainId: `0x${ChainId.MAINNET.toString(16)}`,
    chainName: 'Ethereum Main Net',
    nativeCurrency: {
      name: Currency.ETHER.name || 'Ether',
      symbol: Currency.ETHER.symbol || 'ETH',
      decimals: Currency.ETHER.decimals || 18
    },
    rpcUrls: ['https://mainnet.infura.io/v3'],
    blockExplorerUrls: ['https://etherscan.io']
  },
  [ChainId.XDAI]: {
    chainId: `0x${ChainId.XDAI.toString(16)}`,
    chainName: 'xDAI',
    nativeCurrency: {
      name: Currency.XDAI.name || 'xDAI',
      symbol: Currency.XDAI.symbol || 'xDAI',
      decimals: Currency.XDAI.decimals || 18
    },
    rpcUrls: ['https://poa-xdai.gateway.pokt.network/v1/lb/61140fc659501900341babff'],
    blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
    metamaskAddable: true
  },
  [ChainId.MATIC]: {
    chainId: `0x${ChainId.MATIC.toString(16)}`,
    chainName: 'Matic',
    nativeCurrency: {
      name: Currency.MATIC.name || 'Matic',
      symbol: Currency.MATIC.symbol || 'MATIC',
      decimals: Currency.MATIC.decimals || 18
    },
    // rpcUrls: [`https://rpc-mainnet.maticvigil.com/v1/${MATIC_PROJECT_ID}`],
    rpcUrls: ['https://poly-mainnet.gateway.pokt.network/v1/lb/61141e8259501900341bb3e2'],
    blockExplorerUrls: ['https://explorer.matic.network/'],
    metamaskAddable: true
  },
  [ChainId.AVALANCHE]: {
    chainId: `0x${ChainId.AVALANCHE.toString(16)}`,
    chainName: 'Avalanche',
    nativeCurrency: {
      name: Currency.AVAX.name || 'Avalanche',
      symbol: Currency.AVAX.symbol || 'AVAX',
      decimals: Currency.AVAX.decimals || 18
    },
    // rpcUrls: [`https://rpc-mainnet.maticvigil.com/v1/${MATIC_PROJECT_ID}`],
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io/'],
    metamaskAddable: true
  },
  [ChainId.BINANCE]: {
    chainId: `0x${ChainId.BINANCE.toString(16)}`,
    chainName: 'Binance',
    nativeCurrency: {
      name: Currency.BNB.name || 'Binance',
      symbol: Currency.BNB.symbol || 'BNB',
      decimals: Currency.BNB.decimals || 18
    },
    // rpcUrls: [`https://rpc-mainnet.maticvigil.com/v1/${MATIC_PROJECT_ID}`],
    rpcUrls: ['https://bsc-dataseed1.ninicoin.io'],
    blockExplorerUrls: ['https://bscscan.com/'],
    metamaskAddable: true
  },
  [ChainId.FUSE]: {
    chainId: `0x${ChainId.FUSE.toString(16)}`,
    chainName: 'Fuse',
    nativeCurrency: {
      name: Currency.FUSE.name || 'Fuse',
      symbol: Currency.FUSE.symbol || 'FUSE',
      decimals: Currency.FUSE.decimals || 18
    },
    // rpcUrls: [`https://rpc-mainnet.maticvigil.com/v1/${MATIC_PROJECT_ID}`],
    rpcUrls: ['https://rpc.fuse.io'],
    blockExplorerUrls: ['https://explorer.fuse.io/'],
    metamaskAddable: true
  },
  [ChainId.IOTEX]: {
    chainId: `0x${ChainId.IOTEX.toString(16)}`,
    chainName: 'IoTeX',
    nativeCurrency: {
      name: Currency.IOTX.name || 'IoTeX',
      symbol: Currency.IOTX.symbol || 'IOTX',
      decimals: Currency.IOTX.decimals || 18
    },
    rpcUrls: ['https://babel-api.mainnet.iotex.io'],
    blockExplorerUrls: ['https://iotexscan.io/'],
    metamaskAddable: true
  },
  [ChainId.FANTOM]: {
    chainId: `0x${ChainId.FANTOM.toString(16)}`,
    chainName: 'Fantom',
    nativeCurrency: {
      name: Currency.FTM.name || 'Fantom',
      symbol: Currency.FTM.symbol || 'FTM',
      decimals: Currency.FTM.decimals || 18
    },
    rpcUrls: ['https://rpc.ftm.tools/'],
    blockExplorerUrls: ['https://ftmscan.com/'],
    metamaskAddable: true
  },
  [ChainId.HARMONY]: {
    chainId: `0x${ChainId.HARMONY.toString(16)}`,
    chainName: 'Harmony',
    nativeCurrency: {
      name: Currency.One.name || 'Harmony',
      symbol: Currency.One.symbol || 'ONE',
      decimals: Currency.One.decimals || 18
    },
    rpcUrls: ['https://api.harmony.one'],
    blockExplorerUrls: ['https://explorer.harmony.one/'],
    metamaskAddable: true
  }
}
