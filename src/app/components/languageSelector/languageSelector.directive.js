export function LanguageSelectorDirective($appConfig, $cookies){
  'ngInject';

  let directive = {
    restrict : "E",
    //, $element, $attr
    link : function( $scope ){
      $scope.localizations = $appConfig.localizations;
      let localizations = $appConfig.localizations,
        language = $cookies.get("language") || "en";

      $scope.model = {
        title : localizations.filter(function(obj){
          return obj.code == language;
        })[0].title
      };

      //console.info("link is here");
    },
    controller : function( $scope, localizationService ){
      'ngInject';
      $scope.changeLanguage = function( $event, item ){
        $event.preventDefault();
        $scope.model = item;

        localizationService.setLanguage( item.code );
      }
    },
    templateUrl : "app/components/languageSelector/index.html"
  };

  return directive;
}
