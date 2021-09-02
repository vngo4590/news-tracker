<template>
  <div>
    <b-row>
      <b-col cols='12' sm='12' md='6' lg='4' v-for="news in newsList" v-bind:key="news.__ob__.dep.id">
          <NewsCard :newsObj="news"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NewsCard from "@/components/NewsCard";
export default {
  name: "NewsCards",
  components: {
    NewsCard
  },
  props: {
    newsList: Array
  },
};
</script>

<style scoped>
</style>