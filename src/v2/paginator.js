var Paginator = function(element, items, pageSize, next, previous, renderer, footer){

  var showPage = function(pageNumber){
    var startIndex = (pageNumber - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize, items.length);

    element.empty();

    for(var i = startIndex; i < endIndex; i++){
      element.append(renderer.render(items[i]));
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