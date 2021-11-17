import React, { useState, useEffect} from "react";
import BNBescrow from "../contracts/redcriptopayBNB.json";
import TOKENSescrow from "../contracts/redcriptopayTOKENS.json";
import ContactInfo from "../contracts/redcriptopaycontactINFO.json";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import App from "../App";


const BlockchainConnection = () => {
const [contracts, setContracts] = useState(undefined);


useEffect(() => {
console.log("useEffect")
}, []);


const web3 = Web3

const connect = async () => {

  SetIsLoading(true);
    
const provider = await detectEthereumProvider()

 
if (provider) { 
  
  const accounts = await  window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
    accountChangedHandler(result[0]);
    setConnected(true);
    getAccountBalance(result[0]);
  })

  const ChainchangedHandler = () => {
    window.location.reload();
  }
  
  window.ethereum.on('accountsChanged', accountChangedHandler);
  
  window.ethereum.on('chainChanged', ChainchangedHandler);
  console.log('Ethereum successfully detected!');
  console.log(accounts)

  const networkId = await web3.eth.net.getId();
  const deployedNetwork = BNBescrow.networks[networkId];
  const bnbEscrow = new web3.eth.Contract(
    BNBescrow.abi,
    deployedNetwork && deployedNetwork.address,
    );
  const tokensEscrow = new web3.eth.Contract(
    TOKENSescrow.abi,
    deployedNetwork && deployedNetwork.address,
    );
  const contactInfo = new web3.eth.Contract(
    ContactInfo.abi,
      deployedNetwork && deployedNetwork.address,
    );

} 

else {
  console.error('Please install MetaMask!')
  alert("Debe descargar Metamask")
}

SetIsLoading(false);
}

const accountChangedHandler = (newAccount) => {
  setDefaultAccount(newAccount);
  getAccountBalance(newAccount.toString());
}

const getAccountBalance = (account) => {
  window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
  .then(balance => {
    setUserBalance(parseFloat(web3.utils.fromWei(balance)).toFixed(5));
  })
};

    return (
      <App 
      contracts={contracts}
      defaultAccount={defaultAccount}
      userBalance={userBalance}
      connected={connected}
      isLoading={isLoading}
      connect={connect}
      accountChangedHandler={accountChangedHandler}
      getAccountBalance={getAccountBalance}
      />
  );
}
 
export default BlockchainConnection;