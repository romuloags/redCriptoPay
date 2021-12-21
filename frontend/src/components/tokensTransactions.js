import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const tokensTransactions =[
    { address: "0xA9178362c48219dDa5FE0F79DF4d4c62A602260D", 
    tag: "USDT", label: <div><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</div>,
    labelSingle: <span><img className="me-2 mb-1" src={usdticon} 
    width="20" height="20" alt="usdticon"/>USDT</span>},
    { address: "0x3103D92d2888B7Aeee60C59a72e4Ba6A3146C9d0", 
    tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={busdicon} 
    width="20" height="20" alt="busdicon"/>BUSD</span> },
    { address: "0xbFe4f8A71C8C3E1b748D42ACfB2F1140931f50bA",
     tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={usdcicon} 
    width="20" height="20" alt="usdcicon"/>USDC</span> },
    { address: "0x3aFf2aB4cd7cF0f08B54E06D943dcDe8719cfd82", 
    tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</div>,
    labelSingle:<span> <img className="me-2 mb-1" src={btcbicon} 
    width="20" height="20" alt="btcbicon"/>BTCB</span> },
    { address: "0xdFabe06028A1008354ae8Ed8F8E63202A0A11853", 
    tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</div>,
    labelSingle: <span> <img className="me-2 mb-1" src={ethicon} 
    width="20" height="20" alt="usdticon"/>ETH</span> }
    ];

    export default tokensTransactions;