var photos = [
  {
    caption: "Fruit",
    image: {
      url: "public/images/collection/001.jpg"
    },
    tags: [
      "food",
      "fruit",
      "colorful"
    ]
  },
  {
    caption: "BBQ",
    image: {
      url: "public/images/collection/002.jpg"
    },
    tags: [
      "food",
      "cooking",
      "hot dogs"
    ]
  },
  {
    caption: "Farm",
    image: {
      url: "public/images/collection/003.jpg"
    },
    tags: [
      "sky",
      "landscape",
      "green"
    ]
  },
  {
    caption: "Flower",
    image: {
      url: "public/images/collection/004.jpg"
    },
    tags: [
      "green",
      "flower",
      "plants",
      "colorful"
    ]
  }
  ,{
    caption: "Lake",
    image: {
      url: "public/images/collection/005.jpg"
    },
    tags: [
      "lake",
      "sunset",
      "boating",
      "landscape"
    ]
  },
  {
    caption: "Car",
    image: {
      url: "public/images/collection/006.jpg"
    },
    tags: [
      "old",
      "classic",
      "car"
    ]
  },
  {
    caption: "Pay phones",
    image: {
      url: "public/images/collection/007.jpg"
    },
    tags: [
      "classic",
      "phone",
      "colorful"
    ]
  },
  {
    caption: "Baloon",
    image: {
      url: "public/images/collection/008.jpg"
    },
    tags: [
      "baloon",
      "colorful"
    ]
  },
  {
    caption: "Chinese colors",
    image: {
      url: "public/images/collection/009.jpg"
    },
    tags: [
      "chinese",
      "colorful",
      "lights"
    ]
  },
  {
    caption: "Grass",
    image: {
      url: "public/images/collection/010.jpg"
    },
    tags: [
      "green",
      "colorful",
      "plants"
    ]
  },
  {
    caption: "Elephants garden",
    image: {
      url: "public/images/collection/011.jpg"
    },
    tags: [
      "green",
      "colorful",
      "elephants"
    ]
  }
];

var tags = $.unique($.map(photos, function(photo){return photo.tags})).sort();