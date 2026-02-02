/* global Vue */

const App = {
  data() {
    return {
      // TODO: declare reactive variables
      counters: [0, 0],
    };
  },

methods: {
  butclicked(i) {
    if (i === 0) this.counters[0] += 1;
    else this.counters[1] += 2;
  },
},

  computed: {
    total() {
      return this.counters[0] 
      + this.counters[1];},
    // TODO: helper functions, but reactive
    //       these are accessed like variables and trigger updates
  },
};

Vue.createApp(App).mount("#app");
