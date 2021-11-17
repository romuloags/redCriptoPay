try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x38',
          chainName: 'Binance Smart Chain',
          nativeCurrency: {
          name: 'Binance Coin',
          symbol: 'BNB',
          decimals: 18
        },
        rpcUrls: ['https://bsc-dataseed.binance.org/'],
        blockExplorerUrls: ['https://bscscan.com']
        },
      ],
  });
  } 
  catch (addError) {console.error(addError);}