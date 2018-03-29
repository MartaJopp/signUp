myApp.controller('AdminController', function ($scope, HomeService, ClassService) {
    var vm = this;
    
    vm.classService = ClassService;
    
    vm.listOfClasses = [{class: 'beginner',
    id: 1},
    {class: 'advanced', id: 2}, {class: 'intermediate', id: 3}]

// vm.classesTaught = []

//sets up a new class
    vm.makeNewClass = function (newClass) {
        ClassService.makeNewClass(newClass)
    } //end make new class

//sets up a new instructor    
vm.addInstructor = function (instructor) {
    ClassService.addInstructor(instructor)
}

    vm.addEvent = function (event) {
        ClassService.addEvent(event)
    }

}) // end Admin controller