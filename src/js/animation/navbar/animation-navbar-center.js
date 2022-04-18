const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('navbar_position-center_show');
      } else {
        change.target.classList.remove('navbar_position-center_show');
      }
    });
  }
  
  let options = {
      threshold: [0.5]
    },
    observer = new IntersectionObserver(onEntry, options),
    nav = document.querySelector('.navbar_position-center');
  
  
  observer.observe(nav);
  