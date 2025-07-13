// User function Template for javascript
/**
 * @param {string} s
 * @returns {string}
 */
class Solution {
    nonRepeatingChar(s) {
        // code here
        let freq = {}
        
        for(let i = 0; i < s.length; i++){
            let ch = s[i];
            if(freq[ch] === undefined){
                freq[ch] = 1;
            }
            else{
                freq[ch] += 1;
            }
        }
        for(let i = 0; i < s.length; i++){
            let ch =s[i];
            if(freq[ch] === 1){
                return ch;
            }
        }
        return '$';
    }
}
