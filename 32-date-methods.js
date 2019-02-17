/* Methods available for Date object:

method         values returned
getDay()       0-6
getMonth()     0-11
getDate()      1-31
getFullYear()  yyyy
getHours()     0-23
getMinutes()   0-59
getSeconds()   0-59
getMilliseconds()  0-999
getTIme()     ms since 1/1/1970

So let's do some practice... */


var d = new Date();

var currentMonth = d.getMonth();  // 1 

var dayOfMonth = d.getDate();  // 17

var currYr = d.getFullYear();

var currHours = d.getHours();  // 9

var currMins = d.getMinutes();  

var currSecs = d.getSeconds();

var currMS = d.getMilliseconds();

var millsSince = d.getTime();