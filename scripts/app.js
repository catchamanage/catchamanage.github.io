if ('serviceWorker' in navigator) {


	navigator.serviceWorker.register('./serviceWorker.js')
	    .then(function(reg) { 
	        console.log(reg);
            console.log('Service Worker Registered'); 
	    });


}