
  var loop = 0;
  	(function animationLoop() {
      loop++
      switch (loop){
  		case 1:

  			console.log(1);
  			$(".bg-circle").animate({left: '1px'},2000);
  			setTimeout(animationLoop,500);
        break;

  		case 2:

  			console.log(2);
  			$(".hidemeCircle").show();
  			setTimeout(animationLoop,300);
        break;

  	  case 3:

  				console.log(3);
  			$(".hidemeCircle").hide();
  			setTimeout(animationLoop,400);
  		 break;

  	case 4:

        console.log(4);
  			$(".hidemeCircle").show();
  			setTimeout(animationLoop,100);
        break;

  	case 5:

        console.log(5);
  			$(".hidemeCircle").hide();
  			setTimeout(animationLoop,200);
        break;

  		case 6:

  		console.log(6);
  			$(".hidemeCircle").show();

  		
  		break;

  		default:
  			console.log(" error");

  	}})();
