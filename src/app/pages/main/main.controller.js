(function () {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(ToDoService) {
    var vm = this;

    vm.filter = {
      description: "",
      hasDone: ""
    };

    vm.filters = [
      {
        key: 'all',
        value: ""
      },
      {
        key: 'done',
        value: "true"
      },
      {
        key: 'active',
        value: "false"
      }];

    vm.tasks = ToDoService.getData();

    vm.add = function (text) {
      ToDoService.add(text);
    }

    vm.delete = function (id) {
      ToDoService.deleted(id);
    }
  }
})();
