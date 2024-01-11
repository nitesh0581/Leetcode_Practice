var isAnagram = function(s, t) {
    const str1=s.split("").sort();
    const str2=t.split("").sort();
    if(str1.length!==str2.length){
        return false;
    }
    for(let i=0;i<str1.length; i++){
        if(str1[i]!==str2[i]){
            return false;
        }
    } 
    return true;
}; 