import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from '../posts/posts';
import User from '../user/user';
import Comments from '../comments/comments';
import MainPage from '../main-page/main-page';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}>
          <Route index element={<Posts />} />
          <Route path={AppRoute.Comments} element={<Comments />} />
          <Route path={AppRoute.User} element={<User />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
