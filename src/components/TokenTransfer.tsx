import { useState } from "react";
import { useWriteContract } from "wagmi";
import { AlertCircle, Check, Send } from 'lucide-react';
import abi from "../abi.json";

const contractAddress = "0xbae72f20dACf4BBb38413EBa699b9DEc9161a27e";

function TokenTransfer() {
  const { data: txHash, writeContract, isPending } = useWriteContract();
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleTransfer = async () => {
    if (!recipient || !amount || isNaN(Number(amount))) {
      setErrorMessage("Please enter a valid address and amount");
      return;
    }

    try {
      setErrorMessage(null);

      await writeContract({
        address: contractAddress,
        abi,
        functionName: "transfer",
        args: [recipient, BigInt(parseFloat(amount) * 10 ** 18)],
      });
    } catch (err: any) {
      console.error("Transaction error:", err);

      if (err.message.includes("ERC20InsufficientBalance")) {
        setErrorMessage("Insufficient balance for transfer");
      } else if (err.message.includes("ERC20InvalidReceiver")) {
        setErrorMessage("Invalid recipient address");
      } else {
        setErrorMessage("Transfer failed. Please check the address and amount");
      }
    }
  };

  return (
    <div className="glass-card">
      <h2 className="text-xl font-medium mb-4">Transfer Tokens</h2>

      <div className="space-y-4">
        <input
          placeholder="Recipient address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="input-field"
        />
        <input
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />

        <button
          onClick={handleTransfer}
          disabled={isPending}
          className="primary-button w-full flex items-center justify-center gap-2"
        >
          <Send size={18} />
          {isPending ? "Processing..." : "Send Tokens"}
        </button>

        {txHash && (
          <div className="flex items-center gap-2 text-green-400 mt-4">
            <Check size={16} />
            <a
              href={`https://polygonscan.com/tx/${txHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transaction-link"
            >
              View Transaction
            </a>
          </div>
        )}

        {errorMessage && (
          <div className="flex items-center gap-2 text-red-400 mt-4">
            <AlertCircle size={16} />
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TokenTransfer;