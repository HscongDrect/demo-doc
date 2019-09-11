<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      text-color="#333333"
      active-text-color="#409EFF">
      <!-- <div class="logo">
        <img src="./images/logo.jpg"
          class="logo">
      </div> -->
      <sidebar-item v-for="route in permission_routers"
        :key="route.name"
        :item="route"
        :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollbar-wrapper {
  .logo {
    width: 100%;
    height: auto;
  }
}
</style>

