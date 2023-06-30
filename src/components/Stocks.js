import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Stocks.css';
import { AiOutlineStock, AiOutlineRightCircle, AiFillAccountBook } from 'react-icons/ai';
import { fetchStocks } from '../redux/Stocks/stocksSlice';

function Stocks() {
  const dispatch = useDispatch();
  const stocksArray = useSelector((store) => store.stocks.stocks);
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);

  useEffect(() => {
    if (stocksArray.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, ifSucceed, stocksArray]);

  return (
    <main>
      <section className="main-section">
        <AiFillAccountBook />
      </section>
      <section className="title">
        STOCKS STATS
      </section>
      <section className="stocks">
        {stocksArray.map((stock) => (
          <div key={stock.symbol} className="stock">
            <NavLink to={`stock/${stock.symbol}`}>
              <div className="topHalf">
                <div className="icon">
                  <AiOutlineStock />
                </div>
                <div className="arrow">
                  <AiOutlineRightCircle />
                </div>
              </div>
              <div className="bottomHalf">
                {stock.symbol}
                <br />
                $
                {stock.marketCap}
                <br />
              </div>
            </NavLink>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Stocks;
