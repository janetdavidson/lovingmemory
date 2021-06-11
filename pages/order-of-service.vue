<template>
  <div class="container">
    <div class="section links">
      <Nav />
    </div>
    <div class="section details">
      <h1 class="title">Order of service</h1>
      <p><em>Wednesday 16th June 2021</em></p>
      <h2>Memorial Service <span>11:00 am</span></h2>
      <ul class="fa-ul">
        <ListItem>Service starts at 11:00 am at Cedar City Stake Center</ListItem>
        <ListItem>Entrance music</ListItem>
        <ListItem>Welcome &amp; Opening Prayer ( Lorraine Davidson )</ListItem>
        <ListItem>Remembrances - Family &amp; Friends</ListItem>
        <ListItem>Short message</ListItem>
        <ListItem>Closing prayer ( Kristen Davidson )</ListItem>
      </ul>
      <h2>Cedar City Cemetery <span>1:00 pm</span></h2>
      <ul class="fa-ul">
        <ListItem>Service starts at 1:00 pm at Cedar City Cemetery Columbarium</ListItem>
        <ListItem>Dedicatory Prayer</ListItem>
      </ul>
    </div>
    <Cemetery/>
  </div>
</template>

<script>
import Cemetery from "~/components/Cemetery";
export default {
  components: {Cemetery}
}
</script>

<style lang="scss">
</style>
