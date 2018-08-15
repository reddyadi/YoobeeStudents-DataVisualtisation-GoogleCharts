

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
    google.charts.setOnLoadCallback(drawChartpie);

     function drawChartpie() {

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
     };


// GEO CHART   FAV FOOD PALCES AROUND CAMPUS



google.charts.load('current', {'packages':['bar']});
     google.charts.setOnLoadCallback(drawChartbar);

     function drawChartbar() {
       var data = google.visualization.arrayToDataTable([
         ['Favourite PLace', 'Number of Students'],
         ['McDonalds', 1],
         ['New World', 2],
         ['Subway', 3],
         ['Sushi B', 4]

       ]);

       var options = {
         chart: {
         }
       };

       var chart = new google.charts.Bar(document.getElementById('graph3'));

       chart.draw(data, google.charts.Bar.convertOptions(options));
     };



// END
