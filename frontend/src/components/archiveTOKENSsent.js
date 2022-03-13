import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import tokensTransactions from "./tokensTransactions";

const ArchiveTOKENSsent = ({defaultAccount, tokensEscrow, connected}) => {
  const [transactions, setTransactions] = useState ([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [transactionsLength, setTransactionsLength] = useState([]);
   
  const [pageNumberLimit, setPageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  
  const pages =[];
for(let i=1; i<=Math.ceil(transactions.length/itemsPerPage);i++){
  pages.push(i);
};

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentTransactions = transactions.slice(indexOfFirstItem, indexOfLastItem) 

const handleClick = (e) => {
setCurrentPage(Number(e.target.id))
}

const RenderPageNumbers = pages.map(number =>{
  if (number < maxPageNumberLimit +1 && number > minPageNumberLimit) {
    return (
      <li key={number} id={number} onClick={handleClick} 
      className={currentPage === number ? "active" : null }>
       {number}
      </li>
    )
  } else {
    return null;
  }
  
});

const web3 = new Web3 (window.ethereum);

  useEffect(()  => {

    const load = async () => {   
      
      setLoading(true);
      
      const transactionsLength = await tokensEscrow.methods.getSenderLedgerLength(defaultAccount).call();
      setTransactionsLength(transactionsLength);
     
      for (let i = 0; i < transactionsLength; i++){
      const id = await tokensEscrow.methods.SenderLedger(defaultAccount, i).call();
       const result = await tokensEscrow.methods.TransactionLedger(id).call();
  
       const util = {
        returnTxMap: (id,tx) => {  
            
            return {
                id: id,
                sender: tx[0],
                receiver: tx[1],
                token: tx[2],
                amount: tx[3],
                judgeFee: tx[4],
                ownerFee: tx[5],
                value: tx[6],
                status: tx[7],
            }
        },

      }
       const tx = util.returnTxMap(id, result)
       transactions.push(tx)
       transactions.sort((a, b) => b.id - a.id);
      setTransactions(transactions);
       console.log(transactions)
       
      }
      
      setLoading(false);

    }
    if(connected) {
      load();
    }
   
  }, [defaultAccount, tokensEscrow]);

  const handleNext = () => {
    setCurrentPage(currentPage +1);
    if(currentPage + 1 > maxPageNumberLimit){
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit )
    }
  } 

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1)
    if((currentPage - 1 > maxPageNumberLimit) % pageNumberLimit === 0);{
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit )
    }
  }

  let pageIncrementBtn = null;
  if(pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNext}> &hellip; </li>
  }

  let pageDecrementBtn = null;
  if(pages.length > maxPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrevious}> &hellip; </li>
  }

  if(loading === true) {
    return <div className="spinner-border m-2 text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
  }

  return ( 
    <div>
      { defaultAccount && <div>
      { currentTransactions.map((tx) =>(    
      <div className="card shadow my-3" key={tx.id}>
        <Link to={`/historial/ttokensemisor/${tx.id}`} className="text-decoration-none text-dark">
        <div className="card-body">
         <div className="row">
           <div className="col-3">ID</div>
           <div className="col-5">Monto<span className="ms-1 text-primary">
           </span>
           </div>
           <div className="col-4">Receptor</div>
          <div className="w-100"></div>
           <div className="col-3 text-muted">{tx.id}</div>
           <div className="col-5 text-muted">
           { tokensTransactions.map((token) =>(
           <span key={token.address}>
             {token.address === tx.token &&<span>{token.label}</span>}            
           </span>
           ))} 
             {parseFloat(web3.utils.fromWei(tx.amount)).toFixed(5)}
           </div>
           <div className="col-4 text-muted">
           {`${tx.receiver.substr(0, tx.receiver.length - 36)}...${tx.receiver.substr(37)}`}
           </div>
         </div>
        </div>
        </Link>
      </div>
      ))}
      </div>
      }
      <div className=" d-flex justify-content-center">
       <ul className="pageNumbers">
      {pages.length > 1 && <button type="button" className="btn btn-sm-light"
      onClick={handlePrevious}
      disabled={currentPage === pages[0] ? true : false}>
      <i className="bi bi-arrow-left-circle text-primary"></i></button>}
      {pageDecrementBtn}  
      {RenderPageNumbers}
      {pageIncrementBtn}
      {pages.length > 1 && <button  type="button" className="btn btn-sm-light"
      onClick={handleNext}
      disabled={currentPage === pages[pages.length - 1] ? true : false}>
      <i className="bi bi-arrow-right-circle-fill text-primary"></i></button>}
      </ul>
      </div>
      </div> 
     );
}
 
export default ArchiveTOKENSsent;