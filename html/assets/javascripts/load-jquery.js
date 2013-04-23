/* Load jQuery
 * Version{ 
    IE: 1.9.1.min + Migrate 1.0.0,
    Other: 2.0.0b1
 * Requires: $ 1.2.2+ */
;(function(){
  var browser = navigator.userAgent,
      src,
      html = document.getElementsByTagName('html')[0];

  function lib() 
  {
      if ( browser.indexOf("MSIE 7") != -1 || browser.indexOf("MSIE 8") != -1 ) {
          src="assets/javascripts/libs/jquery-1.8.0.min.js";
          html.className = html.className + " msie";

      } else if ( browser.indexOf("MSIE 9") != -1 ) { 
          src="assets/javascripts/libs/jquery-1.9.1-migrate-1.0.0.js"; 
          html.className = html.className + " msie";
      } else  {
          src="assets/javascripts/libs/jquery-2.0.0b1.min.js"; 
      }

      return document.write('<script src="'+src+'"></script>');
  }
  
  function removeLoad() 
  {
    (elem=document.getElementById('load_jquery')).parentNode.removeChild(elem);
  }

  lib(); 
  removeLoad();

})(window);

// Minify
// 