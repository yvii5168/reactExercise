import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserStore {
  userInfo = {};
  constructor() {
    makeAutoObservable(this)
  }
  async getUserInfo () {
    const res = await http.get('/user/profile')
    this.userInfo = res.data
    localStorage.setItem("userInfo", JSON.stringify(res.data))
  }
}

export default UserStore