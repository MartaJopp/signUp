myApp.controller('AdminController', function ($scope, HomeService, ClassService) {
    var vm = this;
    
    vm.classService = ClassService;
    
    vm.listOfClasses = [{class: 'beginner',
    id: 1},
    {class: 'advanced', id: 2}, {class: 'intermediate', id: 3}]

// vm.classesTaught = []

//sets up a new class
    vm.makeNewClass = function (newClass) {
        console.log('clicked')
        ClassService.makeNewClass(newClass)
    } //end make new class

vm.addInstructor = function (instructor, classesTaught) {
    console.log('add instructor clicked', instructor, classesTaught)
    ClassService.addInstructor(instructor)
}

vm.checkmark = function (x) {
    console.log(x)
}

}) // end Admin controller