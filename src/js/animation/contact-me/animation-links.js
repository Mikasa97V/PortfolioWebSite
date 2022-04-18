const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('links-wrapper_show');
      } else {
        change.target.classList.remove('links-wrapper_show');
      }
    });
  }
  
  let options = {
      threshold: [0.5]
    },
    observer = new IntersectionObserver(onEntry, options),
    links = document.querySelector('.links-wrapper');
  
  
  observer.observe(links);
  