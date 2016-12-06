// The anonymous function below will fire on page load

(function() {
  // Magic!
  alert('Keepin\'n it clean with an external script!');

  $('#mainForm').on('submit', function(e) {

    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'http://www.mattbowytz.com/simple_api.json?data=all',
    }).success(function(data) {

	var myArray = ''; 

	$.each(data.data.programming, function(i,data){
		myArray += '<li>' + data + '</li>';
	});

	$('#myDiv').append(myArray);
	console.log(myArray);

        }).fail(function(data){
      		console.log(data);
        });
  });
})();



