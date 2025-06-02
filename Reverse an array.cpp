class Solution {
  public:
    void reverseArray(vector<int> &arr) {
        // code here
        int left = 0;
        int right = arr.size()-1;
        while(left < right){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            left++;
            right--;
        }
    }
};