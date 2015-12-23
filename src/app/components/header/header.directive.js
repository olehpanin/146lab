export function HeaderDirective( $state, $appConfig ){
  'ngInject';

  let directive = {
    scope : false,
    link : function( $scope, $element, $attr ){
      //console.log( $state );
      var exampleStateName = $appConfig.route.example.title;
      $scope.$state = $state;
      $scope.exampleStateName = exampleStateName;
    },
    templateUrl : "app/components/header/index.html"
  };

  return directive;
}
