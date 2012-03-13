var paginator = new Paginator({
  element: $('#photos'),
  items: photos,
  pageSize: 3,
  next: $('#next'),
  previous: $('#previous'),
  renderer: Handlebars.compile($("#photo-template").html()),
  footer: '<div class="clearfix"></div>'
});
paginator.showPage(1);

var tagPaginator = new Paginator({
  element: $('#tags'),
  items: tags,
  pageSize: 6,
  next: $('#next-tag'),
  previous: $('#previous-tag'),
  renderer: Handlebars.compile($("#tag-template").html())
});
tagPaginator.showPage(1);

$('.photo-tag').live('click', function(){
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