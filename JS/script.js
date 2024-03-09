
const gradientBox = document.querySelector(".gradient-box");
const selectMenu = document.querySelector(".select-box select");
const colorInputs = document.querySelectorAll(".colors input");
const textArea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");



const getRandomColor = () => {
    // Generating a random color in Hexadecimal format
    const randomHex =Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
    
}

const generateGradient = (isRandom) => {
    if(isRandom){ 
        // If isRandom true the update the colors inputs value with random color
        colorInputs[0].value = getRandomColor(); 
        colorInputs[1].value = getRandomColor(); 
    }
    // Creating a color string using the color input values
   const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value} )`;
   gradientBox.style.background = gradient;
   textArea.value = `background: ${gradient}`;
}

const copyCode = () => {
    // Copying textarea value and updating the copy button text
    navigator.clipboard.writeText(textArea.value);
    copyBtn.innerText = "Code Copied...";
    setTimeout(() => copyBtn.innerText = "Copy Code", 1600 );
}



colorInputs.forEach(input => {
    // Calling generateGradient function on each color input clicks
    input.addEventListener("input", () => generateGradient(false));
})
selectMenu.addEventListener("change",() => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);