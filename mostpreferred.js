/* 
# Select the restaurant that the most people like for lunch. For this and all
# future questions if there is a tie then any of the tied restaurants may be
# selected.
#
#   preferences = {
#     jack: ["a", "b", "c", "d", "e"],
#     anand : ["b", "c", "d", "e"],
#     don: ["c", "d", "e"]
#   }
#
#   choose(preferences) #=> ["c", 3]
#
*/

var choose = (preferences) => {
    if (preferences) {
        let preftotals = [],
            maxpref = null,
            maxcount = 0;

        //iterate over all preferences
        for (let person of Object.keys(preferences)) {
            let myprefs = preferences[person];

            //iterate over a person's preference
            for (let pref of myprefs) {
                preftotals[pref] = (preftotals[pref]) ? preftotals[pref] + 1 : 1;

                if (preftotals[pref] > maxcount) {
                    maxcount = preftotals[pref];
                    maxpref = pref;
                }
            }

        }

        console.log(`Most preferred ${maxpref} - ${maxcount}`);
    }
}


const preferences = {
    jack: ["a", "b", "c", "d", "e"],
    anand: ["b", "c", "d", "e"],
    don: ["c", "d", "e"]
}

choose(preferences);