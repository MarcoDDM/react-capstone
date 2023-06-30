import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StockComponent from './StockDetails';

function DetailComponent() {
  const { slug } = useParams();
  const stocksArray = useSelector((store) => store.stocks.stocks);
  const content = stocksArray.find((stock) => stock.symbol === slug);
  const {
    symbol,
    companyName,
    marketCap,
    beta,
    price,
    volume,
  } = content;

  return (
    <StockComponent
      companyName={companyName}
      symbol={symbol}
      marketCap={marketCap}
      beta={beta}
      price={price}
      volume={volume}
    />
  );
}

export default DetailComponent;
