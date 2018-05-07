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

function runTasks(tasks, concurrency, callback, onprogress) {
    tasks = tasks.concat();
    
    var completed = 0;
    var total = tasks.length;
    var queueSettled = false;
    
    var sync = true;
    
    // At least trigger `next` one time.
    concurrency = Math.max(Math.min(concurrency, total), 1);
    
    for (var i = 0; i < concurrency; i++) {
        // Use `setTimeout`.
        setTimeout(next, 0);
    }
    
    sync = false;

    function invokeCallback(error) {
        if (sync) {
            setTimeout(function () {
                callback(error);
            }, 0);
        } else {
            callback(error);
        }
    }

    function next() {
        onprogress(completed, total);

        if (tasks.length === 0) {
            if (completed === total) {
                invokeCallback();
            }
            
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
                    queueSettled = true;
                    invokeCallback(error);
                } else {
                    completed++;
                    if (!queueSettled) {
                        next();
                    }
                }
            });
        } catch (error) {
            if (settled) {
                return;
            }

            settled = true;
            queueSettled = true;
            invokeCallback(error);
        }
    }
}

runTasks(tasks, 1, function (error) {
    console.log(error || 'Done.');
}, function (completed, total) {
    console.log('Progress ' + completed + '/' + total + '...');
});