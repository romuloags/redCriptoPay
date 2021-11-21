import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const tokensTransactions =[
    { address: "0xBcf453f861D6ca17DAF9D7f81B5B95D91FCEBABd", 
    tag: "USDT", label: <div><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</span>},
    { address: "0x55bDFb5d5942D4BF4f04469A6788633068Ee8FC3", 
    tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</span> },
    { address: "0xce350DB112F346F1F8f557C1aD24828bD9E35cA3",
     tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</span> },
    { address: "0x6b5e6DF50761e8a19C618D3768d2c594f050aeCf", 
    tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</div>,
    labelSingle:<span> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</span> },
    { address: "0x2EcEE73aa6f8ea3eb1e51815a1acEc319Fd4a674", 
    tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</span> }
    ];

    export default tokensTransactions;