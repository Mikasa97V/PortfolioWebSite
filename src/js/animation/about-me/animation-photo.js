const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('container__photo_show');
      } else {
         change.target.classList.remove('container__photo_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      photo = document.querySelector('.container__photo');

  observer.observe(photo);