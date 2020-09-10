// 判断是否移动端
function goPAGE() {

  function resetFontSize() {
    var baseFontSize = 100;
    var designWidth = 750;
    var width = window.innerWidth;
    var currentFontSize = (width / designWidth) * baseFontSize
    document.getElementsByTagName('html')[0].style.fontSize = currentFontSize + 'px'
  }

  window.onresize = function () {
    resetFontSize()
  };
  resetFontSize();
}
goPAGE();
var vm = new Vue({
  el: '#app',
  data: {
    order: "",
    reg: /^[0-9]{10}$/,
    tips: "您可以输运单号进行查询",
  },
  methods: {
    search: function () {
      if (this.reg.test(this.order)) {
        sessionStorage.setItem('test', JSON.stringify(this.order));
        location.href = '/message.html?order_no=' + this.order;
      } else {
        this.order = '';
        this.tips = "请输入9位运单号"
      }
    }
  }
});