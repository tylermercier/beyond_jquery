/*
  Written much like a pseudo code. Not tested.

  Need to use prototype
*/

var Paginator = function(element, items, pageSize, next, previous, render){

  this.element = element;
  this.items = items,
  this.next = next;
  this.previous = previous,
  this.render = render;
  this.pageSize = pageSize;

  function showPage(pageNumber){
    var itemsForPage = this.items[];

    this.element.children.clear();

    for(var i = 0; i < itemsForPage.length; i++){
      element.appendChild(render(itemsForPage[i]));
    }

    updateNav(this.previous,  pageNumber > 0;                              pageNumber - 1);
    updateNav(this.next,      (pageNumber * this.pageSize) < items.length; pageNumber + 1);
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
    showPage(next.dataSet.pageNumber);
  });

  this.previous.live('click', function(){
    showPage(next.dataSet.pageNumber);
  });

}