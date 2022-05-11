import {Users} from '../../types/mock-types';
import {Params, useParams} from 'react-router-dom';

type userFullProps = {
  users: Users
}

type paramsProps = {
  id: string;
}

export default function UserFull({users}: userFullProps): JSX.Element {
  const params: Readonly<[paramsProps] extends [string] ? Params<paramsProps> : Partial<paramsProps>> = useParams();
  console.log(params);
  const currentId = Number(params.id);
  const currentIndex = users.findIndex((user) => user.id === currentId);
  const currentUser = users[currentIndex];
  const newUsers = users.slice();
  newUsers.splice(currentIndex, 1);
  const {id, username, email, address: {street, city, suite, zipcode}, website, company, name, phone } = currentUser;
  return (
    <>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Name: {name}</p>
      <p>E-mail: {email}</p>
      <p>Address: {zipcode} {city}, {street} street, {suite}</p>
      <p>Website: {website}</p>
      <p>Work at: {company.name}</p>
      <p>Phone: {phone}</p>
    </>
  );
}
