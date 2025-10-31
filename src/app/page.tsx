'use client';

import { useAccount, useWriteContract } from 'wagmi';
import { parseEther } from 'viem';
import { useState } from 'react';

const contractAddress = '0x1F2bF398991A4B0f6e9f6904f4a30e84b7A26d01';
const contractAbi = [
  {
    "type": "function",
    "name": "sendBM",
    "inputs": [],
    "outputs": [],
    "stateMutability": "payable"
  }
];

export default function Home() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();
  const [amount, setAmount] = useState('0.00001');

  const handleSendTransaction = () => {
    writeContract({
      address: contractAddress,
      abi: contractAbi,
      functionName: 'sendBM',
      value: parseEther(amount),
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">BM</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded text-center text-black"
        />
        <button
          onClick={handleSendTransaction}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send BM
        </button>
      </div>
    </main>
  );
}
