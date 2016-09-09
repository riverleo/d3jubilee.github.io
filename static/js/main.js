(function ($) {
    'use strict';

    angular.module('main', ['ui.bootstrap', 'ngResource'])
        .directive('main', function () {
            return {
                restrict: 'E',
                controller: function ($scope, $location) {
                    $scope.tpls = {};
                    $scope.tpls.header = 'template/header.tpl.html';
                    $scope.tpls.footer = 'template/footer.tpl.html';

                    $scope.isProduction = ($location.host() == 'd3jubilee.com')
                }
            }
        })
        .controller('HomeController', function ($scope, $resource) {
            $scope.features = $resource('static/json/feature.json').get();
            $scope.category = $resource('static/json/category.json').get();
        })
        .controller('PortfolioController', function ($scope, $resource) {
            $scope.category = $resource('static/json/category.json').get();
        })
}(jQuery));
