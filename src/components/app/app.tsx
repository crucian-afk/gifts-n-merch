import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from '../posts/posts';
import User from '../user/user';
import MainPage from '../main-page/main-page';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import {posts} from '../../mocks/mock-data';
import PostFull from '../post-full/post-full';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}>
          <Route index element={<Posts posts={posts} />} />
          {/*<Route path={AppRoute.Comments} element={<Comments />} />*/}
          <Route path={AppRoute.User} element={<User />} />
          <Route path={AppRoute.Post} element={<PostFull posts={posts} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
