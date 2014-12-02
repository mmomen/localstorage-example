$('.save').click(function(e) {
  var text = $(".input-text").val();
  $(".input-text").val('');
  var tag = "Task";
  tag += localStorage.length < 10 ? "0" + localStorage.length : localStorage.length;
  localStorage.setItem(tag, tag); //CHANGE THIS TO tag, text
  event.preventDefault();
  loadTasks();
});


var loadTasks = function() {
  for (var key in localStorage) {
    if (key.indexOf("Task") === 0) {
      // $('.'+key).replaceWith("<br>"+localStorage.getItem(key));
      $('body').append("<br>"+localStorage.getItem(key));
    }
  }

};