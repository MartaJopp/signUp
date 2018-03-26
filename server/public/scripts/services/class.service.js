myApp.service('ClassService', function ($http, $location) {
    console.log('ClassService Loaded');
    var self = this;

    self.makeNewClass = function (newClass) {
        console.log('the class', newClass)

        $http.post('/admin/', newClass).then(function (response) {
            console.log(response)
        }).catch(function (err) {
            console.log('Error Posting Class');
        })
    }




}) //end service