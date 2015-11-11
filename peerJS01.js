var value = 42;

if (value >= 53) {
	value += 42;
}else {
	value -= 13;
};

var a = "11";

value += a;

var array = [];

for (var i=0; i<value.length; i++) {
	array.push(value[i]);
}

array.shift();
array.pop();

function backward() {
	var c = "";
	for (var j=array.length-1; j>=0; j--){
		c += array[j];
	};
	return c;
};

var b = backward();

value = parseInt(value);
b = parseInt(b);

// driver break

value = value + b;

if(value < 60){
	value = 14;
}else if(value === 2930){
	value = 27;
}else{
	value = 2;
}

var k = 10;

while(k > 0){
	value++;
	k--;
}

function thisSucks(val){
	val=val.toString();
	if(val.length >1){
		val = val.slice(1);
	}
	return val;
}

value = thisSucks(value);

console.log(value);