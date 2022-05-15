import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from '../posts/posts';
import ActiveUsers from '../user/activeUsers';
import MainPage from '../main-page/main-page';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';
import {posts, users} from '../../mocks/mock-data';
import PostFull from '../post-full/post-full';
import UserFull from '../user-full/user-full';
import './App.css';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}>
          <Route index element={<Posts posts={posts} />} />
          {/*<Route path={AppRoute.Comments} element={<Comments />} />*/}
          <Route path={AppRoute.Users} element={<ActiveUsers users={users} />} />
          <Route path={AppRoute.Post} element={<PostFull posts={posts} />} />
          <Route path={AppRoute.Person} element={<UserFull users={users} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
