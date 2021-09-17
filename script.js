var app = new Vue({
    el: '#app',
    data: {
      randomNumber:  Math.floor(Math. random() * (100 - 0 + 1)).toString()
    }
  });
  var app2 = new Vue({
    el: '#app-2',
    data: {
      seen: false,
      items:[
          "item 1",
          "item 2",
          "item 3"
      ]
    }
  })
  function toggleSee(){
      app2.seen = !app2.seen;
  }