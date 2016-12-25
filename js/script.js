
// == TAB CONTROL ==================================== //
// =================================================== //
const TAB_REVEAL_WIDTH = 1140;
var tabs = [];
var tabContainers = [];
function prepareTabs() {
    $('#tabs a').each(function () {
      // note that this only compares the pathname, not the entire url
      // which actually may be required for a more terse solution.
        if (this.pathname == window.location.pathname) {
            tabs.push(this);
            tabContainers.push($(this.hash).get(0));
        }
    });
 	$(tabs).click(function (event) {
		// Stop the screen scrolling down to the section you click through to
		event.preventDefault();
		// Set the selection then update the tabs
        $(tabs).removeClass('selected');
        $(this).addClass('selected');
		updateTabs();
    });
}
function updateTabs() {
	if ($(window).width() >= 1140) {
		$('#tabs').hide();
		$(tabContainers).show();
	}
	else {
		$('#tabs').show();
		$(tabContainers).hide();
		$(tabs).each(function(i) { if ($(this).hasClass('selected')) $(tabContainers[i]).show(); });
	}	
}

// == GALLERY BUILDER ================================ //
// =================================================== //
const GALLERY_THREECOL_WIDTH = 992;
var galleryExpanded =  false;
var galleryGroups = [];
function updateGallery() {
	// If the window is wide enough to expand into three columns
	if ($(window).width() >= GALLERY_THREECOL_WIDTH) { expandGallery(); }
	else { compressGallery(); }
}
function prepareGallery() {
	// Get the children of the gallery and set each of the three lists
	$('#gallery').children().each(function() {
		if ($(this).hasClass('grid-1')) galleryGroups[0] = $(this);
		else if ($(this).hasClass('grid-2')) galleryGroups[1] = $(this);
		else if ($(this).hasClass('grid-3')) galleryGroups[2] = $(this);
	});
}
function expandGallery() {
	if (galleryExpanded) return false;
	if (galleryGroups.length==0) prepareGallery();
	var elements = [];
	// Run through left and right columns pulling out all centerable content
	$(galleryGroups[0]).children().each(function() { if ($(this).hasClass('left-center')) { elements.push($(this).detach()); } });
	$(galleryGroups[2]).children().each(function() { if ($(this).hasClass('right-center')) { elements.push($(this).detach()); } });
	// add them all to the middle column
	$(elements).each(function(){ $(galleryGroups[1]).append($(this)); });
	galleryExpanded = true;
}
function compressGallery() {
	if (!galleryExpanded) return false;
	if (galleryGroups.length==0) prepareGallery();
	var elements = [];
	// clear out the middle column
	$(galleryGroups[1]).children().each(function() { elements.push($(this).detach()); });
	// and add the content to either the left or right columns
	$(elements).each(function(){ 
		if ($(this).hasClass('left-center')) $(galleryGroups[0]).append($(this));
		else $(galleryGroups[2]).prepend($(this));
	});
	galleryExpanded = false;
}

// == EVENTS ========================================= //
// =================================================== //
function rotateWheelLikeABoss() {
	var rVal = ($(window).width() + $(window).height() + $(window).scrollTop())/5;
	var rStr = rVal.toString() + "deg";
	$("#banner-tyre").css('-webkit-transform','rotate('+rStr+')');
	$("#banner-tyre").css('-moz-transform','rotate('+rStr+')');
	$("#banner-tyre").css('-o-transform','rotate('+rStr+')');
	$("#banner-tyre").css('-ie-transform','rotate('+rStr+')');
	$("#banner-tyre").css('transform','rotate('+rStr+')'); 
}

// == EVENTS ========================================= //
// =================================================== //
$(document).ready(function () {
	prepareTabs();
	updateTabs();
	updateGallery();
});
$(window).resize(function () {
	updateTabs();
	updateGallery();
	rotateWheelLikeABoss();
});
$(window).scroll(function () {
	rotateWheelLikeABoss();
	console.log($(window).scrollTop());
});