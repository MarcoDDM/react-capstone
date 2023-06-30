import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  <>
    <Navbar />
    <Outlet />
  </>;
}

export default Layout;
