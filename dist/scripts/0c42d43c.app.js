angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);
var gaPlugin;
function onDeviceReady() {
  gaPlugin = window.plugins.gaPlugin;
  gaPlugin.init(successHandler, errorHandler, 'UA-47678875-1', 10);
  PushWoosh = window.plugins.pushwoosh;
  PushWoosh.appCode = '93D13-D7F76';
}
angular.module('feApp', [
  'app.controllers',
  'app.services',
  'app.directives',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'uiSlider'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html' }).when('/summary', {
      templateUrl: 'views/summary.html',
      controller: 'SummaryCtrl'
    }).when('/SachinStats', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/ScoreBuckets', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/ResultBuckets', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/WonLostCenturiesInnning', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/RecordChart', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/LifeTimeChart', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/WinLossChart', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/FindOutYourSelf', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/FarewellSpeech', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).when('/Feedback', {
      templateUrl: 'views/sachin_stats.html',
      controller: 'SachinStatsCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);