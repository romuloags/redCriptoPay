import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

        const tokensArray =[
        { id: 0, address: "0xBcf453f861D6ca17DAF9D7f81B5B95D91FCEBABd", 
        tag: "USDT", label: <div> <img className="me-2 mb-1" src={usdticon} 
        width="20" height="20" alt="usdticon"/>USDT<span className="text-dark"> Tether</span></div>},
        { id: 1, address: "0x55bDFb5d5942D4BF4f04469A6788633068Ee8FC3", 
        tag: 'BUSD', label: <div> <img className="me-2 mb-1" src={busdicon} 
        width="20" height="20" alt="busdicon"/>BUSD<span className="text-dark"> Binance USD</span></div> },
        { id: 2, address: "0xce350DB112F346F1F8f557C1aD24828bD9E35cA3",
         tag: 'USDC', label: <div> <img className="me-2 mb-1" src={usdcicon} 
        width="20" height="20" alt="usdcicon"/>USDC<span className="text-dark"> USD Coin</span></div> },
        { id: 3, address: "0x6b5e6DF50761e8a19C618D3768d2c594f050aeCf", 
        tag: 'BTCB', label:<div> <img className="me-2 mb-1" src={btcbicon} 
        width="20" height="20" alt="btcbicon"/>BTCB<span className="text-dark"> Bitcoin BEP2</span></div> },
        { id: 4, address: "0x2EcEE73aa6f8ea3eb1e51815a1acEc319Fd4a674", 
        tag: 'ETH', label: <div> <img className="me-2 mb-1" src={ethicon} 
        width="20" height="20" alt="usdticon"/>ETH<span className="text-dark"> Ethereum Token</span></div>}
        ];
        

        /*Check all the token's address in bscscan, following links:
        */

 
export default tokensArray;