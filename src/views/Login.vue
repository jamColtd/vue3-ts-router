<template>
  <div class="login">
    <div class="login-box">
      <!-- <header>登录</header> -->
      <div class="login-form">
        <div class="body">
          <table>
            <tr>
              <td>账号</td>
              <td>
                <input
                  type="text"
                  class="input-md30 font-but input-text"
                  placeholder="User/Email"
                  v-model="formData.user"
                />
              </td>
            </tr>
          </table>
          <div class="table">
            <div class="table-row">
              <div class="table-cell">密码</div>
              <div class="table-cell">
                <input
                  type="password"
                  class="input-md30 font-but input-text"
                  placeholder="Password"
                  v-model="formData.password"
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li style="margin-bottom: 5px">
              <span class="font-size">Resq</span>
            </li>
            <li>
              <button
                style="text-algin: left"
                type="submit"
                class="input-md30 but-bac font-but"
                @click="onClick"
              >
                Login
              </button>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";
import useCurrentInstance from "../hook/useCurrentInstance";
import {getGetrequs } from "../../src/axios/request";
import router from "../router"

export default defineComponent({
  name: "login",
  setup() {
    const { globalProperties } = useCurrentInstance();
    const formData = ref({
      user:"",
      password:""
    })
    const formPath = ref('')
    let getUser = ref();
     const  onClick = (() => {
      getGetrequs({ t35: "get" }).then((res) => {
        getUser.value = res;
        console.log(formData.value.user, formData.value.password)
        getUser.value.user.forEach((element:unknown) => {
          console.log(element)
        });
        globalProperties.$message.success("登录成功")
      }).catch( (error) => {
        console.log(error);
        globalProperties.$message.error('密码错误！！')
      });
      router.push({
        path:'/home'
      })
    })

    return {
      formData,
      onClick,
      formPath,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}
.login {
  background-image: url(../assets/2.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.font-size {
  text-decoration: underline;
  font-size: 15px;
  color: white;
}
.input-md30 {
  width: 300px;
  height: 30px;
  margin: 0 10px;
}
input::-webkit-input-placeholde {
  /* color: azure; */
  font-size: 15px;
  font-weight: bold;
}
.input-text {
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: rgba(43, 21, 21, 0.3);
}
.but-bac {
  background-color: rgba(6, 6, 29, 0.7);
  border: none;
  outline: none;
  /* background-color:rgba(0,0,0,0); */
  border-radius: 5px;
}
.but-bac:hover {
  background-color: rgb(47, 47, 250);
  border-radius: 7px;
}
.font-but {
  color: azure;
  font-size: 15px;
  font-weight: bold;
}
.login-box {
  padding: 30px;
  width: 500px;
  border-radius: 10px;
  border: 1px solid grey;
}
.left {
  background: red;
}
.right {
  background: blue;
}
table {
  border-collapse: collapse;
}
.table {
  margin-top: 20px;
  display: table;
}
.table-row {
  display: table-row;
}
.table-cell {
  display: table-cell;
}
.body {
  padding: 20px 30px;
}
</style>
