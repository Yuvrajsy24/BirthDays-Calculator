function find(event) 
{
	event.preventDefault();

	let day = document.getElementById("day");
	let month = document.getElementById("month");
	let msg = document.getElementById("msg");

	if (day.value === "") 
	{
		alert("Please enter a valid day");
		msg.innerHTML = "";
		day.focus();
		return;
	}
	else if (day.value < 1 || day.value > 31) 
	{
		alert("Please enter a valid day");
		msg.innerHTML = "";
		day.focus();
		return;
	}
	else if (month.value === "") 
	{
		alert("Please enter a valid month");
		msg.innerHTML = "";
		month.focus();
		return;
	}
	else if (month.value < 1 || month.value > 12) 
	{
		alert("Please enter a valid month");
		msg.innerHTML = "";
		month.focus();
		return;
	}

	let today = new Date();
	let currentYear = today.getFullYear();
	let nextBirthday = new Date(currentYear, parseInt(month.value) - 1, parseInt(day.value));

	if (nextBirthday < today) 
	{
		nextBirthday.setFullYear(currentYear + 1);
	}

	let timeDiff = nextBirthday - today;  
	let daysDiff = (timeDiff / (1000 * 60 * 60 * 24)) | 0;

	msg.innerHTML = "Days left until your birthday: " + daysDiff;
}