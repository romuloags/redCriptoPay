import { Link } from "react-router-dom";

import datoscontacto from "../assets/datoscontacto.JPG"
import depositar from "../assets/depositar.JPG"
import historial from "../assets/historial.JPG"
import historial1 from "../assets/historial1.PNG"
import web3jsimage from "../assets/web3js.png"

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
                        Whitepaper oficial de Red Cripto Pay, última revisión febrero 2022
                        </div>
                        <div className="row justify-content-center">
                        <div className="col-md-6 text-start">
                        <div id="list-example" className="list-group my-md-4 mt-4 mb-0 shadow">
                        <a className="list-group-item list-group-item-action border-0" href="#introduccion">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Introducción</a>
                        <a className="list-group-item list-group-item-action border-0" href="#funcionalidad">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Funcionalidad</a>
                        <a className="list-group-item list-group-item-action border-0" href="#usabilidad">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Usabilidad</a>
                        <a className="list-group-item list-group-item-action border-0" href="#comisiones">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Comisiones</a>
                        </div>
                        </div>

                        <div className="col-md-6 text-start">
                        <div id="list-example2" className="list-group my-md-4 mb-4 mt-0 shadow">
                        <a className="list-group-item list-group-item-action border-0" href="#metamask-web3">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Metamask y web3.js</a>
                        <a className="list-group-item list-group-item-action border-0" href="#contratos">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Contratos Inteligentes</a>
                        <a className="list-group-item list-group-item-action border-0" href="#futuro">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Futuro Desarrollo</a>
                        <a className="list-group-item list-group-item-action border-0" href="#terminos-y-condiciones">
                        <i className="bi bi-arrow-right-circle-fill text-primary mx-2"></i>Descargo de responsabilidad y Riesgos</a>
                        </div>
                        </div>
                        </div>
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex="0">
                        <h5 className="fw-bold" id="introduccion">Introducción</h5>
                        <p className="text-start">
                        Las Criptomonedas han tomado gran auge desde el 2017, y a finales del 2020 y comienzos del 2021 cada vez eran 
                        más utilizadas las aplicaciones descentralizadas (Dapps). Con el nacimiento de la Binance Smart Chain en el 2020, 
                        cada vez son más los proyectos de la Web 3 que salen a la luz. En Venezuela desde el año 2018 las Criptomonedas son 
                        un tema cotidiano, y cada vez son más personas que las utilizan, de hecho, Venezuela es el tercer país a 
                        nivel mundial con más volumen de transacciones al día para el año 2020, y alrededor del 10% de su población 
                        utiliza las Criptomonedas, a raíz de esa Información nació Red Cripto, un marketplace de Comercios, Servicios y 
                        Productos que utilizan Criptomonedas como método de pago, sin embargo, no todo termina aquí.
                        </p>
                        <p className="text-start">
                        Hoy en día las compras digitales son cada vez más comunes, los negocios físicos han optado por vender en línea para aumentar 
                        sus ventas, cada vez son más las personas que ofrecen sus servicios de manera remota, al aumentar el comercio digital,
                        de igual forma se incrementa la adopción de las Criptomonedas, Red Cripto reúne a todo tipo de Compradores y Vendedores 
                        en línea, de esta premisa nace un problema: <span className="fw-bold">las estafas en línea</span>, una de las 
                        problemáticas más comunes del comercio electrónico desde su inicio, por ello Red Cripto decidió desarrollar una plataforma 
                         llamada <span className="fw-bold">Red Cripto Pay </span> 
                         que funciona con <span className="fw-bold"> depósitos en garantía peer to peer (P2P)</span> para proteger a ambas partes durante una
                        transacción (comprador y vendedor), con un sistema de disputa en caso de ser necesario dentro de la transacción.
                        <span className="fw-bold"> Red Cripto Pay es una aplicación descentralizada (Dapp)</span>, que funciona con 
                        <span className="fw-bold"> contratos 
                        inteligentes</span> desplegados en la <span className="fw-bold">Binance Smart Chain (BSC)</span>. Para interactuar con la aplicación el usuario
                        debe utilizar su billetera sin custodia (Metamask), la mayoría de las Dapps en la actualidad utilizan esta modalidad para
                        conectar a sus usuarios.
                        </p>
                        <h5 className="fw-bold" id="funcionalidad">Funcionalidad</h5>
                        <p className="text-start">
                        Red Cripto Pay es un fideicomiso P2P (Escrow) muy común en el universo Cripto, donde los pares no confían entre si, y para
                        realizar una transacción entre ambas partes necesitan un seguro o intermediario para realizar la transacción de manera exitosa.
                        El fideicomiso de Red Cripto Pay cuenta de tres entidades, Emisor (entidad que realiza el depósito), Receptor (entidad que espera
                        recibir el dinero depositado), y Jurado (entidad encargada de resolver una disputa entre Emisor y Receptor)
                        Para explicar de forma más análoga y sencilla el fideicomiso, nos topamos con el clásico ejemplo de Alice y Bob, donde ambos 
                        quieren realizar un intercambio, Alice quiere comprar diamantes a Bob usando 
                        Criptomonedas, pero Alice no está segura si Bob realmente está vendiendo diamantes o simplemente es un estafador en 
                        línea buscando nuevas víctimas, por otro lado Bob no sabe si Alice realmente pagará por los diamantes cuando él los envíe, 
                        a pesar de que ambos tienen buenas intenciones, ninguno las sabe, y por ello dejan pasar la oportunidad de realizar un intercambio
                        que beneficie a ambas partes. Por ello se creó Red Cripto Pay, para asegurar que Alice y Bob realicen un intercambio de forma segura
                        y sin intermediarios, ya que Red Cripto Pay bajo la forma de Jurado, solo interviene en caso de abrirse una disputa, pero en ningún 
                        momento el dinero o las conversaciones de Alice y Bob están en manos de la plataforma.
                        </p>
                        <p className="text-start">
                        Alice interactúa con los Contratos inteligentes de Red Cripto,
                        para ello primero debe registrar sus datos de contacto con su dirección de billetera, de esta forma la dirección de Billetera de Alice
                        queda registrada en la Blockchain con sus datos de contacto, como número telefónico, redes sociales, correo electrónico 
                        o entre otros medios de contacto; de igual forma Alice debe asegurarse que la Billetera suministrada por Bob contenga datos de contacto,
                        ya que de esta forma ambas partes se aseguran que los medios de contacto por lo que se comunican corresponden a su dirección de billetera,
                        la cual utilizarán para realizar la transacción, si Alice o Bob presentan un Dato de Contacto diferente en su billetera con respecto
                        al que interactúan, deben corregirlo y así asegurar que se trata de ellos; ej.: Alice habla con Bob previamente con su número
                        telefónico 1234567, luego de que llegan a un acuerdo Alice registra sus datos de contacto con otro número telefónico 7654321
                        y le da su dirección de billetera a su contraparte, Bob cuando busca la dirección de Billetera de Alice se da cuenta 
                        que su número telefónico es otro y no corresponde con el que se comunicaron previamente, Bob por seguridad le pide a Alice que
                        edite sus datos de contacto con el número telefónico 1234567, Alice vuelve a registrar sus Datos de Contacto, esta vez con el número 1234567,
                        Bob revisa nuevamente la dirección de Billetera y confirma el número telefónico de Alice, por otra parte Alice debe confirmar los datos 
                        de Contacto de su contraparte, Bob registra su número telefónico y le proporciona a Alice su dirección de Billetera, Alice confirma 
                        que el número telefónico de Bob corresponde con el de su Billetera; de esta forma Alice y Bob ya pueden empezar un intercambio de manera más 
                        segura.
                        </p>
                        <p className="text-start">
                        Alice procede a realizar un depósito en Criptomonedas, puede hacerlo con el token nativo de la BSC, Binance Coin (BNB) o con Tokens BEP-20, 
                        Alice debe pegar la dirección de Billetera de Bob, elegir la moneda a depositar e introducir el monto a enviar, una vez la transacción
                        haya sido confirmada por la Blockchain, el depósito habrá sido puesto en garantía de manera exitosa, esto quiere decir que los fondos
                        depositados por Alice están bloqueados dentro del contrato, ni Alice, ni Bob pueden obtener acceso a esos fondos, a menos de que Alice libere
                        los fondos a Bob, por otro lado, Bob puede reembolsar los fondos a Alice, ambas partes pueden abrir una disputa, entonces, el jurado podrá 
                        intervenir, liberando los fondos a Bob o reembolsar los fondos a Alice. 
                        </p>
                        <p className="text-start">
                        Una vez Alice haya realizado el depósito, Bob debe asegurarse de que eso sea cierto, Bob conectado a su billetera debe echar un 
                        vistazo en el historial de transacciones recibidas y asegurarse de que el Id de la transacción, el monto, la dirección de la Billetera de
                        Alice  y sus datos de contacto coincidan con la transacción de Alice, ambas partes deben mantener un canal de comunicación abierto durante la 
                        transacción. Cuando Bob haya confirmado la validez de la transacción debe proceder a enviar el producto o servicio (acordado de manera previa) 
                        a Alice.
                        </p>
                        <p className="text-start">
                        Cuando Alice haya recibido el producto o servicio (acordado de manera previa) por parte de Bob, Alice deberá liberar los fondos a Bob para así 
                        culminar con la transacción de manera exitosa.
                        </p>
                        <p className="text-start">
                          ¿Qué pasaría si Bob nunca envía el producto o servicio?
                        </p>
                        <p className="text-start">
                          Bob puede reembolsar los fondos a Alice de manera inmediata y así finalizar la transacción, sin afectar a ninguna de las partes.
                        </p>
                        <p className="text-start">
                          ¿Qué pasaría si Bob y Alice no llegan a un acuerdo luego de que el depósito haya sido puesto en garantía?
                        </p>
                        <p className="text-start">
                          una de las dos partes puede abrir una disputa, debe completar el formulario proporcionado por el Jurado de Red Cripto Pay, el Jurado de 
                          Red Cripto procederá a comunicarse con ambas partes de la transacción a través de su data de contacto registrada en la Blockchain,
                          de otra forma el Jurado no podrá asegurarse de que se trata de Alice y Bob, puede que Alice suplante la identidad de Bob o viceversa, 
                          es por ello que el Jurado solo se comunicará a través del o los canales de Información registrados en sus respectivas billeteras.
                          El jurado luego de dialogar con ambas partes tomará la decisión final, de reembolsar los fondos a Alice o liberar los fondos a Bob.
                        </p>
                        <h5 className="fw-bold" id="usabilidad">Usabilidad</h5>
                        <p className="text-start">
                        Para utilizar Red Cripto Pay debe conectar su billetera sin custodia (Metamask), para así poder interactuar con los
                        Contratos inteligentes de la plataforma. Si no posee ninguna billetera no podrá utilizar Red Cripto Pay, ya que carece
                        de billetera propia. Una vez haya descargado Metamask, ya sea la extensión de navegador, o la aplicación móvil, debe ingresar
                        a pay.redcripto.com, si lo hace desde el móvil debe utilizar el explorador de metamask; una vez dentro de la página 
                        web, debe darle click a "Conectar Billetera", Se abrirá una ventana de Metamask donde se autoriza a Red Cripto Pay a conectarse
                        con la Red a la Binance Smart Chain y conectar su dirección de billetera con la plataforma para poder escribir transacciones en
                        los contratos de la misma, una vez de conectada su billetera a Red Cripto Pay puede interactuar con la aplicación.
                        </p>
                        <p className="text-start">
                        Con su billetera conectada a la aplicación, puede dirigirse hacia el perfil, para observar sus datos de contacto registrados en la Blockchain
                        con la billetera conectada; si debajo de Datos de Contacto aparece como "No Registrado" debe registrar los medios de contacto de su 
                        preferencia, como número telefónico, correo electrónico, redes sociales, entre otros; puede registrar o actualizar sus datos de contacto en 
                        el perfil, dentro de la sección de Actualizar Datos; recuerde que para registrar sus datos de contacto en la
                        Blockchain, debe tener en cuenta las comisiones de Red de la BSC, ya que para registrar o editar sus datos de contacto debe
                        interactuar con el contrato, escribiendo una transacción.
                        </p>
                        <img src={datoscontacto} width="600" height="600" className="img-fluid d-block m-auto my-4" alt="datos"></img>
                        <p className="text-start">
                        Para abrir un depósito debe dirigirse al apartado del menú "Depositar", una vez este dentro de la sección de Depositar, puede elegir dos
                        opciones, depositar con el token nativo de la BSC Binance Coin (BNB), o depositar con tokens BEP-20. Si elije depositar con BNB debe pegar
                        la dirección de Billetera de su contraparte (receptor) y escribir el monto exacto a depositar en BNB, si incluye decimales estos deben escribirse 
                        después de un punto; por otro lado, si elije depositar con tokens BEP-20 debe pegar la dirección de su contraparte (receptor), elegir entre
                        las opciones el token BEP-20 a depositar y el monto exacto a enviar en el token seleccionado, si incluye decimales de igual forma deben 
                        escribirse después de un punto; una vez hay llenado todos los campos de manera correcta, debe dar click a Depositar; debe tener en cuenta
                        las comisiones de Red de la BSC para realizar la transacción siempre pagadas en BNB. Cuando de click en Depositar, se abrirá una ventana de 
                        Metamask para confirmar la transacción, si deposita con BNB solo bastará confirmar una transacción, en caso de que haya seleccionado un token
                        debe confirmar dos transacciones, una para dar permiso a Red Cripto Pay de gastar su token y otra para aprobar la transacción, al confirmar la 
                        primera transacción, inmediatamente Metamask le mostrará la segunda transacción por confirmar.
                        </p>
                        <img src={depositar} width="600" height="600" className="img-fluid d-block m-auto my-4" alt="depositar"></img>
                        <p className="text-start">
                        Cuando haya sido aprobada la transacción de Depósito por la Blockchain, puede dirigirse hacia el apartado del menú "Historial", dentro del
                        historial podrá ver dos opciones BNB y Tokens BEP-20, y dentro de cada una de ellas podrá ver dos opciones más, enviadas y recibidas, de esta 
                        forma podrá ver las transacciones enviadas o recibidas con BNB y Tokens; de manera previa puede visualizar el Id de la transacción el monto,
                        la moneda y la dirección de billetera del receptor en caso de que este dentro de las transacciones enviadas o del emisor en caso de que este 
                        dentro de las transacciones recibidas.
                        Si da click en la transacción podrá observar los detalles de la misma, nuevamente el Id de la transacción, la dirección de Billetera del emisor
                        y receptor, el monto total de la transacción, el valor de la transacción (monto total menos la comisión de depósito), BNB o token BEP-20,
                        datos de contacto de la contraparte, Estado de la transacción, donde se muestra si el depósito está resguardado en el contrato, si fue liberado,
                        si fue reembolsado, o si hay una disputa en marcha. Por último, se muestran
                        tres botones: "Liberar fondos", en caso de ser emisor; "Reembolsar", en caso de ser receptor; "Abrir 
                        Disputa"; y el botón "Jurado" para enviar el formulario y comunicarse con Soporte técnico en caso de algún problema con la contraparte durante
                        la transacción.
                        </p>
                        <img src={historial} width="600" height="600" className="img-fluid d-block m-auto my-4" alt="historial"></img>
                        <img src={historial1} width="600" height="600" className="img-fluid d-block m-auto my-4" alt="historial1"></img>
                        <h5 className="fw-bold" id="comisiones">Comisiones</h5>
                        <p className="text-start">
                        Red Cripto Pay aplica comisiones por cada depósito que se realice dentro de la plataforma, las comisiones son fijas
                        y no pueden ser modificadas debido a que están adheridas en los contratos inteligentes de forma tal que no puedan ser modificadas,
                        se entiende que mientras Red Cripto Pay funcione con los actuales contratos inteligentes la comisión de depósito seguirá siendo
                        la misma. Las Comisiones de depósito internas funcionan de la siguiente manera: 3% del total del monto depositado, de los cuales
                        2% se enviarán a la dirección del dueño del contrato (owner) y 1% se enviará a la dirección del Jurado del contrato (judge); el 
                        "owner" y el "judge" siempre recibirán su comisión luego de que la transacción haya finalizado, es decir, cuando los fondos hayan
                        sido liberados al receptor, o reembolsados al Emisor, esto quiere decir que mientras los fondos estén resguardados dentro del contrato
                        ninguna entidad podrá recibir su respectiva comisión. El 
                        depósito en caso de ser reembolsado al Emisor se le descontará el 3% del monto total depositado; si el depósito es liberado al Receptor,
                        este recibirá el 97% del monto total depositado por el Emisor. ej.: Alice deposita 100 USDT dentro del contrato, luego Bob y Alice nunca
                        llegan a un acuerdo, Bob decide reembolsar el depósito a Alice, Alice recibe 97 USDT de vuelta ya que se descontó el 3% (3 USDT) del
                        monto total; en caso de que Alice y Bob si lleguen a un acuerdo, Alice libera el depósito a Bob, Bob recibe 97 USDT ya que se descontó 
                        el 3% (3 USDT) del monto total.               
                        </p>
                        <h5 className="fw-bold" id="metamask-web3">Metamask y web3.js</h5>          
                        <p className="text-start fw-bold">
                        ¿Por qué Metamask?
                        </p>
                        <p className="text-start">
                        MetaMask es la herramienta pionera que permite las interacciones y la experiencia del usuario en Web3. Actualmente está disponible como 
                        extensión del navegador y como aplicación móvil en dispositivos Android y iOS. MetaMask se creó para satisfacer las necesidades de sitios 
                        web seguros y utilizables basados en Ethereum. En particular, se encarga de la gestión de cuentas y de la conexión del usuario 
                        a la cadena Blockchain. MetaMask permite a los usuarios administrar cuentas y sus claves de varias maneras, incluidas billeteras de hardware, 
                        mientras las aísla del contexto del sitio. Esta es una gran mejora de seguridad con respecto al almacenamiento de claves de usuario en un único
                        servidor central, o incluso en un almacenamiento local, lo que puede permitir robos masivos de cuentas. Esta característica de seguridad también
                        viene con la conveniencia del desarrollador: para los desarrolladores, simplemente interactúa con la API de ethereum disponible globalmente
                        que identifica a los usuarios de navegadores compatibles con web3 (como los usuarios de MetaMask), y cada vez que solicita una firma
                        de transacción (como eth_sendTransaction, eth_signTypedData u otros), MetaMask le indicará al usuario de la manera más comprensible posible. 
                        Esto mantiene a los usuarios informados y deja a los atacantes solo la opción de intentar phishing a usuarios individuales, en lugar 
                        de realizar hackeos masivos (aunque los hackeos de DNS todavía se pueden usar para phishing en masa).
                        MetaMask viene precargado con conexiones rápidas a la Blockchain de Ethereum y varias redes de prueba a través de Infura.
                        Esto permite conectar una Dapp y sus usuarios a la Blockchain sin sincronizar un nodo completo, al tiempo que brinda la opción de actualizar 
                        su seguridad y usar el proveedor de blockchain de su elección.
                        Actualmente, MetaMask es compatible con cualquier Blockchain que exponga una API JSON RPC compatible con 
                        Ethereum, incluidas las Blockchains privadas y personalizadas. Metamask brinda herramientas sencillas, seguras y completas a desarrolladores 
                        Blockchain basados en Ethereum, es por ello que Red Cripto Pay decidió utilizar Metamask para conectar a los usuarios con la Aplicación, en
                        todas las fases de prueba de Red Cripto Pay se utilizó Metamask como billetera, se recomienda a los usuarios utilizar 
                        Metamask para interactuar con Red Cripto Pay.  
                        <a className="px-1 text-primary text-decoration-none" href="https://docs.metamask.io/">Para más información acerca de Metamask.</a>
                        </p>
                        <p className="text-start fw-bold">
                        web3.js
                        </p>
                        <p className="text-start">
                        Para conectar la interfaz de usuario (UI) con la Blockchain y por consiguiente con los contratos inteligentes, se utilizó web3.js,  
                        la cual, es una colección de bibliotecas de JavaScript, que permiten interactuar con un nodo de Ethereum local o remoto mediante HTTP, 
                        IPC o WebSocket. Con web3.js puedes desarrollar aplicaciones (frontend) que interactúan con la Blockchain de Ethereum (o cualquier Blockchain 
                        que exponga una API JSON RPC compatible con Ethereum como la Binance Smart Chain), leer y escribir 
                        datos de contratos inteligentes, o crear contratos inteligentes. web3.js se conecta con Blockchains compatibles con Ethereum  mediante JSON RPC 
                        (llamada a procedimiento remoto). Esta tecnología permite utilizar web3.js para hacer peticiones a un nodo de Ethereum individual.
                        Este nodo, una máquina virtual de Ethereum (EVM) pertenece a la red de Ethereum.
                        <a className="px-1 text-primary text-decoration-none" href="https://web3js.readthedocs.io/en/v1.5.2/">Para más información acerca de web3.js.</a>
                        </p>
                        <img src={web3jsimage} width="600" height="600" className="img-fluid d-block m-auto my-4" alt="web3"></img>
                        <h5 className="fw-bold" id="contratos">Contratos Inteligentes</h5>
                        <p className="text-start">
                        Red Cripto Pay desarrolló cuatro contratos inteligentes desplegados en la Binance Smart Chain. Se utilizó Solidity como lenguaje de programación,
                        y se copiaron varias librerías de OpenZeppelin para hacer más seguro el código.
                        </p>
                        <p className="text-start">
                        <a className="px-1 text-primary text-decoration-none" href="#">redcriptopaycontactINFO.sol</a> Donde el usuario puede registrar su información de
                        contacto, teniendo en cuenta que puede registrar cualquier carácter que desee, cualquier información de contacto que registre se podrá encontrar
                        de manera pública en la Blockchain, depende del usuario que tipo de información registrar. Este contrato funciona principalmente a 
                        través de una variable 
                        <span className="text-muted"> mapping (address => string) usercontactinfo; </span> la cual asigna a cada
                        dirección de billetera la información que registre de manera única a través de la función <span className="text-muted">
                        function Setusercontactinfo (string memory info) external</span>. Puede obtener la información de contacto de la dirección, a través de una función de
                        lectura <span className="text-muted">function getusercontactinfo (address user) external view returns (string memory)</span>.
                        </p>
                        <p className="text-start">
                        <a className="px-1 text-primary text-decoration-none" href="#">Ownable.sol</a> Es una copia modificada de 
                        OpenZeppelin donde la dirección que despliega el contrato se le asigna el rol de "owner", este rol puede ser transferido a otra dirección de
                        billetera sólo por el antiguo "owner" a través de <span className="text-muted">function transferOwnership(address newOwner) public virtual
                        onlyOwner</span>. A diferencia de la librería de OpenZeppelin, en este caso la función renounceOwnership fue eliminada, ya que la función de
                          "owner" es de suma importancia en los contratos descritos a continuación redcriptopayTOKENS.sol y redcriptopayBNB.sol .
                        </p>
                        <p className="text-start">
                        <a className="px-1 text-primary text-decoration-none" href="#">redcriptopayBNB.sol</a> Es el contrato encargado de registrar depósitos de BNB
                        dentro de la Dapp, este es un contrato del tipo Escrow, donde el emisor deposita BNB dentro del contrato, luego el emisor de manera externa 
                        obtiene
                        lo estipulado por el receptor, y para finalizar la transacción el emisor debe liberar los BNB del contrato al receptor. 
                        Si existiese algún problema con la transacción de manera
                        externa, Emisor y Receptor no lleguen a un acuerdo, estos pueden abrir una disputa y entrará en acción el Jurado para resolver la Disputa. 
                        redcriptopayBNB.sol utiliza Ownable.sol para declarar la función <span className="text-muted">function setJudge(address _judge) external 
                        onlyOwner</span> de esta manera solo el "owner" del contrato puede asignar la variable "judge", el encargado de resolver las disputas de 
                        las transacciones del contrato.
                        </p>
                        <p className="text-start">
                        Para
                        la creación del Depósito se utiliza la función <span className="text-muted">function createDeposit(address _receiver) payable external 
                        onlyEOA</span> donde el emisor copia la dirección del receptor, y escribe el monto exacto a enviar en BNB; con la función createDeposit se
                        establece la comisión del "owner" y "judge", además se registra el depósito como transacción y se le asigna un Id a través de un Array 
                        <span className="text-muted"> Transaction[] public TransactionLedger;</span> Transaction es un struct compuesto por las variables
                        address sender, address receiver, uint amount, uint judgeFee, uint ownerFee, uint value (monto total menos ownerFee y judgeFee)
                        y TransactionStatus status, esta última es un enum 
                        compuesto por los diferentes estados de una transacción <span className="text-muted">FundsReceived, FundsReleased, Refunded, 
                        AwaitingResolution</span>, en el caso de createDeposit se actualizará el estado de la transaccióna a "FundsReceived"; por último en
                        la función createDeposit se declara
                        el evento <span className="text-muted">DepositCreation(msg.sender, _receiver, id, msg.value, value);</span> el cual dentro de la UI a través
                        de web3.js sirve para obtener los depósitos donde estén involucrados el emisor o receptor. 
                        </p>
                        <p className="text-start">
                        Este escrow de BNB tiene tres funciones de
                        escritura más: liberar los fondos, reembolsar los fondos y abrir una disputa.  La función de liberar los fondos
                        <span className="text-muted"> function releaseFunds(uint id) external nonReentrant onlyEOA</span> tiene  como objetivo desbloquear los fondos
                        en BNB de una transacción en específico dentro del contrato y enviarlos a la dirección de billetera del receptor de la transacción, 
                        tomando en cuenta que se resta del monto total la comisión del "judge" y "owner, quedando así el valor neto de la transacción 
                        <span className="text-muted"> t.value</span>. Esta
                        función solo puede ser llamada por el "judge" o el emisor de la transacción, además la transacción debe poseer el estado de "FundsReceived"
                        o "AwaitingResolution", 
                        de lo contrario fallará el intento de liberar los fondos; de igual forma al llamar esta función se enviará la comisión en BNB al "judge" y 
                        "owner" del contrato; y por último se actualizará el estado de la transacción a "FundsReleased" y se emitirá el evento 
                        <span className="text-muted"> DepositCompleted(t.Sender, t.Receiver, id, t.value, t.status)</span>.
                        </p>
                        <p className="text-start">
                         La función de reembolsar los fondos
                        <span className="text-muted"> function refundSender(uint id) external nonReentrant onlyEOA</span> tiene como objetivo desbloquear los fondos
                        en BNB de una transacción en específico dentro del contrato y enviarlos de vuelta a la dirección de billetera del emisor de la transacción,
                        tomando en cuenta que se resta del monto total la comisión del "judge" y "owner, quedando así el valor neto de la transacción
                        <span className="text-muted"> t.value</span>. Esta
                        función solo puede ser llamada por el "judge" o el receptor de la transacción, además la transacción debe poseer el estado de "FundsReceived"
                        o "AwaitingResolution", 
                        de lo contrario fallará el intento de reembolsar los fondos; de igual forma al llamar esta función se enviará la comisión en BNB al "judge" y 
                        "owner" del contrato; y por último se actualizará el estado de la transacción a "Refunded" y se emitirá el evento 
                        <span className="text-muted"> DepositCompleted(t.Sender, t.Receiver, id, t.value, t.status)</span>.
                        </p>
                        <p className="text-start">
                         La última función de escritura dentro de este
                        contrato es la de abrir una disputa <span className="text-muted">function raiseDispute(uint id) external onlyEOA</span>, la cual permite
                        al emisor o receptor presentar su disconformidad o inconveniente con su contraparte a través de la Blockchain, esta es la única manera de que
                        Red Cripto Pay se asegure de que una de las partes presenta algún problema externo con la transacción; la función de abrir una disputa solo 
                        puede ser llamada una vez por cada transacción, ya sea por el emisor o receptor, además la transacción debe poseer el estado de "FundsReceived",
                        de lo contrario fallará el intento de abrir una disputa; por último dentro la función raiseDispute se actualizará el estado de la transacción a
                        "AwaitingResolution" y se emitirá el evento <span className="text-muted"> Dispute(t.Sender, t.Receiver, id, t.value)</span>.
                        </p>
                        <p className="text-start">
                        <a className="px-1 text-primary text-decoration-none" href="#">redcriptopayTOKENS.sol</a> Es el contrato encargado de registrar depósitos de 
                        Tokens BEP-20 dentro de la Dapp, este es un contrato del tipo Escrow, donde el emisor deposita un token dentro del contrato, 
                        luego el emisor de manera externa obtiene lo estipulado por el receptor, y para finalizar la transacción el emisor debe liberar los 
                        Tokens del contrato al receptor. 
                        Si existiese algún problema con la transacción de manera externa, Emisor y Receptor no lleguen a un acuerdo, estos pueden abrir una disputa 
                        y entrará en acción el Jurado para resolver la Disputa. redcriptopayTOKENS.sol utiliza Ownable.sol para declarar la función
                        <span className="text-muted"> function setJudge(address _judge) external onlyOwner</span> de esta manera solo el "owner" del contrato puede 
                        asignar la variable "judge", el encargado de resolver las disputas de las transacciones del contrato; también las funciones 
                        <span className="text-muted"> function addToken(IERC20 tokencontractaddress) external onlyOwner onlyEOA</span> y 
                        <span className="text-muted"> function removeToken(uint tokenindex) external onlyOwner onlyEOA</span> explicadas más adelante solo pueden
                        ser llamadas por el "owner".
                        </p>
                        <p className="text-start">
                        A diferencia de redcriptopayBNB.sol donde se deposita y envía el token nativo BNB, este contrato está diseñado para depositar y 
                        enviar Tokens BEP-20, para ello se utilizó la librería de OpenZeppelin IER20, se modificaron y agregaron algunas funciones con respecto al
                        contrato Escrow de BNB. "createDeposit" en este contrato no es una función "payable", eso quiere decir que no se puede utilizar esta función
                        para depositar el token nativo, en cambio se utiliza para depositar tokens BEP-20 con una función de IERC20 llamada <span className="text-muted">
                        transferFrom</span> dentro de "createDeposit", con esta función se pueden enviar tokens a través de un contrato, en este caso la dirección 
                        receptora es el contrato mismo; cabe destacar que el contrato del token en si, 
                        debe otorgar permiso a la dirección de billetera que quiera realizar la función "TransferFrom" en este 
                        particular la dirección de redcriptopayTOKENS.sol, llamando a la función <span className="text-muted">function 
                        approve(address spender, uint256 amount) external returns (bool)</span> con un monto igual o mayor al que se va a transferir 
                        y claro está antes de llamar a la función "transferFrom", de lo contrario el llamado a esta función generará un error 
                        "ERC20: transfer amount exceeds allowance".
                        </p>
                        <p className="text-start">
                        Es importante aclarar que ERC20 tokens y BEP-20 tokens tienen un código indistinguible entre sí, la diferencia radica a la hora de desplegar estos
                        contratos en la Blockchain, los ERC20 tokens son los llamados tokens de la Red Ethereum, mientras que los BEP-20 tokens son de la BSC, de hecho,
                        estos últimos nacieron o son copiados de los ERC20 tokens por lo tanto siguen el mismo protocolo.
                        Algo que no es un secreto es que cualquier persona puede crear un BEP-20 token, actualmente existen cientos de tokens Scam, que realmente no
                        poseen valor alguno, simplemente son copias de otros tokens con gran capitalización de mercado que buscan confundir a nuevos inversores, haciendo
                        creer que son los tokens originales por así decirlo, otros tokens se valen de la especulación y solo los primeros inversionistas sacan provecho, 
                        mientras que los rezagados pierden grandes cantidades de dinero cuando el token se desploma, para evitar este problema se decidió implementar 
                        un Array <span className="text-muted">IERC20[] public Tokens </span>
                        para agregar únicamente tokens BEP-20 verificados por la comunidad Cripto a nivel mundial, y así solo se permite crear depósitos con los tokens
                        de dicho Array, estos solo pueden ser agregador por el "owner" 
                        a través de la función <span className="text-muted">function addToken(IERC20 tokencontractaddress) external onlyOwner onlyEOA </span>, 
                        de igual forma estos tokens pueden ser removidos del Array a través de la función <span className="text-muted">
                        function removeToken(uint tokenindex) external onlyOwner onlyEOA</span>, sin embargo el hecho de remover un token del Array no quiere decir que
                        se elimine de una transacción ya hecha, y se pierda consigo la información del token, esto traería grave consecuencias para los usuarios que
                        tengan
                        depósitos congelados dentro del contrato, para no perjudicar a ningún usuario o token previamente añadido al Array y luego removido, al momento
                        de crear un depósito, la dirección del token seleccionado se guardará dentro de la transacción, y en este caso nada tiene que ver el Array 
                        "Tokens", este Array solo está hecho para delimitar los tokens a la hora de crear un depósito, pero no así para liberar los fondos o reembolsarlos,
                        en este caso se apunta a la dirección del token guardada en la transacción. Puede verificar las direcciones de los tokens guardadas en el Array
                        a través de la función de lectura del Array "Tokens", para saber la cantidad de tokens que conforman el Array puede llamar a la función de lectura
                        <span className="text-muted"> function getTokensLength() external view returns (uint)</span>.
                        </p>
                        <p className="text-start">
                        Para la creación del Depósito se utiliza la función <span className="text-muted">function createDeposit(address _receiver, uint tokenindex,
                        uint _amount) external onlyEOA</span> donde el emisor copia la dirección del receptor, selecciona el token del Array Tokens y escribe 
                        el monto exacto a enviar en el token seleccionado; con la función createDeposit se
                        establece la comisión del "owner" y "judge", además se registra el depósito como transacción y se le asigna un Id a través de un Array 
                        <span className="text-muted"> Transaction[] public TransactionLedger;</span> Transaction es un struct compuesto por las variables
                        address sender, address receiver, IERC20 token, uint amount, uint judgeFee, uint ownerFee, uint value (monto total menos ownerFee y judgeFee)
                        y TransactionStatus status, esta última es un enum 
                        compuesto por los diferentes estados de una transacción <span className="text-muted">FundsReceived, FundsReleased, Refunded, 
                        AwaitingResolution</span>, en el caso de createDeposit se actualizará el estado de la transaccióna a "FundsReceived"; por último en la 
                        función createDeposit se declara
                        el evento <span className="text-muted">DepositCreation(msg.sender, _receiver, id, Tokens[tokenindex], msg.value, value); </span> 
                        el cual dentro de la UI a través de web3.js sirve para obtener los depósitos donde estén involucrados el emisor o receptor. 
                        </p>
                        <p className="text-start">
                        Este escrow de Tokens BEP-20 tiene tres funciones de
                        escritura más: liberar los fondos, reembolar los fondos y abrir una disputa.  La función de liberar los fondos
                        <span className="text-muted"> function releaseFunds(uint id) external nonReentrant onlyEOA</span> tiene como objetivo desbloquear los fondos
                        en tokens de una transacción en específico dentro del contrato y enviarlos a la dirección de billetera del receptor de la transacción, 
                        tomando en cuenta que se resta del monto total la comisión del "judge" y "owner, quedando así el valor neto de la transacción 
                        <span className="text-muted"> t.value</span>. Esta
                        función solo puede ser llamada por el "judge" o el emisor de la transacción, además la transacción debe poseer el estado de "FundsReceived"
                        o "AwaitingResolution", 
                        de lo contrario fallará el intento de liberar los fondos; de igual forma al llamar esta función se enviará la comisión en tokens al "judge" y 
                        "owner" del contrato; y por último se actualizará el estado de la transacción a "FundsReleased" y se emitirá el evento 
                        <span className="text-muted"> DepositCompleted(t.Sender, t.Receiver, id, t.token, t.value, t.status)</span>.
                        </p>
                        <p className="text-start">
                         La función de reembolsar los fondos
                        <span className="text-muted"> function refundSender(uint id) external nonReentrant onlyEOA</span> tiene como objetivo desbloquear los fondos
                        en tokens de una transacción en específico dentro del contrato y enviarlos de vuelta a la dirección de billetera del emisor de la transacción,
                        tomando en cuenta que se resta del monto total la comisión del "judge" y "owner, quedando así el valor neto de la transacción
                        <span className="text-muted"> t.value</span>. Esta
                        función solo puede ser llamada por el "judge" o el receptor de la transacción, además la transacción debe poseer el estado de "FundsReceived"
                        o "AwaitingResolution", 
                        de lo contrario fallará el intento de reembolar los fondos; de igual forma al llamar esta función se enviará la comisión en tokens al "judge" y 
                        "owner" del contrato; y por último se actualizará el estado de la transacción a "Refunded" y se emitirá el evento 
                        <span className="text-muted"> DepositCompleted(t.Sender, t.Receiver, id, t.token, t.value, t.status)</span>.
                        </p>
                        <p className="text-start">
                         La última función de escritura dentro de este
                        contrato es la de abrir una disputa <span className="text-muted">function raiseDispute(uint id) external onlyEOA</span>, la cual permite
                        al emisor o receptor presentar su disconformidad o inconveniente con su contraparte a través de la Blockchain, esta es la única manera de que
                        Red Cripto Pay se asegure de que una de las partes presenta algún problema externo con la transacción; la función de abrir una disputa solo 
                        puede ser llamada una vez por cada transacción, ya sea por el emisor o receptor, además la transacción debe poseer el estado de "FundsReceived",
                        de lo contrario fallará el intento de abrir una disputa; por último dentro la función raiseDispute se actualizará el estado de la transacción a
                        "AwaitingResolution" y se emitirá el evento <span className="text-muted"> Dispute(t.Sender, t.Receiver, id, t.token, t.value)</span>.
                        </p>
                        <p className="text-start fw-bold">Testing</p>
                        <p className="text-start"> 
                        Para testear los contratos inteligentes se utilizó Truffle y otras dependencias del mismo como Mocha testing framework, truffle assertions,
                        y otras herramientas como eth gas reporter. 

                        Antes de desplegar los contratos inteligentes en BSC Mainnet, se desplegaron en la red de pruebas Ropsten, puede probar la interfaz de 
                        usuario y los contratos a 
                        través de <a className="px-1 text-primary text-decoration-none" href="https://testnet.redcripto.com">Testnet Red Cripto Pay</a>cuyos
                        contratos están verificados en EtherScan (Ropsten).
                        </p>
                        <h5 className="fw-bold" id="futuro">Futuro Desarrollo</h5>
                        <p className="text-start">
                        Red Cripto espera ser más descentralizado, redcripto.com es un marketplace de Comercios, Servicios y Productos 
                        que aceptan Criptomonedas como método de pago
                        cuya base de datos está alojada en un servidor centralizado 
                        como cualquier otra página web de la Web 2.0, el objetivo es que en el futuro con la 
                        masificación y estandarización de la web 3.0 Red Cripto sea actualizado a la web 3.0,
                        o en su defecto desarrollar una versión web3 paralela de Red Cripto web2 a través de distintos protocolos como IPFS y
                        Blockchains de por medio. Con respecto a Red Cripto Pay, a pesar de que esté anclada a la Blockchain, aún queda un tramo largo por recorrer
                        en cuanto a la descentralización total. La idea es crear un token propio de la Dapp con un sistema de gobernanza donde los usuarios sean 
                        recompensados por utilizar el token dentro de Red Cripto Pay, por ser dueños de un porcentaje de tokens, teniendo la capacidad de votar
                        con respecto a todos los posibles cambios relacionados con Red Cripto Pay, implementar un sistema de jurado descentralizado
                         y otros posibles beneficios que involucren a toda la comunidad de Red Cripto Pay, formando así un verdadero ecosistema descentralizado
                         y autosustentable
                        dentro de la Dapp; para implementar nuevos cambios en la plataforma deben ser desplegados nuevos contratos, creando así la versión 2.0
                        de Red Cripto Pay, aclarando que la versión 1.0 (actual) seguiría funcionando para no perjudicar a ningún usuario.
                        </p>
                        <h5 className="fw-bold" id="terminos-y-condiciones">Descargo de responsabilidad y Riesgos</h5>
                        <p className="text-start fw-bold">Descargo de Responsabilidad</p>
                        <p className="text-start">
                        Lea detenidamente la totalidad de esta sección de “descargo de responsabilidad". Nada dentro de Red Cripto Pay constituye asesoría legal, 
                        financiera, comercial o fiscal y usted debe consultar a su propio profesional legal, financiero, fiscal u otro asesor(es) antes de involucrarse
                        en cualquier actividad en relación con Red Cripto Pay. Red Cripto Pay o cualquiera de los miembros del equipo del proyecto será responsable
                        por cualquier tipo de daño o pérdida directa o indirecta que usted puede sufrir en relación con el acceso a este Whitepaper, o cualquier 
                        otro sitio web o material publicado por Red Cripto Pay. El Whitepaper y el sitio web están destinados únicamente a fines informativos y
                        de servicio de contacto entre pares del tipo P2P sin involucrar a Red Cripto Pay y no constituyen un prospecto, un documento de oferta,
                        una oferta de valores, una solicitud de inversión o cualquier oferta para vender cualquier producto, artículo o activo (ya sea digitales
                        o de otro tipo). La información contenida en este documento puede no ser exhaustiva y no implica ningún elemento de una relación 
                        contractual. No hay seguridad en cuanto a la exactitud o integridad de dicha información y no se proporciona ni pretende proporcionar 
                        ninguna representación, garantía o compromiso en cuanto a la exactitud o integridad de dicha información donde el Whitepaper o el 
                        sitio web incluye información que ha sido obtenida de fuentes de terceros, Red Cripto Pay no ha verificado de forma independiente 
                        la exactitud o integridad de dicha información. Además, usted reconoce que las circunstancias pueden cambiar y que el Whitepaper o 
                        el sitio web pueden quedar obsoletos como resultado; y tampoco Red Cripto Pay tiene la obligación de actualizar o corregir este documento 
                        en conexión con el mismo.
                        </p>
                        <p className="text-start fw-bold">Riegos</p>
                        <p className="text-start">
                        Si decide interactuar con los contratos inteligentes de Red Cripto Pay o participar en Red Cripto Pay, usted expresamente reconoce, 
                        acepta y asume los siguientes riesgos:
                        </p>
                        <p className="text-start">
                        Regulaciones Inciertas y Acciones de Cumplimiento: La regulación de Red Cripto Pay y el resto de las aplicaciones descentralizadas 
                        es poco claro o está sin resolver en muchas jurisdicciones. La regulación de los activos digitales se ha convertido en un objetivo 
                        principal de la regulación en todos los países principales en el mundo. Es imposible predecir cómo, cuándo o si las agencias de 
                        regulación pueden aplicar regulaciones existentes o crear nuevas regulaciones con respecto a dicha tecnología y sus aplicaciones, 
                        incluida Red Cripto Pay. Las acciones regulatorias podrían afectar negativamente a Red Cripto Pay de varias maneras. Red Cripto Pay 
                        puede cesar sus operaciones en una jurisdicción en caso de que las acciones regulatorias, o los cambios a la ley o regulación, hagan 
                        ilegal operar en dicha jurisdicción, o comercialmente indeseable para obtener la(s) aprobación(es) reglamentaria(s) necesaria(s) para 
                        operar en tal jurisdicción.  
                        </p>
                        <p className="text-start">
                        Divulgación inadecuada de información: a la fecha del presente, Red Cripto Pay aún está en desarrollo y sus conceptos de diseño, 
                        consenso, mecanismos, algoritmos, códigos y otros detalles técnicos y los parámetros pueden ser constante y frecuentemente actualizados 
                        y cambiados. Aunque este documento técnico contiene la información más actualizada relacionada con Red Cripto Pay, no está absolutamente 
                        completa y aún puede ser ajustada y actualizada por el equipo de Red Cripto Pay de vez en cuando. Red Cripto Pay no tiene la capacidad ni 
                        la obligación de mantener a los usuarios de la plataforma informados de cada detalle (incluido el progreso del desarrollo y las expectativas 
                        e hitos) con respecto al proyecto para desarrollar Red Cripto Pay, por lo tanto, la divulgación de información de forma ineficiente es 
                        inevitable.
                        </p>
                        <p className="text-start">
                        Falta de desarrollo: existe el riesgo de que el desarrollo de Red Cripto Pay no se ejecutara ni implementara según lo planeado, por una 
                        variedad de motivos, incluido, entre otros, el caso de una disminución de los precios de cualquier activo digital, imprevistos técnicos, 
                        dificultades y escasez de fondos de desarrollo para las actividades.
                        </p>
                        <p className="text-start">
                        Debilidades de seguridad: Hackers u otros grupos maliciosos u otras organizaciones pueden intentar interferir con Red Cripto Pay y todo 
                        su ecosistema en una amplia variedad de formas, incluidos, entre otros, ataques de malware, ataques de denegación de servicio, ataques 
                        basados en consenso, ataques Sybil, suplantación de identidad, obtención de los fondos dentro de los contratos inteligentes por 
                        debilidades en el código Además, existe el riesgo de que un tercero o un miembro de Red Cripto Pay, puede introducir de manera 
                        intencional o no intencional debilidades en el núcleo y/o infraestructura de Red Cripto Pay, lo que podría afectar negativamente 
                        a la plataforma. Además, el futuro de las innovaciones en criptografía y seguridad son altamente impredecibles y los avances en 
                        criptografía, o los avances técnicos (incluso sin limitación del desarrollo de la computación cuántica), podría presentar riesgos 
                        desconocidos para Red Cripto Pay al renderizar de manera ineficaz el mecanismo de consenso criptográfico que sustenta el protocolo 
                        de la Blockchain.
                        </p>
                        <p className="text-start">
                        Otros riesgos: Además de los riesgos potenciales mencionados anteriormente, estos no son exhaustivos y existen otros riesgos 
                        (como se establece más particularmente en los Términos de servicio) asociados con su participación en Red Cripto Pay. Debe comprender 
                        de forma general cómo funciona Red Cripto Pay, leer el Whitepaper y los términos de servicio antes de interactuar con sus contratos 
                        inteligentes. Para mayor información:
                        <Link className="px-1 text-primary text-decoration-none" to="/terminos">Términos de servicio y Políticas de Privacidad</Link>  
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