const Whitepaper = () => {
    
   return (  

    <div className="history">     
      <div className="bg-dark min-vh-100"> 
        <section className="py-5">
          <div className="container-md">
            <div className="row justify-content-center mx-lg-5">
              <div className="col my-4 text-center">
                <div>
                <h3 className="fs-4 text-danger text-start">
                <i className="bi bi-file-text pe-2"></i>Whitepaper
                </h3>
                </div>
              </div>
            </div>
          <div className="row justify-content-center  mx-lg-5">
            <div className="col-lg-12  pb-5 text-center">
              <div className="card justify-content-center bg-secondary  mb-5">
               <div className="card-body">             
                </div>
                <div className="row justify-content-center mx-lg-5">
                  <div className="col text-center">
                    <div className="card shadow justify content-center mb-5 mx-2">
                      <div className="card-body fs-6">  
                        <h4 className="fw-bold">
                        <i className="bi bi-file-text pe-2"></i>Whitepaper</h4>
                        <div className="my-3">
                        <div className="text-muted">
                        Whitepaper oficial de Red Cripto Pay, última actualización febrero 2022
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-md-6 text-start">
                        <div id="list-example" className="list-group my-md-4 mt-4 mb-0 shadow">
                        <a className="list-group-item list-group-item-action border-0" href="#introduccion">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Introducción</a>
                        <a className="list-group-item list-group-item-action border-0" href="#funcionalidad-usabilidad">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Funcionalidad y Usabilidad</a>
                        <a className="list-group-item list-group-item-action border-0" href="#terminos-y-condiciones">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Términos y Condiciones</a>
                        </div>
                        </div>

                        <div className="col-md-6 text-start">
                        <div id="list-example2" className="list-group my-md-4 mb-4 mt-0 shadow">
                        <a className="list-group-item list-group-item-action border-0" href="#metamask-web3">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Metamask y Web 3.0</a>
                        <a className="list-group-item list-group-item-action border-0" href="#contratos">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Contratos Inteligentes</a>
                        <a className="list-group-item list-group-item-action border-0" href="#futuro">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Futuro Desarrollo</a>
                        </div>
                        </div>
                        </div>
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                        <h5 id="introduccion">Introducción</h5>
                        <p className="text-start">
                        Las Criptomonedas han tomado gran auge desde el 2017, y a finales del 2020 y comienzos del 2021 cada vez eran 
                        más utilizadas las aplicaciones descentralizadas (Dapps). Con el nacimiento de la Binance Smart Chain en el 2020, 
                        cada vez son más los proyectos de la Web 3 que salen a la luz. En Venezuela desde el año 2018 las Criptomonedas son 
                        un tema cotidiano, y cada vez son más personas que las utilizan, de hecho Venezuela es el tercer país a 
                        nivel mundial con más volumen de transacciones al día para el año 2020, y alrededor del 10% de su población 
                        utiliza las Criptomonedas, a raíz de esa Información nació Red Cripto, un marketpalce de Comercios, Servicios y 
                        Productos que utilizan Criptomonedas como método de pago, sin embargo, no todo termina aquí.
                        </p>
                        <p className="text-start">
                        Hoy en día las compras digitales son cada vez más comunes, los negocios físicos han obtado por vender en línea para aumentar 
                        sus ventas, cada vez son más las personas que ofrecen sus servicios de manera remota, al aumentar el comercio digital,
                        de igual forma se incrementa la adopción de las Criptomonedas, Red Cripto reune a todo tipo de Compradores y Vendedores 
                        en línea, de esta premisa nace un problema: <span className="fw-bold">las estafas en línea</span>, una de las 
                        problemáticas más comunes del comercio electrónico desde su inicio, por ello Red Cripto decidió desarrollar una plataforma 
                         llamada <span className="fw-bold">Red Cripto Pay </span> 
                         que funciona con <span className="fw-bold"> depósitos en garantía P2P</span> para proteger a ambas partes durante una
                        transacción (comprador y vendedor), con un sistema de disputa en caso de ser necesario dentro de la transacción.
                        <span className="fw-bold"> Red Cripto Pay es una aplicación descentralizada (Dapp)</span>, que funciona con contratos 
                        inteligentes desplegados en la <span className="fw-bold">Binance Smart Chain (BSC)</span>. Para interactuar con la aplicación el usuario
                        debe utilizar su billetera sin custodia (Metamask), la mayoría de las Dapps en la actualidad utiliza esta modalidad para
                        conectar a sus usuarios.
                        </p>
                        <h5 id="funcionalidad-usabilidad">Funcionalidad y Usabilidad</h5>
                        <p className="text-start">
                        ...
                        </p>
                        <h5 id="terminos-y-condiciones">Términos y Condiciones</h5>
                        <p className="text-start">
                        ...
                        </p>
                        <h5 id="metamask-web3">Metamask y Web 3.0</h5>
                        <p className="text-start">
                        ...
                        </p>
                        <h5 id="contratos">Contratos Inteligentes</h5>
                        <p className="text-start">
                        ...
                        </p>
                        <h5 id="futuro">Futuro Desarrollo</h5>
                        <p className="text-start">
                        ...
                        </p>
                        </div>
                        </div>
                      </div>
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
 
export default Whitepaper;