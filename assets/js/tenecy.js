// Datepicker 
	var dateformat = 'mm/dd/yyyy';

	$('.hasDatepicker').datepicker({
	  format: dateformat,
	  autoclose: true
	});

	$('select').on('change', function() {
		dateformat = $(this).val();
	  $('.hasDatepicker').each(updateDateFormat);
	});

	function updateDateFormat(i,elem) {

	    var d = $(elem).datepicker('getDate');
	  
	    $(elem).datepicker('destroy');  
	    $(elem).datepicker({
		    autoclose: true,
		    format: dateformat
		  });
	  	$(elem).datepicker('setDate', d);
	    
	}


//Country dropdown
	function setCountry(code){
	    if(code || code==''){
	        var text = jQuery('a[cunt_code="'+code+'"]').html();
	        $(".dropdown dt a span").html(text);
	    }
	}
	$(document).ready(function() {
	    $(".dropdown img.flag").addClass("flagvisibility");

	    $(".dropdown dt a").click(function() {
	        $(".dropdown dd ul").toggle();
	    });

	    $(".dropdown dd ul li a").click(function() {
	        //console.log($(this).html())
	        var text = $(this).html();
	        $(".dropdown dt a span").html(text);
	        $(".dropdown dd ul").hide();
	        $("#result").html("Selected value is: " + getSelectedValue("country-select"));
	    });

	    function getSelectedValue(id) {
	        //console.log(id,$("#" + id).find("dt a span.value").html())
	        return $("#" + id).find("dt a span.value").html();
	    }

	    $(document).bind('click', function(e) {
	        var $clicked = $(e.target);
	        if (! $clicked.parents().hasClass("dropdown"))
	            $(".dropdown dd ul").hide();
	    });


	    $("#flagSwitcher").click(function() {
	        $(".dropdown img.flag").toggleClass("flagvisibility");
	    });
	});

//menu
	$(function () {
		$('.toggle-menu').click(function(){
			$('.exo-menu').toggleClass('display');
		});
	});



//toggle menu
	$(function () {
		$('.togglemenu').click(function(){
			$('.main-menu').toggleClass('open');
		});
	});
	

//search
	$(function () {
    $('.searchicon').on('click',function () {
        $('.search').addClass('open');   
    });
    $('.search-close').on('click',function () {
        $('.search').removeClass('open');
    });
});

//reset password
	$(function () {
	$('.resetPassword').on('click',function () {
	    $('.reset-password-panel').addClass('resetopen');   
	});
	$('.reset-close').on('click',function () {
	    $('.reset-password-panel').removeClass('resetopen');
	});
});


//reset password
	$(function () {
		$('.resetPasswordToggle').click(function(){
			$('.rpbPanel').addClass('rpbNone');
			$('.confirmToggle').addClass('ConfirmNone');
		});
	});

//reset mail
	$(function () {
		$('.changeMailActive').click(function(){
			$('.changeMailPanel').addClass('cmnNone');
			$('.changesMail').addClass('changeModalActive');
		});
	});

//home burg
	$(document).ready(function(){
	  $(".hamburger").click(function(){
	    $(this).toggleClass("is-active");
	  });
	});


//Remove body modal
	$(function () {
		$('.RemoveLoad').click(function(){
			$('.mainBody').addClass('closeBodyModal');
		});
	});


// sticky header
	$(window).scroll(function(){
	  var sticky = $('.main-menu'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 230) sticky.addClass('sticky');
	  else sticky.removeClass('sticky');
	});

//plus minus counter cart
	$('.btn-minus').click(function(){            
	  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1)
	})
	$('.btn-plus').click(function(){            
	  $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1)
	})
	    
//wishlist
	$(function () {
		$('.whishlisticon').click(function(){
			$(this).toggleClass('fillIcon');
		});
	});

//register input 
	$(document).ready(() => {
		$('form').find('.moveinput').each((index, input) => {
		  $(input).on('change', () => {
		    var label = $(input).parents('form').find('.movelabel[for="'+ $(input).attr('id') +'"]')
		    if (!$(input).val()) {
		     label.removeClass('fix')
		    } else {
		     label.addClass('fix')
		    }
		  })
		})
	})



// On load body
	var body = document.body;
	body.classList.add("LoadModal");


//menu
	$(function () {
		$('.caption').click(function(){
			$('.list').toggleClass('open');
		});
	});

//menu
	$(function () {
		$('.singalcaption').click(function(){
			$('.singallist').toggleClass('open');
		});
	});

//sort dropdown
	$(function () {
		$('.filterToggle').click(function(){
			$('.filter-toggle').toggleClass('open');
		});
	});

//sort dropdown
	jQuery(document).ready(function (e) {
	    function t(t) {
	        e(t).bind("click", function (t) {
	            t.preventDefault();
	            e(this).parent().fadeOut()
	        })
	    }
	    e(".dropdown-toggle").click(function () {
	        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
	        e(".button-dropdown .dropdown-menu").hide();
	        e(".button-dropdown .dropdown-toggle").removeClass("active");
	        if (t) {
	            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
	        }
	    });
	    e(document).bind("click", function (t) {
	        var n = e(t.target);
	        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
	    });
	    e(document).bind("click", function (t) {
	        var n = e(t.target);
	        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
	    })
	});

//filter dropdown
	$(function () {
		$('.filterBtnToggle').click(function(){
			$('.filter-main').toggleClass('open');
		});
	});