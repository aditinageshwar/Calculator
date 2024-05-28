let val = document.querySelector("#outputbox").value;
let btn = document.querySelectorAll("button");
for(let i=0;i<btn.length;i++)
{
  btn[i].onclick=function()
  {
    if(btn[i].classList.contains("pressEqual"))        
       document.querySelector("#outputbox").value=eval(val);
    else if(btn[i].classList.contains("pressClear"))
    {
      val=" ";
      document.querySelector("#outputbox").value=" ";
    }
    else
    { val+=btn[i].textContent;
      document.querySelector("#outputbox").value = val;
    }
  }
}

//for changing background colour on changing mode
let layout = document.querySelector("#layout");
let toggle = document.querySelector("#toggle");
toggle.addEventListener('change',()=>{layout.style.backgroundColor = toggle.checked?"transparent":"black"})
