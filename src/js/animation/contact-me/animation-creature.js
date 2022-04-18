const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('creature_show');
      } else {
        change.target.classList.remove('creature_show');
      }
    });
  }
  
  let options = {
      threshold: [0.5]
    },
    observer = new IntersectionObserver(onEntry, options),
    creature = document.querySelector('.creature');
  
  
  observer.observe(creature);
  