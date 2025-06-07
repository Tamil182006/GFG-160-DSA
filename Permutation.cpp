class Solution {
  public:
    void nextPermutation(vector<int>& arr) {
        int n = arr.size();
        int i = n - 2;

        // Step 1: Find the first index i such that arr[i] < arr[i + 1]
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--;
        }

        if (i >= 0) {
            // Step 2: Find index j such that arr[j] > arr[i]
            int j = n - 1;
            while (arr[j] <= arr[i]) {
                j--;
            }
            // Step 3: Swap arr[i] and arr[j]
            swap(arr[i], arr[j]);
        }

        // Step 4: Reverse from i + 1 to end
        reverse(arr.begin() + i + 1, arr.end());
    }
};
