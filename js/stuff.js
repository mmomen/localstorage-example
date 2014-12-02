var objectForLocalStorage = function(name, data) {
  var stringObj = JSON.stringify(data);
  var old = localStorage.getItem(name);
  if (old === null) {
    return stringObj;
  } else {
    return old + stringObj;
  }j
};

$('.save').click(function(e) {
  var text = $(".input-text").val();
  $(".input-text").val('');
  // var tag = "Task";
  // tag += localStorage.length < 10 ? "0" + localStorage.length : localStorage.length;
  var newObj = {
    todo: text,
    complete: false
  };
  localStorage.setItem('Tasks', objectForLocalStorage('Tasks', newObj)); //CHANGE THIS TO tag, text
  event.preventDefault();
  // loadTasks();
});

var template = $("#task-template").html();
var taskTemplate = Handlebars.compile(template);

var loadTasks = function() {
  var list = [];
  for (var key in localStorage) {
    if (key.indexOf("Task") === 0) {
      list.push(key);
      // $('.'+key).replaceWith("<br>"+localStorage.getItem(key));
      // $('body').append("<br>"+localStorage.getItem(key));
    }
  }
  console.log(list);
  var listHTML = taskTemplate(list);
};