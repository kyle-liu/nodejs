function start() {

    console.log("Request handler 'start'  was  callde.");

    function sleep(milliSeconds) {

        var startTime = new Date().getTime();
        console.log("enter wait: " + new Date().getTime());
        while(new Date().getTime()< startTime+milliSeconds){

            //console.log("waiting : " + new Date().getTime());
        };
        console.log("return wait: " +new Date().getTime());
    }

    /**
     * 会阻塞整个请求，这样当/start请求来的时候，会阻塞当前线程，这样会导致后续来的
     * 模拟场景：当t1时间来了一个请求/start, 这个时候node整个线程被阻塞，如果sleep传入的参数是20000，即20s,这个时候
     * t2时间来一个请求/upload,那么/start需要20s才能返回请求，而/upload需要20s-(t2-t1)的时间返回请求
     */
    sleep(20000);
    return "Hello Start";
}

function upload(){

    console.log("Request handler 'upload' was called.");
    return "Hello Upload";

}

exports.start = start;
exports.upload = upload;

