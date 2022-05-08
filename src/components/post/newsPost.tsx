import {Post} from '../../types/mock-types';

type postProps = {
  post: Post;
}

export default function NewsPost({post}: postProps) {
  const {userId, id, title, body} = post;
  return (
    <div style={{border: '1px solid black', marginBottom: '20px'}}>
      <span>UserID {userId}</span>
      <span>ID {id}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
