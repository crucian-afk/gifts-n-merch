import {Comment} from '../../types/mock-types';

type commentFullProps = {
  comment: Comment;
}

export default function CommentFull({comment}: commentFullProps) {
  const {postId, id, email, body, name} = comment;
  return (
    <>
      <h4>{name}</h4>
      <p>E-mail: {email}</p>
      <p>Body: {body}</p>
      <span>Post ID: {postId}</span>
      <span>ID: {id}</span>
    </>
  );
}
