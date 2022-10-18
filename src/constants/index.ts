import { AbstractConnector } from '@web3-react/abstract-connector'
import { ChainId, JSBI, Percent, CurrencyAmount, WETH, WSPOA, WXDAI, Token, Currency, WMATIC, WAVAX, WBNB, WFUSE, WIOTX, WFTM, WONE, WBTT, WCLO, WGLMR, WCELO, WEVMOS, WASTAR, WBCH, WTLOS, WZYX, WTT, WECH } from 'dxswap-sdk'
import { tokens } from './tokens'
import { injected, walletConnectMATIC, walletConnectXDAI, walletConnectECHELON, walletlink } from '../connectors'

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
  [ChainId.ETHW]: new Token(ChainId.ETHW, '0x6b175474e89094c44da98b954eedeac495271d0f', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.XDAI]: new Token(ChainId.XDAI, '0x44fa8e6f47987339850636f88629646662444217', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.MATIC]: new Token(ChainId.MATIC, '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.AVALANCHE]: new Token(ChainId.AVALANCHE, '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', 18, 'DAI.e', 'Dai Stablecoin'),
  [ChainId.BINANCE]: new Token(ChainId.BINANCE, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Binance-Peg Dai Token'),
  [ChainId.FUSE]: new Token(ChainId.FUSE, '0x94Ba7A27c7A95863d1bdC7645AC2951E0cca06bA', 18, 'DAI', 'Dai Stablecoin on Fuse'),
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0x62a9D987Cbf4C45a550DEEd5B57b200d7a319632', 18, 'DAI-matic', 'Dai Matic Stablecoin'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E', 18, 'DAI', 'Dai Stablecoin'),
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339', 18, '1DAI', 'Dai Stablecoin'),
  [ChainId.BITTORRENT]: new Token(ChainId.BITTORRENT, '0xE6F3a758298d88Ae5fA56d632D4e195a44A9Ae96', 18, 'bDAI', 'Bridged DAI (PoS)'), // currently Tetcoin Bridge Token on BTT Chain
  [ChainId.CALLISTO]: new Token(ChainId.CALLISTO, '0xc9616280Cc74B3B2196D32325f5278a7c2B593C4', 18, 'bDAI', 'Bridged DAI (PoS)'), // no DAI on Callisto
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, '0x765277EebeCA2e31912C9946eAe1021199B39C61', 18, 'DAI', 'DAI Stablecoin'),
  [ChainId.CELO]: new Token(ChainId.CELO, '0xE4fE50cdD716522A56204352f00AA110F731932d', 18, 'DAI', 'DAI Stablecoin'),
  [ChainId.EVMOS]: new Token(ChainId.EVMOS, '0x63743ACF2c7cfee65A5E356A4C4A005b586fC7AA', 18, 'DAI', 'DAI Stablecoin'),
  [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0x6De33698e9e9b787e09d3Bd7771ef63557E148bb', 18, 'DAI', 'DAI Stablecoin'),
  [ChainId.SMARTBCH]: new Token(ChainId.SMARTBCH, '0xf3f68E1Fd8FD5949C197299C97a6295687aEf9c3', 18, 'MDAI', 'Metro Wrapped DAI'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, '0xB98650ca989ECECcb8c31341F3668b6995Aad8C5', 18, 'MDAI', 'Metro Wrapped DAI'),
  [ChainId.ZYX]: new Token(ChainId.ZYX, '0xD9a80f791CC23615Db500e441c74b4287C9fd88d', 18, 'MDAI', 'Metro Wrapped DAI'),
  [ChainId.THUNDERCORE]: new Token(ChainId.THUNDERCORE, '0xB743e0c9020b27D415C533D905832af9Ab9e45f9', 18, 'MDAI', 'Metro Wrapped DAI'),
  [ChainId.ECHELON]: new Token(ChainId.ECHELON, '0xB1103e931D6c0057BE3EC8514b99320090e2d6A7', 18, 'MDAI', 'Metro Wrapped DAI')
}

export const USDC: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC', 'USD//C'),
  [ChainId.ETHW]: new Token(ChainId.ETHW, '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', 6, 'USDC', 'USD//C'),
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
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x985458E523dB3d53125813eD68c274899e9DfAb4', 6, '1USDC', 'USD Coin'),
  [ChainId.BITTORRENT]: new Token(ChainId.BITTORRENT, '0xCa424b845497f7204D9301bd13Ff87C0E2e86FCF', 6, 'USDC', 'USD Coin BSC'),
  [ChainId.CALLISTO]: new Token(ChainId.CALLISTO, '0xb14067B3C160E378DeEAFA8c0D03FF97Fbf0C408', 6, 'bUSDC', 'Bridged USDC (PoS)'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin'),
  [ChainId.CELO]: new Token(ChainId.CELO, '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a', 6, 'USDC', 'USD Coin'),
  [ChainId.EVMOS]: new Token(ChainId.EVMOS, '0x51e44FfaD5C2B122C8b635671FCC8139dc636E82', 6, 'USDC', 'USD Coin'),
  [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98', 6, 'USDC', 'USD Coin'),
  [ChainId.SMARTBCH]: new Token(ChainId.SMARTBCH, '0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98', 6, 'MUSDC', 'Metro Wrapped USDC'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b', 6, 'USDC', 'USD Coin'),
  [ChainId.ZYX]: new Token(ChainId.ZYX, '0x493868A20b32a7e62Fae2cC8A3C2357f417Fd038', 6, 'MUSDC', 'Metro Wrapped USDC'),
  [ChainId.THUNDERCORE]: new Token(ChainId.THUNDERCORE, '0x4d4B723F7dB1419517a560CFAF54eC7A431C1a43', 6, 'MUSDC', 'Metro Wrapped USDC'),
  [ChainId.ECHELON]: new Token(ChainId.ECHELON, '0x10D9Ba55fc00eCb25A518D3C0268228cbD0cf1c9', 6, 'MUSDC', 'Metro Wrapped USDC')
}

export const USDT: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
  [ChainId.ETHW]: new Token(ChainId.ETHW, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
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
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, '0x3C2B8Be99c50593081EAA2A724F0B8285F5aba8f', 6, '1USDT', 'Tether USD'),
  [ChainId.BITTORRENT]: new Token(ChainId.BITTORRENT, '0xdB28719F7f938507dBfe4f0eAe55668903D34a15', 6, 'USDT_t', 'Tether USD_TRON'),
  [ChainId.CALLISTO]: new Token(ChainId.CALLISTO, '0x9053e6DB24b28A75CD31020B4Aa4B66Af86d53B4', 6, 'bUSDT', 'Bridged USDT (PoS)'),
  [ChainId.MOONBEAM]: new Token(ChainId.MOONBEAM, '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73', 6, 'USDT', 'Tether USD'),
  [ChainId.CELO]: new Token(ChainId.CELO, '0x88eeC49252c8cbc039DCdB394c0c2BA2f1637EA0', 6, 'USDT', 'Tether USD'),
  [ChainId.EVMOS]: new Token(ChainId.EVMOS, '0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e', 6, 'USDT', 'Tether USD'),
  [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0x3795C36e7D12A8c252A20C5a7B455f7c57b60283', 6, 'USDT', 'Tether USD'),
  [ChainId.SMARTBCH]: new Token(ChainId.SMARTBCH, '0xB743e0c9020b27D415C533D905832af9Ab9e45f9', 6, 'MUSDT', 'Metro Wrapped USDT'),
  [ChainId.TELOS]: new Token(ChainId.TELOS, '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73', 6, 'USDT', 'Tether USD'),
  [ChainId.ZYX]: new Token(ChainId.ZYX, '0xd822f6549F76957a9b2e4a9Fd3FD70Cf8b709EFd', 6, 'MUSDT', 'Metro Wrapped USDT'),
  [ChainId.THUNDERCORE]: new Token(ChainId.THUNDERCORE, '0x95319b44251925c2eE126Ed9aad57a68eFAA8231', 6, 'MUSDT', 'Metro Wrapped USDT'),
  [ChainId.ECHELON]: new Token(ChainId.ECHELON, '0xB4fE73DD7a979368f8A8d49C7b896C01fC00A89B', 6, 'MUSDT', 'Metro Wrapped USDT')
}

export const WBTC: { [key: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    18,
    'WBTC',
    'Wrapped BTC'
  ),
  [ChainId.ETHW]: new Token(ChainId.ETHW, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18, 'WBTC', 'Wrapped BTC'),
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
  [ChainId.IOTEX]: new Token(ChainId.IOTEX, '0xC7b93720F73b037394cE00f954f849Ed484a3dEA', 18, 'ioWBTC', 'Wrapped BTC'),
  [ChainId.FANTOM]: new Token(ChainId.FANTOM, '0x321162Cd933E2Be498Cd2267a90534A804051b11', 18, 'BTC', 'Bitcoin'),
  [ChainId.HARMONY]: new Token(
    ChainId.HARMONY,
    '0x3095c7557bCb296ccc6e363DE01b760bA031F2d9',
    18,
    '1WBTC',
    'Wrapped BTC'
  ),
  [ChainId.BITTORRENT]: new Token(
    ChainId.BITTORRENT,
    '0xA98b43551e9777e82616AEe9b6C5f3fb25A20386',
    8,
    'bBTC',
    'Bridged Bitcoin (PoS)'
  ),
  [ChainId.CALLISTO]: new Token(
    ChainId.CALLISTO,
    '0x0bA9723882A698312af7491335dDAfc07597a1A0',
    8,
    'bBTC',
    'Bridged Bitcoin (PoS)'
  ),
  [ChainId.MOONBEAM]: new Token(
    ChainId.MOONBEAM,
    '0x0bA9723882A698312af7491335dDAfc07597a1A0',
    8,
    'bBTC',
    'Bridged Bitcoin (PoS)'
  ),
  [ChainId.CELO]: new Token(ChainId.CELO, '0xD629eb00dEced2a080B7EC630eF6aC117e614f1b', 8, 'BTC', 'Wrapped Bitcoin'),
  [ChainId.EVMOS]: new Token(ChainId.EVMOS, '0xF80699Dc594e00aE7bA200c7533a07C1604A106D', 8, 'WBTC', 'Wrapped Bitcoin'),
  [ChainId.ASTAR]: new Token(ChainId.ASTAR, '0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA', 8, 'WBTC', 'Wrapped Bitcoin'),
  [ChainId.SMARTBCH]: new Token(
    ChainId.SMARTBCH,
    '0x95319b44251925c2eE126Ed9aad57a68eFAA8231',
    8,
    'MBTC',
    'Metro Wrapped Bitcoin'
  ),
  [ChainId.TELOS]: new Token(ChainId.TELOS, '0xf390830DF829cf22c53c8840554B98eafC5dCBc2', 8, 'WBTC', 'Wrapped Bitcoin'),
  [ChainId.ZYX]: new Token(
    ChainId.ZYX,
    '0xdb6c67eD989305F4c092382548Edb5820d09ED81',
    8,
    'MBTC',
    'Metro Wrapped Bitcoin'
  ),
  [ChainId.THUNDERCORE]: new Token(
    ChainId.THUNDERCORE,
    '0xEf62BAC28eE2d053ED98f96425682eB483F3c4c6',
    8,
    'MBTC',
    'Metro Wrapped Bitcoin'
  ),
  [ChainId.ECHELON]: new Token(
    ChainId.ECHELON,
    '0x5bdc498967667C4298329d2c392cc88aD237AcfE',
    8,
    'MBTC',
    'Metro Wrapped Bitcoin'
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
  [ChainId.ETHW]: [
    WETH[ChainId.ETHW],
    DAI[ChainId.ETHW],
    USDC[ChainId.ETHW],
    WBTC[ChainId.ETHW],
    USDT[ChainId.ETHW]
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
  ],
  [ChainId.BITTORRENT]: [
    WETH[ChainId.BITTORRENT],
    WBTT[ChainId.BITTORRENT],
    DAI[ChainId.BITTORRENT],
    USDC[ChainId.BITTORRENT],
    USDT[ChainId.BITTORRENT]
  ],
  [ChainId.CALLISTO]: [
    WETH[ChainId.CALLISTO],
    WCLO[ChainId.CALLISTO],
    DAI[ChainId.CALLISTO],
    USDC[ChainId.CALLISTO],
    USDT[ChainId.CALLISTO]
  ],
  [ChainId.MOONBEAM]: [
    WETH[ChainId.MOONBEAM],
    WGLMR[ChainId.MOONBEAM],
    DAI[ChainId.MOONBEAM],
    USDC[ChainId.MOONBEAM],
    USDT[ChainId.MOONBEAM]
  ],
  [ChainId.CELO]: [
    WETH[ChainId.CELO],
    WCELO[ChainId.CELO],
    DAI[ChainId.CELO],
    USDC[ChainId.CELO],
    USDT[ChainId.CELO]
  ],
  [ChainId.EVMOS]: [
    WETH[ChainId.EVMOS],
    WEVMOS[ChainId.EVMOS],
    DAI[ChainId.EVMOS],
    USDC[ChainId.EVMOS],
    USDT[ChainId.EVMOS]
  ],
  [ChainId.ASTAR]: [
    WETH[ChainId.ASTAR],
    WASTAR[ChainId.ASTAR],
    DAI[ChainId.ASTAR],
    USDC[ChainId.ASTAR],
    USDT[ChainId.ASTAR]
  ],
  [ChainId.SMARTBCH]: [
    WETH[ChainId.SMARTBCH],
    WBCH[ChainId.SMARTBCH],
    DAI[ChainId.SMARTBCH],
    USDC[ChainId.SMARTBCH],
    USDT[ChainId.SMARTBCH]
  ],
  [ChainId.TELOS]: [
    WETH[ChainId.TELOS],
    WTLOS[ChainId.TELOS],
    DAI[ChainId.TELOS],
    USDC[ChainId.TELOS],
    USDT[ChainId.TELOS]
  ],
  [ChainId.ZYX]: [
    WETH[ChainId.ZYX],
    WZYX[ChainId.ZYX],
    DAI[ChainId.ZYX],
    USDC[ChainId.ZYX],
    USDT[ChainId.ZYX]
  ],
  [ChainId.THUNDERCORE]: [
    WETH[ChainId.THUNDERCORE],
    WTT[ChainId.THUNDERCORE],
    DAI[ChainId.THUNDERCORE],
    USDC[ChainId.THUNDERCORE],
    USDT[ChainId.THUNDERCORE]
  ],
  [ChainId.ECHELON]: [
    WETH[ChainId.ECHELON],
    WECH[ChainId.ECHELON],
    DAI[ChainId.ECHELON],
    USDC[ChainId.ECHELON],
    USDT[ChainId.ECHELON]
  ]
}

// used for display in the default list when adding liquidity (native currency is already shown
// by default, so no need to add the wrapper to the list)
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.MAINNET]: [DAI[ChainId.MAINNET], USDC[ChainId.MAINNET], USDT[ChainId.MAINNET], WBTC[ChainId.MAINNET]],
  [ChainId.ETHW]: [DAI[ChainId.ETHW], USDC[ChainId.ETHW], USDT[ChainId.ETHW], WBTC[ChainId.ETHW]],
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
  [ChainId.HARMONY]: [DAI[ChainId.HARMONY], USDC[ChainId.HARMONY], USDT[ChainId.HARMONY], WBTC[ChainId.HARMONY]],
  [ChainId.BITTORRENT]: [DAI[ChainId.BITTORRENT], USDC[ChainId.BITTORRENT], USDT[ChainId.BITTORRENT]],
  [ChainId.CALLISTO]: [DAI[ChainId.CALLISTO], USDC[ChainId.CALLISTO], USDT[ChainId.CALLISTO]],
  [ChainId.MOONBEAM]: [DAI[ChainId.MOONBEAM], USDC[ChainId.MOONBEAM], USDT[ChainId.MOONBEAM]],
  [ChainId.CELO]: [DAI[ChainId.CELO], USDC[ChainId.CELO], USDT[ChainId.CELO]],
  [ChainId.EVMOS]: [DAI[ChainId.EVMOS], USDC[ChainId.EVMOS], USDT[ChainId.EVMOS]],
  [ChainId.ASTAR]: [DAI[ChainId.ASTAR], USDC[ChainId.ASTAR], USDT[ChainId.ASTAR]],
  [ChainId.SMARTBCH]: [DAI[ChainId.SMARTBCH], USDC[ChainId.SMARTBCH], USDT[ChainId.SMARTBCH]],
  [ChainId.TELOS]: [DAI[ChainId.TELOS], USDC[ChainId.TELOS], USDT[ChainId.TELOS]],
  [ChainId.ZYX]: [DAI[ChainId.ZYX], USDC[ChainId.ZYX], USDT[ChainId.ZYX]],
  [ChainId.THUNDERCORE]: [DAI[ChainId.THUNDERCORE], USDC[ChainId.THUNDERCORE], USDT[ChainId.THUNDERCORE]],
  [ChainId.ECHELON]: [DAI[ChainId.ECHELON], USDC[ChainId.ECHELON], USDT[ChainId.ECHELON]]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET], DAI[ChainId.MAINNET], USDC[ChainId.MAINNET], USDT[ChainId.MAINNET]],
  [ChainId.ETHW]: [WETH[ChainId.ETHW], DAI[ChainId.ETHW], USDC[ChainId.ETHW], USDT[ChainId.ETHW]],
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
  [ChainId.HARMONY]: [WETH[ChainId.HARMONY], DAI[ChainId.HARMONY], USDC[ChainId.HARMONY], USDT[ChainId.HARMONY]],
  [ChainId.BITTORRENT]: [WETH[ChainId.BITTORRENT], DAI[ChainId.BITTORRENT], USDC[ChainId.BITTORRENT], USDT[ChainId.BITTORRENT]],
  [ChainId.CALLISTO]: [WETH[ChainId.CALLISTO], DAI[ChainId.CALLISTO], USDC[ChainId.CALLISTO], USDT[ChainId.CALLISTO]],
  [ChainId.MOONBEAM]: [WETH[ChainId.MOONBEAM], DAI[ChainId.MOONBEAM], USDC[ChainId.MOONBEAM], USDT[ChainId.MOONBEAM]],
  [ChainId.CELO]: [WETH[ChainId.CELO], DAI[ChainId.CELO], USDC[ChainId.CELO], USDT[ChainId.CELO]],
  [ChainId.EVMOS]: [WETH[ChainId.EVMOS], DAI[ChainId.EVMOS], USDC[ChainId.EVMOS], USDT[ChainId.EVMOS]],
  [ChainId.ASTAR]: [WETH[ChainId.ASTAR], DAI[ChainId.ASTAR], USDC[ChainId.ASTAR], USDT[ChainId.ASTAR]],
  [ChainId.SMARTBCH]: [WETH[ChainId.SMARTBCH], DAI[ChainId.SMARTBCH], USDC[ChainId.SMARTBCH], USDT[ChainId.SMARTBCH]],
  [ChainId.TELOS]: [WETH[ChainId.TELOS], DAI[ChainId.TELOS], USDC[ChainId.TELOS], USDT[ChainId.TELOS]],
  [ChainId.ZYX]: [WETH[ChainId.ZYX], DAI[ChainId.ZYX], USDC[ChainId.ZYX], USDT[ChainId.ZYX]],
  [ChainId.THUNDERCORE]: [WETH[ChainId.THUNDERCORE], DAI[ChainId.THUNDERCORE], USDC[ChainId.THUNDERCORE], USDT[ChainId.THUNDERCORE]],
  [ChainId.ECHELON]: [WETH[ChainId.ECHELON], DAI[ChainId.ECHELON], USDC[ChainId.ECHELON], USDT[ChainId.ECHELON]]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [USDC[ChainId.MAINNET], USDT[ChainId.MAINNET]],
    [DAI[ChainId.MAINNET], USDT[ChainId.MAINNET]]
  ],
  [ChainId.ETHW]: [
    [USDC[ChainId.ETHW], USDT[ChainId.ETHW]],
    [DAI[ChainId.ETHW], USDT[ChainId.ETHW]]
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
  },
  WALLET_CONNECT_ECHELON: {
    connector: walletConnectECHELON,
    name: 'WalletConnect for Echelon',
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
  [ChainId.ETHW]: {
    chainId: `0x${ChainId.ETHW.toString(16)}`,
    chainName: 'EthereumPoW Main Network',
    nativeCurrency: {
      name: Currency.ETHW.name || 'Ether',
      symbol: Currency.ETHW.symbol || 'ETHW',
      decimals: Currency.ETHW.decimals || 18
    },
    rpcUrls: ['https://mainnet.ethereumpow.org'],
    blockExplorerUrls: ['https://mainnet.ethwscan.com']
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
  },
  [ChainId.BITTORRENT]: {
    chainId: `0x${ChainId.BITTORRENT.toString(16)}`,
    chainName: 'BitTorrent',
    nativeCurrency: {
      name: Currency.BTT.name || 'BitTorrent',
      symbol: Currency.BTT.symbol || 'BTT',
      decimals: Currency.BTT.decimals || 18
    },
    rpcUrls: ['https://rpc.bt.io/'],
    blockExplorerUrls: ['https://scan.bt.io/'],
    metamaskAddable: true
  },
  [ChainId.CALLISTO]: {
    chainId: `0x${ChainId.CALLISTO.toString(16)}`,
    chainName: 'Callisto',
    nativeCurrency: {
      name: Currency.CLO.name || 'Callisto',
      symbol: Currency.CLO.symbol || 'CLO',
      decimals: Currency.CLO.decimals || 18
    },
    rpcUrls: ['https://clo-geth.0xinfra.com/'],
    blockExplorerUrls: ['https://explorer.callisto.network/'],
    metamaskAddable: true
  },
  [ChainId.MOONBEAM]: {
    chainId: `0x${ChainId.MOONBEAM.toString(16)}`,
    chainName: 'Moonbeam',
    nativeCurrency: {
      name: Currency.GLMR.name || 'Moonbeam',
      symbol: Currency.GLMR.symbol || 'GLMR',
      decimals: Currency.GLMR.decimals || 18
    },
    rpcUrls: ['https://rpc.api.moonbeam.network/'],
    blockExplorerUrls: ['https://moonbeam.moonscan.io/'],
    metamaskAddable: true
  },
  [ChainId.CELO]: {
    chainId: `0x${ChainId.CELO.toString(16)}`,
    chainName: 'Celo',
    nativeCurrency: {
      name: Currency.CELO.name || 'Celo',
      symbol: Currency.CELO.symbol || 'CELO',
      decimals: Currency.CELO.decimals || 18
    },
    rpcUrls: ['https://forno.celo.org/'],
    blockExplorerUrls: ['https://explorer.celo.org/'],
    metamaskAddable: true
  },
  [ChainId.EVMOS]: {
    chainId: `0x${ChainId.EVMOS.toString(16)}`,
    chainName: 'Evmos',
    nativeCurrency: {
      name: Currency.EVMOS.name || 'Evmos',
      symbol: Currency.EVMOS.symbol || 'EVMOS',
      decimals: Currency.EVMOS.decimals || 18
    },
    rpcUrls: ['https://evmos-rpc2.binary.host/'],
    blockExplorerUrls: ['https://evm.evmos.org/'],
    metamaskAddable: true
  },
  [ChainId.ASTAR]: {
    chainId: `0x${ChainId.ASTAR.toString(16)}`,
    chainName: 'Astar',
    nativeCurrency: {
      name: Currency.ASTAR.name || 'Astar',
      symbol: Currency.ASTAR.symbol || 'ASTAR',
      decimals: Currency.ASTAR.decimals || 18
    },
    rpcUrls: ['https://evm.astar.network'],
    blockExplorerUrls: ['https://blockscout.com/astar/'],
    metamaskAddable: true
  },
  [ChainId.SMARTBCH]: {
    chainId: `0x${ChainId.SMARTBCH.toString(16)}`,
    chainName: 'SmartBCH',
    nativeCurrency: {
      name: Currency.SMARTBCH.name || 'Smart BCH',
      symbol: Currency.SMARTBCH.symbol || 'BCH',
      decimals: Currency.SMARTBCH.decimals || 18
    },
    rpcUrls: ['https://smartbch.fountainhead.cash/mainnet'],
    blockExplorerUrls: ['https://smartscan.cash/'],
    metamaskAddable: true
  },
  [ChainId.TELOS]: {
    chainId: `0x${ChainId.TELOS.toString(16)}`,
    chainName: 'Telos',
    nativeCurrency: {
      name: Currency.TELOS.name || 'Telos',
      symbol: Currency.TELOS.symbol || 'TLOS',
      decimals: Currency.TELOS.decimals || 18
    },
    rpcUrls: ['https://mainnet.telos.net/evm'],
    blockExplorerUrls: ['https://www.teloscan.io/'],
    metamaskAddable: true
  },
  [ChainId.ZYX]: {
    chainId: `0x${ChainId.ZYX.toString(16)}`,
    chainName: 'Zyx',
    nativeCurrency: {
      name: Currency.ZYX.name || 'Zyx',
      symbol: Currency.ZYX.symbol || 'ZYX',
      decimals: Currency.ZYX.decimals || 18
    },
    rpcUrls: ['https://rpc-1.zyx.network/'],
    blockExplorerUrls: ['https://zyxscan.com/'],
    metamaskAddable: true
  },
  [ChainId.THUNDERCORE]: {
    chainId: `0x${ChainId.THUNDERCORE.toString(16)}`,
    chainName: 'Thundercore',
    nativeCurrency: {
      name: Currency.THUNDERCORE.name || 'ThunderCore',
      symbol: Currency.THUNDERCORE.symbol || 'TT',
      decimals: Currency.THUNDERCORE.decimals || 18
    },
    rpcUrls: ['https://mainnet-rpc.thundercore.com/'],
    blockExplorerUrls: ['https://viewblock.io/thundercore/'],
    metamaskAddable: true
  },
  [ChainId.ECHELON]: {
    chainId: `0x${ChainId.ECHELON.toString(16)}`,
    chainName: 'Echelon',
    nativeCurrency: {
      name: Currency.ECHELON.name || 'Echelon',
      symbol: Currency.ECHELON.symbol || 'ECH',
      decimals: Currency.ECHELON.decimals || 18
    },
    rpcUrls: ['https://rpc.ech.network/'],
    blockExplorerUrls: ['https://scout.ech.network/'],
    metamaskAddable: true
  }
}
