document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        "#lequeProdutos .produto-card"
    );

    function destacarProduto(cardSelecionado) {

        const jaAtivo = cardSelecionado
            .classList.contains("ativo");

        cards.forEach(card => {
            card.classList.remove("ativo");
            card.setAttribute("aria-pressed", "false");
        });

        if (!jaAtivo) {
            cardSelecionado.classList.add("ativo");
            cardSelecionado.setAttribute("aria-pressed", "true");
        }
    }

    cards.forEach(card => {

        card.addEventListener("click", () => {
            destacarProduto(card);
        });

        card.addEventListener("keydown", evento => {

            if (
                evento.key === "Enter" ||
                evento.key === " "
            ) {
                evento.preventDefault();
                destacarProduto(card);
            }
        });

    });

});
