// 登录模块
import { makeAutoObservable } from 'mobx'
import { getToken, setToken, clearToken, http } from '@/utils'

class LoginStore {
  // token的定义逻辑
  token = getToken() || '';
  constructor() {
    makeAutoObservable(this)
  }

  // 登录
  getToken = async ({ mobile, code }) => {
    const res = await http.post('http://geek.itheima.net/v1_0/authorizations', {
      mobile,
      code
    })
    console.log(res.data)

    this.token = res.data.token
    // 在本地localStorage中保存token
    setToken(res.data.token)
  }

  // 退出登录
  loginOut = () => {
    this.token = ''
    clearToken()
  }
}

export default LoginStore