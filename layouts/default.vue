<template>
  <div>
    <el-container>
      <el-header class="top-header">
        <TopNav/>
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
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
}

body {
  margin: 0;
  width: calc(100% - 20px);
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top-header {
  background-color: #262426;
  margin: 0 -20px;
}
</style>
