
'use strict';

(function () {

	var ToastService = function($mdToast){

		var ToastService = this;

		var toastType = {
			SUCCESS : 'success-toast',
			ERROR : 'error-toast',
			DEFAULT : ''
		};

		var showToast = function(content, theme, callback) {
			if(content){
				var toast = $mdToast.simple()
				.content(content)
				.action('OK')
				.hideDelay(ToastService.DELAY)
				.highlightAction(false)
				.theme(theme)
				.position('bottom right');
				$mdToast.show(toast).then(function(response) {
					if (callback && typeof(callback) === "function") {
						callback(response);
					}
				});
			}
		};

		ToastService.DELAY = 4000;

		ToastService.showSuccessToast = function(content, callback) {
			showToast(content, toastType.SUCCESS, callback);
		};

		ToastService.showErrorToast = function(content, callback) {
			showToast(content, toastType.ERROR, callback);
		};

		ToastService.showToast = function(content, callback) {
			showToast(content, toastType.DEFAULT, callback);
		};
	};

	ToastService.$inject = ['$mdToast'];

	angular
	.module('k010App')
	.service('ToastService', ToastService);
})();
