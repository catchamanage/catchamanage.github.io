if ('serviceWorker' in navigator) {
     // navigator.serviceWorker
     //         .register('./serviceWorker.js')
     //         .then(function() 
     //                { console.log('Service Worker Registered'); 
     //         });

// navigator.serviceWorker.register('./serviceWorker.js')
//     .then(function(reg) { 
//         console.log(reg)
//     });

function subscribe(serviceWorkerReg) {  
    serviceWorkerReg.pushManager.subscribe({userVisibleOnly: true})
}

navigator.serviceWorker.register('./serviceWorker.js')
    .then(function(reg) { subscribe(reg) });

       
}