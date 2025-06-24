int maxSubarraySum(vector<int>& arr) {
    int n = arr.size();
    int currentSum = arr[0];
    int maxSum = arr[0];

    for (int i = 1; i < n; i++) {
        currentSum = max(arr[i], currentSum + arr[i]);
        maxSum = max(maxSum, currentSum);
    }

    return maxSum;
}