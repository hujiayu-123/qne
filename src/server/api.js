import axios from './request'
import qs from 'qs'

const api = {
    // 获取验证图形
  captcha(params) {
    return axios.get('/captcha/captcha?' + qs.stringify(params))
  },
  // 注册
  reg(data) {
    return axios.post('/register/reg', data)
  },
}

export default api
