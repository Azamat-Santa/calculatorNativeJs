
const btns = document.querySelectorAll('.btn')
      result = document.querySelector('.result')

btns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{

       const btnValue = e.target.innerText;
       
       if (btnValue === 'c') result.value = ''
       else if(btnValue === '=') result.value = eval(result.value )
       else result.value += btnValue
    })
})