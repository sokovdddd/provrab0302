let inp = document.querySelector('.input')
let elem = myForm.elements
// let btn = document.querySelector('.btn')
// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.
let at = document.querySelector('.addText')
let text = document.querySelector('#text')
elem.addText.addEventListener('click', function(ev){
    ev.preventDefault()
    text.append(inp.value)
})
// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.
let sou = document.querySelector('#sumOutput')
let asd = 0
elem.sum.addEventListener('click', function(ev){
    ev.preventDefault()
    for(let z in inp.value + 1){                 // Работает, но это вроде слишком простой способ
        let qwe = Number(z)
        asd = asd+=qwe
    }
    sou.append(asd)
})

// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.
let sn = document.querySelector('#surname')
let nm = document.querySelector('#name')
let secnm = document.querySelector('#secondName')
elem.quest.addEventListener('click', function(ev){
    ev.preventDefault()
    let ms = inp.value.split(' ')
    sn.append(ms[0])
    nm.append(ms[1])
    secnm.append(ms[2])
})


// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.
let cv = document.querySelector('.count__value')
elem.count.addEventListener('click', function(ev){
    ev.preventDefault()
    let n = 0
    // let mss = inp.value.split(' ')
    let mss = text.textContent.split(' ')
    mss.forEach(element => {
        if(element != ''){
            n++
        }
    });
    cv.append(n - 1)
})


