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
/********************************About javascript*****************************************/
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
/*****************************Contact javascript*******************************************/
function details() {
  var userid = "YourUserID"
  emailjs.init(userid);
  var thename = document.getElementById('thename').value;
  var themail = document.getElementById('themail').value;
  var themsg = document.getElementById('themsg').value;
  var validmail = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (thename == "") {
    alert("Please Enter Name");
  }
  else if (themail == "" || themail.match(!validmail)) {
    alert("Please Enter Valid Email");
  }

  else if (themsg == "") {
    alert("Please Enter Message");
  }
  else {
    var contactdetail = {
      from_name: thename,
      from_email: themail,
      message: themsg
    };

    emailjs.send('eshitanagariya@gmail.com', '2021am16es@mitsgwl.ac.in', contactdetail).then(function (res) {
      alert("Email Sent Successfully");
    },
      reason => {
        alert("Error Occur");
      })
  }
}