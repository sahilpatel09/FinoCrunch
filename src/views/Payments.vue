<template>
  <div class="p-4 md:p-12">
  <div class="grid grid-cols-3 gap-4 sm:px-5">
    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">
      <VerticalCards cardTitle="Banks"/>
    </div>
    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">
      <VerticalCards cardTitle="Cards" />
    </div>

    <div class="col-span-3 sm:col-span-1 bg-gray-900 p-4">
      <VerticalCards cardTitle="Online Payments" />
    </div>
  </div>
  </div>
</template>

<script>
import VerticalCards from "@/components/Dashboard/VerticalCards";
export default {
  name: "Payments",
  components: {VerticalCards}
}
</script>

<style scoped>

</style>