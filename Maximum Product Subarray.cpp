class Solution {
  public:
    int maxProduct(vector<int> &arr) {
        int n = arr.size();
        int maxSoFar = arr[0];
        int minSoFar = arr[0];
        int result = arr[0];
        
        for(int i = 1; i < n; i++){
            int curr = arr[i];
            
            if(curr < 0)
                swap(maxSoFar , minSoFar);
                
                maxSoFar = max(curr, curr*maxSoFar);
                minSoFar = min(curr, curr*minSoFar);
                
                result = max(result,maxSoFar);
            }
        return result;    
    }
};
