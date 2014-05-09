var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {

    $scope.streettypeMockData = [
        {name: 'Street', value: 'Street'},
        {name: 'Avenue'},
        {name: 'Crescent'},
        {name: 'Drive'},
        {name: 'Road'},
        {name: 'Highway'}
    ];

    var sel = "Street";
    var selectedValue = {name: sel};
    $scope.streetTypeSelected = selectedValue;

    console.log(selectedValue);

});