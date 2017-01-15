/**
  * implement the function `getClosestCommonAncestor` and `getAncestorPath`
  * in the following Tree class
  */

/** example usage:
  * var grandParent = new Tree();
  * var parent = new Tree();
  * grandParent.addChild(parent);
  * var me = new Tree();
  * parent.addChild(me);
  * grandParent.getAncestorPath(me); // => [grandParent, parent, me]
*/

var Tree = function(name){
  this.name = name;
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

/**
  * return the lowest common ancestor of the two child nodes.
  * (assume for these examples that only a women can be the parent of a child)
  * more examples:
  *  1.) between me and my sibling -> my parent
  *  2.) between me and my cousin -> my grandParent
  *  3.) between my grandParent and my grandParent -> my grandParent
  *  4.) between me and a potato -> null
  */
Tree.prototype.getClosestCommonAncestor = function(child1, child2){
  // TODO: implement me!
  const child1Path = this.getAncestorPath(child1);
  const child2Path = this.getAncestorPath(child2);
  if (child2Path === null || child1Path === null) { return null}
  const smallest = child1Path.length < child2Path.length ? child1Path : child2Path;
  for (var i = smallest.length; i >= 0 ; i--) {
    if (child1Path[i] === child2Path[i]) {
      return smallest[i].name;
    }
  }
}

/**
  * should return the ancestral path of a child to this node.
  * more examples:
  * 1.) greatGrandParent.getAncestorPath(me) -> [great grandParent, grandParent, parent, me]
  * 2.) parent.getAncestorPath(me) -> [parent, me]
  * 3.) me.getAncestorPath(me) -> [me]
  * 4.) grandParent.getAncestorPath(H R Giger) -> null
  */
Tree.prototype.getAncestorPath = function(child){
  // TODO: implement me
  const path = [];
  const nodes = {};
  (function getPath(node){
    if(node.name === child.name){
      path.push(node);
      return path;
    }
    if (node.children.length === 0) {
      return 
    }else{
      for (var i = 0; i < node.children.length; i++) {
        if (node.isDescendant(child) ) {
          if (!nodes[node.name]) {
            path.push(node)
            nodes[node.name] = true;
          }
          getPath(node.children[i]);
        }
      }
    }
  })(this)
  return path.length > 0 ? path : null;   
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};

var grandParent = new Tree("grandParent")
var parent = new Tree("parent");
grandParent.addChild(parent)
var me  = new Tree("me");
var sibling = new Tree("brother")
parent.addChild(me)
var kid = new Tree('kid')
parent.addChild(sibling)
// sibling.addChild(kid)
// var test = grandParent.isDescendant(me)
// console.log(grandParent.getAncestorPath(me));
console.log(grandParent.getClosestCommonAncestor(kid, me))