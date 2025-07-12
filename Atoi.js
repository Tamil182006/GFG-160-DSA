/**
 * @param {string} s
 * @return {number}
 */
class Solution {
    myAtoi(s) {
        const INT_MAX = 2147483647;
        const INT_MIN = -2147483648;
        
        let i = 0;
        while(i < s.length && s[i] === ' '){
         i++;
        }
        let sign = 1;
        if (s[i] === '+' || s[i] === '-' ){
            sign = (s[i] === '-') ? -1 : 1;
            i++;
        }
        let num = 0;
        let digitFound = false;
        while(i < s.length && s[i] >='0' && s[i] <= '9' ){
            digitFound = true;
            let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
            num = num*10 + digit;
            i++;
        }
        if(!digitFound) return 0;
        num *= sign;
        
        if(num === 0) return 0;
        if(num>INT_MAX)return INT_MAX;
        if(num<INT_MIN)return INT_MIN;
        
        return num;
    }
}
