@echo off
title FSLapp Setup and Launcher
echo ================================================
echo  FSLapp - Expo SDK 54
echo  Automated Setup Script for Windows
echo ================================================
echo.

REM Check if Node is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo ❌ Node.js is not installed. Please install Node.js first.
  pause
  exit /b
)

REM Install dependencies
echo 📦 Installing dependencies...
npm install --legacy-peer-deps

if %errorlevel% neq 0 (
  echo ⚠️  Something went wrong during npm install.
  pause
  exit /b
)

REM Run Expo Doctor to check setup
echo 🩺 Checking Expo configuration...
npx expo-doctor

REM Start Expo Server
echo 🚀 Starting Expo project...
npx expo start -c

echo ================================================
echo  ✅ Setup complete! 
echo  Scan the QR code with Expo Go or press 'a' for Android emulator.
echo ================================================
pause