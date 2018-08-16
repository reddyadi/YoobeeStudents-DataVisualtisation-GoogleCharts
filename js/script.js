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
        };
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
              vAxis: {title: 'Distance (km)', minValue: 0, maxValue: 100},
              legend: 'none',
              width: 800,
              height: 400,
              backgroundColor: '#E9EB87'
            };

            var chart = new google.visualization.ScatterChart(document.getElementById('graph1'));

            chart.draw(data1, options);

            //Create a range slider, passing some options
            var dashboard = new google.visualization.Dashboard(
              document.getElementById('filter1'));

            // Create a range slider, passing some options
            var donutRangeSlider = new google.visualization.ControlWrapper({
              'controlType': 'NumberRangeFilter',
              'containerId': 'display-filter1',
              'options': {
                'filterColumnLabel': 'Distance to Campus'
              }
            });

            var barChart = new google.visualization.ChartWrapper({
              'chartType': 'BarChart',
              'containerId': 'display1',
              'options': {
                'width': 300,
                'height': 300,
                'pieSliceText': 'value',
                'legend': 'right'
              }
            });

            dashboard.bind(donutRangeSlider, barChart);

            dashboard.draw(data1);

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
   },
   width: 600,
   height: 400
 };

 var chart = new google.visualization.PieChart(document.getElementById('graph2'));

 chart.draw(data, options);

   //Create a range slider, passing some options
   var dashboard = new google.visualization.Dashboard(
     document.getElementById('filter2'));

   // Create a range slider, passing some options
   var donutRangeSlider = new google.visualization.ControlWrapper({
     'controlType': 'CategoryFilter',
     'containerId': 'display-filter2',
     'options': {
       'filterColumnLabel': 'Colours'
     }
   });

   var pieChart = new google.visualization.ChartWrapper({
     'chartType': 'PieChart',
     'containerId': 'display2',
     'options': {
       'width': 300,
       'height': 300,
       'pieSliceText': 'value',
       'legend': 'right'
     }
   });

   dashboard.bind(donutRangeSlider, pieChart);

   dashboard.draw(data);
  }


  // COLUMN CHART   FAV FOOD PALCES AROUND CAMPUS
  // GRAPH 3

  function drawChartbar() {
    var data = google.visualization.arrayToDataTable([
      ['Favourite Place', 'Number of Students'],
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
      width: 600,
      height: 400
    };

    var chart = new google.visualization.ColumnChart(document.getElementById("graph3"));
    chart.draw(data, options);

    //Create a range slider, passing some options
    var dashboard = new google.visualization.Dashboard(
      document.getElementById('filter3'));

    // Create a range slider, passing some options
    var donutRangeSlider = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': 'display-filter3',
      'options': {
        'filterColumnLabel': 'Favourite Place'
      }
    });

    var pieChart = new google.visualization.ChartWrapper({
      'chartType': 'PieChart',
      'containerId': 'display3',
      'options': {
        'width': 300,
        'height': 300,
        'pieSliceText': 'value',
        'legend': 'right'
      }
    });

    dashboard.bind(donutRangeSlider, pieChart);

    dashboard.draw(data);
  }

//BubbleChart showing student diversity
  function drawSeriesChart() {
      var data2 = google.visualization.arrayToDataTable([
        ['Animal',            'Age',          'ID',         'Suburb',           'Distance'],
        [data[0].animal,    data[0].age,   data[0].id,   data[0].suburb,  data[0].distance],
        [data[1].animal,    data[1].age,   data[1].id,   data[1].suburb,  data[1].distance],
        [data[2].animal,    data[2].age,   data[2].id,   data[2].suburb,  data[2].distance],
        [data[3].animal,    data[3].age,   data[3].id,   data[3].suburb,  data[3].distance],
        [data[4].animal,    data[4].age,   data[4].id,   data[4].suburb,  data[4].distance],
        [data[5].animal,    data[5].age,   data[5].id,   data[5].suburb,  data[5].distance],
        [data[6].animal,    data[6].age,   data[6].id,   data[6].suburb,  data[6].distance],
        [data[7].animal,    data[7].age,   data[7].id,   data[7].suburb,  data[7].distance],
        [data[8].animal,    data[8].age,   data[8].id,   data[8].suburb,  data[8].distance],
        [data[9].animal,    data[9].age,   data[9].id,   data[9].suburb,  data[9].distance],
        [data[10].animal,   data[10].age,  data[10].id,  data[10].suburb, data[10].distance]
      ]);

      var options = {
        title: 'Correlation Between students and their preferences in various catergories',
        hAxis: {title: 'Age'},
        vAxis: {title: 'ID'},
        bubble: {textStyle: {fontSize: 14}},
        width: 600,
        height: 400
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('graph4'));
      chart.draw(data2, options);

      //Create a range slider, passing some options
      var dashboard = new google.visualization.Dashboard(
        document.getElementById('filter4'));

      // Create a range slider, passing some options
      var donutRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'containerId': 'display-filter4',
        'options': {
          'filterColumnLabel': 'Suburb'
        }
      });

      var pieChart = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'display4',
        'options': {
          'width': 300,
          'height': 300,
          'pieSliceText': 'value',
          'legend': 'right'
        }
      });

      dashboard.bind(donutRangeSlider, pieChart);

      dashboard.draw(data2);
  }

// END
