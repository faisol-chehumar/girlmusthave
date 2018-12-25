<template>
  <div>
    <el-container>
      <el-header class="top-header">
        <el-row>
          <el-col
            :span="1"
          >
            <img
              src="http://www.pngmart.com/files/4/Barbie-Logo-Transparent-PNG.png"
              alt="GirlMusthave's Logo"
              width="100%"
            >
          </el-col>
          <el-col
            :span="20"
          >
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
import Footer from '~/components/Footer.vue'

export default {
  components: {
    TopNav,
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
