import {Link, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function MainPage() {
  return (
    <>
      <header>
        <p>dsalda</p>
        <Link to={AppRoute.Comments}>Comments</Link>
        <Link to={AppRoute.User}>User</Link>
      </header>
      <main>
        Unedittable content from &lt;MainPage&gt;
      </main>
      <Outlet />
    </>
  );
}
