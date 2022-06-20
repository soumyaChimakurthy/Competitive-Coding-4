// Time Complexity : nlogn // Nodes will reduce for each calculation (O(n) * O(h) + O(h)) where h is n/2 
// Space Complexity : O(n) // Recursion stack
// Did this code successfully run on Leetcode : yes
// Any problem you faced while coding this : no


// Your code here along with comments explaining your approach

function isBalanced(root: any | null): boolean {
    return Math.abs(calculateHeight(root.left) - calculateHeight(root.right)) <= 1 && isBalanced(root.left)
        && isBalanced(root.right);
};

function calculateHeight(root: any) {
    if (root == null) {
        return 0;
    }

    return Math.max(calculateHeight(root.left), calculateHeight(root.right)) + 1;
}