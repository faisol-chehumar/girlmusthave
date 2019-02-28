<template>
  <section class="container">
    <div>
      Hello
      <el-switch v-model="value1" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value1: true
    }
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

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
