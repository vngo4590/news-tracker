<template>
    <b-card
    v-bind:title="newsObj.title"
    v-bind:img-src="newsObj.multimedia[0].url"
    v-bind:img-alt="newsObj.multimedia[0].caption"
    img-top
    tag="article"
    class="mb-2 news-card"
  >
    <b-card-text>
      <p>{{newsObj.abstract}}</p>
      <em><p>{{newsObj.byline}} on {{getDateString(newsObj.created_date)}}</p></em> 
    </b-card-text>

    <b-button v-bind:href="newsObj.url" variant="primary">Go</b-button>
  </b-card>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    newsObj: Object,
  },
};
</script>

<style scoped>
  .news-card img {
    height: 200px;
    object-fit: cover;
    object-position: 20% 30%; 
  }
</style>