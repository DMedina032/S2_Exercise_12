"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Dajah Medina
   Date:  2.19.19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

/* Set the date displayed in the calendar */
var thisDay = new Date("August 24, 2018");

// Write the calendar to the element with the id calenar
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Create the function to generate the calendar table
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += "</table>";
      return calendarHTML;
}

// Function to write the calendar caption
function calCaption(calDate) {
      // MonthNamed array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      //determine the current month
      var thisMonth = calDate.getMonth();

      //determine the current year
      var thisYear = calDate.getFullYear();

      // Write the caption
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

//function to write a table row of weekday abreveations
function calWeekdayRow() {
      // an array of weelday abreveations
      var dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      var rowHTML = "<tr>";

      //look through the daay name array
      for (var i = 0; i < dayName.length; i++) {
            rowHTML += "<th class='calendar_weekDays'>" + dayName[i] + "</th>";
      }
      rowHTML += "</tr>";
      return rowHTML;
}

// create a function to calculate the number of days in the month
function daysInMonth(calDate) {
      // array of days in each month
      var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      // extract the four diget year and month value
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();

      // revise the days in february for leap years
      if (thisYear / 4 == 0) {
            dayCount[1] = 29;
      }

      // return the number of days ofr the current month
      return dayCount[thisMonth];
}