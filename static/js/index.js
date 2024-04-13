const hero = document.getElementById('hero');
const hero_content = document.getElementById('hero_content');
const box1 = document.getElementById('box-1');
const box2 = document.getElementById('box-2');
const box3 = document.getElementById('box-3');
const box_1 = document.getElementById('box_1');
const box_2 = document.getElementById('box_2');
const box_3 = document.getElementById('box_3');


var counter = 0;

const URL_LIST = ['url(static/assets/download-bg.jpg)','url(static/assets/home-header.jpg)','url(static/assets/artboard-3.jpg)'];
const SRC_LIST = ['static/assets/box-1.png','static/assets/box-2.png','static/assets/nav.png']
const DIV_CONTENT = [
    `<div class="ml-10 max-w-[700px] mx-auto ">
        <p class="font-sans font-extrabold text-white text-6xl leading-tight mb-8 ">Find Everything for<br>Your Campus Life 🛒</p>
        <p class="text-white text-lg mb-8 ">Dive into a galaxy of academic essentials with CampusMarket. Find everything from laptops to study guides, <br/>making your campus life smoother and more efficient.</p>
        <a href="items/" class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg">Get Started</a>
    </div>`,    
    `<div class="text-center ">
        <p class="font-sans font-extrabold text-white text-6xl leading-tight mb-8 ">📚Books Galore</p>
        <p class="text-white text-lg mb-8 ">Dive into a world of knowledge with CampusMarket's diverse book collection.<br/>From textbooks to timeless classics, explore, learn, and even sell your own volumes to enrich <br/> both your library and your mind. Discover the joy of endless learning with us.</p>
        <a href="items/" class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg items" >Explore Books</a>
    </div>`,
    `<div class="ml-4 max-w-[700px] mx-auto ">
        <p class="font-sans font-extrabold text-white text-6xl leading-tight mb-8 ">Electrify Your Campus Experience ⚡</p>
        <p class="text-white text-lg mb-8 ">Shockingly good deals await in our electronics section! From smartphones to tablets,<br/>get plugged into the latest gadgets and gear up for a tech-savvy campus journey.</p>
        <a href="items/" class="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out shadow-lg items" >Explore</a>
    </div>`
]

function changeBackground(index) {
    hero.style.backgroundImage = URL_LIST[index];
}

function removeHighlight() {
    box1.classList.remove('box-highlight');
    box2.classList.remove('box-highlight');
    box3.classList.remove('box-highlight');
    box_1.src = "";
    box_2.src = "";
    box_3.src = "";
}

box1.addEventListener('click', function() {
    counter = 0;
    changeBackground(counter);
    removeHighlight();
    hero_content.setAttribute('class','mx-auto my-auto');
    hero_content.innerHTML = DIV_CONTENT[counter];
    box1.classList.add('box-highlight');
    box_1.src = SRC_LIST[0];
});

box2.addEventListener('click', function() {
    counter = 1;
    changeBackground(counter);
    removeHighlight();
    hero_content.innerHTML = DIV_CONTENT[counter];
    box2.classList.add('box-highlight');
    hero_content.classList.remove("mx-auto");
    box_2.src = SRC_LIST[1];

});

box3.addEventListener('click', function() {
    counter = 2;
    changeBackground(counter);
    removeHighlight();
    hero_content.innerHTML = DIV_CONTENT[counter];
    box3.classList.add('box-highlight');
    hero_content.classList.remove("mx-auto");
    box_3.src = SRC_LIST[2];

});

box1.addEventListener('mouseover', function() {
    box1.classList.add('box-highlight');
});
box1.addEventListener('mouseout', function() {
    box1.classList.remove('box-highlight');
});

box2.addEventListener('mouseover', function() {
    box2.classList.add('box-highlight');
});
box2.addEventListener('mouseout', function() {
    box2.classList.remove('box-highlight');
});

box3.addEventListener('mouseover', function() {
    box3.classList.add('box-highlight');
});
box3.addEventListener('mouseout', function() {
    box3.classList.remove('box-highlight');
});

setInterval(() => {
    counter = (counter + 1) % 3;
    changeBackground(counter);
    removeHighlight();
    hero_content.innerHTML = DIV_CONTENT[counter];
    if (counter === 0) {
        box1.classList.add('box-highlight');
        hero_content.setAttribute('class','mx-auto my-auto');
        box_1.src = SRC_LIST[0];
    } else if (counter === 1) {
        box2.classList.add('box-highlight');
        hero_content.classList.remove("mx-auto");
        box_2.src = SRC_LIST[1];
    } else {
        box3.classList.add('box-highlight');
        hero_content.classList.remove("mx-auto");
        box_3.src = SRC_LIST[2];
    }
}, 10000);

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
var image = document.getElementById("ham-ico");


function toggleImage() {
    if (image.src.endsWith ("Assets/icon-hamburger.svg")) {
        image.src = "Assets/icon-close.svg";
    }
    else if (image.src.endsWith ("Assets/icon-close.svg")) {
        image.src = "Assets/icon-hamburger.svg";
    }   
}
    
btn.addEventListener('click',() => {
    toggleImage();
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})