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
