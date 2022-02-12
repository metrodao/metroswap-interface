import { ChainId } from 'dxswap-sdk'
import MULTICALL_ABI from './abi.json'

// TODO: Add the missing networks here
const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.ARBITRUM_TESTNET_V3]: '0xb31E9e3446767AaDe9E48C4B1B6D13Cc6eDce172',
  [ChainId.SOKOL]: '0x8BE4eDB1930bdedd94142B09503eB6daC3F2b53D',
  [ChainId.XDAI]: '0x3990b44d6233D8287c62635028FAc7b046c5607A',
  [ChainId.MATIC]: '0x95028E5B8a734bb7E2071F96De89BABe75be9C8E',
  [ChainId.AVALANCHE]: '0xb14067B3C160E378DeEAFA8c0D03FF97Fbf0C408',
  [ChainId.BINANCE]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.FUSE]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09',
  [ChainId.IOTEX]: '0x9A734E90D89f0c346E27c404D350Ff56DEAD55f1',
  [ChainId.FANTOM]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09',
  [ChainId.HARMONY]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09',
  [ChainId.BITTORRENT]: '0x31F9101A7EfD146BD6bc2BBC99D3AAc7f8ae0986',
  [ChainId.CALLISTO]: '0x95C2D32fDb32EDA8ce7fbF6539Dd6945acb9bB09'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
