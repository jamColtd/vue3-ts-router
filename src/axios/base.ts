// base.ts
export default class Base {
    /* 公共模块 */
    static common = process.env.NODE_ENV === "development" 
    ? "localhost:8080" 
    : "localhost:8080"
    /* 活动模块 */
    static active = process.env.NODE_ENV === "development" 
    ? "localhost:8080" 
    : "localhost:8080"
  
  }