


function validateJson(body, keys) {
    for (let i=0, n=keys.length; i<n; i+=1) {
        if (body[keys[i]] === undefined) return keys[i];
    }
    return true;
}



module.exports = {
    validateJson
}