import {PostsType} from '../../types/mock-types';
import {useParams} from 'react-router-dom';
import Comments from '../comments/comments';

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
    <>
      <div>
        <p>ID: {id}</p>
        <p>User ID: {userId}</p>
        <h3>Title: {title}</h3>
        <p>{body}</p>
      </div>
      <Comments postId={currentId} />
    </>
  );
}
