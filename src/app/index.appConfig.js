export var appConfig =  {
  route : {
    home : {
      title : "home",
      url : "/",
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      showInNav : true
    },
    workExamples : {
      title : "work-examples",
      url : '/work-examples',
      templateUrl: 'app/workExamples/index.html',
      controller : "WorkExamplesController",
      controllerAs: "workExamplesController",
      showInNav : true
    },
    contacts : {
      title : "contacts",
      url : '/contacts',
      templateUrl: 'app/contacts/index.html',
      controller : "ContactsController",
      controllerAs: "contactsController",
      showInNav : true
    },
    example : {
      title : "example",
      url : "/example/:url",
      templateUrl: 'app/example/index.html',
      controller : "ExampleController",
      controllerAs: "exampleController",
      showInNav : false
    }
  },

  workExamples : [
    {
      title : "Example 1",
      url : "examples/Andia1/index.html"
    },
    {
      title : "title 2",
      url : "google.com"
    }
  ],

  localizations : [
    {
      title : "english",
      code : "en"
    },
    {
      title : "russian",
      code : "ru"
    },
    {
      title : "ukrainian",
      code : "ua"
    }
  ]

};

