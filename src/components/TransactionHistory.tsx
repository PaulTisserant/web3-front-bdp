import { useState, useEffect } from 'react';
import axios from 'axios';
import { Clock } from 'lucide-react';
import { useAccount } from 'wagmi';

function TransactionHistory() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const { address } = useAccount();
  const apiKey = import.meta.env.VITE_POLYGON_API_KEY || "";

  
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Remplacer par l'API qui retourne les transactions
        const response = await axios.get('https://api-amoy.polygonscan.com/api', {
          params: {
            module: 'account',
            action: 'txlist',
            address: address,
            startblock: 0,
            endblock: 'latest',
            page: 1,
            offset: 5,
            sort: 'asc',
            apikey: apiKey
          },
        });

        if (response.data.status === '1') {
          setTransactions(response.data.result);
          //console.log(response.data.result)
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div className="glass-card">
      <div className="flex items-center gap-3 mb-6">
        <Clock size={20} />
        <h2 className="text-xl font-medium">Recent Transactions</h2>
      </div>

      {loading ? (
        <div className="text-center text-white/70">
          Loading transactions...
        </div>
      ) : transactions.length === 0 ? (
        <div className="text-center text-white/70">
          No transactions found.
        </div>
      ) : (
        <div>
          {transactions.map((tx, index) => (
            <div key={index} className="text-white/70 mb-4">
              <p><strong>Hash: </strong> 
                <a 
                  href={`https://amoy.polygonscan.com/tx/${tx.hash}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400"
                >
                  View on Polygonscan
                </a>
              </p>
              <p><strong>From: </strong> 
                  <a 
                    href={`https://amoy.polygonscan.com/address/${tx.from}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
                  >
                    {`${tx.from.slice(0, 10)}...${tx.from.slice(-10)}`}
                    </a>
              </p>
              <p><strong>To: </strong> 
                  <a 
                    href={`https://amoy.polygonscan.com/address/${tx.to}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
                  >
                    {`${tx.to.slice(0, 10)}...${tx.to.slice(-10)}`}
                  </a>
              </p>
              <p><strong>Value: </strong> {parseFloat(tx.value) / 10**18} BDP</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionHistory;
