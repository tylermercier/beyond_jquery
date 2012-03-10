var photos_element = $('div.photos');

var offset = 0;
var imageLimit = 3;

function showPictures() {
  photos_element.empty();
  
  var end = offset + imageLimit;
  end = Math.min(photos.length, end);

  
  for (var i=offset; i<end; i++) {
    photos_element.append(renderer.render(photos[i]));
  };

}

showPictures();