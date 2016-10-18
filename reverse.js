const reverse = function(arr)
{
	const output = [];
	for(let i = 0, rev_counter = arr.length - 1; i < arr.length; i = i + 1, rev_counter = rev_counter - 1)
	{
		output[i] = arr[rev_counter];
	}
	return output;
}

console.log(reverse([1,2,3,4,5,6,7,8]));