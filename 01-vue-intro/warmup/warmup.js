/* global Vue */

const App = {
  data() {
    return {
      // TODO: declare reactive variables
      counters: [0, 0],
    };
  },

  methods: {
      // TODO: helper functions
    butclicked(evt) {
    this.counter[0] +=1;
  },
  butclicked(evt) {
    this.counters[1] +=2;
  },

  computed: {
    // TODO: helper functions, but reactive
    //       these are accessed like variables and trigger updates
  },
};

Vue.createApp(App).mount("#app");
