import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const contractAddress = "0xbae72f20dACf4BBb38413EBa699b9DEc9161a27e"; //  0xbae72f20dACf4BBb38413EBa699b9DEc9161a27e
const apiKey = import.meta.env.VITE_POLYGON_API_KEY || "";

function TokenTransfersChart() {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchTransfers = async () => {
          const url = `https://api-amoy.polygonscan.com/api?module=account&action=tokentx&contractaddress=${contractAddress}&startblock=0&endblock=latest&sort=asc&apikey=${apiKey}`;
      
          try {
            const response = await axios.get(url);
      
            if (response.data.status !== "1") {
              console.error("Erreur API :", response.data.message);
              return;
            }
      
            let transactions = response.data.result;
      
            // Filtrer les transferts de tokens ERC-20 valides
            transactions = transactions.filter(tx => tx.value !== "0" && tx.from.toLowerCase() !== tx.to.toLowerCase());
      
            const dataPoints = transactions.map(tx => {
              const decimals = parseInt(tx.tokenDecimal) || 18; // Prendre en compte les décimales du token
              const convertedValue = parseFloat(tx.value) / 10 ** decimals;
              
      
              return {
                timestamp: new Date(parseInt(tx.timeStamp) * 1000).toLocaleDateString(),
                value: convertedValue,
              };
            });
      
            const groupedData = dataPoints.reduce((acc, tx) => {
              acc[tx.timestamp] = (acc[tx.timestamp] || 0) + tx.value;
              return acc;
            }, {});
      
      
            setChartData({
                labels: Object.keys(groupedData),
                datasets: [{
                  label: "Amount of transfered Tokens",
                  data: Object.values(groupedData),
                  borderColor: "rgba(255, 165, 0, 1)",
                  backgroundColor: "rgba(255, 165, 0, 0.2)",
                  tension: 0.5,
                }],
              });
              
      
          } catch (error) {
            console.error("Erreur lors de la récupération des transactions :", error);
          }
        };
      
        fetchTransfers();
      }, []);
      

    if (!chartData) return <div>Chargement des données...</div>;

    return <Line data={chartData} />;
}

export default TokenTransfersChart;
