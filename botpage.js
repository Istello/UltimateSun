
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function appendMessage(text, className) {
    const msg = document.createElement('div');
    msg.className = `message ${className}`;
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
    const cleaned = input.toLowerCase().trim();
    const responses = {
        "hi": "Hello there!",
        "hello": "Hi! How can I help you today?",
        "how are you": "I'm just code, but I'm feeling helpful!",
        "how was your day": "My day’s been great, thank you for asking!",
        "bye": "Goodbye! Come back soon!",
        "nice": "Good to hear that from you",
        "nice!": "hmm",
        "good": "Yeah",
        "okay": "hmm",
        "hmm": "hmm",
        "really": "hmm",
        "really?": "yes",
        "so": "okay?",
        "tch": "I'm happy to help",
        "what are you": "I'm a simple chatbot made by Fervio-Tech, to help with the issues that the users may face.",
        "who are you": "I'm a simple chatbot made by Fervio-Tech, to help with the issues that the users may face.",
        "help": "What can i help you with? Contact, Services, Return, About, CEO",
        // "payment": "Sorry, i cannot help wit payment, but i can redirect you to relevant personels",
        // "ordering": "Orders are made manually through the order section of the page, Contact Us for more",
        "contact": "You can call us on 08033599403. You can also visit us at Opposite NNPC, Dada Estate, Beside Moye Oil, Osogbo. Or you can send us an email at: okeolayinka5@gmail.com " +
        "/ Check our contact page",
        "about": "We are Ultimate Sun ltd, and we produce ***",
        "us": "We are Ultimate Sun ltd, and we produce ***",
        "about us": "We are Ultimate Sun ltd, and we produce ***",
        "back": "the back button is used to return to the homepage",
        "go": "the GO button is an alternative for you to send me a massage",
        "return": "to return, just click the back button",
        "about": "UltimateSun Resources Nigeria Ltd is a dynamic and innovative construction company based in Osogbo, Osun State, Nigeria. With a strong foundation built on quality, reliability, and customer satisfaction, we specialize in delivering comprehensive construction services, industrial supplies, and general contracting solutions. Our expertise spans building construction, civil engineering works, and industrial services, ensuring that our clients receive tailored solutions to meet their unique needs.",
        "ceo": "The name of our CEO is Engr. Craft Oke Olayinka Akinlolu, " +
        "with over 20 years of working experience in the construction industry," +
        "He currently serve as the Chairman of the Nigeria Association of Engineering Craftsmen.",
        "services": "We have 4 categories of Service that we have. They are: Residential, Commercial, Civil and Special, But keep in mind that we have more that the ones mentioned, you can contact us for more information.",
        "residential": `Under ${input} Services we have: Home Construction, Home renovations, Interior fishing and Landscaping`,
        "home": "Renovations or Constructions?",
        "construction": "We build durable and modern homes tailored to our clients' lifestyle and design preferences, from foundation to finishing.",
        "home construction": "We build durable and modern homes tailored to our clients' lifestyle and design preferences, from foundation to finishing.",
        "home renovations": "We transform existing homes through renovations and remodeling, giving outdated spaces a fresh and functional look.",
        "renovations": "We transform existing homes through renovations and remodeling, giving outdated spaces a fresh and functional look.",
        "interior fishing": "We handle all interior works including painting, flooring, tiling, and carpentry to give your space a polished and elegant feel.",
        "landscaping": "We design and construct beautiful outdoor spaces with lawns, fences, gates, and other exterior enhancements.",
        "commercial": `Under ${input} we have: Building, Facilities, Redesign and Maintenance`,
        "building": "We construct commercial buildings such as offices, malls, and shops with functionality, safety, and style in mind.",
        "facilities": "We build large-scale industrial projects including factories, warehouses, and production facilities to meet operational demands.",
        "maintenance": "We provide reliable maintenance services to ensure your building remains safe, functional, and up to code.",
        "redesign": "We redesign and refurbish office spaces to create professional, efficient, and comfortable work environments.",
        "civil": `Under ${input} services we have: Road, Drainage, Demolition or Escavation, Foundation`,
        "fervio-tech": "Fervio-Tech is a software development company that specializes in creating innovative solutions for businesses. We focus on delivering high-quality software products and services to help our clients achieve their goals. We are currently operating under a personal freelance licence and is in the process of formal registration.",
        "ferviotech": "Fervio-Tech is a software development company that specializes in creating innovative solutions for businesses. We focus on delivering high-quality software products and services to help our clients achieve their goals. We are currently operating under a personal freelance licence and is in the process of formal registration.",
        "fervio": "Fervio-Tech is a software development company that specializes in creating innovative solutions for businesses. We focus on delivering high-quality software products and services to help our clients achieve their goals. We are currently operating under a personal freelance licence and is in the process of formal registration.",
        "road": "We construct durable roads, pavements, and driveways using quality materials and expert techniques.",
        "drainage": "We install drainage systems and culverts to manage water flow and prevent flooding or erosion.",
        "demolition": "We prepare sites through professional excavation and safe demolition of existing structures when needed.",
        "escavation": "We prepare sites through professional excavation and safe demolition of existing structures when needed.",
        "foundation": "We lay strong foundations and concrete works that form the structural backbone of any building.",
        "special": `Under ${input} we have: Rental, Management / Supervision, Consultation and Architectural design`,
        "rental": "We rent out reliable construction tools and machinery, including excavators, mixers, and scaffolding, for all project sizes.",
        "management": "We oversee all aspects of construction projects to ensure timely delivery, budget control, and quality assurance.",
        "supervision": "We oversee all aspects of construction projects to ensure timely delivery, budget control, and quality assurance.",
        "consultation": "We provide structural and civil engineering expertise to ensure safety, compliance, and long-term performance.",
        "architectural design": "We offer creative and practical architectural designs, including 2D and 3D drawings for all types of buildings.",
    };
    return responses[cleaned] || "Sorry, I am a simple bot I don't understand that. I was made to help with: Services, Return, Contact, About, CEO, Awards";
}

function sendMessage() {
    const input = userInput.value.trim();
    if (!input) return;

    appendMessage(input, 'user');
    const botReply = getBotReply(input);
    setTimeout(() => appendMessage(botReply, 'bot'), 500);

    userInput.value = '';
}

userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});