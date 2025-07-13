/**
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
class Solution {
    areAnagrams(s1, s2) {
        // code here
        if(s1.length != s2.length) return false;
        
        let freqMap={}
        
        for(let i = 0; i < s1.length ; i++){
            let char = s1[i];
            if(freqMap[char] === undefined){
                freqMap[char] = 1;
            }
            else{
                freqMap[char] += 1;
            }
        }
        for(let i = 0; i < s2.length; i++){
            let char = s2[i];
            if(freqMap[char] === undefined || freqMap[char] === 0){
                return false;
            }
            freqMap[char] -= 1;
        }
        for(let key in freqMap){
            if(freqMap[key] != 0){
                return false;
            }
        }
        return true;
    }
}
