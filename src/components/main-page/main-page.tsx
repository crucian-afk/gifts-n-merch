import {Link, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function MainPage() {
  return (
    <>
      <header className="container">
        <Link to={AppRoute.Users}>Active Users</Link>
      </header>
      <Outlet />
    </>
  );
}
