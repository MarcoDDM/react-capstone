import React from 'react';
import { render } from '@testing-library/react';
import Stock from '../components/StockDetails';

describe('Stock component', () => {
  const props = {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    marketCap: 1000000000000,
    beta: 1.2,
    price: 150.5,
    volume: 1000000,
  };

  it('renders without crashing', () => {
    render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
  });

  it('displays the company name correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const companyNameElement = getByText(props.companyName);
    expect(companyNameElement).toBeInTheDocument();
  });

  it('displays the symbol correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const symbolElement = getByText('SYMBOL');
    expect(symbolElement).toBeInTheDocument();
    const symbolValueElement = getByText(props.symbol);
    expect(symbolValueElement).toBeInTheDocument();
  });

  it('displays the market cap correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const marketCapElement = getByText('MARKET CAP');
    expect(marketCapElement).toBeInTheDocument();
    const marketCapValueElement = getByText(`$${props.marketCap}`);
    expect(marketCapValueElement).toBeInTheDocument();
  });

  it('displays the beta correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const betaElement = getByText('BETA');
    expect(betaElement).toBeInTheDocument();
    const betaValueElement = getByText(props.beta.toString());
    expect(betaValueElement).toBeInTheDocument();
  });

  it('displays the price correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const priceElement = getByText('PRICE');
    expect(priceElement).toBeInTheDocument();
    const priceValueElement = getByText(`$${props.price}`);
    expect(priceValueElement).toBeInTheDocument();
  });

  it('displays the volume correctly', () => {
    const { getByText } = render(
      <Stock
        symbol={props.symbol}
        companyName={props.companyName}
        marketCap={props.marketCap}
        beta={props.beta}
        price={props.price}
        volume={props.volume}
      />,
    );
    const volumeElement = getByText('VOLUME');
    expect(volumeElement).toBeInTheDocument();
    const volumeValueElement = getByText(props.volume.toString());
    expect(volumeValueElement).toBeInTheDocument();
  });
});
