// request.ts
// import axios from "./index";
// import qs from "qs";

// export default class Request{
//   /**
//    * get方法
//    * @param {string} url 路径
//    * @param {object} params 参数
//    */
//   static get = (url: string, params?: object) => {
//     return new Promise((resolve, reject) => {
//       axios.get(url, { params: params }).then(res => {
//         resolve(res);
//       }).catch(err => {
//         reject(err);
//       })
//     })
//   }
    
//   static post = (url: string, params?: object) => {
//     return new Promise((resolve, reject) => {
//       axios.post(url, qs.stringify(params)).then(res => {
//         resolve(res);
//       }).catch(err => {
//         reject(err);
//       })
//     })
//   }  
  
// }

import http from './index'
const api_key = '233d4cad34c34d343785s34dw3er3ds3234esd4'
let sign = process.env.VUE_APP_SIGN
if (process.env.NODE_ENV === 'production') {
  sign = localStorage.getItem("sign")
} else {
  sign = '17a1920fdc3c3c25d1bf7c6dd724f5cf'
}

const post = (url:string, data :any) =>
  http.post(
    url,
    Object.assign({
        api_key: api_key,
        sign,
      },
      // {
      //   data: Object.assign({
      //       role_id: role_id //如果需要再包层data就这样写
      //     },
      //     data
      //   )
      // }
      data
    )
  )
const get = (url:string, params:any) =>
  http.get(
    url,
    Object.assign({
        api_key: api_key,
        sign
      },
      params
    )
  )

// // 接口说明
// const getFissionCourseList = data => post('getFissionCourseList', data)

const getMenus = (params: any) => get('menus', params) //获取菜单栏
const getGetrequs = (params: any) => get('login', params) // 登录
//接口导出
export {
  // getFissionCourseList,
  getGetrequs, // 登录
  getMenus, //获取菜单栏
}