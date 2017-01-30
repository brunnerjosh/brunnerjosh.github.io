/*jshint devel:true */

// Target the parent element
//  Use Jquery to insert HTML below it
var newHTML = [];

for(var key in weeklyUpdates) {
  newHTML.push('<div class="blogbox">');
  newHTML.push('<p class="padding shorten">');
  newHTML.push('<strong class="alignLeft blog_header">' + weeklyUpdates[key].Title + "</strong>");
  newHTML.push('<strong class="alignRight">' + weeklyUpdates[key].DateFrom + '-' + weeklyUpdates[key].DateTo + '</strong>');
  newHTML.push('<br><br>');
  newHTML.push(weeklyUpdates[key].Body);
  newHTML.push('<strong class="alignRight">Want to read more? Click here: <a href="./weeks/week' + weeklyUpdates[key].WeekNo + '.html">Week ' + weeklyUpdates[key].WeekNo + '</a></strong>');
  newHTML.push('</p>');
  newHTML.push('</div>');
}

$(document).ready(function(){
  $(".weekInfo").html(newHTML.join(""));
});


