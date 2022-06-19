import { Card, Form, Input, Button, Checkbox, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // 获取跳转实例对象
  const navigate = useNavigate()
  const { loginStore } = useStore()
  const onFinish = async values => {
    const { mobile, code } = values
    try {
      await loginStore.getToken({ mobile, code })
      navigate('/')
      message.success(`恭喜用户:${mobile}，登录成功！`)
    } catch (e) {
      message.error(e.response?.data?.message || '登录失败')
    }
  }
  return (
    <div className='login'>
      <Card className='login-container'>
        <img className='login-logo' src={logo} alt="" />
        <Form
          initialValues={{
            mobile: '13811111111',
            code: '246810',
            remember: true
          }}
          validateTrigger={['onBlur', 'onChange']}
          onFinish={onFinish}
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号码格式不对',
                validateTrigger: 'onBlur'
              },
              {
                required: true,
                message: '请输入手机号'
              }
            ]}
          >
            <Input size='large' placeholder='请输入手机号' />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              { len: 6, message: '验证码长度为6个字符', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' }
            ]}
          >
            <Input size='large' placeholder='请输入验证码' maxLength={6} />
          </Form.Item>
          <Form.Item
            name='remember'
            valuePropName='checked'
          >
            <Checkbox className='login-checkbox-label'>
              我已经阅读并同意【用户协议】和【隐私协议】。
            </Checkbox>
          </Form.Item>
          <Form.Item>
            {/* 渲染button组件为submit按钮 */}
            <Button type='primary' htmlType='submit' size='large' block>
              登录
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>

  )
}
export default Login