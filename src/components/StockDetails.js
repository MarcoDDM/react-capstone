import './StockDetails.css';
import PropTypes from 'prop-types';
import { AiOutlineRightCircle, AiFillAccountBook } from 'react-icons/ai';

function Stock({
  symbol, companyName, marketCap, beta, price, volume,
}) {
  return (
    <section>
      <header>
        <div className="icon"><AiFillAccountBook /></div>
        <h1 className="name">{companyName}</h1>
      </header>
      <div className="breakdown">
        <span>DATA BREAKDOWN</span>
      </div>
      <ul className="list">
        <li className="item odd">
          <span>SYMBOL</span>
          <span>
            {symbol}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item even">
          <span>MARKET CAP</span>
          <span>
            $
            {marketCap}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item odd">
          <span>BETA</span>
          <span>
            {beta}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item even">
          <span>PRICE</span>
          <span>
            $
            {price}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
        <li className="item odd">
          <span>VOLUME</span>
          <span>
            {volume}
            <span className="arrow"><AiOutlineRightCircle /></span>
          </span>
        </li>
      </ul>
    </section>
  );
}

Stock.propTypes = {
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  marketCap: PropTypes.number.isRequired,
  beta: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
};

export default Stock;
