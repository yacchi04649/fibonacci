'use strict';
const tmpResult = new Map();
tmpResult.set(0, 0);
tmpResult.set(1, 1);
function fib(n) {
	if (tmpResult.has(n)) {
		return tmpResult.get(n);
	}
	const	result = fib(n - 1) + fib(n - 2);
	tmpResult.set(n,result);
	return result;
}
const length = 40;
for (let i = 0; i <= length; i++) {
	console.log(fib(i));
}
