$('p').click(function ()
             {
	             $(this).slideToggle('slow');
             });

$('button').mouseenter(function ()
					   {
	                       $(this).removeClass('makeRed').addClass('makeBlue');
					   });

$('button').mouseleave(function ()
					   {
	                       $(this).removeClass('makeBlue').addClass('makeRed');
					   }    
);

$(document).ready(function ()
                  {
	                  $(".box").on("click", function ()
	                  {
		                  /**
		                   * When we click on an element that has
		                   * a 'box' class, this event will be fired.
		                   */
		                  var classNames = $(this).attr("class").split(" ");
		                  var boxClass = classNames[0];
						  var className = classNames[1];
						  if ($(this).css("background-color") == "rgb(255, 0, 0)")
						  {
							  // If this object is already red, turn it black
							  $("." + className).css("background-color", "#000");
						  } else
						  {
							  // Else turn all elements with a box class black
							  // and then change the color of all elements
							  // with the same class name as the clicked element
							  // to red.
							  $("." + boxClass).css("background-color", "#000");
							  $("." + className).css("background-color", "red");
						  }
	                  });
                  });

// Challenge code
$('p').click(function ()
             {
	             $(this).text("Changed only the text for this paragraph");
             });

$('.card').mouseenter(function ()
                      {
	                      $(this).fadeTo(2000, 0.2).fadeTo(2000, 1);
                      });

$('.module-nav').on('click', function ()
{
	let allModulesCardsSelector = ".card";
	let thisModuleCardsSelector = "." + this.id + "-card";
	
	$(allModulesCardsSelector).removeClass('card-highlight');
	$(thisModuleCardsSelector).addClass('card-highlight');
});
// Selecting children elements
$('p').click(function ()
			  {
	              $(this).children('a').css('background-color', 'yellow');
			  });

// targetting next element
$("button").click(function ()
                  {
	                  $(this).next().slideToggle('slow');
                  });




$('#reset').click(function ()
                  {
	                  $(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green')
	                         .removeClass('large-font');
                  });

$('#card-btn-1').click(function ()
                       {
	                       $(this).siblings('span').addClass('yellow');
                       });

$('#card-btn-2').click(function ()
                       {
	                       $(this).siblings('#card-par-1').addClass('red');
                       });

$('#card-btn-3').click(function ()
                       {
	                       $(this).siblings().addClass('large-font');
                       });