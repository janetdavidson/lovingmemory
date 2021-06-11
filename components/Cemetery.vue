<template>
  <google-map id="map" ref="Map">

    <google-map-directions
      v-for="(direction, index) in directionsList"
      :key="index"
      :origin="direction.origin"
      :destination="direction.destination"
      :travel-mode="direction.travelMode"
      @directions-changed="onDirectionsChange"
      preserve-viewport></google-map-directions>

  </google-map>
</template>
<script>
directionsList = [{
  "origin": "Bologna",
  "destination": "Roma",
  "travelMode": "DRIVING"
}];
</script>
