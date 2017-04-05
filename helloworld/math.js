var math = {
    sum: function(x,y){
        console.log("parametro x:"+x);
        console.log("parametro y:"+y);

        return x+y;
    },
    sub: function(x,y){
        return x-y;
    },
    mult: function(x,y){
        return x*y;
    },
    div: function(x,y){
        return x/y;
    }
}
module.exports = math;



