const images = Array.from(document.querySelectorAll(".work-box img"));
const lightContainer = document.querySelector(".light-container");
const lightBox = document.querySelector('.light-box');
const closeItem = document.getElementById("close");
const prevItem = document.getElementById("prev");
const nextItem = document.getElementById("next");
let curentIndex = 0;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (e) {
    curentIndex = images.indexOf(e.target);
    let curentSrc = this.getAttribute('src');
    lightBox.style.backgroundImage = `url(${curentSrc})`;
    lightBox.style.backgroundSize = '100% 100%'
    lightContainer.classList.remove("d-none");
  })
}


closeItem.addEventListener("click", closeSlide);
function closeSlide() {
  lightContainer.classList.add("d-none");
}


nextItem.addEventListener("click", nextSlide);
function nextSlide() {
  curentIndex++
  if (curentIndex == images.length) {
    curentIndex = 0
  }
  let curentSrc = images[curentIndex].getAttribute('src');
  lightBox.style.backgroundImage = `url(${curentSrc})`;
}


prevItem.addEventListener("click", prevSlide);
function prevSlide() {
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images.length - 1;
  }
  let curentSrc = images[curentIndex].getAttribute('src');
  lightBox.style.backgroundImage = `url(${curentSrc})`;
}
document.addEventListener("keydown", function (e) {
  if (e.key == 'ArrowRight') {
    nextSlide();
  }
  else if (e.key == 'ArrowLeft') {
    prevSlide();
  }
  else if (e.key == 'Escape') {
    closeSlide()
  }
})

// function formSubmit() {
//   Email.send({
//     SecureToken: "409ab2f8-83f1-4c49-92ab-a3711cc814b5 ",
//     To: 'osama376002@gmail.com',
//     From: "osama376002@gmail.com",
//     Subject: "email Subject",
//     Body: "الاسم : " + document.getElementById("name").value
//       + "<br/> الايميل : " + document.getElementById("email").value
//       + "<br/> الرسالة : " + document.getElementById("subject").value
//   }).then(
//     message => alert("تم إرسال الرسالة بنجاح")
//   );
// }