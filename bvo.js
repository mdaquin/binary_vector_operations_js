var zero = BigInt(0)
var one = BigInt(1)
var two = BigInt(2)
class BinaryVector {
    // create the binary vector from an array of booleans
	// NOTE: It is assumed that all bv sizes to be equal
	constructor(v,s=0){
		if (s){
			this.rep = v
			this.size = s
		} else if (v) {
			this.rep = zero
			this.size = v.length
			for (var i = 0; i < this.size; i++) 
				this.rep += v[i] ? two ** BigInt(i) : zero	
		} else {
			this.rep = zero
			this.size = 0;
		}
	}
    equals(bv){ // returns boolean
		return this.rep==bv.rep
    }
    intersection(bv){
		return new BinaryVector(this.rep&bv.rep, Math.max(this.size,bv.size))
    }
    union(bv){
		return new BinaryVector(this.rep|bv.rep, Math.max(this.size,bv.size))
    }
	inverse(){
		return new BinaryVector(two ** BigInt(this.size) - one - this.rep, this.size)
	}
	// Not really the difference
	// Returns true when A=true and B=false
	// This is the inverse of the implication ~(A->B)
    difference(bv){
		return this.intersection(bv.inverse())
    }
    get(i){ // return boolean
		var bigi = two ** BigInt(i)
		return this.rep >= bigi && this.rep / bigi % two == 1
    }
    toString(){
		return this.rep.toString()
		/*var re = " ";
		for (var i = 0; i < this.size; i++)
			re += this.get(i) + " "
		return re;*/
    }
}