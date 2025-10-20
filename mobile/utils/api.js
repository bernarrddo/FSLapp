import * as Network from "expo-network";

const API_BASE_URL = "https://f-sign-language-cm91.onrender.com"; // your Render backend

export async function safeFetch(endpoint, options = {}, timeout = 7000) {
  const netInfo = await Network.getNetworkStateAsync();
  if (!netInfo.isConnected) {
    throw new Error("No internet connection. Please check your Wi-Fi or data.");
  }

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    if (!response.ok) {
      throw new Error(`Server error (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Server not responding. Try again later.");
    } else {
      throw err;
    }
  }
}