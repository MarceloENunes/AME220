var styles = './src/ac.png';
var imgs = [
  './src/ac.png',
  './src/ac1.png',
  './src/ac2.png'
]
var img = 0;
var AI = {
  show: function (styles) {
    var mu = '<div class=\'fadeBox\' onclick=\'changeImage(event,styles)\' tabindex=\'1\' onkeypress=\'changeImage(event,styles)\'> <div class=\'spinner\'> </div> </div>';
    document.body.innerHTML += mu;
  },
  hide: function () {
    $('.fadeBox').remove();
  }
}
function startUP() {
  AI.show(styles);
}
function changeImage(e, path) {
  styles = imgs[img];
  img++;
  if (img == 3)
  img = 0;
  // if (e.keyCode == 13)
  // console.log('Enter!')
  if (e.keyCode == 13)
  AI.hide();
   else {
    //console.log(img)
    document.getElementsByClassName('spinner') [0].style.backgroundImage = 'url(' + path + ')';
  }
}
