// https://auction-webapp-production.up.railway.app/
// http://localhost:8085/

const BASE_URL = process.env.REACT_APP_API_URL || "https://jewelry-auction.onrender.com/api/v1";
export const BASE_WS = process.env.REACT_APP_WS_URL || "https://jewelry-auction.onrender.com";

// const BASE_URL = "http://localhost:8080/api/v1";
// export const BASE_WS = "http://localhost:8080";

export default BASE_URL;
