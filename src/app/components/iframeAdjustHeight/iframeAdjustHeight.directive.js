export function IframeAdjustHeightDirective(){
  'ngInject';

  let directive = {
    scope: {
    },

    link: function(scope, element){
      element.on('load', function(){
        var iFrameHeight = element[0].contentWindow.document.body.scrollHeight + 'px';
        var iFrameWidth = '100%';
        element.css('width', iFrameWidth);
        element.css('height', iFrameHeight);
      });

      scope.$on('$destroy', function() { element.off('load'); });
    }
  };

  return directive;
}
