// User function template for C++

class Solution {
  public:
    int getMinDiff(vector<int> &arr, int k) {
        int n = arr.size();
        if(n==1){
            return 0;
        }
        sort(arr.begin(),arr.end());
        
        int ans = arr[n-1]-arr[0];
        
        int smallest,largest;
        
        for(int i = 0; i < n; i++){
          if(arr[i]-k<0) continue;
          
          smallest = min(arr[0]+k,arr[i]-k);
          largest = max(arr[i-1]+k,arr[n-1]-k);
          
          ans = min(ans,largest-smallest);
         
        }
        
        return ans;
    }
};
