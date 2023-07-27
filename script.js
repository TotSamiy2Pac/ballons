const row = document.querySelector('.row')

for (let i = 0; i < 12; i++){
    row.innerHTML += ` 
                    <div class="col-3">
                    <div class="img-wrapper">
                        <img src="./assets/pngwing.com.png" alt="">
                    </div>
                    <input type="checkbox" class="chekBox">
                    </div>
    `
}
const arrayImg = document.querySelectorAll('.img-wrapper')
const arrayChekbox = document.querySelectorAll('.chekBox')
const btnClick = document.querySelector('#btnClick')


arrayImg.forEach((img, idx) => {
    img.addEventListener('click', () => {
        img.classList.toggle('bg-red')
        if (img.classList.contains('bg-red') === true){
            arrayChekbox[idx].checked = true
        }
        else {
            arrayChekbox[idx].checked = false
        }
    })
})

arrayChekbox.forEach((chek, idx) => {
    chek.addEventListener('click' ,() => {
        arrayImg[idx].classList.toggle('bg-red')
    })
})


let chekRes = 100

btnClick.addEventListener('click', () => {
    if (chekRes > 0){
        arrayImg.forEach((img, idx) => {
            img.classList.add('bg-red')
            arrayChekbox[idx].checked = true
        })
        chekRes = 0
    }
    else {
        arrayImg.forEach((img, idx) => {
            img.classList.remove('bg-red')
            arrayChekbox[idx].checked = false
        })
        chekRes = 100
    }



})





// const clearBg = setInterval(() => {
//     arrayImg.forEach((img) => {
//             img.classList.remove('bg-red')
//         })
// }, 3000)

// arrayImg.forEach((img) => {
//     const time = setTimeout(() => {
//         img.classList.remove('bg-red')
//     }, 5000)
// })