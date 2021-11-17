import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const tokensTransactions =[
    { address: "0xf0ee773Cd7B2e29547702Af7fB39DDe82174cBc3", 
    tag: "USDT", label: <div><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</span>},
    { address: "0x9315B6Df9B6639f71d73319a74bD162E79eB6d2E", 
    tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</span> },
    { address: "0x461F0107F79D201774823E406E7e2101C4ACAeC5",
     tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</span> },
    { address: "0xdCADc0Ba1a767D7259776a1324474Db54aa5dCA3", 
    tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</div>,
    labelSingle:<span> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</span> },
    { address: "0xa1FFa8C0fA8451088af6E0eDd458de4Ee4f7557c", 
    tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</span> }
    ];

    export default tokensTransactions;