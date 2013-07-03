function start() {

    console.log("Request handler 'start'  was  callde.");
    return "Hello Start";
}

function upload(){

    console.log("Request handler 'upload' was called.");
    return "Hello Upload";

}

exports.start = start;
exports.upload = upload;

