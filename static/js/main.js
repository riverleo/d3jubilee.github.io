(function ($) {
    'use strict';

    angular.module('main', ['ui.bootstrap', 'ngResource'])
        .controller('HomeController', function ($scope, $resource) {
            $scope.features = $resource('static/json/feature.json').get();
        })
        .controller('PortfolioController', function ($scope, $resource) {
            $scope.category = $resource('static/json/category.json').get();
        })
}(jQuery));
