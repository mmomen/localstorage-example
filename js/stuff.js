var objectForLocalStorage = function(name, data) {
  var obj = {
    todo: data,
    complete: false
  };
  var stringObj = JSON.stringify(obj);
  var old = localStorage.getItem(name);
  if (old === null) {
    return stringObj;
  } else {
    return old + stringObj;
  }
};

$('.save').click(function(e) {
  var text = $(".input-text").val();
  $(".input-text").val('');
  // var tag = "Task";
  // tag += localStorage.length < 10 ? "0" + localStorage.length : localStorage.length;
  localStorage.setItem('Tasks', objectForLocalStorage('Tasks', text));
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