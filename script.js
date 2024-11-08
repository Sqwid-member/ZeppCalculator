const container = document.getElementById('cubeContainer');
let containerWidth = container.clientWidth;
let containerHeight = container.clientHeight;
let cubeCount = 0;
const maxCubes = 80;

window.addEventListener('resize', () => {
    containerWidth = container.clientWidth;
    containerHeight = container.clientHeight;
});

function createCube() {
    const cube = document.createElement('div');
    const size = Math.floor(Math.random() * 51) + 100;
    const rotation = Math.floor(Math.random() * 361);
    const posX = Math.floor(Math.random() * (containerWidth - size));
    const posY = Math.floor(Math.random() * (containerHeight - size));

    const initialPosX = containerWidth / 2 - size / 2;
    const initialPosY = containerHeight / 2 - size / 2;

    cube.classList.add('cube');
    cube.style.width = `${size}px`;
    cube.style.height = `${size}px`;
    cube.style.left = `${initialPosX}px`;
    cube.style.top = `${initialPosY}px`;
    cube.style.transform = `rotate(0deg)`;

    container.appendChild(cube);

    setTimeout(() => {
        cube.style.left = `${posX}px`;
        cube.style.top = `${posY}px`;
        cube.style.transform = `rotate(${rotation}deg)`;
        cube.classList.add('visible');
    }, 100);

    cubeCount++;
    if (cubeCount > maxCubes) {
        const oldestCube = container.firstChild;
        container.removeChild(oldestCube);
        cubeCount--;
    }
}
const searchInput = document.querySelector('.search-box input[type="text"]');

searchInput.addEventListener('input', () => {
    searchInput.style.animation = 'none'; // Скидання анімації
    searchInput.offsetHeight; // Викликає перерисовку для перезапуску анімації
    searchInput.style.animation = 'fadeInText 0.5s ease-in-out'; // Застосування анімації знову
});


setInterval(createCube, 500);
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігає відкриттю нового вікна
    const query = document.getElementById('searchInput').value;
    
    if (query.trim() !== '') {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        const resultContainer = document.getElementById('searchResult');
        resultContainer.innerHTML = ''; // Очищення попереднього вмісту
        resultContainer.appendChild(iframe);
    }
});

