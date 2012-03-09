var Paginator = function(element, items, pageSize, next, previous, renderer){

  this.element = element;
  this.items = items,
  this.next = next;
  this.previous = previous,
  this.renderer = renderer;
  this.pageSize = pageSize;

  var showPage = function(pageNumber){
    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize, items.length);

    element.empty();

    for(var i = startIndex; i < endIndex; i++){
      element.append(renderer.render(items[i]));
    }

    updateNav(previous,  pageNumber > 1,                         pageNumber - 1);
    updateNav(next,      (pageNumber * pageSize) < items.length, pageNumber + 1);
  }

  function updateNav(nav, condition, page){
    if(condition){
      nav.show();
      nav.attr("data-page", page);
    }
    else{
      nav.hide();
    }
  }

  this.next.live('click', function(){
    showPage(parseInt($(this)[0].dataset.page));
  });

  this.previous.live('click', function(){
    showPage(parseInt($(this)[0].dataset.page));
  });

  showPage(1);

}