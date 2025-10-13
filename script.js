<script>
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
      navbar.classList.add('scrolled'); // add class when scrolling down
    } else {
      navbar.classList.remove('scrolled'); // remove class when at top
    }
  });
</script>
