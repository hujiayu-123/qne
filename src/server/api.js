import axios from './request'
import qs from 'qs'

const api = {
    // 获取首页列表
    homeList() {
        return axios.get('/api/getScenic')
    },
    // 注册
    register(data) {
        return axios.post('/api/register', data)
    },
    // 获取短信验证码
    getCode(data) {
        return axios.post('/api/getCode', data)
    },
    // 登录
    login(data) {
        return axios.post('/api/login', data)
    },
    // 获取景点列表
    getScenicAll(params) {
        return axios.get('/api/getScenicAll?' + qs.stringify(params))
    },
    // 获取用户列表
    getUserAll() {
        return axios.get('/api/getUserAll')
    },
}

export default api
