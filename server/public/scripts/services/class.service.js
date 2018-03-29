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
    self.addInstructor = function (instructor) {
        self.newInstructor = instructor
        console.log(self.newInstructor)

    } //end add new instructor

    self.addEvent = function (event) {
        self.newEvent = event
        console.log(self.newEvent);
    }

}) //end service