import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const addBusd = async () => {
const tokenAddress = '0x26811EdBf3C708dDAB9C4B2BFDda5e9647be5e5B';
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
        const tokenAddress = '0x0A7907e2e29374d98de8861e06ae74ECf7453Aed';
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
                const tokenAddress = '0x5e5F34c531Ee61e5A06315A663C7323698db80f5';
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
                        const tokenAddress = '0x60225A4aeC7C1310dC18f9CC02df949782558FA6';
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
                                const tokenAddress = '0x93214264d3Da881c6a7036ade63B40585B8e3dAC';
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