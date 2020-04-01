// 1.引入axios
import axios from '@/utils/mayaxios.js'

// 登录
export const login = (data) => {
  return axios({
    url: 'login',
    method: 'post',
    data
  })
}
