import {generatePath, Link} from 'react-router-dom';
import {Users} from '../../types/mock-types';
import {AppRoute} from '../../const';
import {Button} from 'antd';

type usersProps = {
  users: Users;
}

export default function ActiveUsers({users}: usersProps) {
  return (
    <div className="container">
      <div className="users">
        {users.map((user) => {
          const {id, username, email, address, website, company} = user;
          return (
            <div key={id} className="card">
              <p>Username: {username}</p>
              <p>E-mail: {email}</p>
              <p>Address: {address.city}, {address.street} street, {address.suite}</p>
              <p>Website: {website}</p>
              <p>Work at {company.name}</p>
              <Link to={generatePath(AppRoute.Person, {id: String(id)})}>
                <Button type="primary">See full info</Button>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to={AppRoute.Root}>
        <Button type="default" block>Back to main page</Button>
      </Link>
    </div>
  );
}
