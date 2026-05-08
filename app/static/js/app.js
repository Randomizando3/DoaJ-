document.addEventListener("DOMContentLoaded", function () {
    var mobileMenu = document.getElementById("mobile-menu");
    var navLinks = document.getElementById("nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    var searchInput = document.getElementById("busca-item");
    var filterButtons = document.querySelectorAll(".filter-btn");
    var cards = document.querySelectorAll(".item-card");
    var emptyItems = document.getElementById("empty-items");
    var currentFilter = "todos";

    function updateItems() {
        var text = "";

        if (searchInput) {
            text = searchInput.value.toLowerCase();
        }

        var visibleCount = 0;
        var i = 0;

        while (i < cards.length) {
            var card = cards[i];
            var nome = card.getAttribute("data-nome");
            var descricao = card.getAttribute("data-descricao");
            var categoria = card.getAttribute("data-categoria");
            var showByText = nome.indexOf(text) >= 0 || descricao.indexOf(text) >= 0;
            var showByFilter = currentFilter === "todos" || categoria === currentFilter;

            if (showByText && showByFilter) {
                card.style.display = "block";
                visibleCount = visibleCount + 1;
            } else {
                card.style.display = "none";
            }

            i = i + 1;
        }

        if (emptyItems) {
            if (visibleCount === 0) {
                emptyItems.classList.remove("hidden");
            } else {
                emptyItems.classList.add("hidden");
            }
        }
    }

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            updateItems();
        });
    }

    if (filterButtons.length > 0) {
        var j = 0;

        while (j < filterButtons.length) {
            filterButtons[j].addEventListener("click", function () {
                var k = 0;

                while (k < filterButtons.length) {
                    filterButtons[k].classList.remove("active");
                    k = k + 1;
                }

                this.classList.add("active");
                currentFilter = this.getAttribute("data-filter");
                updateItems();
            });

            j = j + 1;
        }
    }

    updateItems();

    var fotoInput = document.getElementById("foto");
    var fotoPreview = document.getElementById("foto-preview");

    if (fotoInput && fotoPreview) {
        fotoInput.addEventListener("input", function () {
            var valor = fotoInput.value.trim();

            if (valor === "") {
                fotoPreview.src = "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80";
            } else {
                fotoPreview.src = valor;
            }
        });
    }

    var chatForm = document.getElementById("chat-form");
    var chatInput = document.getElementById("chat-input");
    var chatMessages = document.getElementById("chat-messages");

    if (chatForm && chatInput && chatMessages) {
        chatForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var texto = chatInput.value.trim();

            if (texto === "") {
                return;
            }

            var novaMensagem = document.createElement("div");
            novaMensagem.className = "message sent";
            novaMensagem.textContent = texto;
            chatMessages.appendChild(novaMensagem);
            chatInput.value = "";
        });
    }
});
