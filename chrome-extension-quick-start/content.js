
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        console.log(firstHref);

        // 返回url到background.js中
        chrome.runtime.sendMessage({
            "message": "open_new_tab",
            "url":firstHref
        })
      }
    }
  );