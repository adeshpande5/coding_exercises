/*Note: Avoid using built-in std::nth_element (or analogous built-in functions in languages other than C++) when solving this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Find the kth largest element in an unsorted array. This will be the kth largest element in sorted order, not the kth distinct element.

Example

For nums = [7, 6, 5, 4, 3, 2, 1] and k = 2, the output should be
kthLargestElement(nums, k) = 6;
For nums = [99, 99] and k = 1, the output should be
kthLargestElement(nums, k) = 99.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer nums

Guaranteed constraints:
1 ≤ nums.length ≤ 105,
-105 ≤ nums[i] ≤ 105.

[input] integer k

Guaranteed constraints:
1 ≤ k ≤ nums.length.*/

function kthLargestElement(nums, k) {
	const getParent = i => Math.floor((i-1) /2);

	class Heap{
		constructor(arr = []){
			this.heap = arr;
			this.length = arr.length;
			
			/*for(const ele of arr){
				this.insert(ele);
			}*/

			//start at node which has child
			let start = Math.floor((arr.length - 2) /2);

			while(start >= 0){
				this.siftDown(start);
				start--;
			}
		}

		/*insert(num){
			this.heap.push(num);
			this.length++;

			let i = this.length - 1;
			let parent = getParent(i);

			while(i>0 && this.heap[i] > this.heap[parent]){
				//swap element with its parent
				[this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];

				//move on to parent node
				i = parent;	
				parent = getParent(i);
			}
		}*/

		extract(){
			if(this.length <=0 ) throw("empty heap!");
			const max = this.heap[0];

			this.heap[0] = this.heap.pop();
			this.length--;
			this.siftDown(0);

			return max;
		}

		siftDown(start=0){
			let node = start;

			while(node < this.length){
				let child = 2 * node + 1;

				if(child + 1 < this.length && this.heap[child+1] > this.heap[child]) child++;

				if(child < this.length && this.heap[child] > this.heap[node]){
					//swap child with node
					[this.heap[node], this.heap[child]] = [this.heap[child], this.heap[node]];
					node = child;
				} else break;
			}

		}
	}

	/*function insert(num){
		heap.push(num);

		let i = heap.length - 1;
		let parent = getParent(i);

		while(i>0 && heap[i] > heap[parent]){
			//swap element with its parent
			[heap[i], heap[parent]] = [heap[parent], heap[i]];

			//move on to parent node
			i = parent;	
			parent = getParent(i);
		}
	}
	for(const num of nums){
		insert(num);
	}*/

	const heap = new Heap(nums);

	for(let i=0; i< k-1; i++) heap.extract();

	return heap.extract();
}

//quadratic time complexity
function kthLargestElement2(nums, k) {
    for(const num of nums){
        const howManyGreater = nums.filter( otherNum => otherNum > num).length;
        const howManyEqual = nums.filter( otherNum => otherNum === num).length;
        
        if(howManyGreater < k && howManyGreater + howManyEqual >= k) return num;
    }
}

//runs fine but uses built in function
function kthLargestElement1(nums, k) {
    return nums.sort((a,b) => b-a)[k-1];
}