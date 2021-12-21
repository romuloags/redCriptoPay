import usdticon from "../assets/usdticon.png"
import ethicon from "../assets/ethicon.png"
import btcbicon from "../assets/btcbicon.png"
import busdicon from "../assets/busdicon.png"
import usdcicon from "../assets/usdcicon.png"

const addBusd = async () => {
const tokenAddress = '0x3103D92d2888B7Aeee60C59a72e4Ba6A3146C9d0';
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
        const tokenAddress = '0xA9178362c48219dDa5FE0F79DF4d4c62A602260D';
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
                const tokenAddress = '0xbFe4f8A71C8C3E1b748D42ACfB2F1140931f50bA';
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
                        const tokenAddress = '0x3aFf2aB4cd7cF0f08B54E06D943dcDe8719cfd82';
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
                                const tokenAddress = '0xdFabe06028A1008354ae8Ed8F8E63202A0A11853';
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