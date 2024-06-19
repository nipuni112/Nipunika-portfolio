const body = document.querySelector("body"),
      modeNav = body.querySelector('.mode-nav'),
      mode = body.querySelector('.mode'),
      modeText = body.querySelector('.mode-text');

      // change mode 
    //   get item local storage ( w3 school)
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


    // right to left
    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('right-show');
            } else {
                entry.target.classList.remove('right-show');
            }
        });
    });

    const hidElement = document.querySelectorAll('.right-hidden');
    hidElement.forEach((el) => obs.observe(el));

    // fade in out
    // right to left
    const obser = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-show');
            } else {
                entry.target.classList.remove('fade-show');
            }
        });
    });

    const hidEle = document.querySelectorAll('.fade-hidden');
    hidEle.forEach((el) => obser.observe(el));
