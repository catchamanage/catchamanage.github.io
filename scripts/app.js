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


 // Check if push messaging is supported  
    if (!('PushManager' in window)) {  
       console.log('Push messaging isn\'t supported.');  
       return;  
     }
   //
   if (Notification.permission === 'denied') {  
      console.log('The user has blocked notifications.');  
      return;  
   }
