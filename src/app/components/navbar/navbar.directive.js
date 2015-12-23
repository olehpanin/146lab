export function NavbarDirective($appConfig, $state) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {

    },
    controller: NavbarController,
    //, $element, $attr
    link : function( $scope ){
      var route = [];
      for( let key in $appConfig.route ){
        if( $appConfig.route[key].showInNav === true ){
          route.push($appConfig.route[key]);
        }
      }

      $scope.navs = route;
      $scope.$state = $state;
    },
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}


class NavbarController {
  constructor () {
    'ngInject';
  }
}
