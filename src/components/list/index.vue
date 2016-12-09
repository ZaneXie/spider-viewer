<template>
  <div class="hello">
    <h1>{{ type }}</h1>
    <div><span>current: {{ current }}</span></div>
    <div>
      <span>todo:</span>
      <ul v-for="item in items">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
