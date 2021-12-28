import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const tokensTransactions =[
    { address: "0x0A7907e2e29374d98de8861e06ae74ECf7453Aed", 
    tag: "USDT", label: <div><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</span>},
    { address: "0x26811EdBf3C708dDAB9C4B2BFDda5e9647be5e5B", 
    tag: "BUSD", label: <div><img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</div>,
    labelSingle: <span><img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</span>},
    { address: "0x5e5F34c531Ee61e5A06315A663C7323698db80f5",
     tag: 'USDC', label: <div><img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</span>},
    { address: "0x60225A4aeC7C1310dC18f9CC02df949782558FA6", 
    tag: 'BTCB', label:<div><img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</div>,
    labelSingle:<span><img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</span>},
    { address: "0x93214264d3Da881c6a7036ade63B40585B8e3dAC", 
    tag: 'ETH', label: <div><img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</div>,
    labelSingle: <span><img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</span>}
    ];

    export default tokensTransactions;