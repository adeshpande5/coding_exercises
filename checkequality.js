/* Given 2 array of objects compare if they are exactly equal to each other
they may or may not contain duplicate elements, duplicate elements should be ignored
*/
compare = (a, b) =>{
    createmap = (arr) => {
        let resultmap = {};
        for(let i=0; i< arr.length; i++ ){
            let objid= arr[i].id;
            let exists = resultmap[objid];
            if(!exists){
                resultmap[objid] = arr[i];
            }
        }
        return resultmap;
    }
    
    let amap = createmap(a),
    bmap = createmap(b);
    
    //check if length match
    if(amap.length !== bmap.length){
        return false;
    } 
    //comparing objects 
    let amapkeys = Object.keys(amap),
    bmapkeys = Object.keys(bmap);
    
    for(let key of amapkeys){
        let currbobj = bmap[key];
        if(!currbobj){ //array objects don't contain same id
            return false;
        }
        let curraobj = amap[key];
        let curraobjkeys =  Object.keys(curraobj);
        let currbobjkeys =  Object.keys(currbobj);        
        for(let objprop of curraobjkeys){
            if(!currbobj.hasOwnProperty(objprop)){//check if both objects have same properties
                return false;
            }
            //check if both objects have same values
            if(curraobj[objprop] !== currbobj[objprop]){
                return false;
            }
        }
    }
    return true;
}

//test it out
(() => {
//input 1
var a = [], b = [];

console.log(compare(a,b)); //true

//input 2
var c = [{
    id: '1',
    foo: 2,
    color: 'blue'    
}, {
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '10',
    foo: 15,
    color: 'red'
}],
    d = [{
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '4',
    foo: 6,
    color: 'green'
}
];

console.log(compare(c,d)); //false

//input 3
var e = [{
    id: '1',
    foo: 2,
    color: 'blue'    
}, {
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '10',
    foo: 15,
    color: 'red'
}],
    f = [{
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '4',
    foo: 6,
    color: 'green'
}, {
    id: '5',
    foo: 8,
    color: 'red'
}
];

console.log(compare(e,f)); //false

//input 4
var g = [{
    id: '1',
    foo: 2,
    color: 'blue'    
}, {
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '10',
    foo: 15,
    color: 'red'
}],
    h = [{
    id: '1',
    foo: 2,
    color: 'blue'    
}, {
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '10',
    foo: 15,
    color: 'red'
}];

console.log(compare(g,h)); //true

//input 5
var i = [{
    id: '1',
    foo: 2,
    color: 'blue'    
}, {
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '10',
    foo: 15,
    color: 'red'
}],
    j = [{
    id: '10',
    foo: 15,
    color: 'red'
},{
    id: '3',
    foo: 5,
    color: 'green'
}, {
    id: '1',
    foo: 2,
    color: 'blue'    
}];

console.log(compare(i,j)); //true
})();