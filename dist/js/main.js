window.onload = function () {
  scrollTo(0, 0)
  window.location.hash = "home"
}

// hamburger menu
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector("header nav ul")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active")
  navMenu.classList.toggle("nav-menu-active")
})

// header background change
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight) {
    header.classList.add("header-bg")
  } else {
    header.classList.remove("header-bg")
  }
})

// header active swtiching
function activeToggler(links) {
  link.addEventListener("click", function () {
    links.forEach((btn) => {
      btn.classList.remove("active")
    })
    this.classList.add("active")
    hamburger.click()
  })
}

const navLinks = document.querySelectorAll("header nav a")

for (link of navLinks) {
  activeToggler(navLinks)
}

/* 
const sections = document.querySelectorAll("section")
const navLinks = document.querySelectorAll("header nav a")

sections.forEach((sec) => {
  const top = window.scrollY
  const offset = sec.offsetTop
  const height = sec.offsetHeight
  const id = sec.getAttribute("id")
  console.log(id)

  if (top >= offset && top < offset + height) {
    navLinks.forEach((link) => {
      link.classList.remove("active")
      document.querySelector(`header nav a[href=${id}]`).classList.add("active")
    })
  }
})
 */
