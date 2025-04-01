import { useAccount, useBalance } from 'wagmi';

function PolTokenBalance() {
  const { address } = useAccount();
  const { data: balance, isLoading } = useBalance({
    address: address,
  });

  const formattedBalance = balance
    ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
    : 'N/A';

  return (
    <div className="glass-card">
      <h2 className="text-xl font-medium mb-4">POL Balance</h2>
      <div className="balance-value">
        {isLoading ? 'Loading...' : formattedBalance}
      </div>
    </div>
  );
}

export default PolTokenBalance;