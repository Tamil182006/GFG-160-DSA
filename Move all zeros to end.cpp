class Solution {
  public:
    void pushZerosToEnd(vector<int>& arr) {
        // code here
        int pos=0;
        for(int num : arr){
            if(num != 0){
                arr[pos]=num;
                pos++;
            }
            }
            for(int i=pos; i<arr.size();i++){
                arr[i]=0;
            }
    }
};