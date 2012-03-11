var Paginator = function(dependencies){
  this.pageSize = 2;
  $.extend(this, dependencies);
  this.onNavButtonClick(this.next);
  this.onNavButtonClick(this.previous);
}

Paginator.prototype.reload = function(items){
  this.items = items;
  this.showPage(1);
}

Paginator.prototype.onNavButtonClick = function($element) {
  var context = this;
  $element.live('click', function(e){
    var pageToShow = parseInt( $( this )[0].dataset.page );
    context.showPage(pageToShow);
    e.preventDefault();
  });
}

Paginator.prototype.showPage = function(currentPage){
  var startIndex = (currentPage - 1) * this.pageSize;
  var endIndex = Math.min(startIndex + this.pageSize, this.items.length);

  this.element.empty();
  for(var i = startIndex; i < endIndex; i++){
    this.element.append(this.renderer.render(this.items[i]));
  }

  if(this.footer){
    this.element.append(this.footer);
  }

  this.updatePreviousButton(currentPage);
  this.updateNextButton(currentPage);
}

Paginator.prototype.updateNextButton = function(currentPage){
  if((currentPage * this.pageSize) < this.items.length){
    this.next.show();
    this.next.attr("data-page", currentPage + 1);
  }
  else{
    this.next.hide();
  }
}

Paginator.prototype.updatePreviousButton = function(currentPage){
  if(currentPage > 1){
    this.previous.show();
    this.previous.attr("data-page", currentPage - 1);
  }
  else{
    this.previous.hide();
  }
}