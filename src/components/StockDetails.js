import React from 'react';
import PropTypes from 'prop-types';

function Stock({
  symbol, companyName, marketCap, beta, price, volume,
}) {
  return (
    <section>
      <h1>{companyName}</h1>
      <table>
        <tr>
          <th>{companyName}</th>
        </tr>
        <tr>
          <td>
            Symbol
            {symbol}
          </td>
        </tr>
        <tr>
          <td>
            Market Cap
            {marketCap}
          </td>
        </tr>
        <tr>
          <td>
            Beta
            {beta}
          </td>
        </tr>
        <tr>
          <td>
            Price
            {price}
          </td>
        </tr>
        <tr>
          <td>
            Volume
            {volume}
          </td>
        </tr>
      </table>
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
