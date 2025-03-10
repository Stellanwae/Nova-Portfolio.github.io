document.addEventListener("DOMContentLoaded", () => {
    const accordionRows = document.querySelectorAll(".accordion-row");

    accordionRows.forEach(row => {
        row.addEventListener("click", function () {
            const content = row.nextElementSibling;
            const arrow = row.querySelector(".arrow");

            // Toggle accordion content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px 15px";
            }

            // Toggle arrow rotation
            arrow.classList.toggle("rotate");
        });
    });
});