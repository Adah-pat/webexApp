exports.checkStatus = (response) => {
    if(response.ok){
        return response;
    }
    else{
        return Promise.reject(new Error("Status Error: " + response.statusText))
    }
}