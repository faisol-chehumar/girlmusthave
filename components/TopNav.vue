<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    class="top-menu"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="(menu, index) in menuList"
      :key="`menu-${index}`"
      :index="index.toString()"
      :href="menu.path"
    >
      {{ menu.title }}
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['menuList', 'activeIndex']),
  methods: {
    handleSelect(key) {
      console.log(key)
    }
  }
}
</script>

<style scoped>
.top-menu {
  background-color: transparent;
}

.el-menu--horizontal > .el-menu-item {
  color: #fff;
  text-transform: uppercase;
}

.el-menu--horizontal > .el-menu-item.is-active {
  color: #f1a1b0;
}

.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-menu-item {
  border: 0;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):active,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
  background-color: transparent;
  color: #fd6081;
}
</style>
