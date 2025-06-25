// Array of image objects with filename, title, and description
const imageList = [
  {
    src: 'car5.jpg',
    title: 'Honda Civic Si',
    description: 'The Honda Civic is a compact car that has been a popular choice for drivers looking for reliability, fuel efficiency, and a fun driving experience.',
  },
  {
    src: 'car4.jpg',
    title: 'Honda Civic Type R',
    description: 'High-performance variant of the Honda Civic known for its sporty design and powerful engine.',
  },
  {
    src: 'car3.jpg',
    title: 'Honda Civic Type R variant',
    description: ' A performance-oriented variant of the Civic, offering a balance between everyday usability and sporty performance.',
  },
  {
    src: 'car6.jpg',
    title: 'Porsche Cayman',
    description: 'Various flat-six engines are available, including naturally aspirated and turbocharged options.',
  },
  {
    src: 'car2.jpg',
    title: 'Honda Civic R(Red)',
    description: 'High-performance variant of the Honda Civic known for its sporty design and powerful engine.',
  },
  {
    src: 'car1.jpg',
    title: ' Honda Civic Type R(White)',
    description: 'High-performance variant of the Honda Civic known for its sporty design and powerful engine.',
  }
]

// DOM references
const slideContainer = document.querySelector('.slide')
const bgOverlay = document.querySelector('.background-overlay')

// Dynamically create slide items with info
imageList.forEach((imgObj) => {
  const item = document.createElement('div')
  item.className = 'item'
  item.style.backgroundImage = `url(images/${imgObj.src})`

  item.innerHTML = `
    <div class="content">
      <div class="name">${imgObj.title}</div>
      <div class="des">${imgObj.description}</div>
      <button>See More</button>
    </div>
  `
  slideContainer.appendChild(item)
})

// Function to update background blur based on active slide
function updateBackground() {
  const items = document.querySelectorAll('.item')
  if (items.length >= 2) {
    const activeItem = items[1]
    const bg = activeItem.style.backgroundImage
    bgOverlay.style.backgroundImage = bg
  }
}
updateBackground()

// Slider navigation
document.querySelector('.next').addEventListener('click', () => {
  let items = document.querySelectorAll('.item')
  slideContainer.appendChild(items[0])
  updateBackground()
})

document.querySelector('.prev').addEventListener('click', () => {
  let items = document.querySelectorAll('.item')
  slideContainer.prepend(items[items.length - 1])
  updateBackground()
})

// Dark mode toggle
const toggleBtn = document.querySelector('.dark-toggle')
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  const icon = toggleBtn.querySelector('i')
  icon.classList.toggle('fa-moon')
  icon.classList.toggle('fa-sun')
})
