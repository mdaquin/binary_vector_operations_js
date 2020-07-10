# Efficient binary vector operations in Javascript

This is a simple javascript class to represent potentially large  binary vectors as a set of integers, and realise operations such as intersection through basic binary operations for efficiency. This was developped based on the need of using formal concept analysis in javascript efficiently.

Usage is relatively simple: Instanciate the class with an actual binary vector (i.e. an array of booleans) and apply operations, for example:

```javascript
var bv1 = new BinaryVector([false,false,true,true,true,true]);
var bv2 = new BinaryVector([true,false,true,true,false,false]);
var bv1ibv2 = bv1.intersection(bv2);
console.log(bv1ubv2.toString());
```

See test.html for basic test. This was also tested on an FCA framework (TBC) for intersection.

