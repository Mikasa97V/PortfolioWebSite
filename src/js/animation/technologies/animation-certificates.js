const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('gallery_show');
      } else {
         change.target.classList.remove('gallery_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      photo = document.querySelector('.gallery');

  observer.observe(photo);