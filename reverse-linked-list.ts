// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let next = head.next;
  head.next = null;
  while (next) {
    // let tempNext = next.next
    // next.next = head
    // head = next
    // next = tempNext
    [next.next, head, next] = [head, next, next.next];
  }
  return head;
}

// https://leetcode.com/problems/reverse-linked-list/
