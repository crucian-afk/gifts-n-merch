import {Form, Input, Checkbox, Tabs, DatePicker, Select} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
export function ClientData() {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
    >
      <Form.Item label="E-mail">
        <Input />
      </Form.Item>
      <Form.Item
        required
        label="Телефон"
        tooltip={{
          title: 'Обязательное поле',
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="+7 999 999 99 99" />
      </Form.Item>
    </Form>
  );
}

export function DeliveryData() {
  const {TabPane} = Tabs;
  const {Option} = Select;
  const timeoptions = [
    '08:00 - 11:00',
    '11:00 - 17:00',
    '17:00 - 22:00',
    '22:00 - 00:00',
  ];
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 7,
      }}
      layout="horizontal"
    >

      <Tabs
        defaultActiveKey="1"
        style={{
          height: 220,
        }}
      >
        <TabPane tab='Доставка' key={1}>
          <Form.Item label="Фамилия, имя получателя">
            <Input />
          </Form.Item>
          <Form.Item label="Адрес доставки">
            <Input />
          </Form.Item>
          <Form.Item label="Нужен подъем на этаж">
            <Checkbox />
          </Form.Item>
          <Form.Item label="Дата доставки">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Интервал доставки">
            <Select
              mode="multiple"
              allowClear
              defaultValue={[timeoptions[0], timeoptions[1]]}
            >
              {timeoptions.map((option, i) => (
                <Option key={option}>{option}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Комментарий к заказу">
            <Input.TextArea />
          </Form.Item>
        </TabPane>
        <TabPane tab='Самовывоз' key={2}>
          К сожалению, по техническим причинам самовывоз временно недоступен
        </TabPane>
      </Tabs>
    </Form>
  );
}
type PayDataProps = {
  handler: () => void;
}
export function PayData({handler}: PayDataProps) {
  return (
    <div className="payment">
      Выберите платежную систему
      <div className="payment__buttons">
        <button className="payment__button payment__button--cash" onClick={handler}>Наличные</button>
        <button className="payment__button payment__button--sber">Сбербанк</button>
        <button className="payment__button payment__button--crypto">Криптовалюта</button>
        <button className="payment__button payment__button--confirm">Подтвердить</button>
      </div>
      <p>Подтверждая заказ, Вы соглашаетесь с условиями политики конфиденциальности и правилами продажи.</p>
    </div>
  );
}
