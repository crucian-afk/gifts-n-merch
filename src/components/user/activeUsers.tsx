import {generatePath, Link} from 'react-router-dom';
import {Users} from '../../types/mock-types';
import {AppRoute} from '../../const';

type usersProps = {
  users: Users;
}

export default function ActiveUsers({users}: usersProps) {
  return (
    <>
      <div>
        Content from &lt;Users&gt;
        {users.map((user) => {
          const {id, username, email, address, website, company} = user;
          return (
            <div key={id} style={{border: '1px solid black', marginBottom: '20px'}}>
              <p>Username: {username}</p>
              <p>E-mail: {email}</p>
              <p>Address: {address.city}, {address.street} street, {address.suite}</p>
              <p>Website: {website}</p>
              <p>Work at {company.name}</p>
              <Link to={generatePath(AppRoute.Person, {id: String(id)})}>See full info</Link>
            </div>
          );
        })}
      </div>
      <Link to="/">Back</Link>
    </>
  );
}
