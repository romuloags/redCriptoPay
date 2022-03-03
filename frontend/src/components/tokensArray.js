import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

        const tokensArray =[
        { id: 0, address: "0x55d398326f99059ff775485246999027b3197955", 
        tag: "USDT", label: <div> <img className="me-2 mb-1" src={usdticon} 
        width="20" height="20" alt="usdticon"/>USDT<span className="text-dark"> Tether</span></div>},
        { id: 1, address: "0xe9e7cea3dedca5984780bafc599bd69add087d56", 
        tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
        width="20" height="20" alt="busdicon"/>BUSD<span className="text-dark"> Binance USD</span></div> },
        { id: 2, address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
         tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
        width="20" height="20" alt="usdcicon"/>USDC<span className="text-dark"> USD Coin</span></div> },
        { id: 3, address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", 
        tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
        width="20" height="20" alt="btcbicon"/>BTCB<span className="text-dark"> Bitcoin BEP20</span></div> },
        { id: 4, address: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 
        tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
        width="20" height="20" alt="usdticon"/>ETH<span className="text-dark"> Ethereum Token</span></div>}
        ];
        

        /*Check all the token's address in bscscan, following links:
        */

 
export default tokensArray;