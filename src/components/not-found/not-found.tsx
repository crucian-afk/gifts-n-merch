import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Result, Button} from 'antd';

export default function NotFound() {
  return (
    <>
      <Result status="404" />
      <div className="container">
        <p style={{textAlign: 'center'}}>Sorry, cannot find that page</p>
        <Link to={AppRoute.Root}>
          <Button type="primary" className="return-button">Back to index</Button>
        </Link>
      </div>
    </>
  );
}
