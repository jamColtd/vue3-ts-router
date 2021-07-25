// api.ts
import base from "./base";
import request from "./request";

class Api {
  /* 公共模块 */
  public static common = {
    genre: (params = {}) => request.get(`${base.common}frontend/genre`, params),
  }

  /* 活动模块 */
  public static active = {
    
  }
}

const protoApi = {
  install: (Vue: any) => {
      console.log(Vue.prototype)
    // Vue.prototype.$Api = Api
  }
}

export default protoApi