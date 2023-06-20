let exp=" ";
let buttons=document.querySelectorAll('.ele');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '=')
        {
            exp=eval(exp);
            document.querySelector('input').value=exp;
        }
        else if(e.target.innerHTML=='AC')
        {
            exp=""
            document.querySelector('input').value=exp;
        }
        else{
        console.log(e.target)
        exp+=e.target.innerHTML;
        document.querySelector('input').value=exp;
        }
    })
})


  




