import { Routes, Route } from 'react-router-dom';
import DetailComponent from './components/Details';
import './App.css';
import Stocks from './components/Stocks';
import Layout from './components/Layout';
import Show from './components/Show';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stocks />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="stock" element={<DetailComponent />}>
          <Route path=":slug" element={<Show />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
