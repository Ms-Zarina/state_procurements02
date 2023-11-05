import Footer from './Footer';
import Header from './Header';
import '../styles/layout.css'
import HomePage from '../../pages/HomePage/HomePage';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <Header />
      {/* <HomePage/> */}
      <Outlet />
      
      <Footer />
    </div>
  );
}

export default Layout;
