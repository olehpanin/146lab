export function routerConfig ($stateProvider, $urlRouterProvider, $appConfig) {
  'ngInject';

  var appConfig = $appConfig;

  $stateProvider
    .state(appConfig.route.home.title, appConfig.route.home)
    .state(appConfig.route.workExamples.title, appConfig.route.workExamples)
    .state(appConfig.route.contacts.title, appConfig.route.contacts)
    .state(appConfig.route.example.title, appConfig.route.example)
    ;

  $urlRouterProvider.otherwise( appConfig.route.home.url );
}
