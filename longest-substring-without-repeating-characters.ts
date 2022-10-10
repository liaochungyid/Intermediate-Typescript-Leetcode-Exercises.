function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let substring: string[] = [];
  for (let c of s) {
    if (substring.includes(c)) {
      maxLen = Math.max(maxLen, substring.length);
      substring.splice(0, substring.indexOf(c) + 1);
    }
    substring.push(c);
  }
  return Math.max(maxLen, substring.length);
}

// https://leetcode.com/problems/longest-substring-without-repeating-characters
