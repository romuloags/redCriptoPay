pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract mockBUSD is ERC20 {
    
   address public admin;
   
   constructor() ERC20('Binance USD mock', 'BUSD') {
       
      _mint(msg.sender, 10000 * 10 **18);
      admin = msg.sender;
   } 
   
   function mint(address to, uint amount) external {
   require(msg.sender == admin, 'only admin');
   _mint(to, amount);
   } 
}
