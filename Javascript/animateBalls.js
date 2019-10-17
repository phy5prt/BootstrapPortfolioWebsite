/*needs to reset on next page load*/

  var loopTop = 0;
  	(function animationLoopOnLoad() {
      loopTop++
      switch (loopTop){
  		case 1:

  			console.log(1);
  			$(".bg-circle").animate({left: '1px'},2000);
  			setTimeout(animationLoopOnLoad,500);
        break;

  		case 2:

  			console.log(2);
  			$(".hidemeCircle").show();
  			setTimeout(animationLoopOnLoad,300);
        break;

  	  case 3:

  				console.log(3);
  			$(".hidemeCircle").hide();
  			setTimeout(animationLoopOnLoad,400);
  		 break;

  	case 4:

        console.log(4);
  			$(".hidemeCircle").show();
  			setTimeout(animationLoopOnLoad,100);
        break;

  	case 5:

        console.log(5);
  			$(".hidemeCircle").hide();
  			setTimeout(animationLoopOnLoad,200);
        break;

  		case 6:


  			$(".hidemeCircle").show();


  		break;

  		default:
  			console.log(" error");

  	}})();







    	function animationLoopReachPageBottom() {



    			console.log(7);
    			$(".bg-circleBottom").animate({left: '1px'},2000);

    	};

      var triggerWhenInView = function() {
         if($(window).scrollTop() + $(window).height() > $(document).height() - $(".myGreyTransBackground").height() -$("footer").height()) {
animationLoopReachPageBottom();
             $(window).off("scroll", triggerWhenInView);
         }}
      $(window).scroll(triggerWhenInView
      );
