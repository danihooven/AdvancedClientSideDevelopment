var app = angular.module('myApp',['ngRoute']);


// Controller
app.controller('TodoController', function(){
    
    var todoCtrl = this;    
    todoCtrl.todoItems = [
        {
            name: "todo1",
            desc: "about todo",
            date: "today"
        }
    ];
    const date = new Date();

    this.addItem = function(newToDo){
        this.todoItems.push({
            name: newToDo.todoName,
            desc: newToDo.todoDesc,
            date: date.toLocaleString(
                'default',
                {
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric'
                } 
            )
        });
        this.resetForm();    
    };

    this.resetForm = function(){        
        var defaultForm = {
            todoName: "",
            todoDesc: ""
        };
        this.todoForm.$setPristine();
        this.todoForm.$setUntouched();
        this.newToDo = angular.copy(defaultForm);
        console.log("This isn't working...");
    };

    this.removeItem = function(index){
        this.todoItems.splice(index)
    };


    app.config(function($routeProvider){
        $routeProvider.
        when("/Edit",{
            templateUrl : "/todo.html",
            controller: "EditController"
        }).
        otherwise ({
            redirectTo: '/'
        });
    });

    app.controller('EditController', function($scope, $routeParams) {
    	$scope.index = $routeParams.index
    });


});

