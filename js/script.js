var inputElement = $('input')
var buttonElement = $('button')
var ulElement = $('ul')

var todos = []

buttonElement.click(addTodo)

function addTodo() {
    var userInput = inputElement.val()
    if (userInput.trim() == '') {
        return
    }
    var newTodo = { id: Math.random(), value : userInput }
    todos.push(newTodo)
    $('<li>' + userInput + '</li>')
        .appendTo(ulElement)
        .attr('dataset-id', newTodo.id)
        .click(removeTodo)
    console.log(todos)
}

function removeTodo(event) {
    var clickedList = $(this)
    var itemId = clickedList.attr('dataset-id')
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == itemId) {
            todos.splice(i, 1)
            break
        }
    }
    clickedList.remove()
    console.log(todos)
}