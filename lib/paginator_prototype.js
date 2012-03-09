var Paginator = function(element, items, pageSize, next, previous, render){

  this.element = element;
  this.items = items,
  this.next = next;
  this.previous = previous,
  this.render = render;
  this.pageSize = pageSize;

  var _self = this;
  this.next.live('click', function(){
    _self.showPage(parseInt($(this)[0].dataset.page));
  });

  this.previous.live('click', function(){
    _self.showPage(parseInt($(this)[0].dataset.page));
  });

  this.showPage(1);
}

Paginator.prototype.showPage = function(pageNumber){
  var startIndex = (pageNumber - 1) * this.pageSize;
  var endIndex = Math.min(startIndex + this.pageSize, this.items.length);

  this.element.empty();

  for(var i = startIndex; i < endIndex; i++){
    this.element.append(render(this.items[i]));
  }

  this.updateNav(this.previous,  pageNumber > 1,                              pageNumber - 1);
  this.updateNav(this.next,      (pageNumber * this.pageSize) < this.items.length, pageNumber + 1);
}

Paginator.prototype.updateNav = function(nav, condition, page){
  if(condition){
    nav.show();
    nav.attr("data-page", page);
  }
  else{
    nav.hide();
  }
}