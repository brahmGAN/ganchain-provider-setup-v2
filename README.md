**Adding provider :**
  1. cd to dir ganchain-provider-setup/add_provider
  2. run add_provider.js

**running add_provider.js :**
  node add_provider.js -n "PROVIDER'S NFT ADDRESS" -k "PRIVATE KEY OF PROVIDER'S NFT ADDRESS" -p "PROVIDER'S WALLET ADDRESS"

**Example:**
  node add_provider.js -n "0x3396B7E7437bd79E02b54e00BEd2ebE5766352D7" -k "0x402149852fe87e2151f456b950db95579a383f67c419b0b6974f9e25cf8bd038" -p "0xF89860E37131c564F39862Aa42DD7c9Ed213198b"

**for help:** node add_provider.js -h

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Adding Machine :**
  1. cd to dir ganchain-provider-setup/add_machine
  2. run add_machine.js

**running add_machine.js :**
  node add_machine.js -w "PROVIDER'S WALLET ADDRESS" -p "PRIVATE KEY OF PROVIDER'S WALLET ADDRESS"

**Example:**
  node add_machine.js -w "0xF89860E37131c564F39862Aa42DD7c9Ed213198b"  -p "0x7f25c1f6658fd0b86d9d7a62736a7983c78ab3d0e45909947bb32dd1f1ff0778"

**for help:** node add_machine.js -h

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Starting Machine :**
  1. cd to dir ganchain-provider-setup/machine
  2. run machine.js

**running machine.js :**
  node machine.js -w "PROVIDER'S WALLET ADDRESS" -p "PRIVATE KEY OF PROVIDER'S WALLET ADDRESS" -m "MACHINE ID"

**Example:**
  node machine.js -w "0xF89860E37131c564F39862Aa42DD7c9Ed213198b"  -p "0x7f25c1f6658fd0b86d9d7a62736a7983c78ab3d0e45909947bb32dd1f1ff0778" -m 1000

**for help:** node machine.js -h
