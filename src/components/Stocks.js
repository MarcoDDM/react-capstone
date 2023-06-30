import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './Stocks.css';
import {
  AiOutlineStock, AiOutlineRightCircle, AiOutlineBarChart, AiOutlineCloseCircle,
} from 'react-icons/ai';
import { Form } from 'react-bootstrap';
import { fetchStocks } from '../redux/Stocks/stocksSlice';

function Stocks() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const stocksArray = useSelector((store) => store.stocks.stocks);
  const ifSucceed = useSelector((store) => store.stocks.ifSucceed);
  const sum = stocksArray.reduce((n, { marketCap }) => n + marketCap, 0);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (stocksArray.length === 0) {
      dispatch(fetchStocks());
    }
  }, [dispatch, ifSucceed, stocksArray]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const Form = document.getElementById('searchForm');
    Form.classList.replace('show', 'hide');
    Form.reset();
  };

  const handleCloseSearch = () => {
    const FormContainer = document.getElementById('searchFormContainer');
    FormContainer.classList.replace('show', 'hide');
    const Form = document.getElementById('searchForm');
    Form.reset();
    setSearch('');
  };

  const filteredArray = stocksArray.filter((stock) => {
    if (search === '') { return stock; }
    if (stock.symbol.toLowerCase().includes(search.toLowerCase())) {
      return stock;
    }
    return '';
  });

  let stocksList = '';

  if (filteredArray.length === 0) {
    stocksList = 'NO COMPANIES FOUND';
  } else {
    stocksList = (
      filteredArray.map((stock) => (
        <div className="stock" key={stock.symbol}>
          <NavLink to={`stock/${stock.symbol}`} className="symbol">
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
      ))
    );
  }

  return (
    <>
      <main>
        <section className="main-section">
          <div className="top-icon">
            <AiOutlineBarChart />
          </div>
          <div className="title">
            <div>
              <span className="text">TOTAL</span>
              <br />
              <span className="value">
                $
                {sum}
              </span>
            </div>
          </div>
        </section>
        <section className="heading">
          STATS BY COMPANY
        </section>
        <section className="stocks">
          {stocksList}
        </section>
      </main>
      <section id="searchFormContainer" className="hide">
        <Form id="searchForm" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Search company ticker"
            onChange={(e) => handleChange(e)}
          />
          <div id="closeSearch">
            <AiOutlineCloseCircle onClick={handleCloseSearch} />
          </div>
        </Form>
      </section>
    </>
  );
}

export default Stocks;
