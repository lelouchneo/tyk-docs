/**
 * INIT INSTAN SEARCH
 */

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

 docsearch({
  // Your apiKey and indexName will be given to you once
  // we create your config
  apiKey: 'ALGOLIA_API_KEY',
  indexName: 'docsearch',
  appId: 'ALGOLIA_APP_ID', // Should be only included if you are running DocSearch on your own.
  // Replace inputSelector with a CSS selector
  // matching your search input
  inputSelector: '#searchbox input',
  // Set debug to true to inspect the dropdown
  // debug: true,
  queryHook: throttle(function(query){
    var searchUrl = '/docs/search?q='+query
    ga('send', { 'hitType': 'pageview', 'page': searchUrl })
    console.log("send to ga" + query)
  }, 1000)
});
