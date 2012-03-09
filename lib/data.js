var photos = [
  {
    caption: "pickled fruit",
    image: {
      url: "pictures/001.jpg"
    },
    tags: [
      "food",
      "fruit",
      "jamming"
    ]
  },
  {
    caption: "bbq weiners",
    image: {
      url: "pictures/002.jpg"
    },
    tags: [
      "bbq",
      "hot dogs"
    ]
  },
  {
    caption: "power lines",
    image: {
      url: "pictures/003.jpg"
    },
    tags: [
      "sky",
      "farming",
      "landscape",
      "green"
    ]
  },
  {
    caption: "blue flower",
    image: {
      url: "pictures/004.jpg"
    },
    tags: [
      "green",
      "flower"
    ]
  }
  ,{
    caption: "lake sunset",
    image: {
      url: "pictures/005.jpg"
    },
    tags: [
      "lake",
      "sunset",
      "boating"
    ]
  },
  {
    caption: "old car",
    image: {
      url: "pictures/006.jpg"
    },
    tags: [
      "old",
      "classic",
      "car"
    ]
  }
];

var tagBuilder = function(tags) {
  return tags.join(', ');
};
var template = $.trim($('#content-template').html());

var render = function(photo){
  var photo = template
    .replace(/{{title}}/ig, photo.title)
    .replace(/{{caption}}/ig, photo.caption)
    .replace(/{{tags}}/ig, tagBuilder(photo.tags))
    .replace(/{{url}}/ig, photo.image.url);
  return photo;
};
