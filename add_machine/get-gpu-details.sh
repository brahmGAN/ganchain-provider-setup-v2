#!/bin/bash

gpu_name=$(nvidia-smi --query-gpu=name --format=csv,noheader | head -n 1)

gpu_memory=$(nvidia-smi --query-gpu=memory.total --format=csv,noheader,nounits | head -n 1)

if ! command -v bc &> /dev/null
then
    # echo "bc could not be found, installing now..."
    sudo apt install bc -y &> /dev/null
fi

gpu_memory_gb=$(echo "scale=2; $gpu_memory / 1024" | bc -l)

cpu_name=$(lscpu | grep 'Model name' | awk -F: '{print $2}' | sed 's/^[ \t]*//;s/[ \t]*$//')

cpu_cores=$(nproc)

ram=$(free -h | grep Mem | awk '{print $2}')

storage_size=$(df -h --total | grep 'total' | awk '{print $2}')

region=$(curl -s https://ipinfo.io/region)

if ! command -v speedtest-cli &> /dev/null
then
    # echo "speedtest-cli could not be found, installing now..."
    sudo apt install speedtest-cli -y &> /dev/null
fi

if ! command -v jq &> /dev/null
then
    # echo "jq could not be found, installing now..."
    sudo apt install jq -y &> /dev/null
fi

speed_json=$(speedtest-cli --json)

download_speed=$(echo "$speed_json" | jq -r '.download')
upload_speed=$(echo "$speed_json" | jq -r '.upload')

download_speed_mbps=$(echo "scale=2; $download_speed / 1048576" | bc -l)
upload_speed_mbps=$(echo "scale=2; $upload_speed / 1048576" | bc -l)

ip_address=$(curl -s https://ipinfo.io/ip)

declare -A machine_info
[[ ! -z "$gpu_name" ]] && machine_info[gpuName]=$gpu_name || machine_info[gpuName]="A100"
machine_info[gpuQuantity]=1
[[ ! -z "$gpu_memory_gb" ]] && machine_info[gpuMemory]=$gpu_memory_gb || machine_info[gpuMemory]=100
machine_info[connectionType]="PCIe"
machine_info[cpuName]=$cpu_name
machine_info[cpuCoreCount]=$cpu_cores
machine_info[uploadBandWidth]=$upload_speed_mbps
machine_info[downloadBandWidth]=$download_speed_mbps
machine_info[storageType]="nvme"
machine_info[storageAvailable]=$storage_size
declare -a openedPorts=(200 3000)
machine_info[portsOpen]=${openedPorts[@]}
machine_info[region]=$region

machine_info[RAM]=$ram
machine_info[ipAddress]=$ip_address


# Serialize the associative array as JSON
machine_info_serialized_json=$(declare -p machine_info | grep -o "(.*)" | tr '()[]= ' '{}"":,' | sed "s/,}$/}/")
echo $machine_info_serialized_json | jq
