<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <table>
      <th>学习目录</th>
       <tr>
         <td>第一章</td>
         <td>第二章</td>
       </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'title',
  data () {
    return {
      msg: '欢迎学习golang'
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
