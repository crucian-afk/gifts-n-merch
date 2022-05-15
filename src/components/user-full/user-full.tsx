import {Users} from '../../types/mock-types';
import {Link, Params, useParams} from 'react-router-dom';
import {Button} from 'antd';
import {AppRoute} from '../../const';

type userFullProps = {
  users: Users
}

type paramsProps = {
  id: string;
}

export default function UserFull({users}: userFullProps): JSX.Element {
  const params: Readonly<[paramsProps] extends [string] ? Params<paramsProps> : Partial<paramsProps>> = useParams();
  const currentId = Number(params.id);
  const currentIndex = users.findIndex((user) => user.id === currentId);
  const currentUser = users[currentIndex];
  const newUsers = users.slice();
  newUsers.splice(currentIndex, 1);
  const {id, username, email, address: {street, city, suite, zipcode}, website, company, name, phone } = currentUser;
  return (
    <div className="user-info">
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Name: {name}</p>
      <p>E-mail: {email}</p>
      <p>Address: {zipcode} {city}, {street} street, {suite}</p>
      <p>Website: {website}</p>
      <p>Work at: {company.name}</p>
      <p>Phone: {phone}</p>
      <Link to={AppRoute.Users}>
        <Button type="default" block>Back to Users</Button>
      </Link>
    </div>
  );
}
