$(function ()
{
  var app = $('#app'),init = $('#init'),layer = $('#layer'),input = $('#inp-cover input'),button = $('button');

  function toggleApp()
  {
    app.toggleClass('opened');

    if (button.hasClass('shadow'))
    button.toggleClass('shadow');else

    setTimeout(function () {button.toggleClass('shadow');}, 300);

    if (app.hasClass('opened'))
    {
      setTimeout(function () {input.toggleClass('move-up');}, 200);
      setTimeout(function () {input.focus();}, 500);
    } else

    setTimeout(function () {input.toggleClass('move-up').val('');}, 200);

    if (!layer.hasClass('sl'))
    {
      setTimeout(function ()
      {
        layer.addClass('sl');
      }, 800);
    } else

    setTimeout(function () {layer.removeClass('sl');}, 300);
  }

  layer.on('click', toggleApp);
  init.on('click', toggleApp);
});
{
  function myFunction() {
    var x = document.getElementById("myText");
    var currentVal = x.value;
    document.getElementById("link1").innerHTML = "https://www.zoho.com/" + currentVal;
    document.getElementById("link2").innerHTML = "https://prezoho.zoho.com/" + currentVal;
    document.getElementById("link3").innerHTML = "https://zcms.zohocorp.com/" + currentVal;
}
function convert1() {
    var text = document.getElementById("link1").innerText;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var text1 = text.replace(exp, '<br><a target="_blank" href="$1">$1</a>');
    var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    document.getElementById("converted_url1").innerHTML = text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
}
function convert2() {
    var text = document.getElementById("link2").innerText;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var text1 = text.replace(exp, '<br><a target="_blank" href="$1">$1</a>');
    var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    document.getElementById("converted_url2").innerHTML = text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
}
function convert3() {
    var text = document.getElementById("link3").innerText;
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    var text1 = text.replace(exp, '<br><a target="_blank" href="$1">$1</a>');
    var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    document.getElementById("converted_url3").innerHTML = text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');
}
}