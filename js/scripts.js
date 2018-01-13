// scripts.js
$(function(){
	var carouselList = $("#carousel ul");

	function changeSlide() {
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
  }

  var interval = setInterval(changeSlide, 3000);

  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
		$(firstItem).removeClass("active");
		setActiveElement();
  }

//DODATKOWE ĆWICZENIE - uzyskanie podobnego wyniku jak tutaj http://sachinchoolur.github.io/lightslider/

	function setActiveElement(){
		var newFirstItem = carouselList.find("li:first").addClass("active");
		var indexOfActive = newFirstItem.attr("id");
		console.log(indexOfActive);
		var newIndexCircle = '#Circle-'+indexOfActive;
		console.log(newIndexCircle);
		$(".navig-elements").find(".active").removeClass("active");
		$('.navig-elements').find(newIndexCircle).addClass("active");

	}





//przywrócenie animacji
	carouselList.dblclick(function(){
		interval = setInterval(changeSlide, 3000);
	});

// próba zatrzymywania aminacji po najechaniu na przycisk :(
	var hhhh = $("#controlers");
	hhhh.hover(function(){
		console.log("tu się powinno zatrzymać");
	}, function(){
		console.log("a tutaj uruchomić");
	});



//przesunięcie zdjęć w prawo
	function changeLastSlide() {
	carouselList.animate({'marginRight':-400}, 500, moveLastSlide);
	}

	function moveLastSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
		$(firstItem).removeClass("active");
		setActiveElement();
	}


	var forward = $('#forward').click(function(){
		clearInterval(interval);
		moveLastSlide();
		console.log("powinno pójść do tyłu");
	});

//Przesunięcie zdjęć w lewo
	var backward = $('#backward').click(function(){
		clearInterval(interval);
		moveFirstSlide();
		console.log('powinno pójść do przodu');
	});


});
