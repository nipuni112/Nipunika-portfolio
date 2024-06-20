const body = document.querySelector("body"),
      modeNav = body.querySelector('.mode-nav'),
      mode = body.querySelector('.mode'),
      modeText = body.querySelector('.mode-text');

      // change mode 
    //   get item local storage
    if (localStorage.getItem('nightMode') == 'true') {
        body.classList.add('dark');
    }

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



    