var photos_element = $('div.photos');

var offset = 0;
var imageLimit = 4;

function showPictures() {
  $('div.photos').empty();
  var i;
  var end = offset + imageLimit;
  end = Math.min(photos.length, end);
  for (i=offset; i<end; i++) {
    photos_element.append(renderer.render(photos[i]));
  };

  updateButtons();
}

function updateButtons() {
  if ((offset + imageLimit) < photos.length){
    $('#next').show();
  } else {
    $('#next').hide();
  }

  if (offset > 0){
    $('#previous').show();
  } else {
    $('#previous').hide();
  }
}

$('#next').on('click', function () {
  offset += imageLimit;
  showPictures();
});

$('#previous').on('click', function () {
  offset -= imageLimit;
  showPictures();
});

showPictures();