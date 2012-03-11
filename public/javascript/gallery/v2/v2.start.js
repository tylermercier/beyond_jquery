// Example taken from http://www.yuiblog.com/blog/2007/06/12/module-pattern/

myModule = function () {

  //"private" variables:
  var myPrivateVar = "I can be accessed only from within myModule.";

  //"private" method:
  var myPrivateMethod = function () {
    YAHOO.log("I can be accessed only from within myModule");
  }

  return  {
    myPublicProperty: "I'm accessible as myModule.myPublicProperty.",
    myPublicMethod: function () {
    }
  };

}(); // the parens here cause the anonymous function to execute and return