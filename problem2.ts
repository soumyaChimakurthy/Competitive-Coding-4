// Time Complexity : O(n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : yes
// Any problem you faced while coding this : no


// Your code here along with comments explaining your approach
function isPalindrome(head) {
    function isPalindromRecursive(recursiveHead) {
        // Reached the end of the list
        if (recursiveHead == null) {
            return true;
        }

        const next = isPalindromRecursive(recursiveHead.next);
        const valid = recursiveHead.val === head.val;
        head = head.next;
        return next && valid;
    }
    return isPalindromRecursive(head);
};

