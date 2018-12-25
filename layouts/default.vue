<template>
  <div>
    <el-container>
      <el-header class="top-header">
        <el-row>
          <el-col :span="4">
            <nuxt-link to="/">
              <Logo/>
            </nuxt-link>
          </el-col>
          <el-col :span="20">
            <TopNav/>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <nuxt/>
      </el-main>
      <!-- <el-footer>
        <Footer/>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TopNav,
    Logo,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  width: calc(100% - 20px);
}

.top-header {
  background-color: #262426;
  margin: 0 -20px;
}
</style>
