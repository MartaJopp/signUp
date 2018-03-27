myApp.controller('AdminController', function (HomeService, ClassService) {
    var vm = this;
    vm.classService = ClassService;
    vm.listOfClasses = ['beginner', 'advanced', 'intermediate']

    //sets up a new class
    vm.makeNewClass = function (newClass) {
        console.log('clicked')
        ClassService.makeNewClass(newClass)
    } //end make new class



}) // end Admin controller