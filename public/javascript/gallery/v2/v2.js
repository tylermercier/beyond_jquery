var paginator = Paginator(
  $('div#photos'),
  photos,
  3,
  $('#next'),
  $('#previous'),
  renderer,
  '<div class="clearfix"></div>'
);
paginator.showPage(1);