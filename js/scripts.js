// scripts.js
$(function(){
	var carouselList = $("#carousel ul");
  function changeSlide() {
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }
  var interval = setInterval(changeSlide, 4500);

  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
    carouselList.css({marginLeft:0});

  }

	function activateSlide() {
		var firstItem = $("#imgList").find("li:first");
		$(firstItem).css("border-radius", "20px").addClass("active");
	}

	function deactivateSlide() {
		var lastItem = $("#imgList").find("li:last");
		$(lastItem).css("none").removeClass("active");
	}


//DODATKOWE ĆWICZENIE - uzyskanie podobnego wyniku jak tutaj http://sachinchoolur.github.io/lightslider/

/* to zasąpione przez :hover
	var navigElements = $(".navig-elements").find("li");
	$(navigElements).mouseover(function(){
		$(this).css('color', 'red');
	});
	$(navigElements).mouseout(function(){
		$(this).css('color', 'white');
	});
*/


/* próba zatrzymywania aminacji po najechaniu na przycisk :(

var backward = $(".navig-elements").find("#backward");
$(backward).mouseover(function stopCarousel(){
	clearInterval(interval);
});
$(backward).mouseout(setInterval(changeSlide, 4500));

*/

	var backward = $("#backward");
	backward.click(function moveBackward() {
	carouselList.animate({'marginLeft': -400}, 500);
});


	var forward = $("#forward");
	forward.click(function moveForward() {
		carouselList.animate({'marginLeft': 400}, 500);
		var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.before(firstItem);
    carouselList.css({marginLeft:0});
	});

});
