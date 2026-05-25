import { Token, NFT, Network } from '../types';

export const SUPPORTED_NETWORKS: Network[] = [
  // Mainnets
  { id: 'eth-mainnet', name: 'Ethereum Mainnet', symbol: 'ETH', isTestnet: false, chainId: 1, explorerUrl: 'https://etherscan.io' },
  { id: 'phar-mainnet', name: 'Pharos Mainnet', symbol: 'PHAR', isTestnet: false, chainId: 1337, explorerUrl: 'https://pharosscan.com' },
  { id: 'polygon-mainnet', name: 'Polygon PoS', symbol: 'POL', isTestnet: false, chainId: 137, explorerUrl: 'https://polygonscan.com' },
  { id: 'bsc-mainnet', name: 'BNB Smart Chain', symbol: 'BNB', isTestnet: false, chainId: 56, explorerUrl: 'https://bscscan.com' },
  
  // Testnets
  { id: 'sepolia', name: 'Sepolia Testnet', symbol: 'ETH', isTestnet: true, chainId: 11155111, explorerUrl: 'https://sepolia.etherscan.io' },
  { id: 'phar-testnet', name: 'Pharos Testnet', symbol: 'PHAR', isTestnet: true, chainId: 1338, explorerUrl: 'https://testnet.pharosscan.com' },
  { id: 'polygon-amoy', name: 'Polygon Amoy', symbol: 'POL', isTestnet: true, chainId: 80002, explorerUrl: 'https://amoy.polygonscan.com' },
  { id: 'bsc-testnet', name: 'BSC Testnet', symbol: 'BNB', isTestnet: true, chainId: 97, explorerUrl: 'https://testnet.bscscan.com' },
];

export const INITIAL_MAINNET_TOKENS: Token[] = [];

export const INITIAL_TESTNET_TOKENS: Token[] = [];

export interface DemoWallet {
  address: string;
  label: string;
  avatar: string;
}

export const DEMO_WALLETS: DemoWallet[] = [
  {
    address: '',
    label: 'MetaMask',
    avatar: '🦊',
  }
];

// Preconfigured Valid NFTs in the database.
// Empty for public version - any address inputted by search will dynamically compile
export const VERIFIABLE_NFTS: NFT[] = [];

export const INITIAL_IMPORTED_NFTS: NFT[] = [];
