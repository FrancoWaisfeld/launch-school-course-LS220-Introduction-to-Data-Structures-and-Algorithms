// Given a string, determine whether it is a valid palindrome or not.

// A palindrome string is a string that reads the same backwards as forwards.

// Input: "madam"
// Output: true

// Input: "abcbea"
// Output: false

function isValidPalindrome(str) {
  return isValidPalindromeHelper(str, 0, str.length - 1);
}

function isValidPalindromeHelper(str, start, end) {
  if (end <= start) {
    return true;
  }
  return (
    str[start] === str[end] && isValidPalindromeHelper(str, start + 1, end - 1)
  );
}