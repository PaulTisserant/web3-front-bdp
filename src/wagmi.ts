import { createConfig, http } from 'wagmi';
import { polygonAmoy } from 'wagmi/chains';
import { injected, metaMask } from 'wagmi/connectors';

// Remove coinbaseWallet and walletConnect connectors
export const config = createConfig({
  chains: [polygonAmoy],
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [polygonAmoy.id]: http(),
  },
});

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}