var paginator = Paginator({
  element: $('#photos'),
  items: photos,
  pageSize: 3,
  next: $('#next'),
  previous: $('#previous'),
  renderer: Handlebars.compile($("#photo-template").html()),
  footer: '<div class="clearfix"></div>'
});
paginator.showPage(1);

var tagPaginator = Paginator({
  element: $('#tags'),
  items: tags,
  pageSize: 6,
  next: $('#next-tag'),
  previous: $('#previous-tag'),
  renderer: Handlebars.compile($("#tag-template").html())
});
tagPaginator.showPage(1);
