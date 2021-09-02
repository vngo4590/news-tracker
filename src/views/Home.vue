<template>
  <div class="home">
    <FeaturedNews :newsList="newsList.slice(0,5)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedNews from "@/components/FeaturedNews";
export default {
  name: "Home",
  components: {
    FeaturedNews,
  },
  data() {
    return {
      newsList: [],
    };
  },
  methods: {
    getStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    },
    getJson(response) {
      return response.json();
    },
    async fetchNews() {
      const res = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=ZG0mUIe8AJlQ70QGY08p8GeSwVYbdTKc"
      ).then(this.status).catch(function (error) {
          console.log("Request failed", error);
        });
      const data = await res.json();
      return data.results;
    },
  },
  async mounted() {
    this.newsList = await this.fetchNews();
  },
};
</script>
