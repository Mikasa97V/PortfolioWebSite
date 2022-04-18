const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('project-card_show');
      } else {
         change.target.classList.remove('project-card_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      cards = document.querySelectorAll('.project-card');

  for (let elm of cards) {
    observer.observe(elm);
  }