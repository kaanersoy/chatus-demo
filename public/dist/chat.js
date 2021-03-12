const vueApp = new Vue({
  el: '#app',
  data: function () {
    return {
      app: 'helloworld',
      socket: null,
    };
  },
  methods: {
    createSocket: function () {
      this.socket = io('http://localhost:3000', {
        auth: { username: window.localStorage.getItem('username') },
      });
    },
  },
  mounted() {
    this.createSocket();
  },
});

vueApp.socket.on('user_count', (data) => {
  console.log(data);
  console.log(window.localStorage.getItem('username'));
});
