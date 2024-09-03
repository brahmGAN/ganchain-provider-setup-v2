#!/bin/bash


user_type=$1
user_name=$2
public_key=$3


apt update
# Install openssh-server for ssh connections
apt install -y openssh-server
# allow ssh connections
ufw allow ssh
# disable PasswordAuthentication
sed -i "s/#PasswordAuthentication yes/PasswordAuthentication no/" /etc/ssh/sshd_config

if [ "${user_type}" == "queens" ]; then
    # Append public key to the current user's authorized_keys
    mkdir -p "$HOME/.ssh"
    sh -c "echo ${public_key} >> $HOME/.ssh/authorized_keys"
    
    # Restart sshd service
    systemctl restart sshd || systemctl restart ssh
    
    echo "SSH setup complete for user: ${user_name}"
    exit 0
fi


# create home dir for user
mkdir -pv /chroots/${user_type}/${user_name}-chroot/home/${user_name}
# create user & assign home dir
useradd -d /chroots/${user_type}/${user_name}-chroot/home/${user_name} ${user_name}
# set the default shell as bash
usermod ${user_name} -s /bin/bash

# Make .ssh directory
mkdir -p /chroots/${user_type}/${user_name}-chroot/home/${user_name}/.ssh
# Append client public key to authorized_keys
sh -c "echo ${public_key} >> /chroots/${user_type}/${user_name}-chroot/home/${user_name}/.ssh/authorized_keys"

# define chroot dir for user
sh -c "echo Match User ${user_name} >> /etc/ssh/sshd_config"
sh -c "echo ChrootDirectory /chroots/${user_type}/${user_name}-chroot/ >> /etc/ssh/sshd_config"
# allowing user to execute commands
sh -c "echo ${user_name} ALL=\(ALL\) NOPASSWD: ALL >> /etc/sudoers"
# Restart sshd service
systemctl restart sshd || systemctl restart ssh

# change owner for user's home dir
chown -Rv ${user_name}:${user_name} /chroots/${user_type}/${user_name}-chroot/home/${user_name}


# copying /usr /var /etc dirs
echo "copying /usr /var /etc dirs"
mkdir -p /chroots/${user_type}/${user_name}-chroot/tmp
cp -r /usr /chroots/${user_type}/${user_name}-chroot/usr
cp -r /var /chroots/${user_type}/${user_name}-chroot/var
cp -r /etc /chroots/${user_type}/${user_name}-chroot/etc


# for apt install support in chrooted env
chown -R ${user_name}:${user_name} /chroots/${user_type}/${user_name}-chroot/var
chown -R ${user_name}:${user_name} /chroots/${user_type}/${user_name}-chroot/tmp
chmod 1777 /chroots/${user_type}/${user_name}-chroot/tmp
rm -r /chroots/${user_type}/${user_name}-chroot/var/cache/man


# for internet connection in chrooted env
rm /chroots/${user_type}/${user_name}-chroot/etc/resolv.conf
sh -c "echo nameserver 8.8.8.8 > /chroots/${user_type}/${user_name}-chroot/etc/resolv.conf"


# mount requried dirs
echo "mounting /proc /sys /dev /run dirs"
mkdir -p /chroots/${user_type}/${user_name}-chroot/proc
mkdir -p /chroots/${user_type}/${user_name}-chroot/sys
mkdir -p /chroots/${user_type}/${user_name}-chroot/dev
mkdir -p /chroots/${user_type}/${user_name}-chroot/run
mount -t proc /proc /chroots/${user_type}/${user_name}-chroot/proc/
mount --rbind /sys /chroots/${user_type}/${user_name}-chroot/sys/
mount --rbind /dev /chroots/${user_type}/${user_name}-chroot/dev/
mount --rbind /run /chroots/${user_type}/${user_name}-chroot/run/


# add required symlinks in the chrooted env
ln -s /usr/bin /chroots/${user_type}/${user_name}-chroot/bin
ln -s /usr/lib /chroots/${user_type}/${user_name}-chroot/lib
ln -s /usr/lib32 /chroots/${user_type}/${user_name}-chroot/lib32
ln -s /usr/lib64 /chroots/${user_type}/${user_name}-chroot/lib64
ln -s /usr/libx32 /chroots/${user_type}/${user_name}-chroot/libx32
ln -s /usr/sbin /chroots/${user_type}/${user_name}-chroot/sbin

chmod a+s /chroots/${user_type}/${user_name}-chroot/usr/bin/lshw
chmod a+s /chroots/${user_type}/${user_name}-chroot/usr/bin/sudo


# home directory magic thing
mkdir -p /chroots/${user_type}/${user_name}-chroot/chroots/${user_type}/${user_name}-chroot/home
ln -s /home/${user_name} /chroots/${user_type}/${user_name}-chroot/chroots/${user_type}/${user_name}-chroot/home/${user_name}
sh -c "echo export HOME=/home/${user_name} >> /chroots/${user_type}/${user_name}-chroot/etc/profile"
sh -c "echo cd /home/${user_name} >> /chroots/${user_type}/${user_name}-chroot/etc/profile"


echo SSHSetup complete for user : ${user_name}