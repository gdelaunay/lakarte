$(document).ready(function () {

  $("#focus").toggleClass("hidden");
  $("#imgfocus > img ").toggleClass("hidden");
  $("#txtfocus > div ").toggleClass("hidden");

  setTimeout(function(){
  var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  var isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);
  var isFirefox = /firefox/i.test(navigator.userAgent)

  if((isMac && isSafari) || isIOS || isFirefox){
    window.location.href = "http://www.lakartekuikui.fr/v2";
  }

  }, 1000);

  $("#back").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#imgfocus").removeClass("erdre");
    $("#imgfocus > img ").removeClass("hidden");
    $("#imgfocus > img ").toggleClass("hidden");
    $("#txtfocus > div ").removeClass("hidden");
    $("#txtfocus > div ").toggleClass("hidden");
  });

  $("#back").mouseenter(function () {
    $("#back").toggleClass("hover2");
  });

  $("#back").mouseleave(function () {
    $("#back").toggleClass("hover2");
  });

  $("#centre").mouseenter(function () {
    $("#centre").parent().toggleClass("hover");
  });

  $("#centre").mouseleave(function () {
    $("#centre").parent().toggleClass("hover");
  });

  $("#centre").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#centrefc").toggleClass("hidden");
    $("#centretxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#bellevue").mouseenter(function () {
    $("#bellevue").parent().toggleClass("hover");
  });

  $("#bellevue").mouseleave(function () {
    $("#bellevue").parent().toggleClass("hover");
  });

  $("#bellevue").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#bellevuefc").toggleClass("hidden");
    $("#bellevuetxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#zola").mouseenter(function () {
    $("#zola").parent().toggleClass("hover");
  });

  $("#zola").mouseleave(function () {
    $("#zola").parent().toggleClass("hover");
  });

  $("#zola").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#zolafc").toggleClass("hidden");
    $("#zolatxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#felix").mouseenter(function () {
    $("#felix").parent().toggleClass("hover");
  });

  $("#felix").mouseleave(function () {
    $("#felix").parent().toggleClass("hover");
  });

  $("#felix").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#felixfc").toggleClass("hidden");
    $("#felixtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#malakoff").mouseenter(function () {
    $("#malakoff").parent().toggleClass("hover");
  });

  $("#malakoff").mouseleave(function () {
    $("#malakoff").parent().toggleClass("hover");
  });

  $("#malakoff").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#malakofffc").toggleClass("hidden");
    $("#malakofftxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#ile").mouseenter(function () {
    $("#ile").parent().toggleClass("hover");
  });

  $("#ile").mouseleave(function () {
    $("#ile").parent().toggleClass("hover");
  });

  $("#ile").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#ilefc").toggleClass("hidden");
    $("#iletxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#breil").mouseenter(function () {
    $("#breil").parent().toggleClass("hover");
  });

  $("#breil").mouseleave(function () {
    $("#breil").parent().toggleClass("hover");
  });

  $("#breil").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#breilfc").toggleClass("hidden");
    $("#breiltxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#nord").mouseenter(function () {
    $("#nord").parent().toggleClass("hover");
  });

  $("#nord").mouseleave(function () {
    $("#nord").parent().toggleClass("hover");
  });

  $("#nord").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#nordfc").toggleClass("hidden");
    $("#nordtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#erdre").mouseenter(function () {
    $("#erdre").parent().toggleClass("hover");
  });

  $("#erdre").mouseleave(function () {
    $("#erdre").parent().toggleClass("hover");
  });

  $("#erdre").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#erdrefc").toggleClass("hidden");
    $("#erdretxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
    $("#imgfocus").toggleClass("erdre");
  });

  $("#doulon").mouseenter(function () {
    $("#doulon").parent().toggleClass("hover");
  });

  $("#doulon").mouseleave(function () {
    $("#doulon").parent().toggleClass("hover");
  });

  $("#doulon").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#doulonfc").toggleClass("hidden");
    $("#doulontxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#sud").mouseenter(function () {
    $("#sud").parent().toggleClass("hover");
  });

  $("#sud").mouseleave(function () {
    $("#sud").parent().toggleClass("hover");
  });

  $("#sud").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#sudfc").toggleClass("hidden");
    $("#sudtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#cloud").mouseenter(function () {
    $("#cloud").parent().toggleClass("hover");
  });

  $("#cloud").mouseleave(function () {
    $("#cloud").parent().toggleClass("hover");
  });

  $("#cloud").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#cloudfc").toggleClass("hidden");
    $("#cloudtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });


  $("#reze").mouseenter(function () {
    $("#reze").parent().toggleClass("hover");
  });

  $("#reze").mouseleave(function () {
    $("#reze").parent().toggleClass("hover");
  });

  $("#reze").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#rezefc").toggleClass("hidden");
    $("#rezetxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });
})
