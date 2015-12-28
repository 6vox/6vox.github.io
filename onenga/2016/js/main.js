;(function ( $, window, document, undefined ) {
$(function(){

  // タイムライン
  var tl_sp = new TimelineMax({delay:0.5, repeat:0, repeatDelay:1});
  var qr_icon_time = 0;

  tl_sp
    .to(".qr-icon", 3, {opacity: "1"},qr_icon_time)
    .to(".kinga_row1", 3, {opacity: "1"},qr_icon_time+2)
    .to(".kinga_row2", 3, {opacity: "1"},qr_icon_time+4)
    .to(".copy-right", 3, {opacity: "1"},qr_icon_time+6)

    .to(".qr-icon", 2, {opacity: "0"},qr_icon_time+10)
    .to(".kinga_row1", 2, {opacity: "0"},qr_icon_time+10)
    .to(".kinga_row2", 2, {opacity: "0"},qr_icon_time+10)
    .to(".copy-right", 2, {opacity: "0"},qr_icon_time+10)

    .to(".full_member", 6, {opacity: "1"},qr_icon_time+12)
    .to(".full_member", 3, {opacity: "0"},qr_icon_time+18)
    .to(".campany-logo", 4, {opacity: "1"},qr_icon_time+20)

});
})(jQuery, window, document);
