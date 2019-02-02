console.assert(typeof Vue !== 'undefined');
var items = [
  {
    name: '鉛筆', price: 300, quantity: 3
  },
  {
    name: 'ノート', price: 400, quantity: 0
  },
  {
    name: '消しゴム', price: 500, quantity: 0
  }
];
var vm = new Vue({
  el: '#app',
  data: { // dataプロパティ
    items: items
  }
});
