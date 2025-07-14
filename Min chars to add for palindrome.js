/**
 * @param {string} s
 * @returns {number}
 */

class Solution {
    minChar(s) {
        // code here
        const rev = s.split('').reverse().join('');
        const concat = s + '$' + rev;
        const lps = new Array(concat.length).fill(0);
        let length = 0;
        
        for(let i = 1; i < concat.length; i++){
            while(length > 0 && concat[i] != concat[length]){
                length = lps[length-1];
            }
            if(concat[i] === concat[length]){
                length++;
                lps[i] = length;
            }
            else{
                lps[i] = 0;
            }
        }
        return s.length - lps[concat.length - 1];   
    }
}
