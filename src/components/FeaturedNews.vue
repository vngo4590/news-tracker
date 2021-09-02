<template>
  <div>
    <b-carousel
      id="carousel-1"
      class="carousel-limit"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
        <a  v-for="news in newsList" target="_blank"
        v-bind:key="news.__ob__.dep.id" v-bind:href="news.url">
        <b-carousel-slide
        v-bind:caption="news.title"
        v-bind:text="news.abstract"
        v-bind:img-src="news.multimedia[0].url"
      >
      {{news.byline}} on
      {{getDateString(news.created_date)}}
      </b-carousel-slide>
      </a>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "FeaturedNews",
  props: {
    newsList: Array,
  },
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
    getDateString(dateStr) {
        if (!dateStr) {
            return '';
        }
        var date = new Date(dateStr);
        return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
    }
  },
  async created() {
    
  },
};
</script>

<style>
    .carousel .carousel-item img {
        max-height: 400px;
        object-fit: cover;
        object-position: 20% 30%; /* try 20px 10px */ 
    }
</style>