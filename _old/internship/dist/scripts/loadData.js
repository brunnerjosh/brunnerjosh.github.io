/*jshint devel:true */
Date.prototype.formatMMDDYYYY = function(){
    return (this.getMonth() + 1) +
    "/" +  this.getDate() +
    "/" +  this.getFullYear();
};

var startDate = new Date(2014, 5, 29); // Sets start date to 6/29/2014

// Target the parent element
//  Use Jquery to insert HTML below it
var listViewHTML = [];
var dateRanges = [];

var count = 0;
for(var key in weeklyUpdates){ count++ }

var wkStart, wkEnd = new Date();
var tempStr = "";
for(var i = 0; i <= count; i++){
  tempStr = "";
  wkEnd = startDate;
  tempStr += wkEnd.formatMMDDYYYY();
  startDate.setDate(startDate.getDate() + 7);
  tempStr = tempStr + " - " + startDate.formatMMDDYYYY();
  dateRanges.push(tempStr);
}

var count2 = (count-1);
var count3 = count2;
var weekDateStart = startDate;
for(var key in weeklyUpdates) {
  weeklyUpdates[key].DateRange = dateRanges[count2];
  listViewHTML.push('<div class="blogbox">');
  listViewHTML.push('<p class="padding">');
  listViewHTML.push('<strong class="alignLeft blog_header">' + weeklyUpdates[key].Title + "</strong>");
  listViewHTML.push('<strong class="alignRight">' + weeklyUpdates[key].DateRange + '</strong>');
  listViewHTML.push('<div class="collapsable-content padding">');
  // console.log(count2);
  // listViewHTML.push('<br><br>');
  for(var paraID in weeklyUpdates[key].Body) {
    listViewHTML.push(weeklyUpdates[key].Body[paraID]);
    listViewHTML.push("<br><br>");
  }
  listViewHTML.push(weeklyUpdates[key].Signature);
  listViewHTML.push('</div>');
  listViewHTML.push('</p>');
  listViewHTML.push('<button class="show-button">Show More</button>');
  listViewHTML.push('<button class="collapse-button">Show Less</button>');
  listViewHTML.push('</div>');
  count2--;
}
$(document).ready(function(){
  $(".weekList").html(listViewHTML.join(""));

  $(".collapse-button").click(function(){
    $(event.target).closest("div.blogbox").find("div.collapsable-content").slideUp(500);
    $(event.target).closest("div.blogbox").find("button.show-button").show(500);
    $(event.target).closest("div.blogbox").find("button.collapse-button").hide(500);
  });
  $(".show-button").click(function(){
    $(event.target).closest("div.blogbox").find("div.collapsable-content").slideDown(500);
    $(event.target).closest("div.blogbox").find("button.collapse-button").show(500);
    $(event.target).closest("div.blogbox").find("button.show-button").hide(500);
  });

});


