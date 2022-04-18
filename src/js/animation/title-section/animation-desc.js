const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('title-wrap__description_show');
      } else {
         change.target.classList.remove('title-wrap__description_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      desc = document.querySelectorAll('.title-wrap__description');

  
  for (let elm of desc) {
    observer.observe(elm);
  }
