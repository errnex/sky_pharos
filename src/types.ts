export interface Token {
  id: string;
  address: string;
  symbol: string;
  name: string;
  chain: string;
  balance: number;
  decimals: number;
  priceUSD: number;
  logoUrl?: string;
  isTestnet: boolean;
}

export interface NFT {
  id: string;
  name: string;
  contractAddress: string;
  tokenId: string;
  imageUrl: string;
  ownerWallet: string;
  chainName: string;
  isTestnet: boolean;
  description?: string;
  attributes?: Array<{ trait_type: string; value: string }>;
}

export interface Network {
  id: string;
  name: string;
  symbol: string;
  isTestnet: boolean;
  rpcUrl?: string;
  chainId: number;
  explorerUrl?: string;
}

export interface SimulationLog {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'error' | 'warning';
  message: string;
  txHash?: string;
  chain?: string;
}
