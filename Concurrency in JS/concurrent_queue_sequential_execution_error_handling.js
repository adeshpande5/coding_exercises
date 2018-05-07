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

function runTasks(tasks, callback, onprogress) {
    // Avoid changes to this list.
    tasks = tasks.concat();
    
    // Counters.
    var completed = 0;
    var total = tasks.length;
    
    var sync = true;
    next();
    sync = false;
    
    function invokeCallback(error) {
        if (sync) {
            // We can also use `setImmediate` if available.
            setTimeout(function () {
                callback(error);
            }, 0);
        } else {
            callback(error);
        }
    }
    
    function next() {
        // Call `onprogress` handler with the information we want.
        onprogress(completed, total);

        if (tasks.length === 0) {
            invokeCallback();
            return;
        }
        
        var task = tasks.shift();
        var settled = false;
        
        try {
            task(function (error) {
                if (settled) {
                    return;
                }
                
                settled = true;
                
                if (error) {
                    invokeCallback(error);
                } else {
                    completed++;
                    next();
                }
            });
        } catch (error) {
            if (settled) {
                return;
            }
            
            settled = true;
            invokeCallback(error);
        }
    }
}

runTasks(tasks, function (error) {
    console.log(error || 'Done.');
}, function (completed, total) {
    console.log('Progress ' + completed + '/' + total + '...');
});