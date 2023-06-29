import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
      <section>
        <h1>
          Market Cap
        </h1>
        <div>
          {stocksArray.map((stock) => (
            <NavLink to={`stock/${stock.symbol}`}>
              <div>
                {stock.companyName}
                <br />
                Market Cap:
                {' '}
                {stock.marketCap}
                <br />
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Stocks;
