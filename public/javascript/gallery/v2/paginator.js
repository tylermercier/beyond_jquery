var Paginator = function(dependencies){
  
  var element = dependencies.element;
  var items = dependencies.items;
  var pageSize = dependencies.pageSize;
  var next = dependencies.next;
  var previous = dependencies.previous;
  var renderer = dependencies.renderer;
  var footer = dependencies.footer;

  var showPage = function(pageNumber){
    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize, items.length);

    element.empty();

    for(var i = startIndex; i < endIndex; i++){
      element.append(renderer(items[i]));
    }

    if(footer){
      element.append(footer);
    }
    
    updateNav(previous,  pageNumber > 1,                         pageNumber - 1);
    updateNav(next,      (pageNumber * pageSize) < items.length, pageNumber + 1);
  };

  function updateNav(nav, condition, page){
    if(condition){
      nav.show();
      nav.attr("data-page", page);
    }
    else{
      nav.hide();
    }
  }

  next.live('click', function(e){
    showPage(parseInt($(this)[0].dataset.page));
    e.preventDefault();
  });

  previous.live('click', function(e){
    showPage(parseInt($(this)[0].dataset.page));
    e.preventDefault();
  });

  return {
    showPage: showPage
  };
}