export class LocalizationService{
  constructor( $translate, $cookies ){
    'ngInject';
    this.$translate = $translate;
    this.$cookies = $cookies;
  }

  setLanguage( newLanguageCode ){
    this.$translate.use( newLanguageCode );
    this.$cookies.put("language", newLanguageCode);
  }
}
