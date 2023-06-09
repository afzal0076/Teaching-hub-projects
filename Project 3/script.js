const hamb = document.querySelector(".hamburger");
                const navmenu = document.querySelector(".nav-menu1");
          
                hamb.addEventListener("click", () => {
                  hamb.classList.toggle("active");
                  navmenu.classList.toggle("active");
                });
                document.querySelectorAll(".nav-link1").forEach((n) =>
                  n.addEventListener("click", () => {
                    hamb.classList.remove("active");
                    navmenu.classList.remove("active");
                  })
                );
          
                window.addEventListener("scroll", function () {
                  var header = document.querySelector(".navbar1");
                  header.classList.toggle("sticky", window.scrollY > 0);
                });


// menu section 
function showAll() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

function showLunch() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("Lunch")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

function showSnacks() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("snacks")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

function showDinner() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("Dinner")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}

function showSweets() {
  let cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.classList.contains("Sweets")) {
      card.style.display = "inline-block";
    } else {
      card.style.display = "none";
    }
  });
}
                