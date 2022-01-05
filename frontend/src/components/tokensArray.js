import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

        const tokensArray =[
        { id: 0, address: "0x0A7907e2e29374d98de8861e06ae74ECf7453Aed", 
        tag: "USDT", label: <div> <img className="me-2 mb-1" src={usdticon} 
        width="20" height="20" alt="usdticon"/>USDT<span className="text-dark"> Tether</span></div>},
        { id: 1, address: "0x26811EdBf3C708dDAB9C4B2BFDda5e9647be5e5B", 
        tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
        width="20" height="20" alt="busdicon"/>BUSD<span className="text-dark"> Binance USD</span></div> },
        { id: 2, address: "0x5e5F34c531Ee61e5A06315A663C7323698db80f5",
         tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
        width="20" height="20" alt="usdcicon"/>USDC<span className="text-dark"> USD Coin</span></div> },
        { id: 3, address: "0x60225A4aeC7C1310dC18f9CC02df949782558FA6", 
        tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
        width="20" height="20" alt="btcbicon"/>BTCB<span className="text-dark"> Bitcoin BEP2</span></div> },
        { id: 4, address: "0x93214264d3Da881c6a7036ade63B40585B8e3dAC", 
        tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
        width="20" height="20" alt="usdticon"/>ETH<span className="text-dark"> Ethereum Token</span></div>},
        { id: 5, address: "0x2b4db28Bf7759963e889cfED135f74051fBD1274", 
        tag: 'LEC', label: <div> <img className="me-2 mb-1" src={ethicon} 
        width="20" height="20" alt="usdticon"/>LEC<span className="text-dark"> Lechuga Coin</span></div>}
        ];
        

        /*Check all the token's address in bscscan, following links:
        */

 
export default tokensArray;