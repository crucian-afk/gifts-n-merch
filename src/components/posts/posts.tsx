import {Link} from 'react-router-dom';
import {PostsType} from '../../types/mock-types';
import NewsPost from '../post/newsPost';

type postsProps = {
  posts: PostsType;
}

export default function Posts(props: postsProps): JSX.Element {
  const {posts} = props;
  return (
    <>
      {posts.map((post) => (
        <NewsPost key={post.id} post={post} />
      ))}
      <Link to="/">Back</Link>
    </>
  );
}
