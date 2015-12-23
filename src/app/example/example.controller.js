export class ExampleController{
  constructor( $stateParams, $scope, $state, $appConfig ){
    'ngInject';
    let url = decodeURIComponent( $stateParams.url );
    //console.log( url );
    $scope.exampleUrl = url;
    //console.log("ExampleController is here");

    $scope.iframeLoaded = function(){
      //console.log("iframeLoaded");
      iFrameResize({log:true});
    };

    $scope.goBack = function(){
      $state.go( $appConfig.route.workExamples.title );
    };
  }
}
