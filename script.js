// JavaScript source code

const timerTime = 6500;

const ppg1 = {
    index: 0,
    gallery: ["images/pp1_1.png",
    "images/pp1_2.png",
    "images/pp1_3.png",
    "images/pp1_4.png",
    "images/pp1_5.png",
    "images/pp1_6.png"],
    img: document.getElementById('ppg1img'),
    lBtn: document.getElementById('ppg1LBtn'),
    rBtn: document.getElementById('ppg1RBtn')
}

ppg1.lBtn.addEventListener('click', function () {
    ppg1.index = (ppg1.index - 1);
    if (ppg1.index < 0) { ppg1.index = ppg1.gallery.length - 1; }
    changeImg(ppg1.img, ppg1.gallery[ppg1.index]);
    clearTimeout(gallery1Timer);

    gallery1Timer = setInterval(() => {
        ppg1.index = (ppg1.index - 1);
        if (ppg1.index < 0) { ppg1.index = ppg1.gallery.length - 1; }
        changeImg(ppg1.img, ppg1.gallery[ppg1.index]);
    }, timerTime);
});

ppg1.rBtn.addEventListener('click', function () {
    ppg1.index = (ppg1.index + 1);
    if (ppg1.index > ppg1.gallery.length - 1) { ppg1.index = 0; }
    changeImg(ppg1.img, ppg1.gallery[ppg1.index]);
    clearTimeout(gallery1Timer);

    gallery1Timer = setInterval(() => {
        ppg1.index = (ppg1.index - 1);
        if (ppg1.index < 0) { ppg1.index = ppg1.gallery.length - 1; }
        changeImg(ppg1.img, ppg1.gallery[ppg1.index]);
    }, timerTime);
});

let gallery1Timer = setInterval(() => {
    ppg1.index = (ppg1.index - 1);
    if (ppg1.index < 0) { ppg1.index = ppg1.gallery.length - 1; }
    changeImg(ppg1.img, ppg1.gallery[ppg1.index]);
}, timerTime);


const ppg2 = {
    index: 0,
    gallery: ["images/pp2_1.png",
        "images/pp2_2.png",
        "images/pp2_3.png",
        "images/pp2_4.png"],
    img: document.getElementById('ppg2img'),
    lBtn: document.getElementById('ppg2LBtn'),
    rBtn: document.getElementById('ppg2RBtn')
}

ppg2.lBtn.addEventListener('click', function () {
    ppg2.index = (ppg2.index - 1);
    if (ppg2.index < 0) { ppg2.index = ppg2.gallery.length - 1; }
    changeImg(ppg2.img, ppg2.gallery[ppg2.index]);
    clearTimeout(gallery2Timer);
    gallery2Timer = setInterval(() => {
        ppg2.index = (ppg2.index - 1);
        if (ppg2.index < 0) { ppg2.index = ppg2.gallery.length - 1; }
        changeImg(ppg2.img, ppg2.gallery[ppg2.index]);
    }, timerTime);
});

ppg2.rBtn.addEventListener('click', function () {
    ppg2.index = (ppg2.index + 1);
    if (ppg2.index > ppg2.gallery.length - 1) { ppg2.index = 0; }
    changeImg(ppg2.img, ppg2.gallery[ppg2.index]);
    clearTimeout(gallery2Timer);
    gallery2Timer = setInterval(() => {
        ppg2.index = (ppg2.index - 1);
        if (ppg2.index < 0) { ppg2.index = ppg2.gallery.length - 1; }
        changeImg(ppg2.img, ppg2.gallery[ppg2.index]);
    }, timerTime);
});

let gallery2Timer = setInterval(() => {
    ppg2.index = (ppg2.index - 1);
    if (ppg2.index < 0) { ppg2.index = ppg2.gallery.length - 1; }
    changeImg(ppg2.img, ppg2.gallery[ppg2.index]);
}, timerTime);

const aag1 = {
    index: 0,
    gallery: ["images/aa1.png",
        "images/aa2.png",
        "images/aa3.png",
        "images/aa4.png",
        "images/aa5.png",
        "images/aa6.png",
        "images/aa7.png"],
    img: document.getElementById('aag1img'),
    lBtn: document.getElementById('aag1LBtn'),
    rBtn: document.getElementById('aag1RBtn')
}

aag1.lBtn.addEventListener('click', function () {
    aag1.index = (aag1.index - 1);
    if (aag1.index < 0) { aag1.index = aag1.gallery.length - 1; }
    changeImg(aag1.img, aag1.gallery[aag1.index]);
    clearTimeout(aaGallery1Timer);
    aaGallery1Timer = setInterval(() => {
        aag1.index = (aag1.index - 1);
        if (aag1.index < 0) { aag1.index = aag1.gallery.length - 1; }
        changeImg(aag1.img, aag1.gallery[aag1.index]);
    }, timerTime);
});

aag1.rBtn.addEventListener('click', function () {
    aag1.index = (aag1.index + 1);
    if (aag1.index > aag1.gallery.length - 1) { aag1.index = 0; }
    changeImg(aag1.img, aag1.gallery[aag1.index]);
    clearTimeout(aaGallery1Timer);
    aaGallery1Timer = setInterval(() => {
        aag1.index = (aag1.index - 1);
        if (aag1.index < 0) { aag1.index = aag1.gallery.length - 1; }
        changeImg(aag1.img, aag1.gallery[aag1.index]);
    }, timerTime);
});

let aaGallery1Timer = setInterval(() => {
    aag1.index = (aag1.index - 1);
    if (aag1.index < 0) { aag1.index = aag1.gallery.length - 1; }
    changeImg(aag1.img, aag1.gallery[aag1.index]);
}, timerTime);

const aag2 = {
    index: 0,
    gallery: ["images/gg1.jpg",
        "images/gg2.jpg",
        "images/gg3.jpg",
        "images/gg4.jpg",
        "images/gg5.jpg"],
    img: document.getElementById('aag2img'),
    lBtn: document.getElementById('aag2LBtn'),
    rBtn: document.getElementById('aag2RBtn')
}

aag2.lBtn.addEventListener('click', function () {
    aag2.index = (aag2.index - 1);
    if (aag2.index < 0) { aag2.index = aag2.gallery.length - 1; }
    changeImg(aag2.img, aag2.gallery[aag2.index]);
    clearTimeout(aaGallery2Timer);
    aaGallery2Timer = setInterval(() => {
        aag2.index = (aag2.index - 1);
        if (aag2.index < 0) { aag2.index = aag2.gallery.length - 1; }
        changeImg(aag2.img, aag2.gallery[aag2.index]);
    }, timerTime);
});

aag2.rBtn.addEventListener('click', function () {
    aag2.index = (aag2.index + 1);
    if (aag2.index > aag2.gallery.length - 1) { aag2.index = 0; }
    changeImg(aag2.img, aag2.gallery[aag2.index]);
    clearTimeout(aaGallery2Timer);
    aaGallery2Timer = setInterval(() => {
        aag2.index = (aag2.index - 1);
        if (aag2.index < 0) { aag2.index = aag2.gallery.length - 1; }
        changeImg(aag2.img, aag2.gallery[aag2.index]);
    }, timerTime);
});

let aaGallery2Timer = setInterval(() => {
    aag2.index = (aag2.index - 1);
    if (aag2.index < 0) { aag2.index = aag2.gallery.length - 1; }
    changeImg(aag2.img, aag2.gallery[aag2.index]);
}, timerTime);

const cotdg1 = {
    index: 0,
    gallery: ["images/cotd1.png",
        "images/cotd3.png",
        "images/cotd4.png"],
    img: document.getElementById('cotdg1img'),
    lBtn: document.getElementById('cotdg1LBtn'),
    rBtn: document.getElementById('cotdg1RBtn')
}

cotdg1.lBtn.addEventListener('click', function () {
    cotdg1.index = (cotdg1.index - 1);
    if (cotdg1.index < 0) { cotdg1.index = cotdg1.gallery.length - 1; }
    changeImg(cotdg1.img, cotdg1.gallery[cotdg1.index]);
    clearTimeout(cotdGallery1Timer);
    cotdGallery1Timer = setInterval(() => {
        cotdg1.index = (cotdg1.index - 1);
        if (cotdg1.index < 0) { cotdg1.index = cotdg1.gallery.length - 1; }
        changeImg(cotdg1.img, cotdg1.gallery[cotdg1.index]);
    }, timerTime);
});

cotdg1.rBtn.addEventListener('click', function () {
    cotdg1.index = (cotdg1.index + 1);
    if (cotdg1.index > cotdg1.gallery.length - 1) { cotdg1.index = 0; }
    changeImg(cotdg1.img, cotdg1.gallery[cotdg1.index]);
    clearTimeout(cotdGallery1Timer);
    cotdGallery1Timer = setInterval(() => {
        cotdg1.index = (cotdg1.index - 1);
        if (cotdg1.index < 0) { cotdg1.index = cotdg1.gallery.length - 1; }
        changeImg(cotdg1.img, cotdg1.gallery[cotdg1.index]);
    }, timerTime);
});

let cotdGallery1Timer = setInterval(() => {
    cotdg1.index = (cotdg1.index - 1);
    if (cotdg1.index < 0) { cotdg1.index = cotdg1.gallery.length - 1; }
    changeImg(cotdg1.img, cotdg1.gallery[cotdg1.index]);
}, timerTime);

const cotdg2 = {
    index: 0,
    gallery: ["images/cotd2.png",
        "images/cotd5.png"],
    img: document.getElementById('cotdg2img'),
    lBtn: document.getElementById('cotdg2LBtn'),
    rBtn: document.getElementById('cotdg2RBtn')
}

cotdg2.lBtn.addEventListener('click', function () {
    cotdg2.index = (cotdg2.index - 1);
    if (cotdg2.index < 0) { cotdg2.index = cotdg2.gallery.length - 1; }
    changeImg(cotdg2.img, cotdg2.gallery[cotdg2.index]);
    clearTimeout(cotdGallery2Timer);
    cotdGallery2Timer = setInterval(() => {
        cotdg2.index = (cotdg2.index - 1);
        if (cotdg2.index < 0) { cotdg2.index = cotdg2.gallery.length - 1; }
        changeImg(cotdg2.img, cotdg2.gallery[cotdg2.index]);
    }, timerTime);
});

cotdg2.rBtn.addEventListener('click', function () {
    cotdg2.index = (cotdg2.index + 1);
    if (cotdg2.index > cotdg2.gallery.length - 1) { cotdg2.index = 0; }
    changeImg(cotdg2.img, cotdg2.gallery[cotdg2.index]);
    clearTimeout(cotdGallery2Timer);
    cotdGallery2Timer = setInterval(() => {
        cotdg2.index = (cotdg2.index - 1);
        if (cotdg2.index < 0) { cotdg2.index = cotdg2.gallery.length - 1; }
        changeImg(cotdg2.img, cotdg2.gallery[cotdg2.index]);
    }, timerTime);
});

let cotdGallery2Timer = setInterval(() => {
    cotdg2.index = (cotdg2.index - 1);
    if (cotdg2.index < 0) { cotdg2.index = cotdg2.gallery.length - 1; }
    changeImg(cotdg2.img, cotdg2.gallery[cotdg2.index]);
}, timerTime);

const opg1 = {
    index: 0,
    gallery: ["images/zbm1.png",
        "images/zbm2.png",
        "images/zbm3.png",
        "gifs/zbm4.gif"],
    img: document.getElementById('opg1img'),
    lBtn: document.getElementById('opg1LBtn'),
    rBtn: document.getElementById('opg1RBtn')
}

opg1.lBtn.addEventListener('click', function () {
    opg1.index = (opg1.index - 1);
    if (opg1.index < 0) { opg1.index = opg1.gallery.length - 1; }
    changeImg(opg1.img, opg1.gallery[opg1.index]);
    clearTimeout(opGallery1Timer);
    opGallery1Timer = setInterval(() => {
        opg1.index = (opg1.index - 1);
        if (opg1.index < 0) { opg1.index = opg1.gallery.length - 1; }
        changeImg(opg1.img, opg1.gallery[opg1.index]);
    }, timerTime);
});

opg1.rBtn.addEventListener('click', function () {
    opg1.index = (opg1.index + 1);
    if (opg1.index > opg1.gallery.length - 1) { opg1.index = 0; }
    changeImg(opg1.img, opg1.gallery[opg1.index]);
    clearTimeout(opGallery1Timer);
    opGallery1Timer = setInterval(() => {
        opg1.index = (opg1.index - 1);
        if (opg1.index < 0) { opg1.index = opg1.gallery.length - 1; }
        changeImg(opg1.img, opg1.gallery[opg1.index]);
    }, timerTime);
});

let opGallery1Timer = setInterval(() => {
    opg1.index = (opg1.index - 1);
    if (opg1.index < 0) { opg1.index = opg1.gallery.length - 1; }
    changeImg(opg1.img, opg1.gallery[opg1.index]);
}, timerTime);

const opg2 = {
    index: 0,
    gallery: ["images/Grain1.png",
        "images/Grain2.png",
        "images/Grain3.png",
        "images/Grain4.png",
        "images/Grain5.png"],
    img: document.getElementById('opg2img'),
    lBtn: document.getElementById('opg2LBtn'),
    rBtn: document.getElementById('opg2RBtn')
}

opg2.lBtn.addEventListener('click', function () {
    opg2.index = (opg2.index - 1);
    if (opg2.index < 0) { opg2.index = opg2.gallery.length - 1; }
    changeImg(opg2.img, opg2.gallery[opg2.index]);
    clearTimeout(opGallery2Timer);
    opGallery2Timer = setInterval(() => {
        opg2.index = (opg2.index - 1);
        if (opg2.index < 0) { opg2.index = opg2.gallery.length - 1; }
        changeImg(opg2.img, opg2.gallery[opg2.index]);
    }, timerTime);
});

opg2.rBtn.addEventListener('click', function () {
    opg2.index = (opg2.index + 1);
    if (opg2.index > opg2.gallery.length - 1) { opg2.index = 0; }
    changeImg(opg2.img, opg2.gallery[opg2.index]);
    clearTimeout(opGallery2Timer);
    opGallery2Timer = setInterval(() => {
        opg2.index = (opg2.index - 1);
        if (opg2.index < 0) { opg2.index = opg2.gallery.length - 1; }
        changeImg(opg2.img, opg2.gallery[opg2.index]);
    }, timerTime);
});

let opGallery2Timer = setInterval(() => {
    opg2.index = (opg2.index - 1);
    if (opg2.index < 0) { opg2.index = opg2.gallery.length - 1; }
    changeImg(opg2.img, opg2.gallery[opg2.index]);
}, timerTime);

const opg3 = {
    index: 0,
    gallery: ["images/bopm1.png",
        "images/bopm2.png",
        "images/bopm3.png",
        "images/bopm4.png",
        "images/bopm5.png"],
    img: document.getElementById('opg3img'),
    lBtn: document.getElementById('opg3LBtn'),
    rBtn: document.getElementById('opg3RBtn')
}

opg3.lBtn.addEventListener('click', function () {
    opg3.index = (opg3.index - 1);
    if (opg3.index < 0) { opg3.index = opg3.gallery.length - 1; }
    changeImg(opg3.img, opg3.gallery[opg3.index]);
    clearTimeout(opGallery3Timer);
    opGallery3Timer = setInterval(() => {
        opg3.index = (opg3.index - 1);
        if (opg3.index < 0) { opg3.index = opg3.gallery.length - 1; }
        changeImg(opg3.img, opg3.gallery[opg3.index]);
    }, timerTime);
});

opg3.rBtn.addEventListener('click', function () {
    opg3.index = (opg3.index + 1);
    if (opg3.index > opg3.gallery.length - 1) { opg3.index = 0; }
    changeImg(opg3.img, opg3.gallery[opg3.index]);
    clearTimeout(opGallery3Timer);
    opGallery3Timer = setInterval(() => {
        opg3.index = (opg3.index - 1);
        if (opg3.index < 0) { opg3.index = opg3.gallery.length - 1; }
        changeImg(opg3.img, opg3.gallery[opg3.index]);
    }, timerTime);
});

let opGallery3Timer = setInterval(() => {
    opg3.index = (opg3.index - 1);
    if (opg3.index < 0) { opg3.index = opg3.gallery.length - 1; }
    changeImg(opg3.img, opg3.gallery[opg3.index]);
}, timerTime);

function changeImg(img, address) {
    img.setAttribute('src', address);
}

function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSubTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("subtabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}