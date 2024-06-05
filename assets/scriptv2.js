$(document).ready(function () {

  $("#focus").toggleClass("hidden");
  $("#imgfocus > img ").toggleClass("hidden");
  $("#txtfocus > div ").toggleClass("hidden");

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
    $("#centreimg").parent().toggleClass("hover");
  });

  $("#centre").mouseleave(function () {
    $("#centreimg").parent().toggleClass("hover");
  });

  $("#centre").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#centrefc").toggleClass("hidden");
    $("#centretxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#bellevue").mouseenter(function () {
    $("#bellevueimg").parent().toggleClass("hover");
  });

  $("#bellevue").mouseleave(function () {
    $("#bellevueimg").parent().toggleClass("hover");
  });

  $("#bellevue").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#bellevuefc").toggleClass("hidden");
    $("#bellevuetxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#zola").mouseenter(function () {
    $("#zolaimg").parent().toggleClass("hover");
  });

  $("#zola").mouseleave(function () {
    $("#zolaimg").parent().toggleClass("hover");
  });

  $("#zola").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#zolafc").toggleClass("hidden");
    $("#zolatxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#felix").mouseenter(function () {
    $("#feliximg").parent().toggleClass("hover");
  });

  $("#felix").mouseleave(function () {
    $("#feliximg").parent().toggleClass("hover");
  });

  $("#felix").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#felixfc").toggleClass("hidden");
    $("#felixtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#malakoff").mouseenter(function () {
    $("#malakoffimg").parent().toggleClass("hover");
  });

  $("#malakoff").mouseleave(function () {
    $("#malakoffimg").parent().toggleClass("hover");
  });

  $("#malakoff").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#malakofffc").toggleClass("hidden");
    $("#malakofftxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#ile").mouseenter(function () {
    $("#ileimg").parent().toggleClass("hover");
  });

  $("#ile").mouseleave(function () {
    $("#ileimg").parent().toggleClass("hover");
  });

  $("#ile").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#ilefc").toggleClass("hidden");
    $("#iletxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#breil").mouseenter(function () {
    $("#breilimg").parent().toggleClass("hover");
  });

  $("#breil").mouseleave(function () {
    $("#breilimg").parent().toggleClass("hover");
  });

  $("#breil").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#breilfc").toggleClass("hidden");
    $("#breiltxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#nord").mouseenter(function () {
    $("#nordimg").parent().toggleClass("hover");
  });

  $("#nord").mouseleave(function () {
    $("#nordimg").parent().toggleClass("hover");
  });

  $("#nord").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#nordfc").toggleClass("hidden");
    $("#nordtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#erdre").mouseenter(function () {
    $("#erdreimg").parent().toggleClass("hover");
  });

  $("#erdre").mouseleave(function () {
    $("#erdreimg").parent().toggleClass("hover");
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
    $("#doulonimg").parent().toggleClass("hover");
  });

  $("#doulon").mouseleave(function () {
    $("#doulonimg").parent().toggleClass("hover");
  });

  $("#doulon").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#doulonfc").toggleClass("hidden");
    $("#doulontxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#sud").mouseenter(function () {
    $("#sudimg").parent().toggleClass("hover");
  });

  $("#sud").mouseleave(function () {
    $("#sudimg").parent().toggleClass("hover");
  });

  $("#sud").click(function () {
    $("#map").toggleClass("hidden");
    $("#focus").toggleClass("hidden");
    $("#sudfc").toggleClass("hidden");
    $("#sudtxt").toggleClass("hidden");
    $("#back").toggleClass("hidden");
  });

  $("#cloud").mouseenter(function () {
    $("#cloudimg").parent().toggleClass("hover");
  });

  $("#cloud").mouseleave(function () {
    $("#cloudimg").parent().toggleClass("hover");
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
//test
