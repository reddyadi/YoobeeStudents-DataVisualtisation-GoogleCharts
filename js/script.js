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



// SCATTER CHART  DISTANCE FROM WHERE PEOPLE LIVE
// GRAPH 1

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
            hAxis: {title: 'Student', minValue: 0, maxValue: 11},
            vAxis: {title: 'Distance (KM)', minValue: 0, maxValue: 100},
            legend: 'none'
          };

          var chart = new google.visualization.ScatterChart(document.getElementById('graph1'));

          chart.draw(data1, options);
        }


// PIE CHART   COURSE / PRINTING COST
// GRAPH 2
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
         pieHole: 0.5,
         legend: {
           position: 'none'
         }
       };

       var chart = new google.visualization.PieChart(document.getElementById('graph2'));

       chart.draw(data, options);
     };


// COLUMN CHART   FAV FOOD PALCES AROUND CAMPUS
// GRAPH 3

google.charts.load("current", {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartbar);
function drawChartbar() {
  var data = google.visualization.arrayToDataTable([
    ['Favourite PLace', 'Number of Students'],
    ['McDonalds', 5],
    ['Subway', 3],
    ['Sushi B', 1],
    ['New World', 1]

  ]);

  var options = {
    legend: {
      position: 'none'
    },
    vAxis: {title: 'Students'},
  }

  var chart = new google.visualization.ColumnChart(document.getElementById("graph3"));
  chart.draw(data, options);
 }


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

// GEO CHART FAV FOOD PALCES AROUND CAMPUS
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

//ScatterChart to show distance students travel
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

//BubbleChart showing student diversity
  function drawSeriesChart() {

      var data1 = google.visualization.arrayToDataTable([
        ['Food',            'Age',          'ID',         'Suburb',           'Distance'],
        [data[0].food,    data[0].age,   data[0].id,   data[0].suburb,  data[0].distance],
        [data[1].food,    data[1].age,   data[1].id,   data[1].suburb,  data[1].distance],
        [data[2].food,    data[2].age,   data[2].id,   data[2].suburb,  data[2].distance],
        [data[3].food,    data[3].age,   data[3].id,   data[3].suburb,  data[3].distance],
        [data[4].food,    data[4].age,    data[4].id,   data[4].suburb,  data[4].distance],
        [data[5].food,    data[5].age,   data[5].id,   data[5].suburb,  data[5].distance],
        [data[6].food,    data[6].age,   data[6].id,   data[6].suburb,  data[6].distance],
        [data[7].food,    data[7].age,   data[7].id,   data[7].suburb,  data[7].distance],
        [data[8].food,    data[8].age,   data[8].id,   data[8].suburb,  data[8].distance],
        [data[9].food,    data[9].age,   data[9].id,   data[9].suburb,  data[9].distance],
        [data[10].food,   data[10].age,  data[10].id,  data[10].suburb, data[10].distance]
      ]);

      var options = {
        title: 'Correlation Between students and their preferences in various catergories',
        hAxis: {title: 'ID'},
        vAxis: {title: 'Age'},
        bubble: {textStyle: {fontSize: 14}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('graph4'));
      chart.draw(data1, options);
    }

// END
