#!/bin/bash

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install Node.js and npm
install_node() {
    echo "Installing Node.js v20 and npm..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    if [ $? -ne 0 ]; then
        echo "Failed to install Node.js and npm. Please check your system configuration and try again."
        exit 1
    fi
    echo "Node.js v20 and npm installed successfully."
}

# Check if npm is installed
if ! command_exists npm; then
    install_node
fi

# Check if PM2 is installed, if not install it globally
if ! command_exists pm2; then
    echo "PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
    if [ $? -ne 0 ]; then
        echo "Failed to install PM2. Please check your npm configuration and try again."
        exit 1
    fi
    echo "PM2 installed successfully."
fi

# Check if all required arguments are provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <wallet_address> <private_key> <machine_id>"
    exit 1
fi

WALLET_ADDRESS=$1
PRIVATE_KEY=$2
MACHINE_ID=$3

npm install

# Start the application using PM2
pm2 start machine.js -- -w "$WALLET_ADDRESS" -p "$PRIVATE_KEY" -m "$MACHINE_ID"

if [ $? -eq 0 ]; then
    echo "Application started successfully with PM2."
else
    echo "Failed to start the application. Please check your configuration and try again."
    exit 1
fi