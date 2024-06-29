#!/bin/bash

user_type=$1
user_name=$2
queen_public_key=$3

pid=$(pgrep -u ${user_name} sshd) 
if [[ ! -z "$pid" ]]; then
  sudo kill $pid
fi

if [ ${user_type} == "queens" ]; then
    # if [ -d /root/inference_results_v3.0 ]; then
    #     sudo rm -rf /root/inference_results_v3.0
    # fi
    sed -i "s#${queen_public_key}##" /root/.ssh/authorized_keys
    sed -i '/^$/d' /root/.ssh/authorized_keys
    exit 0
fi

sudo mountpoint -q /chroots/${user_type}/${user_name}-chroot/sys/
if [ $? -eq 0 ]
then
	sudo mount --make-rslave /chroots/${user_type}/${user_name}-chroot/sys/
	sudo umount -R /chroots/${user_type}/${user_name}-chroot/sys/
fi

sudo mountpoint -q /chroots/${user_type}/${user_name}-chroot/dev/
if [ $? -eq 0 ]
then
    sudo mount --make-rslave /chroots/${user_type}/${user_name}-chroot/dev/
    sudo umount -R /chroots/${user_type}/${user_name}-chroot/dev/
fi

sudo mountpoint -q /chroots/${user_type}/${user_name}-chroot/run/
if [ $? -eq 0 ]
then
    sudo mount --make-rslave /chroots/${user_type}/${user_name}-chroot/run/
    sudo umount -R /chroots/${user_type}/${user_name}-chroot/run/
fi

sudo mountpoint -q /chroots/${user_type}/${user_name}-chroot/proc
if [ $? -eq 0 ]
then
    sudo umount /chroots/${user_type}/${user_name}-chroot/proc/
fi

if [ -d /chroots/${user_type}/${user_name}-chroot ]
then
	sudo rm -r /chroots/${user_type}/${user_name}-chroot
fi

sed -i "/Match User ${user_name}/d" /etc/ssh/sshd_config
sed -i "/ChrootDirectory \/chroots\/${user_type}\/${user_name}-chroot\//d" /etc/ssh/sshd_config

sed -i "/${user_name} ALL=(ALL) NOPASSWD: ALL/d" /etc/sudoers

sudo userdel -f ${user_name}
