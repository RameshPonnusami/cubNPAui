$(document).ready(function(){
  
  $('.simpletable').addClass('table');
  $('.simpletable').addClass('table-bordered');
  $('.simpletable').addClass('table-striped');
  $('.table').removeClass('simpletable');

  $(".images img").click(function(){
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
  });
  
  $("#image-viewer .close").click(function(){
    $('#image-viewer').hide();
  })

});