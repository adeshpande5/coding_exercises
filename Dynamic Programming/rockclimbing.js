/*https://www.twitch.tv/jsthegame

https://www.twitch.tv/videos/294543671
This summer you've decided to get in better shape – you're trying to develop more upper-body strength, 
so that you'd be able to pull yourself up in case you happen to be hanging off the edge of a building or a cliff.

So to get some practice, you've convinced some friends to go visit a local rock climbing wall. 
Unfortunately, there weren't any beginner-friendly walls in your area and some of your friends might be a little out of shape, 
so you might not all be able to reach the top.

Given an array holds representing the height of each climbing hold on the wall, and an array friends representing how far 
each of you can reach (ie: the maximum distance between holds that you'll be able to handle), your task is to find the 
maximum number of friends that can make it to the top of the wall.

rock climbers

To help each other out, each friend can reach back and assist the previous climber to reach the next hold – 
if friend i helps friend j, their combined reach will be friends[i] + friends[j] (but note that they can only help 
the one climber directly behind them). With this in mind, you can choose to send the friends up in any order, 
but each friend only climbs once.

NOTE: It's always possible to reach the first hold (regardless of its height).

Example

For holds = [1, 3, 6, 8, 11] and friends = [5, 3, 4], the output should be rockClimbing(holds, friends) = 3.

The largest gap between any two consecutive holds is 3. Each friend is able to reach that far on their own, 
so all 3 friends will make it to the top (no matter what order they ascend in).

For holds = [3, 7, 9, 13, 18, 21] and friends = [8, 1, 5], the output should be rockClimbing(holds, friends) = 3.

The friends with reaches of 8 and 5 can reach the top unassisted, and the friend with a reach of 1 can make it with 
the help of one of the other friends. So again, all 3 friends can make it to the top (so long as the 8 or 5 go before the 1).

For holds = [2, 5, 6, 8, 14, 17, 20, 24, 25] and friends = [3, 7, 4, 1, 2], the output should be rockClimbing(holds, friends) = 4.

The maximum gap between holds is 6 (between the 8 and 14), so only one climber can reach that far unassisted. 
But through the power of teamwork, all but one of them can get to the top:

The friend with a reach of 7 can reach the top by herself, so she can go first, while providing assistance to the 
friend with a reach of 2 (7 + 2 = 9 ≥ 6). That friend can then help the friend with a reach of 4 (2 + 4 = 6 ≥ 6), 
and then they can help the one with a reach of 3 (4 + 3 = 7 ≥ 6). Alternatively, they could also go in the order 7, 3, 4, 2.

The friend with a reach of 1 cannot reach the top. They would only be able to make it if they were assisted by the 
first friend (with a reach of 7), in which case they wouldn't be able to help anyone else up, since they wouldn't be 
able to provide the assistance needed to reach between the holds at 8 and 14.

So the maximum number of friends that can reach the top is 4.

For holds = [4, 9, 12, 16] and friends = [3, 1, 2, 1], the output should be rockClimbing(holds, friends) = 0.

Even though the friends with reaches of 3 and 2 would have a combined reach of 5, it wouldn't be possible for any 
single friend to reach between the holds at 4 and 9. They can't help a friend up if they can't make it up there alone first, 
so the answer is 0.

Input / Output

[execution time limit] 4 seconds (js)

[input] array.integer holds

An array of integers representing the height of each climbing hold on the wall, sorted in non-descending order.

Guaranteed constraints:
2 ≤ holds.length ≤ 1000
holds[i] ≤ holds[i + 1]
0 ≤ holds[i] ≤ 106

[input] array.integer friends

An array of integers representing how far each friend is able to reach (ie: the maximum distance they can reach between 
consecutive holds).

Guaranteed constraints:
1 ≤ friends.length ≤ 1000
0 ≤ friends[i] ≤ 105

[output] integer

How many friends can reach the top.

*/

function rockClimbing(holds, friends){
	//find biggest gap between two holds
	const biggestGap = Math.max(...holds.map((hold, i) => i ? hold - holds[i-1]:0));
	
	//set up two pointers
	let [left, right] = [0, friends.length -1];
	
	//keep track of last friend who made it to the top
	let last = 0;
	
	//keep track of how many friends made it to the top
	let reachers = 0;
	
	//sort the friends according to reach
	friends.sort((a,b) => a-b);

	for(let i=0; left <= right; i++){
		if(i % 2){
			//go from left
			
			//make sure this friend could help the next friend on the right
			while(left < right && friends[left] + friends[right] < biggestGap) left++;
			
			if(friends[left] + last >= biggestGap){
				reachers++;
				last = friends[left];
			}
			left++;
		}
		else{
			//go from right
			if(friends[right] + last >= biggestGap){
				reachers++;
				last = friends[right];
			}
			right--;
		}
			
	}
	
	return reachers;
}

const holds1=[1,3,6,8,11], friends1=[5,3,4];
console.log(rockClimbing(holds1, friends1));


const holds2=[3,7,9,13,18,21], friends2=[8,1,5];
console.log(rockClimbing(holds2, friends2));

const holds3=[2,5,6,8,14,17,20,24,25], friends3=[3,7,4,1,2];
console.log(rockClimbing(holds3, friends3));

const holds4=[4,9,12,16],friends4=[3,1,2,1];
console.log(rockClimbing(holds4, friends4));