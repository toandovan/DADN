var LimitArr = {
    Arr : [[0, 0],[1023,0]],
    setArr : function(value){
        this.Arr = value;
    },
    getArr : function(){
        return this.Arr
    }
}
module.exports = LimitArr;