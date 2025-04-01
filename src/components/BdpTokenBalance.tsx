import { useAccount, useBalance } from 'wagmi';
import BdpLogo from "../assets/image/BDP.png";


function BdpTokenBalance() {
  const { address } = useAccount();
  const { data: balance, isLoading } = useBalance({
    address: address,
    token: "0xbae72f20dacf4bbb38413eba699b9dec9161a27e",
  });

  const formattedBalance = balance
    ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}`
    : 'N/A';

  return (
    <div className="glass-card">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={BdpLogo}
          alt="BDP Token" 
          className="w-12 h-12 rounded-full"
        />
        <h2 className="text-xl font-medium">BDP Balance</h2>
      </div>
      <div className="balance-value">
        {isLoading ? 'Loading...' : formattedBalance}
      </div>
    </div>
  );
}

export default BdpTokenBalance;