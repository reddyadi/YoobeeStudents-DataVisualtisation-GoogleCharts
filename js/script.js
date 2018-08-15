

// LINK TO JSON


  var data = [];
  $.ajax({
    url: 'data/student.json',
    dataType: 'json',
    type: 'GET',
    success: function(results){
      for (var i = 0; i < results.length; i++) {
        var student = {
          id: results[i].id,
          age: results[i].age,
          programme: results[i].programme,
          ethnicity: results[i].ethnicity,
          suburb: results[i].suburb,
          food: results[i].food,
          color: results[i].color,
          animal: results[i].animal,
          printing_credit: results[i].printingCredit,
          printing_topup: results[i].printingCreditTopUp,
          distance: results[i].distanceToCampus
        }
        data.push(student);
      }
        console.log(data);
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


// COL   FAV FOOD PALCES AROUND CAMPUS


google.charts.load("current", {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartbar);
function drawChartbar() {
  var data = google.visualization.arrayToDataTable([
    ['Favourite PLace', 'Number of Students'],
    ['McDonalds', 5],
    ['New World', 1],
    ['Subway', 3],
    ['Sushi B', 1]

  ]);

  // var options = {
  //   chart: {
  //   }
  // };

  var chart = new google.visualization.ColumnChart(document.getElementById("graph3"));
  chart.draw(data);
 }




// SCATTER CHART  DISTANCE FROM WHERE PEOPLE LIVE


  function drawChart() {
        var data1 = google.visualization.arrayToDataTable([
          ['Student', 'Distance to Campus'],
          [ data[0].id, data[0].distance],
          [ data[1].id, data[1].distance],
          [ data[2].id, data[2].distance],
          [ data[3].id, data[3].distance],
          [ data[4].id, data[4].distance],
          [ data[5].id, data[5].distance],
          [ data[6].id, data[6].distance],
          [ data[7].id, data[7].distance],
          [ data[8].id, data[8].distance],
          [ data[9].id, data[9].distance],
          [ data[10].id, data[10].distance]
        ]);

        var options = {
          title: 'Student vs. Distance to Campus',
          hAxis: {title: 'Student', minValue: 0, maxValue: 11},
          vAxis: {title: 'Distance (KM)', minValue: 0, maxValue: 100},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('graph1'));

        chart.draw(data1, options);
      }





// END
