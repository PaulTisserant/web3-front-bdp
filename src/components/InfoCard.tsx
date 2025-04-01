import { Info } from 'lucide-react';

function InfoCard() {
  const contract = " 0xbae72f20dacf4bbb38413eba699b9dec9161a27e"
  return (
    <div className="glass-card">
      <div className="flex items-center gap-3 mb-4">
        <Info size={20} />
        <h2 className="text-xl font-medium">About BDP Token</h2>
      </div>
      <div className="space-y-3 text-white/70">
        <p>BDP (Beignet de Plaisir) is a community token on the Polygon network.</p>
        <p>• Max mint per day: 1000 BDP</p>
        <p>• Contract:  
          <a 
            href={`https://amoy.polygonscan.com/address/0xbae72f20dacf4bbb38413eba699b9dec9161a27e`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400"
          >
            {contract.length > 20 ? `${contract.slice(0, 10)}...${contract.slice(-10)}` : contract}
          </a>
        </p>
        <p>• Network: Polygon Amoy</p>
      </div>
    </div>
  );
}

export default InfoCard;