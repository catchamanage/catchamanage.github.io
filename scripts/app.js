if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('./serviceWorker.js')
	    .then(function(reg) {
	    	subscribe(reg);
	    	console.log('Service Worker Registered'); 
	    });
	    
	function subscribe(serviceWorkerReg) {  
	    serviceWorkerReg.pushManager.subscribe({userVisibleOnly: true})
	}
}

