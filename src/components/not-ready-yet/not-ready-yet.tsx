import {Result} from 'antd';
import ReturnButton from '../return-button/return-button';

export default function NotReadyYet() {
  return (
    <div className="container">
      <Result status="warning" title="Страница еще не готова. Куда по помытому?!"  />
      <ReturnButton />
    </div>
  );
}
