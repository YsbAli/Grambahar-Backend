function updateSelect2Options() {
    const ticketType = document.getElementById("ticketType");
    const fee = document.getElementById("fee");
    const selectedValue = ticketType.value;

    // Clear existing options in the second select
    fee.innerHTML = "";

    // Add new options based on the selection in the first select
    if (selectedValue === "IAPR") {
        addOption(fee, "$700", "$700");
    } else if (selectedValue === "General") {
        addOption(fee, "$760", "$760");
    } else if (selectedValue === "Student") {
        addOption(fee, "$450", "$450");
    } else if (selectedValue === "Tutorial fees Student") {
        addOption(fee, "$75", "$75");
    } else if (selectedValue === "non Student") {
        addOption(fee, " $100", "$100");
    }
    else if (selectedValue === "Workshop") {
        addOption(fee, "$150", "$150");
    }
    else if (selectedValue === "workshopStudent") {
        addOption(fee, "$125", "$125");
    }
}
function addOption(select, text, value) {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    select.add(option);
}
updateSelect2Options();


// updating the total price
const ticketType = document.getElementById('ticketType');
const quantity = document.getElementById('quantity');
const totalPrice = document.getElementById('totalPrice');
const purchaseButton = document.getElementById('purchaseButton');
const galaDinner = document.getElementById("galaDinner");


// Update the total price when the ticket type or quantity changes
function updateTotalPrice() {
    const ticketTypeValue = ticketType.value;
    const quantityValue = Number(quantity.value);
    const galaDinnerQuantity = Number(galaDinner.value)
    let price = 0;
    let galaDinnerPrice = 100;

    if (ticketTypeValue === 'IAPR') {
        price = 700;
    } else if (ticketTypeValue === 'General') {
        price = 760;
    } else if (ticketTypeValue === 'Student') {
        price = 450;
    }
    else if (ticketTypeValue === 'Tutorial fees') {
        price = 450;
    }
    else if (ticketTypeValue === 'non Student') {
        price = 100;
    }
    else if (ticketTypeValue === 'Workshop') {
        price = 75;
    }
    else if (ticketTypeValue === 'workshopStudent') {
        price = 75;
    }
    let totalDinnerPrice = galaDinnerPrice * galaDinnerQuantity
    console.log(totalDinnerPrice)

    const total = (price * quantityValue) + totalDinnerPrice
    console.log(total)
    totalPrice.textContent = `$${total}`;

}

// Add an event listener for changes in ticket type and quantity
ticketType.addEventListener('change', updateTotalPrice);
quantity.addEventListener('input', updateTotalPrice);
galaDinner.addEventListener("input", updateTotalPrice)

purchaseButton.addEventListener('click', function () {
    alert('Payment integration would go here');
});
