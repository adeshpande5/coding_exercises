let TaskRunner = (maxconcurrency) =>{
	let that = {};
	
	that.maxconcurrency = maxconcurrency;
	that.currtasks = []; //to hold all the tasks
	that.push = (task) => {
		that.currtasks.push(task);
	};

	that.runTasks = (callback, onprogress) => {
	    let completed = 0;
	    let queueSettled = false;
	    let sync = true;

	    invokeCallback = (error) => {
	        if (sync) {
	            setTimeout(function () {
	                callback(error);
	            }, 0);
	        } else {
	            callback(error);
	        }
	    }

	    next = () => {	    	
	    	const total = that.currtasks.length;
	        onprogress(completed, total);

	        if (total === 0) {
	            if (completed === total) {
	                invokeCallback();
	            }
	            
	            return;
	        }

	        let task = that.currtasks.shift();
	        let settled = false;

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

	    // At least trigger `next` one time.
	    const concurrency = Math.max(Math.min(that.maxconcurrency, that.currtasks.length), 1);
	    
	    for (var i = 0; i < concurrency; i++) {
	        // Use `setTimeout`.
	        setTimeout(next, 0);
	    }
	    sync = false;
	}

	that.runTasks(function (error) {
	    console.log(error || 'Done.');
	}, function (completed, remaining) {
	    console.log(`Completed Task Number: ${completed}. Remaining tasks = ${remaining}`);
	});

	return that;
}

exampleTask = (done) => {
  	setTimeout(done, Math.random() * 1000);  
}

let runner = TaskRunner(3);
runner.push(exampleTask); // running
runner.push(exampleTask); // running
runner.push(exampleTask); // running
runner.push(exampleTask); // hold, and then running
runner.push(exampleTask); // ...
runner.push(exampleTask);
runner.push(exampleTask);