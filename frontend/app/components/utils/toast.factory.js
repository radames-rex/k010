
'use strict';

(function () {

	var Toast = function($mdToast){

		var Toast = {};

		var toastType = {
			SUCCESS : 'success-toast',
			ERROR : 'error-toast',
			DEFAULT : ''
		}

		var showToast = function(content, theme, callback) {
			if(content){
				var toast = $mdToast.simple()
				.content(content)
				.action('OK')
				.hideDelay(Toast.DELAY)
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

		Toast.DELAY = 4000;

		Toast.showSuccessToast = function(content, callback) {
			showToast(content, toastType.SUCCESS, callback);
		};

		Toast.showErrorToast = function(content, callback) {
			showToast(content, toastType.ERROR, callback);
		};

		Toast.showToast = function(content, callback) {
			showToast(content, toastType.DEFAULT, callback);
		};

		return Toast;
	}

	Toast.$inject = ['$mdToast'];

	angular
	.module('k010App')
	.factory('Toast', Toast);
})();
