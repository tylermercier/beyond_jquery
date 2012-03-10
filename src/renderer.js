function CustomTemplateRenderer($element) {
  this.template = $.trim($element.html());
}

CustomTemplateRenderer.prototype.buildTagLinks = function(tags) {
  var tagLinks = [];

  for(var i = 0; i < tags.length; i ++){
    tagLinks[i] = '<a href="#" data-tag="'+ tags[i] +'" class="tag">' + tags[i] + "</a>";
  }

  return tagLinks.join(', ');
};

CustomTemplateRenderer.prototype.buildTags = function(tags) {
  return tags.join(', ');
};

CustomTemplateRenderer.prototype.render = function(photo) {
  return this.template
    .replace(/{{title}}/ig, photo.title)
    .replace(/{{caption}}/ig, photo.caption)
    .replace(/{{tags}}/ig, this.buildTagLinks(photo.tags))
    .replace(/{{url}}/ig, photo.image.url);
};