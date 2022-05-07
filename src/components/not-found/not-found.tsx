import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

export default function NotFound() {
  return (
    <>
      <div>
        Content from &lt;NotFound&gt;
      </div>
      <Link to={AppRoute.Root}>Back</Link>
    </>
  );
}
