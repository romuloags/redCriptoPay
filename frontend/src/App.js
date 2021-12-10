import  { useState } from "react";

import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import ContactInfo from "./contracts/redcriptopaycontactINFO.json";
import BNBescrow from "./contracts/redcriptopayBNB.json";
import TOKENSescrow from "./contracts/redcriptopayTOKENS.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SearchUser from "./components/SearchUser";
import Deposit from "./components/Deposit";
import History from "./components/History";
import Judge from "./components/Judge";
import SingleBNBsender from "./components/singleBNBsender";
import SingleBNBreceiver from "./components/singleBNBreceiver";
import SingleTOKENSsender from "./components/singleTOKENSsender";
import SingleTOKENSreceiver from "./components/singleTOKENSreceiver";
import Error404 from "./components/404";
import WhitePaper from "./components/whitepaper"
import Support from "./components/support";

import "./custom.css"

function App() {

const [defaultAccount, setDefaultAccount] = useState(undefined)
const [userBalance, setUserBalance] = useState(undefined);
const [connected, setConnected] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [contactInfo, setContactInfo] = useState(undefined);
const [bnbEscrow, setBnbEscrow] = useState(undefined);
const [tokensEscrow, setTokensEscrow] = useState(undefined);
const [noProvider, setNoProvider] = useState(false);

const web3 = Web3

const connect = async () => {

  setIsLoading(true);
    
const provider = await detectEthereumProvider()

if (provider) { 
  
  await window.ethereum.request({ method: 'eth_requestAccounts' }).then(accountChangedHandler);
  
  const ChainchangedHandler = () => {
    window.location.reload();
  }
  
  window.ethereum.on('accountsChanged', accountChangedHandler);
  window.ethereum.on('chainChanged', ChainchangedHandler);
  console.log('Web3 successfully detected!');

  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();

  if(networkId === 5777) {
 
  const contactInfo = new web3.eth.Contract(ContactInfo.abi, ContactInfo.networks[networkId].address);
  console.log(contactInfo);
  setContactInfo(contactInfo);

  const bnbEscrow = new web3.eth.Contract(BNBescrow.abi, BNBescrow.networks[networkId].address);
  console.log(bnbEscrow);
  setBnbEscrow(bnbEscrow);

  const tokensEscrow = new web3.eth.Contract(TOKENSescrow.abi, TOKENSescrow.networks[networkId].address);
  setTokensEscrow(tokensEscrow);
  console.log(tokensEscrow);

  }

  else {
    window.alert("Contratos no desplegados en la Red seleccionada, seleccione la BSC.")
  }
} 

else {
  console.error('Please install MetaMask!');
  setNoProvider(true);
  setIsLoading(false);
}

}

const accountChangedHandler = async (accounts) =>  {
  if (accounts[0] !== defaultAccount) {
     setDefaultAccount(accounts[0]);
     await window.ethereum.request({method: 'eth_getBalance', params: [accounts[0], 'latest']})
  .then(balance => {
    setUserBalance(parseFloat(web3.utils.fromWei(balance)).toFixed(5));
  })

     setConnected(true);

   }
   else{
     setConnected(false);
   }

   
setIsLoading(false);

}

  return (
    <Router>
     <div className="App">
       <header className="App-header">
       <Navbar connect={connect}
       defaultAccount={defaultAccount}
       connected={connected}
       isLoading={isLoading}
       noProvider={noProvider}
       />
       </header>
       <div className="content">
        <Switch>
          <Route exact path="/">
            <Home defaultAccount={defaultAccount}></Home>
          </Route>
          <Route path="/perfil">
            <Profile defaultAccount={defaultAccount}
            contactInfo={contactInfo}
            connected={connected}>  
            </Profile>
          </Route>
          <Route path="/buscar">
            <SearchUser defaultAccount={defaultAccount}
            contactInfo={contactInfo}
            connected={connected}>
            </SearchUser>
          </Route>
          <Route path="/depositar">
            <Deposit defaultAccount={defaultAccount}
            userBalance={userBalance}
            bnbEscrow={bnbEscrow}
            tokensEscrow={tokensEscrow}>
            </Deposit>
          </Route>
          <Route exact path="/historial">
            <History defaultAccount={defaultAccount}
            bnbEscrow={bnbEscrow}
            tokensEscrow={tokensEscrow}
            connected={connected}>
            </History>
          </Route>
          <Route exact path="/historial/tbnbemisor/:id">
            <SingleBNBsender defaultAccount={defaultAccount}
            bnbEscrow={bnbEscrow}
            contactInfo={contactInfo}>
            </SingleBNBsender>
          </Route>
          <Route exact path="/historial/tbnbreceptor/:id">
            <SingleBNBreceiver defaultAccount={defaultAccount}
            bnbEscrow={bnbEscrow}
            contactInfo={contactInfo}>  
            </SingleBNBreceiver>
          </Route>
          <Route exact path="/historial/ttokensemisor/:id">
            <SingleTOKENSsender defaultAccount={defaultAccount}
            tokensEscrow={tokensEscrow}
            contactInfo={contactInfo}></SingleTOKENSsender>
          </Route>
          <Route exact path="/historial/ttokensreceptor/:id">
            <SingleTOKENSreceiver defaultAccount={defaultAccount}
            tokensEscrow={tokensEscrow}
            contactInfo={contactInfo}></SingleTOKENSreceiver>
          </Route>
          <Route exact path="/jurado" >
            <Judge defaultAccount={defaultAccount}
            tokensEscrow={tokensEscrow}
            contactInfo={contactInfo}
            bnbEscrow={bnbEscrow}>
            </Judge>
          </Route>
          <Route exact path="/whitepaper" >
           <WhitePaper/>
          </Route>
          <Route exact path="/soporte" >
           <Support/>
          </Route>  
          <Route path="*">
            <Error404></Error404>
          </Route>  
        </Switch>
       </div>
       <footer className="App-footer">
       <Footer/>
       </footer>
     </div>
    </Router>
  );
}
export default App;
