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
