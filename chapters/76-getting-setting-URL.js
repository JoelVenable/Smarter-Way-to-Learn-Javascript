//  JS can also be used to control the browser:

var whereWeAt = window.location.href;

//  Instead of the entire URL of the webpage, we can also get pieces:

var theDomain = window.location.hostname;

//  In this example, "www.mybeautifulwebsite.com" would be returned, 
//  "http://", the path, and anchor are omitted.




var thePath = window.location.pathname; 

//  This property contains "/products/page33.html" (etc.)

//  If on the homepage this property would contain "/".





var theAnchor = window.location.hash;

//  This property contains the anchor after the page name: "#section", 
//  or "" if empty.



//  These properties can also be assigned with JS:

window.location.href = "http://www.me.com/1.html";

//  This code tells the browser to navigate to the given link.



//  You could also include an anchor:

window.location.href = "http://www.me.com/1.html#section";




//  Note that the 'hash' and 'hostname' properties cannot function as
//  setters, or navigate within the site.  Instead:
 
var currentSite = window.location.hostname;
var destination = "http://" + currentSite + "/wow.html";
window.location.href = destination;



//  Or to direct to an anchor on the current page:

var currentSite = window.location.hostname;
var currentPath = window.location.pathname;
var destination = "http://" + currentSite + currentPath + "#humidifier";
window.location.href = destination;

// It is legal to omit 'window' however it is more common to include it.
// You can also use 'document.URL' as an alternative.
