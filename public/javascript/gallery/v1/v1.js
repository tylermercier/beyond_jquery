var photos_element = $('div.photos');

var offset = 0;
var imageLimit = 3;
var renderer = Handlebars.compile($("#photo-template").html());

function showPictures() {
  $('div.photos').empty();
  var i;
  var end = offset + imageLimit;
  end = Math.min(photos.length, end);
  for (i=offset; i<end; i++) {
    photos_element.append(renderer(photos[i]));
  };
  photos_element.append('<div class="clearfix"></div>');

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

$('#next').on('click', function (e) {
  offset += imageLimit;
  showPictures();
  e.preventDefault();
});

$('#previous').on('click', function (e) {
  offset -= imageLimit;
  showPictures();
  e.preventDefault();  
});

showPictures();

///////////////////////////
///         TAGS         //
///////////////////////////

var tags_element = $('#tags');

var tagsOffset = 0;
var tagsLimit = 6;
var tagsRenderer = Handlebars.compile($("#tag-template").html());

function showTags() {
  tags_element.empty();
  var i;
  var end = offset + tagsLimit;
  end = Math.min(tags.length, end);
  for (i=offset; i<end; i++) {
    tags_element.append(tagsRenderer(tags[i]));
  };

  updateTagButtons();
}

function updateTagButtons() {
  if ((tagsOffset + tagsLimit) < tags.length){
    $('#next-tag').show();
  } else {
    $('#next-tag').hide();
  }

  if (tagsOffset > 0){
    $('#previous-tag').show();
  } else {
    $('#previous-tag').hide();
  }
}

$('#next-tag').on('click', function (e) {
  tagsOffset += tagsLimit;
  showTags();
  e.preventDefault();
});

$('#previous-tag').on('click', function (e) {
  tagsOffset -= tagsLimit;
  showTags();
  e.preventDefault();  
});

showTags();