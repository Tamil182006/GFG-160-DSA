// User function Template for javascript

/**
 * @param {string} s1
 * @param {string} s2
 * @returns {string}
 */

class Solution {
    addBinary(s1, s2) {
        // code here
        let i = s1.length - 1;
        let j = s2.length - 1;
        let carry = 0;
        let result =[];
        
        while(i >= 0 || j >=0 || carry > 0){
            let bit1 = i >= 0 ? Number(s1[i]) : 0;
            let bit2 = j >= 0 ? Number(s2[j]) : 0;
         
        let sum = bit1 + bit2 + carry;
        
        let resultBit = sum%2;
        carry = Math.floor(sum/2);
        result.push(resultBit);
        i--;
        j--;
    }
        let finalResult = result.reverse().join('');
        
        while(finalResult.length > 1 && finalResult[0] === '0'){
            finalResult = finalResult.slice(1);
        }
        return finalResult;
    }
}
