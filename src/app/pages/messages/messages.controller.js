(function () {
  'use strict';

  angular
    .module('app')
    .controller('MessagesController', MessagesController);

  /** @ngInject */
  function MessagesController($scope, $state, $timeout, DialogService) {
    console.log($state.params['messagesId']);
    var vm = this;
    

    function getMessages() {
      if ($state.params['messagesId']) {
        vm.messages = DialogService.getPartsById(+$state.params['messagesId']);

        $scope.messages = DialogService.getPartsById(+$state.params['messagesId']);

        showSpinner();

        $scope.showMessage = true;

      } else {
        $scope.showMessage = false;
      }
    }

    function showSpinner() {
      $scope.showSpinner = true;

      $timeout(function () {
        $scope.showSpinner = false;
      }, 2000);
    }

    getMessages();

    $scope.$on('messagesChange', function () {
      getMessages();
    });

    $scope.sendMessage = function () {
      DialogService.addMessage(+$state.params['messagesId'], $scope.newMessage);

      $scope.newMessage = '';
      
      showSpinner();
      
    };
  }
})();
