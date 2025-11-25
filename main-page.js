const horizontalScroll = document.getElementById('horizontalScroll');
        const images = horizontalScroll.querySelectorAll('img');

        function setup() {
        // Wait until all images are fully loaded to get accurate widths
        let loaded = 0;
        images.forEach(img => {
        if (img.complete) loaded++;
        else img.onload = () => {
            loaded++;
            if (loaded === images.length) initScroll();
        };
        });
        if (loaded === images.length) initScroll();
        }

        function initScroll() {
        const totalWidth = horizontalScroll.scrollWidth / 2; // one full set of frames
        const scrollHeight = totalWidth; // use the same distance for vertical scroll
        document.body.style.height = scrollHeight + window.innerHeight + 'px';

        window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const x = scrollY % totalWidth; // wraparound point
        horizontalScroll.style.transform = `translateX(-${x}px)`;
        });
        }

        setup();