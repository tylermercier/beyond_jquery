var Paginator = (function(){  

  var _context = this;

  var init = function(dependencies){
    _context.element = dependencies.element;
    _context.items = dependencies.items;
    _context.pageSize = dependencies.pageSize;
    _context.next = dependencies.next;
    _context.previous = dependencies.previous;
    _context.renderer = dependencies.renderer;
    _context.footer = dependencies.footer;

    _context.next.live('click', function(e){
      showPage(parseInt($(this)[0].dataset.page));
      e.preventDefault();
    });

    _context.previous.live('click', function(e){
      showPage(parseInt($(this)[0].dataset.page));
      e.preventDefault();
    });
  }

  var showPage = function(pageNumber){
    var startIndex = (pageNumber - 1) * _context.pageSize;
    var endIndex = Math.min(startIndex + _context.pageSize, _context.items.length);

    _context.element.empty();

    for(var i = startIndex; i < endIndex; i++){
      _context.element.append(_context.renderer(_context.items[i]));
    }

    if(footer){
      _context.element.append(footer);
    }
    
    updateNav(_context.previous,  pageNumber > 1,                         pageNumber - 1);
    updateNav(_context.next,      (pageNumber * _context.pageSize) < _context.items.length, pageNumber + 1);
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

  return {
    init: init,
    showPage: showPage
  };
})();