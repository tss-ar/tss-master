# tss-master

## Usage

node index --port 3357

## Running on windows as a service

mkdir C:\TSS\TSS-Master
cd C:\TSS\TSS-Master

### Install service

./prerequisites/nssm-v2.24-x64.exe install TSS-Master ./prerequisites/node-x64.exe "index.js"
./prerequisites/nssm-v2.24-x64.exe set TSS-Master AppDirectory "C:\TSS\TSS-Master"
./prerequisites/nssm-v2.24-x64.exe set TSS-Master AppParameters "index.js"
./prerequisites/nssm-v2.24-x64.exe set TSS-Master DisplayName TSS Master
./prerequisites/nssm-v2.24-x64.exe set TSS-Master Description "TSS Master service discovery"
./prerequisites/nssm-v2.24-x64.exe set TSS-Master Start SERVICE_AUTO_START

### Start service

./prerequisites/nssm-v2.24-x64.exe start TSS-Master

### Stop service

./prerequisites/nssm-v2.24-x64.exe stop TSS-Master

### Remove service

./prerequisites/nssm-v2.24-x64.exe remove TSS-Master