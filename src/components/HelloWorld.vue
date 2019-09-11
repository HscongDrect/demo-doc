<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <div class="msg">
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'hello'
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.hello {
  .msg {
    // font-size: 33px;
    color: #00ff00;
  }
}
</style>
