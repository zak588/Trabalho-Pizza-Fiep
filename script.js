const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
})

document.getElementById('whatsappForm').addEventListener('submit', function(e){
            e.preventDefault();

            
            const telefone = '5541999009999';

            const nome = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            const text = `Olá \nMeu nome é ${nome}, meu email é: ${email}.\nMensagem: ${mensagem}`;

            const encodedText = encodeURIComponent(text);

            const whatsappURL = `https://wa.me/${telefone}?text=${encodedText}`;

            window.open(whatsappURL, "_blank");
        })