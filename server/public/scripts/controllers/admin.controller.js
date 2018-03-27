myApp.controller('AdminController', function (HomeService, ClassService) {
    var vm = this;
    vm.classService = ClassService;
    vm.listOfClasses = [{class: 'beginner',
    id: 1},
    {class: 'advanced', id: 2}, {class: 'intermediate', id: 3}]
    vm.classes = []
    //sets up a new class
    vm.makeNewClass = function (newClass) {
        console.log('clicked')
        ClassService.makeNewClass(newClass)
    } //end make new class

vm.addInstructor = function (instructor, classes) {
    // console.log('add instructor clicked', classes)
    ClassService.addInstructor(instructor, classes)
}

}) // end Admin controller