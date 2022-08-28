import {Outlet} from 'react-router-dom';
import './layout.css';
import {Header} from './header';
import {Footer} from './footer';
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
