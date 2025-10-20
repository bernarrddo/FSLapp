// mobile/config.js

// 👇 Change this to your own local IP for development
const LOCAL_API = "http://192.168.0.105:5000";

// 👇 When you deploy your backend (Render, Railway, etc.), update this:
const PROD_API = "https://fsl-backend-hnj6.onrender.com";

// 👇 Automatically use local in dev mode, and production in builds
export const API_URL = __DEV__ ? LOCAL_API : PROD_API;

// TYPE ipconfig to change these in the code
// IPv4 Address . . . . . . . . . . : 192.168.0.105

export const API_BASE_URL = "https://fsl-backend-hnj6.onrender.com/api";
