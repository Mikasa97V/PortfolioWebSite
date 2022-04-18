const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('technologies-wrap_show');
      } else {
         change.target.classList.remove('technologies-wrap_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      label = document.querySelectorAll('.technologies-wrap');

  for (let elm of label) {
    observer.observe(elm);
  }