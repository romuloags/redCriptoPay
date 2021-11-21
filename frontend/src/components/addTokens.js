import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const addBusd = async () => {
const tokenAddress = '0x55bDFb5d5942D4BF4f04469A6788633068Ee8FC3';
const tokenSymbol = 'BUSD';
const tokenDecimals = 18;
const tokenImage = busdicon;
  
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });
  
    if (wasAdded) {
      console.log('Thanks for your interest!');
    } else {
      console.log('Your loss!');
    }
  } catch (error) {
    console.log(error);
  }
    }

    const addUsdt = async () => {
        const tokenAddress = '0xBcf453f861D6ca17DAF9D7f81B5B95D91FCEBABd';
        const tokenSymbol = 'USDT';
        const tokenDecimals = 18;
        const tokenImage = usdticon;
          
          try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
              method: 'wallet_watchAsset',
              params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                  address: tokenAddress, // The address that the token is at.
                  symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                  decimals: tokenDecimals, // The number of decimals in the token
                  image: tokenImage, // A string url of the token logo
                },
              },
            });
          
            if (wasAdded) {
              console.log('Thanks for your interest!');
            } else {
              console.log('Your loss!');
            }
          } catch (error) {
            console.log(error);
          }
            }

            const addUsdc = async () => {
                const tokenAddress = '0xce350DB112F346F1F8f557C1aD24828bD9E35cA3';
                const tokenSymbol = 'USDC';
                const tokenDecimals = 18;
                const tokenImage = usdcicon;
                  
                  try {
                    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                    const wasAdded = await window.ethereum.request({
                      method: 'wallet_watchAsset',
                      params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                          address: tokenAddress, // The address that the token is at.
                          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                          decimals: tokenDecimals, // The number of decimals in the token
                          image: tokenImage, // A string url of the token logo
                        },
                      },
                    });
                  
                    if (wasAdded) {
                      console.log('Thanks for your interest!');
                    } else {
                      console.log('Your loss!');
                    }
                  } catch (error) {
                    console.log(error);
                  }
                    }

                    const addBtcb = async () => {
                        const tokenAddress = '0x6b5e6DF50761e8a19C618D3768d2c594f050aeCf';
                        const tokenSymbol = 'BTCB';
                        const tokenDecimals = 18;
                        const tokenImage = btcbicon;
                          
                          try {
                            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                            const wasAdded = await window.ethereum.request({
                              method: 'wallet_watchAsset',
                              params: {
                                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                                options: {
                                  address: tokenAddress, // The address that the token is at.
                                  symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                                  decimals: tokenDecimals, // The number of decimals in the token
                                  image: tokenImage, // A string url of the token logo
                                },
                              },
                            });
                          
                            if (wasAdded) {
                              console.log('Thanks for your interest!');
                            } else {
                              console.log('Your loss!');
                            }
                          } catch (error) {
                            console.log(error);
                          }
                            }

                            const addEth = async () => {
                                const tokenAddress = '0x2EcEE73aa6f8ea3eb1e51815a1acEc319Fd4a674';
                                const tokenSymbol = 'ETH';
                                const tokenDecimals = 18;
                                const tokenImage = ethicon;
                                  
                                  try {
                                    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                                    const wasAdded = await window.ethereum.request({
                                      method: 'wallet_watchAsset',
                                      params: {
                                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                                        options: {
                                          address: tokenAddress, // The address that the token is at.
                                          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                                          decimals: tokenDecimals, // The number of decimals in the token
                                          image: tokenImage, // A string url of the token logo
                                        },
                                      },
                                    });
                                  
                                    if (wasAdded) {
                                      console.log('Thanks for your interest!');
                                    } else {
                                      console.log('Your loss!');
                                    }
                                  } catch (error) {
                                    console.log(error);
                                  }
                                    }

  export {addBusd, addUsdt, addUsdc, addBtcb, addEth}