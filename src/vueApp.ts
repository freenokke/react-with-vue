import Vue from 'vue';

// export const vueTest = new Vue({});

console.log('Vue');

export const vueApp = new Vue({
  el: '#vueApp',
  data: {
    message: 'Привет, Vue!'
  },
  props: [
    'postTitle',
    'onclick',
  ],
  template: `
    <div>
      <button v-on:click="clickHandler">Vue Button</button>
      <div>
        {{postTitle}}
      </div>
      <div>
        {{message}}
      </div>
    </div>`,
  methods: {
    clickHandler: function () {
      this.onclick();
      console.log('vue method click');
    },
  },
});
