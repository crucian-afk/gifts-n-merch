import {Steps, Button, message} from 'antd';
import {useState} from 'react';
import {ClientData, DeliveryData, PayData} from './order-data';
import './order-form.css';
import {cartTotalPriceSelector} from '../../store/selectors/selectors';
import {useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

export function OrderForm() {
  const {Step} = Steps;

  const navigate = useNavigate();
  const totalPrice = useAppSelector(cartTotalPriceSelector);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const handleAlert = () => {
    message.success('Обработка завершена!');
    setTimeout(() => navigate('/'), 2000);
  };
  const steps = [
    {
      title: 'Данные покупателя',
      content: <ClientData />,
    },
    {
      title: 'Способ получения',
      content: <DeliveryData />,
    },
    {
      title: 'Способ оплаты',
      content: <PayData handler={() => handleAlert} />,
    },
  ];
  return (
    <div className="container">
      <div className="total">
        Сумма заказа: &#8381; {totalPrice}
      </div>
      <Steps current={current}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Далее
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={handleAlert}>
            Готово
          </Button>
        )}
        {current > 0 && (
          <Button onClick={prev}>
            Назад
          </Button>
        )}
      </div>
    </div>
  );
}
