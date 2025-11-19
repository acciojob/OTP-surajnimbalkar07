//your JS code here. If required.
const allCodes=document.querySelectorAll(".code")
allCodes[0].focus()
allCodes.forEach((code,index)=>{
	code.addEventListener("input",()=>{
		const value=code.value;
		if(value.length===1 && index<allCodes.length-1){
			allCodes[index+1].focus();
			
		}
	});
	code.addEventListener("keydown",(e)=>{
		if(e.key==="Backspace"){
			if(code.value==="" && index>0){
				allCodes[index-1].value="";
			allCodes[index-1].focus()
			}
		}
		
	})
})