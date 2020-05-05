// Your code goes here

//mouseover
const navHome = document.querySelector('nav a');
function homeColor(event) {
    navHome.style.color = 'red';
}
navHome.addEventListener('mouseover', homeColor)


//keydown up
const logoHead = document.querySelector('.logo-heading');
function onUpArrow(event) {
    if (event.key === 'ArrowUp') {
        logoHead.style.backgroundColor = 'purple';
    }
}
document.addEventListener('keydown', onUpArrow)

//keydown Down
const welcomeText = document.querySelector('.intro p');
function onDownArrow(event) {
    if (event.key === 'ArrowDown') {
        welcomeText.style.color = 'green';
    }
}
document.addEventListener('keydown', onDownArrow)

//keydown Left
const letsGoTopText = document.querySelector('.content-section p');
function onArrowLeft(event) {
    if (event.key === 'ArrowLeft') {
        letsGoTopText.style.color = 'purple';
    }
}
document.addEventListener('keydown', onArrowLeft)

//mousedown
const otherImg = document.querySelector('.content-section .img-content');
const otherImgTwo = document.querySelector('.inverse-content .img-content')
document.addEventListener('mousedown', () => {
    otherImg.style.width = '20px';
    otherImgTwo.style.width = '20px';
})
//mouseup
document.addEventListener('mouseup', () => {
    otherImg.style.width = 'auto';
    otherImgTwo.style.width = 'auto';
})

//wheel
const skinnyLogo = document.querySelector('.logo-heading');
document.addEventListener('scroll', () => {
    skinnyLogo.style.width = '80px';
})


//doubleclick
const smallPhoto = document.querySelector('.intro img')
document.addEventListener('dblclick', () => {
    smallPhoto.style.width = '50px';
})


//alert
const stealing = () => alert("no stealing")
const allP = document.querySelectorAll('p');
allP.forEach(element => element.addEventListener('copy', stealing))


//click first button
const firstButton = document.querySelector('.destination .btn');
function clickButton(event) {
    firstButton.style.opacity = '0';
}
firstButton.addEventListener('click', clickButton)

//keypress background
const backGround = document.querySelector('body');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
function partyMode(event) {
    backGround.style.backgroundColor = 'pink';
    header.style.backgroundColor = 'lime';
    footer.style.backgroundColor = 'orange';
}
document.addEventListener('keypress', partyMode)

//keyup background
function partyEnd(event) {
    backGround.style.backgroundColor = 'white';
    header.style.backgroundColor = 'white';
    footer.style.backgroundColor = 'white';
}
document.addEventListener('keyup', partyEnd)

//prvent event propagation
const destinationOne = document.querySelector('.content-pick .destination');
const destinationTitle = document.querySelector('.content-pick .destination h4');
function clickDestinationOne(event) {
    destinationOne.style.color = 'purple';
}
function clickDestinationTitle(event) {
    destinationTitle.style.color = 'pink';
    event.stopPropagation();
}
destinationTitle.addEventListener('click', clickDestinationTitle)
destinationOne.addEventListener('click', clickDestinationOne)



//prevent default

const allNav = document.querySelectorAll('nav a')

allNav.forEach(element => {
    element.addEventListener('click', foo => {
    foo.preventDefault();
    })
})
