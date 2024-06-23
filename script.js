const body = document.querySelector("body"),
      modeNav = body.querySelector('.mode-nav'),
      mode = body.querySelector('.mode'),
      modeText = body.querySelector('.mode-text');


    //   navlinks onclick action 
     //  go to home page
      function home() {
        window.location.href="index.html";
     };

    //  go to projects page
     function projects() {
        window.location.href="projects.html";
     };

    //  go to resume page 
     function resume() {
        window.location.href="resume.html";
     };

    //  github
    function github() {
        window.location.href='https://github.com/Nipuni-code', '_blank';
    };

    // facebook
    function fb() {
        window.location.href='https://www.facebook.com/profile.php?id=61554160661089&mibextid=ZbWKwL', '_blank';
    };

    // youtube
    function yt() {
        window.location.href='https://www.youtube.com/channel/UCoBoV5a5xo8DWO8ZmHqFV6g', '_blank';
    };

    //  contact button 
    function contact() {
        window.location.href="tel:+94 77 532 6346";
    };
                        

    // home page CTA button action 
    function viewResume() {
        window.open('img/Nipunika Weeravansha.pdf', '_blank');
    };
    

    // project page project view button
    function prj1() {
        window.open('https://homestudiorecords01.netlify.app/', '_blank');
    };

    function prj2() {
        window.open('https://beatupp.netlify.app/#', '_blank');
    };

    function prj3() {
        window.open('https://bytebrainlk.netlify.app/', '_blank');
    };

    function prj4() {
        window.open('img/flower-shop.pdf', '_blank');
    };

    function prj5() {
        window.open('img/coffee-shop.pdf', '_blank');
    };

    function prj6() {
        window.open('img/juice-bar.pdf', '_blank');
    };

    function prj7() {
        window.open('img/drama-hub.pdf', '_blank');
    };

    function prj8() {
        window.open('img/cake-hub.pdf', '_blank');
    };

    function prj9() {
        window.open('img/education.pdf', '_blank');
    };

    function prj10() {
        window.open('img/rainbow.svg', '_blank');
    };

    function prj11() {
        window.open('img/furry letter.svg', '_blank');
    };

    function prj12() {
        window.open('img/furry background.svg', '_blank');
    };

    
      // change mode 
    //   get item local storage
    if (localStorage.getItem('nightMode') == 'true') {
        body.classList.add('dark');
    }

    // change mode class 
    modeNav.addEventListener('click', () => {
        body.classList.toggle('dark');

        // change mode text 
        if (body.classList.contains('dark')) {
            modeText.innerText = 'Light Mode';
        } else {
            modeText.innerText = 'Dark Mode';
        }

        // set item local storage 
        localStorage.setItem('nightMode', body.classList.contains('dark'));
    });

    // scroll animation ( find on youtube video )
    // left to right 
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('left-show');
            } else {
                entry.target.classList.remove('left-show');
            }
        });
    });

    const hiddenEl = document.querySelectorAll('.left-hidden');
    hiddenEl.forEach((el) => observer.observe(el));



    // progress bar ( find on codepen: https://codepen.io/Okba-Design/pen/LYGXevQ)
    !function(a){a.fn.percentageLoader=function(b){this.each(function(){function q(){p.customAttributes.arc=function(a,b,c){var h,d=360/b*a,e=(90-d)*Math.PI/180,f=j+c*Math.cos(e),g=k-c*Math.sin(e);return h=b==a?[["M",j,k-c],["A",c,c,0,1,1,j-.01,k-c]]:[["M",j,k-c],["A",c,c,0,+(d>180),1,f,g]],{path:h}},p.path().attr({arc:[100,100,l],"stroke-width":d.strokeWidth,stroke:d.bgColor}),e&&(m=p.path().attr({arc:[.01,100,l],"stroke-width":d.strokeWidth,stroke:d.ringColor,cursor:"pointer"}),r(e,100,l,m,2)),n=p.text(j,k,e+"%").attr({font:d.fontWeight+" "+d.fontSize+" Arial",fill:d.textColor})}function r(a,b,c,d){f?d.animate({arc:[a,b,c]},900,">"):a&&a!=b?d.animate({arc:[a,b,c]},750,"elastic"):(a=b,d.animate({arc:[a,b,c]},750,"bounce",function(){d.attr({arc:[0,b,c]})}))}var c=a(this),d=a.extend({},a.fn.percentageLoader.defaultConfig,b),e=parseInt(c.children(d.valElement).text()),f=!0,h=parseInt(c.css("width")),i=parseInt(c.css("height")),j=h/2,k=i/2,l=j-d.strokeWidth/2,m=null,n=null,p=Raphael(this,h,i);q()})},a.fn.percentageLoader.defaultConfig={valElement:"p",strokeWidth:20,bgColor:"#d9d9d9",ringColor:"#d53f3f",textColor:"#9a9a9a",fontSize:"12px",fontWeight:"normal"}}(jQuery);


    $('.percent').percentageLoader({
        bgColor: 'rgba(0,0,0,.1)',
        ringColor: '#4FADD3',
        textColor: '#4FADD3',
        fontSize: '20px',
        fontWeight: 'bold',
        valElement: 'p',
        strokeWidth: 10
      });


    //   button active class
      let sort = document.querySelectorAll('.sort'); 
      let projectCard = document.querySelectorAll('.project-card');

      for (let i=0; i<sort.length; i++) {
        sort[i].addEventListener('click', function() {
            for (let j=0; j<sort.length; j++) {
                sort[j].classList.remove('active');
            }
            this.classList.add('active');

            //   project filter (find on youtube : https://youtu.be/ATeWQlY3N04?si=dUJgtUDtU-ms0SAN)
            let dataFilter = this.getAttribute('data-filter');

            for (let k=0; k<projectCard.length; k++) {
                projectCard[k].classList.remove('active');
                projectCard[k].classList.add('hide');

                if (projectCard[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                    projectCard[k].classList.remove('hide');
                    projectCard[k].classList.add('active');
                };
            };
      });
    };