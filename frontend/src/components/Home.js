import bnbicon from "../assets/bnbnewicon.png"
import bscicon from "../assets/bscicon.png"
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
import { Link } from "react-router-dom";

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
                <h1>Red Cripto <span className="text-danger">Pay</span></h1>
                <img src={home1} className="img-fluid d-block m-auto" alt="homeImage"></img> 
                <h4 className=" fs-5 d-block d-md-none text-danger px-2">Deposita y Recibe Criptomonedas de forma segura.</h4>
                <h4 className=" fs-2 d-none d-md-block text-danger">Deposita y Recibe Criptomonedas de forma segura.</h4>
               </div>  
             </div>
             <div className="card justify shadow content-center mb-4">
               <div className="card-body">
                <h3 className="text-dark">Compra y vende Productos y Servicios de manera segura y descentralizada.</h3>
                <p className=" fs-6 text-dark text-justify">
                Depósitos descentralizados P2P intercambiando Criptomonedas por Productos y Servicios con protección al Comprador y Vendedor, a 
                 través de la <img src={bscicon} 
                 width="25" height="25" alt="bnbicon"></img> BNB Smart Chain. 
                 Solo debes conectar tu billetera descentralizada
                 <a className="btn btn-light text-primary ps-1 p-0" 
                 href="https://metamask.io/download" role="button"> 
                 <img className="me-1" src={metamaskicon} 
                 width="25" height="25" alt="bnbicon"></img>Metamask</a> 
                 </p>
                 
               </div>  
             </div>
             <div className="card bg-light shadow mb-4">
               <div className="card-body">
                <div>  
                <h4 className="my-4 justify-content-center text-center">
                <span className="px-3 py-2 bg-primary rounded text-white">¿Cómo funciona?</span></h4>
                </div>
                <div className="mx-lg-5 px-lg-5 my-3">
                <div className="ratio ratio-16x9">        
                <iframe width="750" height="422" src="https://www.youtube.com/embed/xDga4Ay2pAo" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                </div>
                </div>
                <h4 className=" fs-6 text-info text-start">
                Para enviar o recibir depósitos debes aegurarte de haberte registrado con tu billetera añadiendo
                tu información de contacto, de igual forma debes asegurarte de que tu contraparte también 
                este registrado. De esta forma la información de contacto se corresponde 
                con la billetera de usuario. Antes de abrir un depósito debes comunicarte con tu contraparte
                y llegar a un acuerdo previo.</h4>
                <img src={use1} width="300" height="300" className="img-fluid d-block m-auto" alt="use1"></img>
                <h4 className=" fs-6 text-info text-start">
                Los depositos cuentan de tres entidades: <span className="fw-bold">Comprador </span> 
                 (persona que deposita las Criptomonedas), <span className="fw-bold"> Vendedor </span> 
                 (persona que espera recibir las Criptomonedas), <span className="fw-bold">Jurado </span> 
                 (entidad intermediaria en la operación ante cualquier inconveniente del depósito).</h4>
                 <p className="text-info">El comprador procede a depositar las Criptomonedas, 
                 de esta manera el depósito es puesto en garantía.</p>
                <img src={use2} width="300" height="300" className="img-fluid d-block m-auto" alt="use2"></img>
                <p className="text-info">Luego el comprador debe comunicarle al vendedor que el depósito ya fue
                aceptado como garantía, el vendedor debe verificar la validez y detalles del depósito, 
                una vez verificado, el vendedor deberá enviar el producto o servicio al comprador.</p>
                <img src={use3} width="300" height="300" className="img-fluid d-block m-auto" alt="use3"></img>
                <p className="text-info">Una vez el comprador haya recibido el producto o servicio de parte 
                del vendedor, el comprador debe liberar el depósito en garantía el receptor, y así culminar 
                la transacción de manera exitosa.</p>
                <h4 className="text-primary">¿Qué pasaría si el comprador nunca recibe el producto o servicio?</h4>
                <p className="text-info">Si el comprador nunca recibe el producto o servicio, el vendedor
                puede reembolsar el depósito en garantía al comprador.</p>
                <img src={use4} width="300" height="300" className="img-fluid d-block m-auto" alt="use4"></img>
                <h4 className="text-primary">¿Qué pasaría si el comprador y vendedor no llegan a un acuerdo?</h4>
                <p className="text-info">Si hay un inconveniente con la transacción ya sea porque una de las dos
                partes crea que se incumplió con los términos previamente establecidos, puede abrir una disputa, en 
                ese momento el jurado entrará en acción, el jurado debe comunicarse con ambas partes, comprador y 
                vendedor deben presentar de manera clara su inconveniente.</p>
                <img src={use5} width="300" height="3000" className="img-fluid d-block m-auto" alt="use5"></img>
                <p className="text-info">Luego de comunicarse con ambas partes, el jurado tomará la decisión en la 
                que se haga justicia, ya sea de reembolsar el depósito al comprador o liberar los fondos al vendedor, 
                finalizando de manera exitosa y justa la transacción.</p>
                <img src={use6} width="300" height="3000" className="img-fluid d-block m-auto" alt="use6"></img>
                <div className="row justify-content-center">
                <div className="col-10 col-lg-3 ms-5">   
                <a className="btn  btn-primary ms-5 m-2" 
                 href="https://redcripto.com/pay" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>Tutorial</a>
                 </div>
                 </div>
                 <div className="mx-lg-5 px-lg-5 my-3">
                <div className="ratio ratio-16x9">
                <iframe width="750" height="422" src="https://www.youtube.com/embed/ncFRHnjttxI" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                ></iframe>
                </div>
                </div>
               </div>  
             </div>
             {defaultAccount && <div className="card justify bg-dark shadow content-center mb-4">
               <div className="card-body">
                <h3 className="text-danger">Tokens BEP20</h3>
                <h4 className=" fs-6 text-light text-justify">
                Agrega los tokens BEP20 disponibles en Red Cripto Pay a tu billetera</h4>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={busdicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                  BUSD <span className="text-muted">Binance USD</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addBusd}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>BscScan</a>
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
                 href="https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>BscScan</a>
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
                 href="https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>BscScan</a>
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
                 href="https://bscscan.com/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>BscScan</a>
                 </span>
                 </div>  
                </div>
                <div className="mx-2 mt-3 col-lg-5">
                <div className="card justify bg-light shadow content-center">
                 <span className="ms-2 text-dark fw-bold">
                 <img src={ethicon} width="20" height="20" alt="bnbicon" className="me-2"></img>
                   ETH <span className="text-muted">Ethereum Token</span>
                 <button className="btn btn-primary ms-2 m-2"
                 onClick={addEth}>Agregar</button>
                 <a className="btn  btn-dark m-2 text-danger" 
                 href="https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8" role="button">
                 <i className="bi bi-box-arrow-up-right me-1"></i>BscScan</a>
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
                 la BSC (BNB Smart Chain), estos pueden ser consultados desde 
                 <span className="badge bg-primary fw-bold ms-2">BscScan</span>
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
                 href="https://bscscan.com/address/0xb1db2f8daa0749bb6c0c4b1f15522c89978e3cc0#code" role="button">Contrato</a>
                 <div className="card-body">
                 </div>
                 </div>  
                </div>  
                <div className="mb-3 col-lg-4 mb-lg-0">
                <div className="card justify bg-light shadow content-center">
                 <div className="text-center text-primary mt-2">Depósitos de BNB
                 <img src={bnbicon} width="20" height="20" alt="bnbicon" className="mx-1"></img>
                 </div>
                 <div className="text-center text-warning mx-2 mt-2"> Envíe y Reciba pagos con
                 BNB de manera segura, a través de un contrato tipo fideicomiso.</div>
                 <a className="btn btn-primary mt-2 mx-5" 
                 href="https://bscscan.com/address/0xe414caa589f36e1679298e424957ac10bcd3a340#code" role="button">Contrato</a>
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
                   </span>BTCB Bitcoin BEP20
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
                 href="https://bscscan.com/address/0x09e2fd2db3eddc4acf128ede0d39a85bc8d7db4c#code" role="button">Contrato</a>
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