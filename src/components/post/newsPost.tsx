import {Post} from '../../types/mock-types';
import {generatePath, Link} from 'react-router-dom';

type postProps = {
  post: Post;
}

export default function NewsPost({post}: postProps) {
  const {userId, id, title, body} = post;
  return (
    <div style={{border: '1px solid black', marginBottom: '20px'}}>
      <p>UserID {userId}</p>
      <p>ID {id}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={generatePath('/post/:id', {id: String(userId)})}>Go</Link>
    </div>
  );
}
