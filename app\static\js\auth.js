document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".toggle-password");
    var i = 0;

    while (i < buttons.length) {
        buttons[i].addEventListener("click", function () {
            var target = this.getAttribute("data-target");
            var input = document.getElementById(target);
            var icon = this.querySelector("i");

            if (!input) {
                return;
            }

            if (input.type === "password") {
                input.type = "text";
                if (icon) {
                    icon.classList.remove("fa-eye");
                    icon.classList.add("fa-eye-slash");
                }
            } else {
                input.type = "password";
                if (icon) {
                    icon.classList.remove("fa-eye-slash");
                    icon.classList.add("fa-eye");
                }
            }
        });

        i = i + 1;
    }
});
