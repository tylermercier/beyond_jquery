function CustomTemplateRenderer($element) {
  this.template = $.trim($element.html());
}

CustomTemplateRenderer.prototype.buildTags = function(tags) {
  return tags.join(', ');
};

CustomTemplateRenderer.prototype.render = function(photo) {
  return this.template
    .replace(/{{title}}/ig, photo.title)
    .replace(/{{caption}}/ig, photo.caption)
    .replace(/{{tags}}/ig, this.buildTags(photo.tags))
    .replace(/{{url}}/ig, photo.image.url);
};