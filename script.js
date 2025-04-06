var isDate = function (input) {
  //   write your code here
	if(input instanceof Date && !isNaN(input.getTime())){
		return true;
	}
	const pasedDate = new Date(input);

	return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
