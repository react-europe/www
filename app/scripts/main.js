"use strict";

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(".nav").find(".active-re").removeClass("active-re");
   $(this).parent().addClass("active");
   $(this).parent().addClass("active-re");
});

var hash = location.hash;
if(hash!==""){
var a = $("a[href="+hash+"]");
$(".nav").find(".active").removeClass("active");
$(".nav").find(".active-re").removeClass("active-re");
a.parent().addClass("active");
a.parent().addClass("active-re");
}
$('.nav a').on('click', function(){
   if($(".navbar-toggle").is(":visible")){
    $(".navbar-toggle").click();
   }
   });

$(".toggle-modal[type=button]").click(function(){
    $("#talkModal").modal();
    $("#talkModalBody").html($($(this).data("target")).html());
})
$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
        var offset = $('.panel.panel-default > .panel-collapse.in').offset();
        if(offset) {
            $('html,body').animate({
                scrollTop: $('.panel-title a').offset().top -50
            }, 500); 
        }
    }); 
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
} else {
  appCacheNanny.start({checkInterval: 1800000});
}

$.get("https://api.eventlama.com/geoip", function(response) {
    console.log(response.CountryCode);
    if(response && response.CountryCode && response.CountryCode==="FR"){
      $(".formation-link, .formation-ticket").removeClass("hidden");
    }
});

$('[data-toggle="tooltip"]').tooltip();
