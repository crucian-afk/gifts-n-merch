import {Button, Form, Input} from 'antd';

export default function CommentForm() {
  return (
    <Form
      className="comment-form"
      name="basic"
    >
      <h3 className="comment-form__title">Post your comment</h3>
      <Form.Item label="Username" name="username" rules={[
        {
          required: true,
          message: 'We really need your username',
        },
      ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Text"
        name="text"
        rules={[
          {
            required: true,
            message: 'Field can\'t be empty',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="dashed" htmlType="submit" style={{margin: '0 auto'}}>
          Send
        </Button>
      </Form.Item>
    </Form>
  );
}
