var StorageUtils = require("./StorageUtils");


module.exports = {
    isFirstTimeUser: function() {
        return new Promise(function(resolve, reject){
        	StorageUtils.getExtStorage("user").then(function(user){
        		resolve(!user);
        	}, function(er){
        		console.log(er);
        		reject();
        	});
        });
    },

    getBGPage: function() {
        return chrome.extension.getBackgroundPage();
    }
    
}
