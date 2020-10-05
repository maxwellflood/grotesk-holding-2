
const slides = document.querySelectorAll('.swiper-slide')
const pTags = document.querySelectorAll('p')
const logoTag = document.querySelector('.logo svg')

const mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
})

function updateTitle(){
    slides.forEach(slide => {
        if(slide.classList.contains('swiper-slide-active')){
            if(slide.hasAttribute('data-light')){
                logoTag.style.fill = 'var(--black)'
                pTags.forEach(pTag => {pTag.style.color = 'var(--black)'})
            } else {
                logoTag.style.fill = 'var(--white)'
                pTags.forEach(pTag => {pTag.style.color = 'var(--white)'})
            }
        }
    })
}

updateTitle()

mySwiper.on('transitionEnd', function () {
    updateTitle()
})


// ——— copy email address

const emailTag = document.querySelector('.contact-link-animation')
const emailAnimation = document.querySelector('.contact-link-animation')
const copyEmail = document.querySelector('#email-input')

emailTag.addEventListener('click', function(){
    
    // Animation
    emailAnimation.classList.add('animation-active')
    setTimeout(function(){
        emailAnimation.classList.remove('animation-active')
    }, 3000)

    // Copy text
    copyEmail.select()
    copyEmail.setSelectionRange(0,99999)
    document.execCommand("copy")
})



// function myFunction() {
//     /* Get the text field */
//     var copyText = document.getElementById("myInput");
  
//     /* Select the text field */
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
//     /* Copy the text inside the text field */
//     document.execCommand("copy");
  
//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
//   }