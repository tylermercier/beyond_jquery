var paginator = new Paginator(
  $('div#photos'),
  photos,
  3,
  $('#next'),
  $('#previous'),
  renderer,
  '<div class="clearFix"></div>'
);
paginator.showPage(1);