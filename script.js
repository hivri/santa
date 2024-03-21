let z=4;

document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const textBoxContainer = document.getElementById("textBoxContainer");
    let textBoxCount = 0;

    addButton.addEventListener("click", function() {
        textBoxCount++;
        z++;
        const textBoxWrapper = document.createElement("div"); // Create a div wrapper
        const textBox = document.createElement("input");
        textBox.type = "text";
        textBox.name = "textBox" + textBoxCount;
        textBox.placeholder = `Enter Name ${z}`;
        textBoxWrapper.appendChild(textBox); // Append textbox to the div wrapper
        textBoxContainer.appendChild(textBoxWrapper); // Append div wrapper to the container
        textBoxContainer.appendChild(document.createElement("br"));
    });
});

