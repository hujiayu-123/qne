import { Notification } from 'element-ui';

const errorHandle = (err) => {
    if(err.response) {
        if(err.response.status === 401) {
            Notification({
                title: '警告',
                message: '登录超时，重新登录',
                type: 'warning'
            });
            localStorage.clear()
        }else if(err.response.status === 500) {
            Notification({
                title: '错误',
                message: '网络链接不可用',
                type: 'error'
            });
        }
    }else {
        Notification({
            title: '错误',
            message: '请求超时，请稍后重试',
            type: 'error'
        });
    }
    
}

export default errorHandle