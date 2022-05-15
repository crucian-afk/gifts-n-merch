import {comments} from '../../mocks/mock-data';
import CommentFull from '../comment-full/comment-full';

type commentsProps = {
  postId: number;
}

export default function Comments({postId}: commentsProps): JSX.Element {
  const currentComments = comments.filter((comment) => comment.postId === postId);
  return (
    <div className="comments">
      <p className="comments__title">Oh, just take a look at these comments</p>
      {currentComments.map((comment) => (
        <CommentFull key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
