

var input = document.querySelector("input");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
	
btn.addEventListener("click", function(){
	var text = input.value;
	var li = document.createElement("li");
	li.innerHTML = text;
	ul.appendChild(li);
	input.value = "";
})

ul.addEventListener("keydown", function(){
	var text = input.value;
	var li = document.createElement("li");
	li.innerHTML = text;
	ul.appendChild(li);
	input.value = "";
})

ul.addEventListener("click", function(e){
	if(e.srcElement.className){
		e.srcElement.className = "";
	} else{
	e.srcElement.className = "completed";
}
});


