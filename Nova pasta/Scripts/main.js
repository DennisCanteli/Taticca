/*------------------------------------------------------------------

    01. Custom cursor
    02. Reveal animations
    03. Menu
    04. Sliders
    05. Header reveal
    06. AJAX contact form
    07. Charts
    08. Video
    09. AJAX page transition

-------------------------------------------------------------------*/

/*--------------------------------------------------
	01. Custom cursor
---------------------------------------------------*/

function cursorInit() {
    let clientX = -100;
    let clientY = -100;

    const innerCursor = document.querySelector(".cursor");
    const itemCursor = document.querySelector(".cursor-item");

    var cw = innerCursor.offsetWidth  / 2;
    var ch = innerCursor.offsetHeight / 2;

    const initCursor = () => {
        document.addEventListener("mousemove", e => {
            clientX = e.clientX;
            clientY = e.clientY;
        });

        const render = () => {
            innerCursor.style.transform =
                `translate(${clientX - cw}px, ${clientY - ch}px)`;

            requestAnimationFrame(render);
        };

        requestAnimationFrame(render);
    };

    initCursor();


    var button = document.querySelectorAll(['button', 'a', '.click-target']);

    for (let i = 0; i < button.length; i++) {
        const el = button[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-big');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-big');
        })
    }

    var cursorColor = document.querySelectorAll('.cursor-color');

    for (let i = 0; i < cursorColor.length; i++) {
        const el = cursorColor[i];
        
        el.addEventListener('mouseenter', e => {
            itemCursor.classList.add('cursor-alt');
        })
        el.addEventListener('mouseleave', e => {
            itemCursor.classList.remove('cursor-alt');
        })
    }
}

/*--------------------------------------------------
	02. Reveal animations
---------------------------------------------------*/

var controller = new ScrollMagic.Controller();

function test(array, revealClass, offset = '0', revealPosition = 'onEnter',) {
    for (let i = 0; i < array.length; i++) {
        const el = array[i];
    
        new ScrollMagic.Scene({
            duration: el.offsetHeight,
            offset: offset,
            triggerElement: el,
            triggerHook: revealPosition,
        })
        .addTo(controller)
        .on('enter', function (event) {
            el.classList.add(revealClass);
        })
    }
}

/*--------------------------------------------------
	03. Menu
---------------------------------------------------*/

function menuBackgroundToggle() {
    var menu_button  = document.querySelector('.menu');
    var menu_overlay = document.querySelector('.menu-overlay');
    var body         = document.body;

    menu_button.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })

    menu_overlay.addEventListener('click', (e) => {
        body.classList.toggle('is-menu-open');
        body.classList.toggle('over-hidden');
    })
}


function menuLinksToggle() {
    var navItems = document.querySelectorAll('.navigation .navigation-item');
    var navList = document.querySelector('.navigation-list');
    var navItemsSubnav = [];


    for (let i = 0; i < navItems.length; i++) {
        const el = navItems[i];
        var elLink = el.querySelector('.nav-link');

        if (el.querySelector('.subnav')) {
            elLink.removeAttribute('href');
            navItemsSubnav.push(el);
        }
    }


    navItemsSubnav.forEach(el => {
        var elLink   = el.querySelector('.nav-link');
        var elSubnav = el.querySelector('.subnav');
        var elSubnavTitle = el.querySelector('.subnav-title');


        elLink.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });

        elSubnavTitle.addEventListener('click', () => {
            navList.classList.toggle('nav-list-hidden');
            elSubnav.classList.toggle('subnav-active');
        });
    });
}

/*--------------------------------------------------
	04. Sliders
---------------------------------------------------*/

function mainSliderInit() {
    var sliderMain = new Swiper ('.slider-main', {
        spaceBetween: 0,
        speed: 1000,
        effect: 'coverflow',
        parallax: true,
    
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
    
        pagination: {
            el: '.pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true
        },
    
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    });


    var sliderMainItem = document.querySelector('.slider-main');
    var slides = sliderMainItem.querySelectorAll('.swiper-slide');
    var current = 0;


    sliderMain.on('transitionEnd', function() {
        if (sliderMain.activeIndex > current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');

            var content = slides[0].querySelector('.slide-content');
            content.classList.remove('slide-content-intro');
            content.classList.add('slide-content-second');
        }

        if (sliderMain.activeIndex < current) {
            var content = slides[current].querySelector('.slide-content');
            content.classList.remove('content-visible');

            current = sliderMain.activeIndex;

            var content = slides[current].querySelector('.slide-content');
            content.classList.add('content-visible');
        }
    });
}


function mainSliderReveal() {
    var mainSlider = document.querySelector('.slider-main-reveal');
    mainSlider.classList.add('slider-main-reveal-animated');

    setTimeout(() => {
        if (document.querySelector('.slide-content-intro')) {
            var content = document.querySelector('.slide-content-intro');
            content.classList.add('content-visible');
        }
    
        if (document.querySelector('.slider-nav-intro')) {
            var sliderNav = document.querySelector('.slider-nav-intro');
            sliderNav.classList.add('slider-nav-visible');
        }
    }, 500);
}


function testimonialsSliderInit() {
    new Swiper ('.testimonials-slider', {
        speed: 800,
        autoHeight: true,

        pagination: {
            el: '.testimonials-pagination',
            bulletClass: 'bullet',
            bulletActiveClass: 'bullet-active',
            clickable: true
        },
    })
}

/*--------------------------------------------------
	05. Header reveal
---------------------------------------------------*/

/* Page Transition variables */

const preLoaderDuration = 50;
const preLoaderDelay = 0;

const pageHeaderDuration  = 800;
const pageHeaderDelay = 0;

const baseDelay = 1000;


function headerReveal() {
    var pageHeader = document.querySelector('.page-header');
    var items = pageHeader.querySelectorAll('.slide-over');

    setTimeout(() => {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('slide-over-animated');
        }

        document.body.classList.add('header-reveal');
    }, preLoaderDuration + preLoaderDelay + pageHeaderDuration + pageHeaderDelay + 650 - baseDelay);
}


function workHeaderReveal() {
    var workHeader = document.querySelector('.work-header');

    var slideDelay = 300;
    var slideDuration = 800;


    anime.timeline()
    .add({
        targets: workHeader,
        translateY: ['200px', 0],
        opacity: [0, 1],
        delay: slideDelay,
        duration: slideDuration,
        easing: 'easeInOutQuart'
    })
    .add({
        begin: () => {
            var items = workHeader.querySelectorAll('.slide-over');
        
            for (let i = 0; i < items.length; i++) {
                items[i].classList.add('slide-over-animated');
            }

            document.body.classList.add('header-reveal');
        }
    }, '-=300')
}

/*--------------------------------------------------
	06. AJAX contact form
---------------------------------------------------*/

if (document.getElementById('form')) {
    var mainForm = document.getElementById('form');

    var outputField = document.querySelector('.output-message');
    var outputClass;
    var outputMessage;

    mainForm.addEventListener('submit', (e) => {
        e.preventDefault();

        var name    = document.getElementById('username').value;
        var email   = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        name    = name.replace(/\s/g,'');
        email   = email.replace(/\s/g,'');
        message = message.replace(/\s/g,'');

        outputField.classList.remove('alert-danger');
        outputField.classList.remove('alert-success');
        outputField.innerHTML = null;


        if (name == '' || email == '' || message == '') {
            outputClass = 'alert-danger';
            outputMessage = 'Fill in all Fields!';

        } else {
            outputClass = 'alert-success';
            outputMessage = 'Email sent!';

            var request = new XMLHttpRequest();
            var requestData = `name=${name}&email=${email}&message=${message}`;

            request.open('post', 'contact.php');
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            request.send(requestData);
        }

        outputField.classList.add(outputClass);
        outputField.innerHTML = outputMessage;

    })
}

/*--------------------------------------------------
	07. Charts
---------------------------------------------------*/

function chartsInit() {
    var chartArr = [];
    var charts = document.querySelectorAll('.skills-chart');

    for (let i = 0; i < charts.length; i++) {
        const el = charts[i];

        var value = el.getAttribute('data-value') / 100;

        var progressBar = new ProgressBar.Circle(el, {
            color: '#53c1ab',
            trailColor: '#828282',
            strokeWidth: 1.5,
            trailWidth: 1.5,
            duration: 2200,
            easing: 'easeInOutQuart',
            autoStyleContainer: false,
            text: {
                className: 'skills-percent',
            },
            step: (state, bar) => {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });

        chartArr.push(progressBar);
    }


    new ScrollMagic.Scene({
        triggerElement: ".skills",
        triggerHook: "onEnter",
    })
    .addTo(controller)
    .on("enter", (e) => {
        for (let i = 0; i < chartArr.length; i++) {
            const el = chartArr[i];
            
            var value = charts[i].getAttribute('data-value') / 100;
            el.animate(value);
        }
    });
}

/*--------------------------------------------------
	08. Video
---------------------------------------------------*/

function videoInit() {
    var videos = document.querySelectorAll('.video');

    for (let i = 0; i < videos.length; i++) {
        const el = videos[i];
        
        var videoLink  = el.querySelector('.video-link');
        var videoInner = el.querySelector('.video-inner');
        var iframe     = videoInner.querySelector('iframe');

        videoLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.add('over-hidden');

            videoInner.classList.add('visible');
            videoInner.classList.add('video-anim');
        })

        videoInner.addEventListener('click', (e) => {
            document.body.classList.remove('over-hidden');

            var iframeSrc = iframe.getAttribute('src');
            iframe.setAttribute('src', iframeSrc);

            videoInner.classList.remove('video-anim');
            setTimeout(() => {
                videoInner.classList.remove('visible');
            }, 520);
        })

    }
}

/*--------------------------------------------------
	09. AJAX page transition
---------------------------------------------------*/

// Page transition animation

const jsOptions = [
    {
        from: '(.*)',
        to: '(.*)',
        out: (next) => {
            anime({
                targets: '.preloader',
                translateX: ['100%', '0'],
                duration: pageHeaderDuration,
                delay: 100,
                easing: 'easeInOutQuart',
                begin: () => {
                    document.body.classList.add('over-hidden');
                    document.documentElement.classList.remove('smooth-scroll');
                },
                complete: () => {
                    document.body.classList.remove('header-reveal');
                    next();
                }
            })
        },
        in: function(next) {
            if (document.querySelector('.page-header')) {
                var header = document.querySelector('.page-header');
                header.classList.add('page-header-to-bot');
            }
            if (document.querySelector('.page-main')) {
                var main = document.querySelector('.page-main');
                main.classList.add('page-main-reveal');
            }

            anime.timeline()
            .add({
                targets: '.preloader',
                translateX: '-100%',
                duration: preLoaderDuration,
                delay: preLoaderDelay,
                easing: 'linear',
            })
            .add({
                targets: '.page-header',
                translateY: '-100vh',
                duration: pageHeaderDuration,
                delay: pageHeaderDelay,
                easing: 'easeInOutQuart',
                complete: () => {
                    document.body.classList.remove('over-hidden');
                },
            })
            .add({
                targets: '.page-main',
                translateY: ['20vh', '0'],
                duration: pageHeaderDuration,
                easing: 'easeInOutQuart',
                complete: () => {
                    next();
                },
            }, '-=850')
        },
    }
];


// Swup plugin Init

if (document.getElementById('swup')) {
    var swupScroll = new SwupScrollPlugin({
        doScrollingRightAway: false,
        animateScroll: false,
    });
    
    const options = {
        linkSelector: 'a[data-swup]',
        cache: true,
        plugins: [
            swupScroll,
            new SwupJsPlugin(jsOptions),
        ],
    };

    const swup = new Swup(options);
    
    swup.on('contentReplaced', init);

    swup.on('clickLink', () => {
        document.body.classList.remove('is-menu-open');
        document.getElementById('cursor').classList.remove('cursor-big');
    });
}


// This function reloads all scripts when navigating through pages.

function init() {
    menuBackgroundToggle();
    menuLinksToggle();
    cursorInit();


    if (document.querySelector('.to-top-button')) {
        setTimeout(() => {
            var firstSection = document.querySelector('#firstSection');
            var toTopButton  = document.querySelector('.to-top-button');
        
            toTopButton.addEventListener('click', () => {
                document.documentElement.classList.add('smooth-scroll');
                firstSection.scrollIntoView();
            })
        
            new ScrollMagic.Scene({
                duration: firstSection.offsetHeight,
                triggerElement: firstSection,
                triggerHook: 'onCenter',
            })
            .addTo(controller)
            .on('enter', function (event) {
                toTopButton.classList.remove('visible');
            })
            .on('leave', function (event) {
                toTopButton.classList.add('visible');
            })
        }, 400);
    }


    if (document.querySelector('.slider-main-reveal')) {
        window.addEventListener('load', () => {
            var count = 0;
            var counter = setInterval(() => {
                if (count < 101) {
                    var number = document.querySelector('.preloader-num');
                    number.innerHTML = count;
                    count++;
                } else {
                    clearInterval(counter);
    
                    setTimeout(() => {
                        var number = document.querySelector('.preloader-num');
                        number.classList.add('preloader-num-out');
                    }, 300);
    
                    setTimeout(() => {
                        var preloader = document.querySelector('.preloader');
                        preloader.classList.add('preloader-out');
                    }, 300 + 400 + 100);
    
                    setTimeout(() => {
                        if (document.querySelector('.slider-main')) {
                            mainSliderInit();
                        }

                        mainSliderReveal();
    
                        setTimeout(() => {
                            document.body.classList.add('header-reveal');
                        }, 1400);
                    }, 300 + 400 + 100 + 400);
    
                }
            }, 30);
        })
    }

    
    if( document.readyState === 'complete' &&
        document.querySelector('.slider-main-reveal')) {
        // setTimeout(() => {
            mainSliderReveal();

            setTimeout(() => {
                document.body.classList.add('header-reveal');
            }, 1400);
        // }, 1000);
    }


    if (document.querySelector('.page-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-out');
        headerReveal();
    }


    if (document.querySelector('.work-header')) {
        var preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader-out');
        workHeaderReveal();
    }


    if (document.querySelector('.testimonials-slider')) {
        testimonialsSliderInit();
    }



    if (!document.querySelector('.page-header') &&
        !document.querySelector('.slider-main') &&
        !document.querySelector('.video-main') &&
        !document.querySelector('.work-header')) {
        document.body.classList.add('header-reveal');
    }


    if (document.querySelector('.cover-down')) {
        var imgReveal = document.querySelectorAll('.cover-down');
        test(imgReveal, 'cover-down-anim', 0, 'onEnter');
    }
    if (document.querySelector('.slide-up')) {
        var slideUp    = document.querySelectorAll('.slide-up');
        test(slideUp, 'slide-anim');
    }
    if (document.querySelector('.slide-down')) {
        var slideDown  = document.querySelectorAll('.slide-down');
        test(slideDown, 'slide-anim');
    }
    if (document.querySelector('.slide-right')) {
        var slideRight = document.querySelectorAll('.slide-right');
        test(slideRight, 'slide-anim');
    }
    if (document.querySelector('.slide-left')) {
        var slideLeft  = document.querySelectorAll('.slide-left');
        test(slideLeft, 'slide-anim');
    }


    new LazyLoad({
        elements_selector: ".lazy",
    });

    chartsInit();
    videoInit();
}


// Init all functions on start

init();




