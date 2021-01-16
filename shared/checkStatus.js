exports.checkStatus = (response) => {
    if(response.ok || response.status(204)){
        return response;
    }
    else{
        return Promise.reject(new Error("Status Error: " + response.statusText))
    }
}