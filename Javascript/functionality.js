//when click video or image can hide the caption

$(".relativeParentImgCaption").on("click",function(){
  var $thisCaption = $(this).find(".myCaption")
$(".myCaption").not( $thisCaption).show("fast"); /*cannot detect clicks in iframe so cannot get the caption back this will reset them when new image clicked*/
   $thisCaption.toggle("fast");
  console.log("should of toggled");
});

/*so focus only from hover so if button clicked doesnt stay on with button being down*/
$('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
})


$(function () {
  $('#contact-form').on('submit', function (submitClick) {

    var url = "https://strong-albatross.prod.with-datafire.io/contact";

    $.ajax({
     type: "POST",
     url: url,
     data: $(this).serialize(),
     success: function (data) {

  alert(data);
     $('#firstInput').focus(); // focus on first box so submit loses focus
       $('#contact-form')[0].reset()
      }

    });
    return false;

   }
  )
});
