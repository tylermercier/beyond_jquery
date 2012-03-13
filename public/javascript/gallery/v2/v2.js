Gallery.Paginator.init({
  element: $('#photos'),
  items: photos,
  pageSize: 3,
  next: $('#next'),
  previous: $('#previous'),
  renderer: Handlebars.compile($("#photo-template").html()),
  footer: '<div class="clearfix"></div>'
});
Gallery.Paginator.showPage(1);