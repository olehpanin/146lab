export class WorkExamplesController{
  constructor( $scope, $state, $appConfig ){
    "ngInject"
    //console.log(" WorkExamplesController is here ");

    $scope.examples = $appConfig.workExamples;

    $scope.goToExamplePage = function( $event, url ){
      $event.preventDefault();
      //console.log( url );

      $state.go( $appConfig.route.example.title, { "url" : encodeURIComponent( url ) } );
    };

  }
}
