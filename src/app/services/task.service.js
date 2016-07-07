(function () {
  'use strict';

  angular
    .module('app')
    .factory('ToDoService', ToDoService);

  /** @ngInject */
  function ToDoService() {
    var data = [
      {
        id: 1,
        description: 'run project',
        hasDone: false,
      },
      {
        id: 2,
        description: 'go to',
        hasDone: false,
      },
      {
        id: 3,
        description: 'done project',
        hasDone: true,
      },
    ];

    var service = {
      getData: getData,
      deleted: deleted,
      add: add
    };

    return service;

    function add(text) {
      data.push(
        {
          id: data[data.length - 1].id + 1,
          description: text,
          hasDone: false,
        }
      )
    }

    function deleted(id) {
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var element = data[key];
          if (element.id === id) {
            data.splice(key, 1)
          }
        }
      }
    }

    function getData() {
      return data;
    }
  }
})();
