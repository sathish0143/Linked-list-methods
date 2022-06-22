//Merge a linked list into another linked list at alternate positions.
console.clear()
class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
};
function push(head_ref, new_data)
{
    var new_node = new Node();
    new_node.data = new_data;
    new_node.next = (head_ref);
    (head_ref) = new_node;
    return head_ref;
 
}
function printList(head)
{
    var temp = head;
    while (temp != null)
    {
        console.log( temp.data);
        temp = temp.next;
    }
    document.write("<br>");
}
function merge(p, q)
{
    var p_curr = p, q_curr = q;
    var p_next, q_next;
    while (p_curr != null &&  q_curr != null)
    {
        p_next = p_curr.next;
        q_next = q_curr.next;
        q_curr.next = p_next; 
        p_curr.next = q_curr;
        p_curr = p_next;
        q_curr = q_next;
    }
 
    q = q_curr;
    return q;
}
var p = null, q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log( "First Linked List:");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log( "Second Linked List:<br>");
printList(q);
q = merge(p, q);
console.log( "Modified First Linked List:");
printList(p);
console.log( "Modified Second Linked List:");
printList(q);