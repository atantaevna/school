const input = document.querySelector('.text-input')
const input2 = document.querySelector('.text-input2')
const btn = document.querySelector('.add-btn')
const ul = document.querySelector('.ul')
const row = document.querySelector('.row')

btn.addEventListener('click', () => {
    let newList = `<li class="list-group-item d-flex 
justify-content-between align-items-center">
<span class="circle" style="background: burlywood ;
        width: 50px; height:50px;display: flex;
        justify-content: center; align-items:
        center">${input.value[0].toUpperCase()}
        ${input2.value[0].toUpperCase()}
</span>

<div>
    <span>${input.value}</span>
    <span>${input2.value}</span>    
</div>
 <button class="delete-btn btn btn-danger">delete</button>
 </li>`
    ul.innerHTML += newList
    input.value = ""
    input2.value = ""
})

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentNode.remove()
    }
})

localStorage.setItem("")
console.log(localStorage.getItem(''))





