import { useState, useEffect } from "react";
import { Handshake } from "lucide-react";

const trades = [
  { trader1: "Sarah", trader2: "Mike", item1: "garden tomatoes", item2: "homemade bread" },
  { trader1: "John", trader2: "Emma", item1: "kids bike", item2: "board games" },
  { trader1: "Lisa", trader2: "David", item1: "fresh herbs", item2: "home-baked cookies" },
];

export const RecentTradesBanner = () => {
  const [currentTradeIndex, setCurrentTradeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTradeIndex((prev) => (prev + 1) % trades.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTrade = trades[currentTradeIndex];

  return (
    <div className="bg-gradient-to-r from-accent-green via-emerald-500 to-teal-500 py-3">
      <div className="container mx-auto flex items-center justify-center space-x-4 animate-fade-in">
        <span className="text-sm md:text-base text-white">
          {currentTrade.trader1} traded {currentTrade.item1}
        </span>
        <Handshake className="w-4 h-4 text-white animate-pulse" />
        <span className="text-sm md:text-base text-white">
          {currentTrade.trader2} traded {currentTrade.item2}
        </span>
      </div>
    </div>
  );
};