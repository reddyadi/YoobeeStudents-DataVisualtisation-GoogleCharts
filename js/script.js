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
