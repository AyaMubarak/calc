const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.onclick = () => {
        const targetId = button.getAttribute("data-target");
        const paragraph = document.getElementById(targetId);

        let count = parseInt(paragraph.innerHTML);
        count++;
        paragraph.innerHTML = count;
    };
});
