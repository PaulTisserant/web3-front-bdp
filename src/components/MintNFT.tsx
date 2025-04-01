import * as React from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { AlertCircle, Check } from 'lucide-react';
import abi from "../abi.json";

const contractAddress = "0xbae72f20dACf4BBb38413EBa699b9DEc9161a27e";

function MintNFT() {
  const { address } = useAccount();
  const { data: owner } = useReadContract({
    address: contractAddress,
    abi,
    functionName: "owner",
  });

  const { data: hash, writeContract, isPending } = useWriteContract();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const isOwner = address === owner;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isOwner) {
      setErrorMessage("Only the contract owner can execute this action");
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    const amount = formData.get("amount") as string;

    if (!amount || isNaN(Number(amount))) {
      setErrorMessage("Please enter a valid number");
      return;
    }

    try {
      setErrorMessage(null);

      await writeContract({
        address: contractAddress,
        abi,
        functionName: "mint",
        args: [BigInt(amount) * BigInt(10 ** 18)],
      });
    } catch (err: any) {
      console.error("Transaction error:", err);

      if (err.message.includes("OwnableUnauthorizedAccount") || err.message.includes("Ownable: caller is not the owner")) {
        setErrorMessage("Only the contract owner can execute this action");
      } else {
        setErrorMessage("An error occurred during minting. Please check your transaction.");
      }
    }
  }

  return (
    <div className="glass-card">
      <h2 className="text-xl font-medium mb-4">Mint Tokens</h2>
      
      {isOwner ? (
        <form onSubmit={submit} className="space-y-4">
          <input
            name="amount"
            type="number"
            placeholder="Enter amount to mint"
            required
            min="1"
            className="input-field"
          />
          <button
            type="submit"
            disabled={isPending}
            className="primary-button w-full"
          >
            {isPending ? "Minting..." : "Mint Tokens"}
          </button>
          
          {hash && (
            <div className="flex items-center gap-2 text-green-400 mt-4">
              <Check size={16} />
              <a
                href={`https://amoy.polygonscan.com/tx/${hash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transaction-link"
              >
                View Transaction
              </a>
            </div>
          )}
        </form>
      ) : (
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle size={16} />
          <p>Only the contract owner can mint tokens</p>
        </div>
      )}

      {errorMessage && (
        <div className="flex items-center gap-2 text-red-400 mt-4">
          <AlertCircle size={16} />
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default MintNFT;