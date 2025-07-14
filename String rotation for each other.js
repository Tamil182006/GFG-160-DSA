 
    
    class Solution {
        areRotations(s1, s2) {
            // code here
            if(s1.length != s2.length)
                return false;
            
            return(s1+s1).includes(s2);
            
        }
    }
