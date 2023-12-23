function updateWelcomeMessage() {
    const nameInput = document.getElementById('name-input');
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (nameInput.value) {
      welcomeMessage.textContent = `Hello, ${nameInput.value}!`;
    } else {
      welcomeMessage.textContent = 'Welcome!';
    }
  }
  
  function showHomePage() {
    document.getElementById('home-page').style.display = 'block';
    document.getElementById('blog-page').style.display = 'none';
  }
  
  function showBlogPage() {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('blog-page').style.display = 'block';
  }
  

  $(".viewmore-btn").on('click', function(){
    $(this).parent().toggleClass("showContent");
  })


  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  
  // Responsive menu toggle
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.style.display = 'none';
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuIcon.style.display = 'none';
      document.querySelector('.nav-links').classList.remove('show');
    } else {
      menuIcon.style.display = 'none';
    }
  });

  //header
  let sections =document.querySelectorAll ('section');
  let navLinks =document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top =window.scrollY;
      let offset = sec.offsetTop -150;
      let height =sec.offsetHeight;
      let id =sec.getAttribute('id');

      if(top >= offset && top < offset + height ) {
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header nav a [href*=' + id + ']').classList.add
          ('active');
        })
      }

    });
  };

  
  