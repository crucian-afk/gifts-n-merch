import {Post} from '../../types/mock-types';
import {generatePath, Link} from 'react-router-dom';
import {Button} from 'antd';

type postProps = {
  post: Post;
}

export default function NewsPost({post}: postProps) {
  const {userId, id, title, body} = post;
  return (
    <div className="card">
      <p className="post__user-id">UserID {userId}</p>
      <p>ID {id}</p>
      <h3>{title}</h3>
      <p className="post__text">{body}</p>
      <Link to={generatePath('/post/:id', {id: String(userId)})}>
        <Button type="primary">See full post</Button>
      </Link>
    </div>
  );
}
