import {Link, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function MainPage() {
  return (
    <>
      <header>
        <p>dsalda</p>
        <Link to={AppRoute.Comments}>Comments</Link>
        <Link to={AppRoute.Users}>Active Users</Link>
      </header>
      <main>
        Uneditable content from &lt;MainPage&gt;
      </main>
      <Outlet />
    </>
  );
}
