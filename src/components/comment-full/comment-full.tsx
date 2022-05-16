import {Comment} from '../../types/mock-types';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';

type commentFullProps = {
  comment: Comment;
}

export default function CommentFull({comment}: commentFullProps) {
  const {postId, id, email, body, name} = comment;
  return (
    <div className="comment">
      <Avatar style={{marginRight: '20px'}} size="small" icon={<UserOutlined />} />
      <span className="id-info">Post ID: {postId}</span>
      <span className="id-info">ID: {id}</span>
      <span className="nickname">{email.split('@')[0]}</span>
      <p>Topic: {name}</p>
      <p>E-mail: {email}</p>
      <p>{body}</p>
    </div>
  );
}
