import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const addBusd = async () => {
const tokenAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
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
        const tokenAddress = '0x55d398326f99059ff775485246999027b3197955';
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
                const tokenAddress = '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d';
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
                        const tokenAddress = '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c';
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
                                const tokenAddress = '0x2170ed0880ac9a755fd29b2688956bd959f933f8';
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