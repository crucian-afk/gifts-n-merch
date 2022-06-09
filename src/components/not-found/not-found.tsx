import {Result} from 'antd';
import ReturnButton from '../return-button/return-button';

export default function NotFound() {
  return (
    <>
      <Result status="404" />
      <div className="container">
        <p style={{textAlign: 'center'}}>Sorry, cannot find that page</p>
        <ReturnButton />
      </div>
    </>
  );
}
