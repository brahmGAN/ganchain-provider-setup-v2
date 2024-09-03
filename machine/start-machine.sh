#!/bin/bash

# Check if all required arguments are provided
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <wallet_address> <private_key> <machine_id>"
    exit 1
fi

WALLET_ADDRESS=$1
PRIVATE_KEY=$2
MACHINE_ID=$3

pm2 start pm2.config.js --name "machine" -- -w "$WALLET_ADDRESS" -p "$PRIVATE_KEY" -m "$MACHINE_ID"