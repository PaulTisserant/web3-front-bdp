import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet2, Power } from 'lucide-react';
import BdpTokenBalance from './components/BdpTokenBalance';
import PolTokenBalance from './components/PolTokenBalance';
import MintNFT from './components/MintNFT';
import TokenTransfer from './components/TokenTransfer';
import TransactionHistory from './components/TransactionHistory';
import InfoCard from './components/InfoCard';
import TokenCharts from './components/TokenCharts';

function App() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  const metamaskConnector = connectors.find(c => c.name === 'MetaMask');

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
            BDPeu Faucet
          </h1>
          {isConnected ? (
            <div className="flex items-center gap-4">
              <span className="text-white/70">
                {address?.slice(0, 6)}...{address?.slice(-4)}
              </span>
              <button
                onClick={() => disconnect()}
                className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-all"
              >
                <Power size={18} />
                Disconnect
              </button>
            </div>
          ) : (
            metamaskConnector && (
              <button
                onClick={() => connect({ connector: metamaskConnector })}
                className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-all"
              >
                <Wallet2 size={18} />
                Connect with MetaMask
              </button>
            )
          )}
        </div>

        {isConnected ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <BdpTokenBalance />
                <PolTokenBalance />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MintNFT />
                <TokenTransfer />
              </div>
              
              <div className="flex gap-8 flex-wrap">
                <div className="flex-1">
                  <TokenCharts />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <InfoCard />
              <TransactionHistory />
            </div>
          </div>
        ) : (
          <div className="glass-card text-center py-12">
            <h2 className="text-2xl font-medium mb-4">Welcome to BDPeu Web3 </h2>
            <p className="text-white/70">
              Connect your wallet to start interacting with the faucet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
