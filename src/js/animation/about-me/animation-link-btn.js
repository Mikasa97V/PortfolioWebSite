const onEntry = (entry) => {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('link-btn_show');
      } else {
         change.target.classList.remove('link-btn_show');
      }
    });
  }
  
  let options = { threshold: [0.5] },
      observer = new IntersectionObserver(onEntry, options),
      link_btn = document.querySelectorAll('.link-btn');

  for (let elm of link_btn) {
    observer.observe(elm);
  }