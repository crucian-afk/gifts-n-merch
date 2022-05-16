import {PostsType} from '../../types/mock-types';
import {Link, useParams} from 'react-router-dom';
import Comments from '../comments/comments';
import {Button} from 'antd';
import {AppRoute} from '../../const';

type postFullProps = {
  posts: PostsType;
}

type paramsProps = {
  id: string;
}

export default function PostFull({posts}: postFullProps): JSX.Element {
  const params: paramsProps = useParams() as paramsProps;
  const currentId = Number(params.id);
  const currentIndex = posts.findIndex((post) => post.userId === currentId);
  const currentPost = posts[currentIndex];
  const newPosts = posts.slice();
  newPosts.splice(currentIndex, 1);
  const {id, title, body, userId} = currentPost;
  return (
    <div className="container">
      <div>
        <span className="id-info">ID: {id}</span>
        <span className="id-info">User ID: {userId}</span>
        <h3>Title: {title}</h3>
        <p>{body}</p>
      </div>
      <Comments postId={currentId} />
      <Link to={AppRoute.Root}>
        <Button type="default" block>Back to main page</Button>
      </Link>
    </div>
  );
}
