document.addEventListener("DOMContentLoaded", function() {
    const nodes = document.querySelectorAll('.word');
    let currentIndex = 0;

    function setActive(index) {
        nodes.forEach((node, i) => {
            if (i === index) {
                node.classList.add('active');
            } else {
                node.classList.remove('active');
            }
        });
    }

    function handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowDown':
                currentIndex++;
                if (currentIndex >= nodes.length) {
                    currentIndex = 0;
                }
                setActive(currentIndex);
                break;
            case 'ArrowUp':
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = nodes.length - 1;
                }
                setActive(currentIndex);
                break;
            case 'ArrowRight':
                currentIndex++;
                if (currentIndex >= nodes.length) {
                    currentIndex = 0;
                }
                setActive(currentIndex);
                break;
            case 'ArrowLeft':
                currentIndex--;
                if (currentIndex < 0) {
                    currentIndex = nodes.length - 1;
                }
                setActive(currentIndex);
                break;
        } // <-- Closing brace for the switch statement
    }

    document.addEventListener('keydown', handleKeyDown);
});
