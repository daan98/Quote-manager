if('serviceWorker' in navigator){
    navigator.serviceWorker.register('../sw.js').
    then(result => {
        return result;
    })
    .catch(error => console.log('ERROR:\n', error));
} else{
    console.log('Service Worker unsupported');
}