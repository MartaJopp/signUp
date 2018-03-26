myApp.service('ClassService', function ($http, $location) {
    console.log('ClassService Loaded');
    var self = this;

self.makeNewClass = function (newClass) {
    console.log('the class', newClass)
}




}) //end service