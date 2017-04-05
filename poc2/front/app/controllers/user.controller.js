/*function ListaComprasController($scope) {

    $scope.item = {};

    $scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Cerveja', quantidade: 12, comprado: false}
    ];

    $scope.adicionaItem = function () {
        $scope.itens.push({produto: $scope.item.produto, quantidade: $scope.item.quantidade, comprado: false});
        $scope.item.produto = $scope.item.quantidade = '';
        toastr.success("Item adicionado com sucesso.");
    };

    $scope.editarItem = function(index){
        $scope.item = $scope.itens[index];
        $scope.edit = true;
    };

    $scope.applyChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
        toastr.success("Item alterado com sucesso.");
    };

    $scope.deleteItem = function(index){
        $scope.itens.splice(index, 1);
        toastr.success("Item removido com sucesso.");
    };
}

*/

(function(){
	'use strict';

	angular.module('AngularApp')
		   .controller('UserController', UserController);

	UserController.$inject = [ 
		'$log',
		'UserService'
	];

	function UserController(
		$log,
		UserService
	){

		$log.log('UserController...');

		var vm = this;

        vm.user = {}; //object
        vm.arrUsers = []; //array
        // vm.arrUsers = [
        //     { id: 1, name: 'Jefferson Santos', email: 'jeffhes@br.ibm.com' },
        //     { id: 2, name: 'Regis Nogueira', email: 'regis@br.ibm.com' }
        // ];

		vm.adicionaItem = adicionaItem;
		vm.editarItem = editarItem;
		vm.applyChanges = applyChanges;
		vm.deleteItem = deleteItem;

		//Initialize
		function onLoad(){

            UserService.getUsers()
              .then(function(data) {
                if (data) {
                    vm.arrUsers = data.data;
                }
              }, function(error){
                console.log(error || 'Server error');
              });

		}

		function init(){
			
			onLoad();

		}

		//Methods of template
	    function adicionaItem() {
            vm.arrUsers.push({name: vm.user.username, email: vm.user.email});
            vm.item.produto = $scope.item.quantidade = '';
            toastr.success("Item adicionado com sucesso.");
        };

        function editarItem(index){
            vm.user = vm.arrUsers[index];
            vm.edit = true;
        };

        function applyChanges(index){
            vm.user = {};
            vm.edit = false;
            toastr.success("Item alterado com sucesso.");
        };

        function deleteItem(index){
            vm.arrUsers.splice(index, 1);
            toastr.success("Item removido com sucesso.");
        };


		init();

	}

})();