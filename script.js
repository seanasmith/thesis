




//Smooth scroll to sections

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // clicked hash link should have value
    if (this.hash !== "") {
      // Prevent default link click behavior
      event.preventDefault();

      // get hash value
      var hash = this.hash;

      // animate for smooth scroll to clicked link
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
      });
    } // End if
  });

  //Mobile menu


  $('#hamburger_bars').on('click', function () {
    $('#hamburger').css('display', 'none');
    $('#mobile_menu').css('display', 'block');
  });

  //close mobile menu
  $('#mobile_menu nav ul li a').on('click', function () {
    $('#mobile_menu').css('display', 'none');
    $('#hamburger').css('display', 'block');
  });



  //
});

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.load('current', {'packages':['bar']});
google.charts.load('current', {'packages':['corechart', 'scatter']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawInteractiveChart);
google.charts.setOnLoadCallback(drawAgeChart);
google.charts.setOnLoadCallback(drawGenderChart);
google.charts.setOnLoadCallback(drawScatter);
google.charts.setOnLoadCallback(drawClickDist);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawInteractiveChart() {

  //page load to texas Data
//  document.onload = function() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Tax Rate');
    data.addRows([
      ['1970', 4], ['1980', 5], ['1990', 7],
      ['2000', 9], ['2010', 11]
    ]);



    // Set chart options
    var options = {
          chart: {
            //title: 'Company Performance',
            //subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          vAxis: {
            viewWindowMode:'explicit',
            viewWindow: {
              max:20,
              min:0
            }
        },
          bars: 'vertical', // Required for Material Bar Charts.
          //  width: 800,
            height: 400
        };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);

  var choice = 'tx';

  document.getElementById('form1').onchange = function() {
    choice = document.getElementById('thedropdown').value;

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', 'Tax Rate');

  if (choice == 'ca') {

    data.addRows([
      ['1970', 6], ['1980', 8], ['1990', 11],
      ['2000', 12], ['2010', 16]
    ]);

  } else if (choice == 'ny') {

    data.addRows([
      ['1970', 13], ['1980', 14], ['1990', 16],
      ['2000', 16], ['2010', 17]
    ]);

  } else  {
  //texas
    data.addRows([
      ['1970', 4], ['1980', 5], ['1990', 7],
      ['2000', 9], ['2010', 11]
    ]);

  };

  // Set chart options
  var options = {
          chart: {
            //title: 'Company Performance',
            //subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          vAxis: {
            viewWindowMode:'explicit',
            viewWindow: {
              max:20,
              min:0
            }
        },
          bars: 'vertical', // Required for Material Bar Charts.
          //  width: 400,
          height: 400
        };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);

};
};

//pull dropdown value on change
document.getElementById('form1').onchange = function() {
  var choice = document.getElementById('thedropdown').value;
};

//Draw the chart for age demographics
function drawAgeChart() {
  var data = google.visualization.arrayToDataTable([
    ['Age Range', 'Total'],
    ['20-24', 20],
    ['25-29', 8],
    ['30-34', 0],
    ['35-39', 1],
    ['40-44', 5],
    ['45-49', 1],
    ['50-54', 5],
    ['55-60', 2]
  ]);

  var options = {
      title: 'Respondent Ages'
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('age_bar'));
  chart.draw(data, options);
};



//Draw the chart for gender demographics
function drawGenderChart() {

  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Total'],
    ['Female',     27],
    ['Male',      15]
  ]);

  var options = {
    title: 'Respondent Gender Identity',
  };

  var chart = new google.visualization.PieChart(document.getElementById('gender_pie'));
  chart.draw(data, options);
};



// Draw the scatter plot that shows clicks vs Scores
function drawScatter() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Comprehension Score');
  data.addColumn('number', 'Responses');

  data.addRows([
    [3, 7], [0, 7], [3, 7],
    [5, 6], [0, 5], [0, 3],
    [0, 1], [0, 7], [0, 2],
    [0, 9], [3, 7], [0, 8],
    [2, 5], [0, 7], [0, 7],
    [0, 7], [0, 6], [3, 10],
    [0, 5]
  ]);

  var options = {
    series: {
      0: {targetAxisIndex: 0},
      1: {targetAxisIndex: 1}
    },
    title: 'Clicks on Data Interactive vs. Comprehension Score',
    vAxis: {
      title: 'Score'
    },
    hAxis: {
      title: 'Number of Clicks'
    }
  };

    var chart = new google.visualization.ScatterChart(document.getElementById('click_scatter'));
    chart.draw(data, options);
};


//draw chart for click Distribution
function drawClickDist () {

  var data = google.visualization.arrayToDataTable([
    ['Click Total', 'Number of Responses'],
    ['0', 15], ['1', 0], ['2', 1],
    ['3', 3], ['4', 0], ['5', 1]
  ]);

  var options = {
    title: 'Comprehension Scores by Clicks on Data Interactive',
    hAxis: {
          title: 'Click Total'
        },
    vAxis: {
          title: 'Number of Responses'
        }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('click_dist'));
  chart.draw(data, options);

};
