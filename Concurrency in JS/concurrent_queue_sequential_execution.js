var tasks = [
    function taskOne(callback) {
        console.log('Running task one...');
        setTimeout(function () {
            callback();
        }, 200);
    },
    function taskTwo(callback) {
        console.log('Running task two...');
        setTimeout(function () {
            callback();
        }, 200);
    },
    function taskThree(callback) {
        console.log('Running task three...');
        setTimeout(function () {
            callback();
        }, 200);
    }
];

function runTasks(tasks, callback) {
    // Start everything.
    next();
    
    function next() {
        if (tasks.length === 0) {
            // Replace `console.log` with a call to `callback`.
            callback();
            return;
        }
    
        var task = tasks.shift();
        
        task(function () {
            next();
        });
    }
}

runTasks(tasks, function(){ console.log('DONE');})