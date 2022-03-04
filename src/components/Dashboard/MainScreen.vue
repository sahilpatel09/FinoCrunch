<template>
  <main class="container mx-w-6xl mx-auto py-4">
    <div class="flex flex-col space-y-8">
      <WealthCards />
      <CategoriesCards />
    </div>
  </main>
</template>

<script>
import CategoriesCards from "@/components/Dashboard/CategoriesCards";
import WealthCards from "@/components/Dashboard/WealthCards";
export default {
  name: "MainScreen",
  components: { CategoriesCards, WealthCards },
};
</script>

<style scoped></style>
