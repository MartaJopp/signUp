myApp.service('ClassService', function ($http, $location) {
    console.log('ClassService Loaded');
    var self = this;

    self.newInstructor = {
        firstName: '',
        lastName: '',
        goesBy: '',
        classesTaught: []
    }

    self.makeNewClass = function (newClass) {
        console.log('the class', newClass)

        $http.post('/admin/', newClass).then(function (response) {
            console.log(response)
        }).catch(function (err) {
            console.log('Error Posting Class');
        })
    }

//add new instructor
self.addInstructor = function (instructor, classes) {
    
    // console.log('instructor', classes)
    // classes = self.newInstructor.classesTaught
    // self.newInstructor.classesTaught = classes;
    // console.log('self.newInstructor.classesTaught', self.newInstructor.classesTaught)
} //end add new instructor


}) //end service