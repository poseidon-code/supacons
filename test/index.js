import { generic, brands } from "./icons.js";

const classicIcons = document.getElementById("classic");
const duotoneIcons = document.getElementById("duotone");
const sharpDuotoneIcons = document.getElementById("sharp_duotone");
const sharpIcons = document.getElementById("sharp");
const brandIcons = document.getElementById("brands");

for (let name in generic) {
    const newRow = classicIcons.insertRow(classicIcons.rows.length);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = generic[name];
    newRow.insertCell(2).innerHTML = `<i class="fa-solid fa-${name}"></i>`;
    newRow.insertCell(3).innerHTML = `<i class="fa-regular fa-${name}"></i>`;
    newRow.insertCell(4).innerHTML = `<i class="fa-light fa-${name}"></i>`;
    newRow.insertCell(5).innerHTML = `<i class="fa-thin fa-${name}"></i>`;
}

for (let name in generic) {
    const newRow = duotoneIcons.insertRow(duotoneIcons.rows.length);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = generic[name];
    newRow.insertCell(2).innerHTML = `<i class="fa-duotone fa-solid fa-${name}"></i>`;
    newRow.insertCell(3).innerHTML = `<i class="fa-duotone fa-regular fa-${name}"></i>`;
    newRow.insertCell(4).innerHTML = `<i class="fa-duotone fa-light fa-${name}"></i>`;
    newRow.insertCell(5).innerHTML = `<i class="fa-duotone fa-thin fa-${name}"></i>`;
}

for (let name in generic) {
    const newRow = sharpDuotoneIcons.insertRow(sharpDuotoneIcons.rows.length);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = generic[name];
    newRow.insertCell(2).innerHTML = `<i class="fa-sharp-duotone fa-solid fa-${name}"></i>`;
    newRow.insertCell(3).innerHTML = `<i class="fa-sharp-duotone fa-regular fa-${name}"></i>`;
    newRow.insertCell(4).innerHTML = `<i class="fa-sharp-duotone fa-light fa-${name}"></i>`;
    newRow.insertCell(5).innerHTML = `<i class="fa-sharp-duotone fa-thin fa-${name}"></i>`;
}

for (let name in generic) {
    const newRow = sharpIcons.insertRow(sharpIcons.rows.length);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = generic[name];
    newRow.insertCell(2).innerHTML = `<i class="fa-sharp fa-solid fa-${name}"></i>`;
    newRow.insertCell(3).innerHTML = `<i class="fa-sharp fa-regular fa-${name}"></i>`;
    newRow.insertCell(4).innerHTML = `<i class="fa-sharp fa-light fa-${name}"></i>`;
    newRow.insertCell(5).innerHTML = `<i class="fa-sharp fa-thin fa-${name}"></i>`;
}

for (let name in brands) {
    const newRow = brandIcons.insertRow(brandIcons.rows.length);

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = brands[name];
    newRow.insertCell(2).innerHTML = `<i class="fa-brands fa-${name}"></i>`;
}
