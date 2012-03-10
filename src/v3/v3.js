var paginator = new Paginator({
  element: $('div#photos'),
  items: photos,
  next: $('#next'),
  previous: $('#previous'),
  renderer: renderer,
  pageSize: 3,
  footer: '<div class="clearFix"></div>'
});
paginator.showPage(1);

$('.tag').live('click', function(){
  var selectedTag = this.dataset.tag;

  var photosContainingTag = $.grep(photos, function(photo){
    return photo.tags.indexOf(selectedTag) >= 0;
  });

  paginator.reload(photosContainingTag);

  $('#tag-name').html(selectedTag);
  $('#tag-info').show();

});

$('#show-all').on('click', function(){
  paginator.reload(photos);
  $('#tag-info').hide();
});