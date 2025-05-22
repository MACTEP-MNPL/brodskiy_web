import axios from "axios";

export const getToken = async () => {
  try {
    const response = await axios.get(
      "http://localhost:2999/rates/grinex"
    );
    
    if (response.data) {
      // Apply the same percentage logic as before
      const buyRate = Number(response.data.data.buy);
      const sellRate = Number(response.data.data.sell);
      
      const procent = buyRate * 0.0025;
      const buyRes = (buyRate + procent).toFixed(2);
      const sallRes = (sellRate - procent).toFixed(2);
      
      return {
        buy: buyRes,
        sall: sallRes,
      };
    }
    
  } catch (e) {
    return false;
  }
};

