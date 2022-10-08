// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  // get len of list (start at 0)
  let len = 0;
  let curr = head;
  while (curr.next) {
    len += 1;
    curr = curr.next;
  }

  // if only one, remove it will cause list empty
  if (!len) return null;

  // des(index) will be the node before one before going to be deleted
  let des = len - n;

  // des smaller than zero means remove the first one
  if (des < 0) return head.next;

  // find the node before one before going to be deleted
  curr = head;
  while (des) {
    des -= 1;
    curr = curr.next!;
  }
  curr.next = curr.next?.next || null;
  return head;
}
