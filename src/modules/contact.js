export function loadContact(){
    const container = document.createElement("div");
    container.classList.add("tab-container", "contact-page");

    const headline = document.createElement("h1");
    headline.textContent = "Get in Touch";

    const details = document.createElement("div");
    details.classList.add("contact-details");

    const phone = document.createElement("p");
    phone.textContent = "📞 Phone 070 7890 3678";

    const hours = document.createElement("p");
    hours.textContent = "⏰ Hours: Mon - Sun 10: 00 AM - 10: 00 PM "
    
    
    const address = document.createElement("p");
    address.textContent = "📍 Location: 123 Eka's Close.";



    details.appendChild(phone);
    details.appendChild(hours);
    details.appendChild(address);

    container.appendChild(headline);
    container.appendChild(details);


    return container;
}