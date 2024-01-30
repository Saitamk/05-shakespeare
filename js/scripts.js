const section1 = document.getElementById("eka");
const section2 = document.getElementById("toka");
const section3 = document.getElementById("kolmas");

const sideBySide = () => {
  document.getElementsByTagName("ul")[0].className = "rinnakkain";
};

const evenGray = () => {
  section2.getElementsByTagName("table")[0].className = "harmaa-rivi-even";
};

const oddGray = () => {
  section3.getElementsByTagName("table")[0].className = "harmaa-rivi-odd";
};

const changeIcons = () => {
  // Etsitään kaikki linkit
  const linkit = document.getElementsByTagName("a");

  // Käydään läpi jokainen linkki
  for (let i = 0; i < linkit.length; i++) {
    const linkki = linkit[i];

    linkki.style.color = "#6f274d";
    linkki.style.fontWeight = "bold";
    linkki.style.fontStyle = "italic";
    linkki.style.textDecoration = "underline dotted 3px";

    if (linkki.href.endsWith(".pdf")) {
      const iconElement = document.createElement("i");
      iconElement.classList.add("fas", "fa-file-pdf");

      // Lisätään ikoni linkin eteen
      linkki.appendChild(iconElement);
    }

    if (linkki.href.startsWith("mailto")) {
      const iconElement = document.createElement("i");
      iconElement.classList.add("fas", "fa-envelope");

      linkki.insertBefore(iconElement, linkki.firstChild);
    }

    if (linkki.hostname !== location.hostname) {
      const iconElement = document.createElement("i");
      iconElement.classList.add("fas", "fa-external-link-alt");

      linkki.insertBefore(iconElement, linkki.firstChild);
    }
  }
};

const executeFunctions = () => {
  sideBySide();
  evenGray();
  oddGray();
};

// Lisätään tapahtumankäsittelijä napille
const vaihdaIkonitButton = document.getElementById("nappi");
vaihdaIkonitButton.addEventListener("click", changeIcons);

// jos halutaan suorittaa javascript heti DOM:in lataamisen jälkeen, poistetaan alla oleva kommentti
// window.onload = executeFunctions;

const removeIcons = () => {
  const linkit = document.getElementsByTagName("a");

  for (let i = 0; i < linkit.length; i++) {
    const linkki = linkit[i];

    linkki.style.color = ""; // Tyhjä arvo poistaa värin
    linkki.style.fontWeight = "";
    linkki.style.fontStyle = "";
    linkki.style.textDecoration = "";

    const iconElement = linkki.querySelector("i");
    if (iconElement) {
      iconElement.remove();
    }
  }
};

const palautaMuotoilutButton = document.getElementById("nappi2");
palautaMuotoilutButton.addEventListener("click", removeIcons);
