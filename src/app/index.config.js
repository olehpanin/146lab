export function configBlock ( $logProvider, toastrConfig, $locationProvider, $translateProvider ) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  //
  $locationProvider.html5Mode({
    enable : false
  });

  //
  // configures staticFilesLoader
  $translateProvider.useStaticFilesLoader({
    prefix: 'app/localizations/',
    suffix: '.json'
  });

  //
  let $cookies;
  angular.injector(['ngCookies']).invoke(['$cookies', function(_$cookies_) {
    $cookies = _$cookies_;
  }]);

  let defaultLanguage = $cookies.get("language") || "en";
  $translateProvider.preferredLanguage( defaultLanguage );
}
