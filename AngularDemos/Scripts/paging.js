var users = angular.module('users', ['ui.bootstrap']);

users.controller('UsersController', function ($scope) {
    $scope.filteredUsers = [], $scope.currentPage = 1, $scope.numPerPage = 10,
    $scope.maxSize = 5, $scope.sText = "";    
    
    var firstNames = ["John", "Jane", "Mark", "Peter", "Mark", "Don", "Kenneth", "Gary", "Frank", "Henry", "Gale", "Sam", "Roy", "Walter", "David"];
    var lastNames = ["Smith", "White", "King", "Hill", "Lopez", "Young", "Turner", "Evans", "Cook", "Morris", "Cox", "James", "Foster", "Hayes", "Cole"];

    $scope.getRandomNo = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $scope.makeBaseUsers = function () {
        $scope.baseUsers = [];
        
        for (var i = 1; i <= 1000; i++) {
            var r = $scope.getRandomNo(0, 14);
            var name = lastNames[r] + ', ' + firstNames[r];
            var email = firstNames[r] + i + '@@mail.com';
            $scope.baseUsers.push({ id: i, text: name, email: email, done: false });
        }
    };

    $scope.makeUsers = function () {
        $scope.allUsers = [];
        var text = $scope.sText.toLowerCase();
        
        if (text == '') {
            $scope.allUsers = $scope.baseUsers;
            return;
        }

        if (text != null && text != '') {
            for (var i = 1; i <= 1000; i++) {
                var user = $scope.baseUsers[i];
                if (user != null && (user.text.toLowerCase().indexOf(text) >= 0 || user.email.toLowerCase().indexOf(text) >= 0)) {
                    $scope.allUsers.push(user);
                }
            }
        }
    };

    $scope.updateResults = function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage), end = begin + $scope.numPerPage;

        $scope.filteredUsers = $scope.allUsers.slice(begin, end);
    };

    $scope.makeBaseUsers();
    $scope.makeUsers();

    $scope.numPages = function () {
        return Math.ceil($scope.allUsers.length / $scope.numPerPage);
    };

    $scope.$watch('currentPage + numPerPage', function () {
        $scope.updateResults();
    });

    $scope.$watch('sText', function () {
        if ($scope.sText.length == 0 || $scope.sText.length > 2) {
            $scope.makeUsers();
            $scope.updateResults();
        }
    });
});
