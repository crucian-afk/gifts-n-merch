import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Button} from 'antd';

export default function ReturnButton() {
  return (
    <Link to={AppRoute.Root}>
      <Button type="default" block>Вернуться на главную</Button>
    </Link>
  );
}
