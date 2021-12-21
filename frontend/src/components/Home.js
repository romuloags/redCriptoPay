import bnbicon from "../assets/bnbicon.png"
import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"
import home1 from "../assets/home-main.png"
import use1 from "../assets/use-1.png"
import use2 from "../assets/use-2.png"
import use3 from "../assets/use-3.png"
import use4 from "../assets/use-4.png"
import use5 from "../assets/use-5.png"
import use6 from "../assets/use-6.png"
import metamaskicon from "../assets/metamaskicon.png"
import {addBusd, addUsdt, addUsdc, addBtcb, addEth} from "./addTokens"
import { Link } from "react-router-dom"

const Home = ({defaultAccount}) => {

    return (
  <div className="home">     
    <div> 
      <section className="py-5">
        <div className="container-md">
          <div className="row justify-content-center mb-5">
            <div className="col mb-4 text-justify">
            <div className="card justify text-center bg-dark shadow content-center mb-4">
               <div className="card-body text-light px-0">
                <h1>Red Cripto <span className="text-danger">Testnet</span></h1>
                <img src={home1} className="img-fluid d-block m-auto" alt="homeImage"></img> 
                <h4 className=" fs-5 d-block d-md-none text-danger">Deposita y Recibe Criptomonedas de forma segura.</h4>
                <h4 className=" fs-2 d-none d-md-block text-danger">Deposita y Recibe Criptomonedas de forma segura.</h4>
               </div>  
             </div>
             <div className="card justify bg-light shadow content-center mb-4">
               <div className="card-body">
                <h3>Dapp Test</h3>
                <h4 className=" fs-6 text-primary text-justify">
                 Procesador de pago en Criptomonedas con protección al Comprador y Vendedor, a 
                 través de la Binance Smart Chain. <span className="text-dark"> 
                    Esta versión es de prueba (Ropsten). </span> 
                 Solo debes conectar tu billetera descentralizada 
                 <a className="px-1 text-decoration-none text-dark" href="https://metamask.io/download"><img src={metamaskicon} 
                 width="25" height="25" alt="bnbicon"></img>Metamask</a> a la testnet para probarla y añadir
                 los tokens de prueba. Para probar la Dapp puedes obtener ETH de prueba a través de una faucet de Ropsten.
                </h4>
               </div>  
             </div>
             <div className="card justify bg-light shadow content-center mb-4">
               <div className="card-body">
                <div>  
                <h4 className="col-lg-5 p-2 text-justify bg-primary rounded text-white">
                <span className="ps-2">¿Cómo funciona Red Cripto Pay?</span></h4>
                </div>
                <h4 className=" fs-6 text-info text-start">
                Para enviar o recibir depósitos debes aegurarte de haberte registrado con tu billetera, añadiendo
                tu información de contacto, de igual forma debes asegurarte de que tu contraparte también 
                este registrado. De esta forma la información de contacto se correspondería 
                con la billetera de usuario. Antes de abrir un depósito debes comunicarte con tu contraparte
                y llegar a un acuerdo previo.</h4>
                <img src={use1} width="300" height="300" className="img-fluid d-block m-auto" alt="use1"></img>
                <h4 className=" fs-6 text-info text-start">
                Los depositos cuentan de tres entidades: <span className="fw-bold">Emisor </span> 
                 (persona que deposita las Criptomonedas), <span className="fw-bold"> Receptor </span> 
                 (persona que espera recibir las Criptomonedas), <span className="fw-bold">Jurado </span> 
                 (entidad intermediaria en la operación ante cualquier inconveniente del depósito).</h4>
                 <p className="text-info">El emisor procede a depositar las Criptomonedas, 
                 de esta manera el depósito es puesto en garantía.</p>
                <img src={use2} width="300" height="300" className="img-fluid d-block m-auto" alt="use2"></img>
                <p className="text-info">Luego el emisor debe comunicarle al receptor que el depósito ya fue
                aceptado como garantía, el receptor debe verificar la validez y detalles del depósito, 
                una vez verificado, el receptor deberá enviar el producto o servicio al emisor.</p>
                <img src={use3} width="300" height="300" className="img-fluid d-block m-auto" alt="use3"></img>
                <p className="text-info">Una vez el emisor haya recibido el producto o servicio de parte 
                del receptor, el emisor debe liberar el depósito en garantía el receptor, y así culminar 
                la transacción de manera exitosa.</p>
                <h4 className="text-primary">¿Qué pasaría si el emisor nunca recibe el producto o servicio?</h4>
                <p className="text-info">Si el emisor nunca recibe el producto o servicio, el receptor 
                puede reembolsar el depósito en garantía al emisor.</p>
                <img src={use4} width="300" height="300" className="img-fluid d-block m-auto" alt="use4"></img>
                <h4 className="text-primary">¿Qué pasaría si el emisor y receptor no llegan a un acuerdo?</h4>
                <p className="text-info">Si hay un inconveniente con la transacción ya sea porque una de las dos
                partes crea que se incumplió con los términos previamente establecidos, puede abrir una disputa, en 
                ese momento el jurado entrará en acción, el jurado debe comunicarse con ambas partes, emisor y 
                receptor deben presentar de manera clara su inconveniente.</p>
                <img src={use5} width="300" height="3000" className="img-fluid d-block m-auto" alt="use5"></img>
                <p className="text-info">Luego de comunicarse con ambas partes, el jurado tomará la decisión en la 
                que se haga justicia, ya sea de reembolsar el depósito al emisor o liberar los fondos al receptor, 
                finalizando de manera exitosa y justa la transacción.</p>
                <img src={use6} width="300" height="3000" className="img-fluid d-block m-auto" alt="use6"></img>
                <div className="row justify-content-center">
                <div className="col-10 col-lg-3 ms-5">   
                <a className="btn  btn-primary ms-5 m-2" 
                 href="https://redcripto.com/blog" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>Tutorial</a>
                 </div>
                 </div>
               </div>  
             </div>
             {defaultAccount && <div className="card justify bg-dark shadow content-center mb-4">
               <div className="card-body">
                <h3 className="text-danger">Mock Tokens ERC20</h3>
                <h4 className=" fs-6 text-light text-justify">
                Agrega los mock tokens (tokens de prueba) 
                ERC20 disponibles en Red Cripto Pay a tu billetera. Para depositar Tokens
                primero debes obtener algo de test ETH a través de una faucet (Ropsten), luego 
                puedes obtener tokens con la función de mint desde EtherScan.</h4>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={busdicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                  BUSD <span className="text-muted">Binance USD</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addBusd}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://ropsten.etherscan.io/address/0x3103D92d2888B7Aeee60C59a72e4Ba6A3146C9d0" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>EtherScan</a>
                 </span>
                 </div>  
                </div>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={usdticon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                   USDT <span className="text-muted">Tether</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addUsdt}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://ropsten.etherscan.io/address/0xA9178362c48219dDa5FE0F79DF4d4c62A602260D" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>EtherScan</a>
                 </span>
                 </div>  
                </div>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={usdcicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                   USDC <span className="text-muted">USD Coin</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addUsdc}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://ropsten.etherscan.io/address/0xbFe4f8A71C8C3E1b748D42ACfB2F1140931f50bA" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>EtherScan</a>
                 </span>
                 </div>  
                </div>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={btcbicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                   BTCB <span className="text-muted">Bitcoin BEP20</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addBtcb}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://ropsten.etherscan.io/address/0x3aFf2aB4cd7cF0f08B54E06D943dcDe8719cfd82" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>EtherScan</a>
                 </span>
                 </div>  
                </div>
                <div className="ms-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-0 text-dark fw-bold">
                 <img src={ethicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                   ETH <span className="text-muted">Ethereum Token</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addEth}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://ropsten.etherscan.io/address/0xdFabe06028A1008354ae8Ed8F8E63202A0A11853" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>EtherScan</a>
                 </span>
                 </div>  
                </div>             
               </div>  
             </div>}        
             <div className="card justify bg-dark shadow content-center mb-5">
               <div className="card-body">
                <h3 className="text-danger mb-3">Contratos inteligentes</h3>
                <h4 className=" fs-6 mb-2 text-light text-start">
                 <p> 
                 Red Cripto desarrolló tres contratos inteligentes desplegados en
                 Ropsten Testnet, estos pueden ser consultados desde 
                 <span className="badge bg-primary fw-bold ms-2">EtherScan</span>
                 </p>
                 </h4>
                <div className="row gx-lg-5 mx-lg-3 my-3">
                <div className="col-lg-4 mb-lg-0 mb-3">
                 <div className="card justify bg-light shadow content-center">
                 <div className="text-center text-primary mt-2">Datos de Contacto</div>
                 <div className="text-center text-warning mx-2 mt-2"> Para garantizar que un comprador 
                 o Vendedor realmente sean los dueños de una dirección de criptomonedas se registran sus
                  datos de Contacto correlacionados con su billetera directamente a la Blockchain.</div>
                 <a className="btn btn-primary mt-2 mx-5" 
                 href="https://ropsten.etherscan.io/address/0x933590EAdab9A682F883513A4D77D6Cd64b3E56E#code" 
                 role="button">Contrato</a>
                 <div className="card-body">
                 </div>
                 </div>  
                </div>  
                <div className="mb-3 col-lg-4 mb-lg-0">
                <div className="card justify bg-light shadow content-center">
                 <div className="text-center text-primary mt-2">Depósitos de Binance Coin
                 <img src={bnbicon} width="20" height="20" alt="bnbicon" className="mx-1"></img>
                 </div>
                 <div className="text-center text-warning mx-2 mt-2"> Envíe y Reciba pagos con
                 Binance Coin de manera segura, a través de un contrato tipo fideicomiso.</div>
                 <a className="btn btn-primary mt-2 mx-5" 
                 href="https://ropsten.etherscan.io/address/0xd4dF89e360C9A91990Fc19C41a81173F18DE335d#code" 
                 role="button">Contrato</a>
                 <div className="card-body">
                 </div>
                 </div>  
                </div>  
                <div className="mb-3 col-lg-4 mb-lg-0">
                 <div className="card justify bg-light shadow content-center">
                 <div className="text-center text-primary mt-2">Depósitos de Tokens BEP-20 </div>
                 <div className="text-center text-warning mx-2 mt-2"> Envíe y Reciba pagos con
                 Tokens (BEP-20) de manera segura, a través de un contrato tipo fideicomiso.
                 <div className="text-info text-start m-1">
                 <div>
                   <span>
                   <img className="me-1" src={usdticon} width="20" height="20" alt="usdticon"></img> 
                   </span>USDT Tether
                 </div>
                 <div>
                   <span>
                   <img className="me-1" src={ethicon} width="20" height="20" alt="usdticon"></img> 
                   </span>ETH Ethereum Token
                 </div>
                 <div>
                   <span>
                   <img className="me-1" src={btcbicon} width="20" height="20" alt="usdticon"></img> 
                   </span>BTCB Bitcoin BEP2
                 </div>
                 <div>
                   <span>
                   <img className="me-1" src={busdicon} width="20" height="20" alt="usdticon"></img> 
                   </span>BUSD Binance USD
                 </div>
                 <div>
                   <span>
                   <img className="me-1" src={usdcicon} width="20" height="20" alt="usdticon"></img> 
                   </span>USDC USD Coin
                 </div>
                 </div>
                 </div>
                 <a className="btn btn-primary mt-2 mx-5" 
                 href="https://ropsten.etherscan.io/address/0x6A7b8D000133307e325375Ca2A790008849b9B20#code" 
                 role="button">Contrato</a>
                 <div className="card-body">
                </div>
                </div>      
              </div>
                <div className="mt-3 text-light">Para una información más detallada 
                <Link className="btn btn-primary mt-lg-0 mt-2 btn-sm ms-2" 
                 to="/whitepaper" role="button"> 
                 <i className="bi bi-file-text text-white pe-1"></i>Whitepaper</Link>
                </div>
                </div> 
               </div>  
             </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    
  );
}
 
export default Home;