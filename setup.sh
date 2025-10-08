#!/bin/bash
clear
echo "================================================"
echo " 🧠  FSLapp - Expo SDK 54"
echo " Automated Setup Script for macOS / Linux"
echo "================================================"
echo

# --- Check if Node.js is installed ---
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js (v18 or later) from https://nodejs.org"
    exit
fi

# --- Check if npm is installed ---
if ! command -v npm &> /dev/null
then
    echo "❌ npm not found."
    echo "Install Node.js to include npm."
    exit
fi

# --- Install dependencies ---
echo "📦 Installing dependencies (this may take a few minutes)..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
  echo "⚠️  Something went wrong during npm install."
  exit
fi

# --- Run Expo Doctor ---
echo "🩺 Running Expo Doctor to check configuration..."
npx expo-doctor

# --- Start Expo server ---
echo "🚀 Starting Expo development server..."
npx expo start -c

echo
echo "================================================"
echo " ✅ Setup Complete!"
echo " - Scan the QR code with the Expo Go app"
echo " - Or press 'a' to open the Android emulator"
echo "================================================"