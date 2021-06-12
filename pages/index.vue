<template>
  <div class="container">
    <div class="section links">
      <Nav />
    </div>
    <div class="section tribute">
      <h1 class="title">In Loving Memory</h1>
      <img height="370" src="~/assets/frontimage.jpg" alt="In loving memory" />
      <div class="subtitle"><div class="name">{{ $config.name }}</div>{{ $config.dates }}</div>
      <a class="button" target="_blank" rel=”noopener” href="https://memorials.affordablefuneralservices.com/janet-davidson/4642107/obituary.php">Online Condolences</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
