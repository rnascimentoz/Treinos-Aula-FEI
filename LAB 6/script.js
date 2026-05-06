const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

// Movimento do mouse
canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();

    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

// Limite
function limitar(valor, min, max) {
    return Math.max(min, Math.min(max, valor));
}

// Loop
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const size = 50;

    let x = mouseX - size / 2;
    let y = mouseY - size / 2;

    // Impede sair do canvas
    x = limitar(x, 0, canvas.width - size);
    y = limitar(y, 0, canvas.height - size);

    // Desenha quadrado vermelho
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, size, size);

    requestAnimationFrame(draw);
}

draw();