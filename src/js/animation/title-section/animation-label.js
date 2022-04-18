const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('title-wrap__label_show');
      } else {
         change.target.classList.remove('title-wrap__label_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      label = document.querySelectorAll('.title-wrap__label');

  for (let elm of label) {
    observer.observe(elm);
  }