import {PostsType} from '../../types/mock-types';
import NewsPost from '../post/newsPost';

type postsProps = {
  posts: PostsType;
}

export default function Posts(props: postsProps): JSX.Element {
  const {posts} = props;
  return (
    <div className="container">
      <div className="posts">
        {posts.map((post) => (
          <NewsPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
