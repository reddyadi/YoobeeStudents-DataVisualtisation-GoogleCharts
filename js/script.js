

// LINK TO JSON


  var data = [];
  $.ajax({
    url: 'data/student.json',
    dataType: 'json',
    type: 'GET',
    success: function(results){
      for (var i = 0; i < results.length; i++) {
        var student = {
          age: results[i].age,
          programme: results[i].programme,
          ethnicity: results[i].ethnicity,
          suburb: results[i].suburb,
          food: results[i].food
        }
        data.push(student);
        console.log(data);

      }
    },
    error: function(error){
      console.log("ERROR");
      console.log(error);
    }
  });


// PIE CHART   COURSE / PRINTING COST

google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {

       var data = google.visualization.arrayToDataTable([
         ['Colours', 'Number of Students'],
         ['Blue', 3],
         ['Red', 3],
         ['Pink', 1],
         ['Purple', 1],
         ['White', 1],
         ['Orange', 1]
       ]);

       var options = {
         // title: 'Students Favourite Colours',
         pieHole: 0.5
       };

       var chart = new google.visualization.PieChart(document.getElementById('graph2'));

       chart.draw(data, options);
     }



// GEO CHART   FAV FOOD PALCES AROUND CAMPUS



google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawChart);

     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Year', 'Sales', 'Expenses', 'Profit'],
         ['McDonalds', ],
         ['New World', ],
         ['Subway', ],
         ['Sushi B', ]

       ]);

       var options = {
         chart: {
           title: 'Company Performance',
           subtitle: 'Sales, Expenses, and Profit: 2014-2017',
         }
       };

       var chart = new google.charts.Bar(document.getElementById('graph3'));

       chart.draw(data, google.charts.Bar.convertOptions(options));
     }



// END
