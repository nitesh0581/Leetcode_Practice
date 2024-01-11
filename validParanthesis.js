var isValid = function(s){
    if(s.length%2!=0){
        return false;
    }
    const stack=[];
    for(let char of s){
        if(char==='('){
            stack.push(')');
        }else if(char==='{'){
            stack.push('}');
        }else if(char==='['){
            stack.push(']');
        }else if(char!==stack.pop()){
            return false;
        }
    }
    return stack.length===0;
};