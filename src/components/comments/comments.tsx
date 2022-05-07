import {Link} from 'react-router-dom';

export default function Comments(): JSX.Element {
  return (
    <>
      <div>
          Content from &lt;Comments&gt;
      </div>
      <Link to="/">Back</Link>
    </>
  );
}
