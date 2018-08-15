// LINK TO JSON

  $.ajax({
    url: 'data/student.json',
    dataType: 'json',
    type: 'GET',
    success: function(results){
      console.log(results);
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



// GEO CHART   SUBURBS STUDENTS ARE FROM

















//END
