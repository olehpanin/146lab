/* global malarkey:false, moment:false */

import { appConfig } from './index.appConfig';
import { configBlock } from './index.config.js';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
//import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
//import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { MainService } from '../app/main/main.service';
import { LanguageSelectorDirective } from '../app/components/languageSelector/languageSelector.directive';
import { LocalizationService } from '../app/components/localization/localization.service';
import { ServerManagerService } from '../app/components/serverManager/serverManager.service';
import { WorkExamplesController } from '../app/workExamples/workExamples.controller';
import { ContactsController } from '../app/contacts/contacts.controller';
import { HeaderDirective } from '../app/components/header/header.directive';
import { ExampleController } from '../app/example/example.controller';
import { IframeAdjustHeightDirective } from '../app/components/iframeAdjustHeight/iframeAdjustHeight.directive';

angular.module('146lab', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular',
  'ui.router', 'ui.bootstrap', 'toastr', 'pascalprecht.translate'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(configBlock)
  .constant("$appConfig", appConfig)
  .config(routerConfig)
  .run(runBlock)
  //.service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('MainService', MainService)
  .controller('MainController', MainController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('languageSelector', LanguageSelectorDirective )
  //.directive('acmeMalarkey', MalarkeyDirective)
  .service('localizationService', LocalizationService)
  .controller('WorkExamplesController', WorkExamplesController)
  .controller('ContactsController', ContactsController)
  .directive('headerDirective', HeaderDirective)
  .controller('ExampleController', ExampleController)
  .directive('iframeAdjustHeight', IframeAdjustHeightDirective)
  .service('ServerManagerService', ServerManagerService)
;
