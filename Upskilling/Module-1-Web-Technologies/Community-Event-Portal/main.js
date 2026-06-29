// Exercise 1 – JavaScript Basics
console.log("Welcome to the Community Portal");

// Exercise 2 – Variables, Data Types and Operators
const defaultEventName = "Annual Music Festival";
const defaultEventDate = "2026-07-15";
let availableSeats = 50;

console.log(`Default Event: ${defaultEventName} is scheduled on ${defaultEventDate}. Seats left: ${availableSeats}`);

// Exercise 5 – Objects
class Event {
    constructor(name, date, category, seats) {
        this.name = name;
        this.date = date;
        this.category = category;
        this.seats = seats;
    }
    checkAvailability() {
        return this.seats > 0;
    }
}

// Exercise 6 – Arrays
let eventsList = [
    new Event("Music in the Park", "2026-07-15", "music", 20),
    new Event("Community Art Gallery", "2026-07-20", "art", 0),
    new Event("Street Food Carnival", "2026-08-10", "food", 15)
];

// Array push()
eventsList.push(new Event("Beginner Web Coding Meetup", "2026-08-25", "tech", 30));

// Array filter()
const activeEvents = eventsList.filter(e => e.checkAvailability());

// Array map()
const activeNames = activeEvents.map(e => e.name);

// Displaying properties using Object.entries()
eventsList.forEach(e => {
    Object.entries(e).forEach(([key, val]) => {
        if (typeof val !== "function") {
            // Can be inspected in console
        }
    });
});

// Exercise 4 – Functions and Scope
function addEvent(name, date, category = "general", seats = 50) {
    const newEvent = new Event(name, date, category, seats);
    eventsList.push(newEvent);
    return newEvent;
}

function filterEventsByCategory(category) {
    return eventsList.filter(e => e.category === category);
}

// Closure to count registrations
function createRegistrationCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const incrementRegCount = createRegistrationCounter();

// Callback example
function processRegistration(userName, callback) {
    callback(userName);
}

// Exercise 7 – DOM Manipulation
function displayDynamicEvents() {
    const container = document.querySelector("#gallery-section");
    if (!container) return;

    const div = document.createElement("div");
    div.id = "dynamic-event-cards";
    div.style.marginTop = "20px";

    eventsList.forEach(event => {
        // Exercise 3 – Conditionals (Hiding full events in dynamic display)
        if (event.seats <= 0) {
            return;
        }

        const card = document.createElement("div");
        card.className = "demo-box";
        card.innerHTML = `<h3>${event.name}</h3><p>Seats Remaining: <span id="seats-${event.category}">${event.seats}</span></p>`;
        div.appendChild(card);
    });

    container.appendChild(div);
}

// Dynamic injection of Async layout
const mainContainer = document.querySelector("main");
if (mainContainer) {
    const asyncSection = document.createElement("section");
    asyncSection.id = "async-section";
    asyncSection.innerHTML = `
        <h2>Portal Users (Async Demo)</h2>
        <button id="loadUsersThenBtn">Load Users (then/catch)</button>
        <button id="loadUsersAwaitBtn">Load Users (async/await)</button>
        <div id="usersListDisplay" style="margin-top: 10px; min-height: 20px;"></div>
    `;
    mainContainer.appendChild(asyncSection);
}

// Exercise 9 – Async JavaScript
function loadUsersWithThen() {
    console.log("Location requested");
    const display = document.getElementById("usersListDisplay");
    display.innerText = "Loading...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            display.innerHTML = "";
            data.forEach(user => {
                const p = document.createElement("p");
                p.innerText = `${user.name} (${user.email})`;
                display.appendChild(p);
            });
        })
        .catch(error => {
            display.innerText = "Error: " + error.message;
        });
}

async function loadUsersWithAwait() {
    console.log("Location requested");
    const display = document.getElementById("usersListDisplay");
    display.innerText = "Loading...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        display.innerHTML = "";
        data.forEach(user => {
            const p = document.createElement("p");
            p.innerText = `${user.name} (${user.email})`;
            display.appendChild(p);
        });
    } catch (error) {
        display.innerText = "Error: " + error.message;
    }
}

// Error display helper for inputs
function showError(inputElement, message) {
    let errorSpan = inputElement.parentNode.querySelector(".error-message");
    if (!errorSpan) {
        errorSpan = document.createElement("span");
        errorSpan.className = "error-message";
        errorSpan.style.color = "red";
        errorSpan.style.fontSize = "12px";
        errorSpan.style.marginLeft = "10px";
        inputElement.parentNode.appendChild(errorSpan);
    }
    errorSpan.innerText = message;
}

function clearErrors() {
    const spans = document.querySelectorAll(".error-message");
    spans.forEach(span => span.innerText = "");
}

// Page Load Alert & Initialization
window.onload = function() {
    // Exercise 1 – Alert on load
    alert("Welcome to the Community Event Portal!");
    console.log("Page loaded");

    // Load saved preferences
    var savedEvent = localStorage.getItem("savedEventType");
    if (savedEvent) {
        document.getElementById("eventType").value = savedEvent;
        showFee();
    }

    // Initialize dynamic displays
    displayDynamicEvents();

    // Attach click listeners for async buttons
    const thenBtn = document.getElementById("loadUsersThenBtn");
    const awaitBtn = document.getElementById("loadUsersAwaitBtn");
    if (thenBtn) thenBtn.onclick = loadUsersWithThen;
    if (awaitBtn) awaitBtn.onclick = loadUsersWithAwait;

    // Exercise 8 – keydown event handling
    const nameInput = document.getElementById("userName");
    if (nameInput) {
        nameInput.addEventListener("keydown", function(event) {
            // Logs keys typed inside Name field
        });
    }
};

// HTML Action Handlers
function validatePhone() {
    var phoneField = document.getElementById("userPhone");
    var phoneNumber = phoneField.value;
    
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        alert("Please enter a valid 10-digit phone number.");
        phoneField.focus();
    }
}

function showFee() {
    var eventSelect = document.getElementById("eventType");
    var feeDisplay = document.getElementById("feeDisplay");
    var selectedEvent = eventSelect.value;
    var eventFee = 0;

    if (selectedEvent === "music") { eventFee = 20; }
    else if (selectedEvent === "art") { eventFee = 15; }
    else if (selectedEvent === "food") { eventFee = 5; }
    else if (selectedEvent === "tech") { eventFee = 30; }

    feeDisplay.innerText = "$" + eventFee;

    if (selectedEvent) {
        localStorage.setItem("savedEventType", selectedEvent);
        sessionStorage.setItem("sessionEventType", selectedEvent);
    }
}

function clearPreferences() {
    localStorage.removeItem("savedEventType");
    sessionStorage.removeItem("sessionEventType");
    document.getElementById("eventType").value = "";
    showFee();
    alert("Preferences cleared!");
}

function confirmSubmission() {
    var userNameVal = document.getElementById("userName").value;
    if (userNameVal) {
        return confirm("Hello " + userNameVal + ", do you want to submit the form?");
    }
    return true;
}

// Exercise 11 – Form Capture & Validation
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Exercise 3 – try-catch
    try {
        const form = document.getElementById("registrationForm");
        const nameInput = form.elements["userName"];
        const emailInput = form.elements["userEmail"];
        const eventSelect = form.elements["eventType"];

        let isValid = true;
        clearErrors();

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Name is required.");
            isValid = false;
        }
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Email is required.");
            isValid = false;
        }
        if (eventSelect.value === "") {
            showError(eventSelect, "Please select an event.");
            isValid = false;
        }

        if (!isValid) return false;

        // Exercise 3 – Conditionals (check seat count before registration)
        const selectedEventVal = eventSelect.value;
        const targetEventObj = eventsList.find(e => e.category === selectedEventVal);
        if (targetEventObj && targetEventObj.seats <= 0) {
            alert("Registration failed: This event is sold out!");
            return false;
        }

        // Exercise 12 – Fetch API Simulation (Post registration)
        const registrationData = {
            user: nameInput.value,
            email: emailInput.value,
            event: selectedEventVal
        };

        const output = document.getElementById("confirmationOutput");
        output.value = "Sending registration data...";

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(registrationData)
            })
            .then(response => {
                if (response.ok) {
                    output.value = "Registration Successful!";
                    console.log("Form submitted");

                    // Decrease available seats (Exercise 2)
                    if (targetEventObj) {
                        targetEventObj.seats--;
                        const seatsSpan = document.getElementById("seats-" + selectedEventVal);
                        if (seatsSpan) {
                            seatsSpan.innerText = targetEventObj.seats;
                        }
                    }

                    // Callback triggered (Exercise 4)
                    processRegistration(nameInput.value, function(name) {
                        incrementRegCount();
                    });
                } else {
                    output.value = "Registration Failed!";
                }
            })
            .catch(() => {
                output.value = "Registration Failed!";
            });
        }, 1000);

    } catch (error) {
        alert("An error occurred: " + error.message);
    }
    
    return false;
}

function countCharacters() {
    var textarea = document.getElementById("userMessage");
    var charCountSpan = document.getElementById("charCount");
    charCountSpan.innerText = textarea.value.length;
}

function enlargeImage(imageElement) {
    if (imageElement.style.width === "300px") {
        imageElement.style.width = "150px";
        imageElement.style.height = "100px";
    } else {
        imageElement.style.width = "300px";
        imageElement.style.height = "200px";
    }
}

function videoReady() {
    var statusMessage = document.getElementById("videoStatus");
    statusMessage.innerText = "Video ready to play";
}

window.onbeforeunload = function() {
    return "Are you sure you want to leave?";
};

function findLocation() {
    console.log("Location requested");
    var locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.innerText = "Searching for location...";

    var geoOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, geoOptions);
    } else {
        locationDisplay.innerText = "Geolocation is not supported by your browser.";
    }
}

function successCallback(position) {
    var locationDisplay = document.getElementById("locationDisplay");
    locationDisplay.innerText = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
}

function errorCallback(error) {
    var locationDisplay = document.getElementById("locationDisplay");
    if (error.code === error.PERMISSION_DENIED) {
        locationDisplay.innerText = "Error: Permission Denied.";
    } else if (error.code === error.TIMEOUT) {
        locationDisplay.innerText = "Error: Request Timed Out.";
    } else {
        locationDisplay.innerText = "Error: " + error.message;
    }
}

// Exercise 14 – jQuery
/*
jQuery is a fast, small, and feature-rich JavaScript library. It was created to simplify HTML document traversal, event handling, animating, and Ajax interactions by providing an easy-to-use API that works across a multitude of browsers. In the past, it was extremely popular because it solved cross-browser inconsistencies in vanilla JavaScript.

A major benefit of modern frameworks like React or Vue is their component-based architecture and declarative rendering. Instead of manually manipulating individual DOM elements (like with vanilla JS or jQuery), components automatically update their view whenever the underlying data/state changes. This makes building and maintaining large-scale, complex user interfaces much easier and more predictable.
*/
