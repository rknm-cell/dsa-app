interface TreeNodeInterface {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export class TreeNode<T = TreeNodeInterface> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode({ val: 1, left: null, right: null });
const b = new TreeNode({ val: 2, left: null, right: null });
const c = new TreeNode({ val: 3, left: null, right: null });
const d = new TreeNode({ val: 4, left: null, right: null });
const e = new TreeNode({ val: 5, left: null, right: null });
const f = new TreeNode({ val: 6, left: null, right: null });
const g = new TreeNode({ val: 7, left: null, right: null });

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function dfs(root: TreeNode | null, target: number): TreeNode | null{
    // check if root is null, return null if so
    if (root === null){
        return root
    }
    // check if we've found the target value in node
    if (root.value.val === target){
        return root
    }
    //check left end of root, if not null, return root
    const left = dfs(root.left, target)
    if (left !== null){
        return left
    }
    //check left end of root, if not null, return root
    const right = dfs(root.right, target)
    if (right !== null){
        return right
    }
    //if none of the checks fulfill, root doesn't have target, return null
    return null
}

console.log(dfs(a, 7));