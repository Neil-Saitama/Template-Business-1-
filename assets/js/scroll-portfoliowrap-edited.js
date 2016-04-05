jQuery(document).ready(function(jQuery){
// Portfolio Isotope
var container = jQuery('#portfolio-wrap'); 


container.isotope({
animationEngine : 'best-available',
  animationOptions: {
	duration: 200,
	queue: false
  },
layoutMode: 'fitRows'
}); 

jQuery('#filters a').click(function(){
jQuery('#filters a').removeClass('active');
jQuery(this).addClass('active');
var selector = jQuery(this).attr('data-filter');
container.isotope({ filter: selector });
	setProjects();
  return false;
});


function splitColumns() { 
  var winWidth = $(window).width(), 
	columnNumb = 1;
  
  
  if (winWidth > 1024) {
	columnNumb = 4;
  } else if (winWidth > 900) {
	columnNumb = 2;
  } else if (winWidth > 479) {
	columnNumb = 2;
  } else if (winWidth < 479) {
	columnNumb = 1;
  }
  
  return columnNumb;
}   

function setColumns() { 
  var winWidth = $(window).width(), 
	columnNumb = splitColumns(), 
	postWidth = Math.floor(winWidth / columnNumb);
  
  container.find('.portfolio-item').each(function () { 
	jQuery(this).css( { 
	  width : postWidth + 'px' 
	});
  });
}   

function setProjects() { 
  setColumns();
  container.isotope('reLayout');
}   

container.imagesLoaded(function () { 
  setColumns();
});


jQuery(window).bind('resize', function () { 
  setProjects();      
});

});
jQuery( window ).load(function() {
jQuery('#all').click();
return false;
});