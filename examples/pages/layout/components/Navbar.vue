<template>
  <el-menu class="navbar"
    mode="horizontal">
    <hamburger :toggle-click="toggleSideBar"
      :is-active="sidebar.opened"
      class="hamburger-container" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">

    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from 'epl/components/Breadcrumb'
import Hamburger from 'epl/components/Hamburger'
export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  data() {
    return {

    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  z-index: 1000;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      vertical-align: top;
      margin-top: 15px;
    }
    .international {
      vertical-align: top;
    }
    .nick-name-container {
      margin-right: 30px;
      .nick-name-wrapper {
        cursor: pointer;
        .el-icon-caret-bottom {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
