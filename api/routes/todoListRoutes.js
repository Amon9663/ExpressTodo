'use strict';
module.exports = function(app){
    var todoList = require('../controllers/todoListController')



    app.route('/tasks')
        .get(todoList.list_all)
        .post(todoList.create_task);


    app.route('/tasks/:taskId')
        .get(todoList.list_task)
        .put(todoList.update_task)
        .delete(todoList.delete_task);

}