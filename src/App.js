import { Routes, Route } from 'react-router-dom';
import Home from '../src/routes/Home';
import Details from '../src/routes/Details';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="detail" element={<Details />} />
  </Routes>
  );
}

export default App;
