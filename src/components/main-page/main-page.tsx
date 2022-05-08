import {Link, Outlet} from 'react-router-dom';
import {AppRoute} from '../../const';
// import {posts} from '../../mocks/mock-data';
// import {Posts} from '../../types/mock-types';

// type mainProps = {
//   posts: Posts;
// }

export default function MainPage() {
  // const {posts} = props;
  return (
    <>
      <header>
        <p>dsalda</p>
        <Link to={AppRoute.Comments}>Comments</Link>
        <Link to={AppRoute.User}>User</Link>
      </header>
      <main>
        Uneditable content from &lt;MainPage&gt;
      </main>
      <Outlet />
    </>
  );
}
