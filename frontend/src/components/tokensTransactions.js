import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const tokensTransactions =[
    { address: "0x55d398326f99059ff775485246999027b3197955", 
    tag: "USDT", label: <div><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</span>},
    { address: "0xe9e7cea3dedca5984780bafc599bd69add087d56", 
    tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</span> },
    { address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
     tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</span> },
    { address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", 
    tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</div>,
    labelSingle:<span> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</span> },
    { address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 
    tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</span> }
    ];

    export default tokensTransactions;