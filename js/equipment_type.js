// dom加载之前执行的操作(根据设备类型使用相应的样式表)
// 获取送货单号
function getNo() {
  var url = location.search; //获取url中"?"符后的字串 ('?modFlag=business&role=1')
  var theRequest = new Object();
  var no;
  if (url.indexOf("?") != -1) {
    var str = url.substr(1); //substr()方法返回从参数值开始到结束的字符串；
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

//根据设备加载不同的样式
var setStyle = function (cssArr) {
  var i = 0;
  len = cssArr.length;
  for (i; i < len; i++) {
    document.write('<link href="' + cssArr[i] + '" type="text/css" rel=stylesheet>');
  }
};

// 判断是否移动端
function goPAGE() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //判断访问环境是 移动端 则加载以下样式
    setStyle(['css/app.css']);

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
    return 1;
  } else {
    setStyle(['css/pc.css']);
    return 2;
  }
}
var pc_app = goPAGE(); // 存储设备类型供后面使用

// 判断浏览器类型
function ie() {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    return 'ie'; // ie11以下
  } else if (isEdge) {
    return 'edge'; //edge
  } else if (isIE11) {
    return 11; //IE11  
  } else {
    return -1; //不是ie浏览器
  }
};
ie();