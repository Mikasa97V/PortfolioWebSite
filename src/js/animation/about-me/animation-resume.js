const onEntry = (entry) => {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('description-text_show');
    } else {
      change.target.classList.remove('description-text_show');
    }
  });
}

let options = {
    threshold: [0.5]
  },
  observer = new IntersectionObserver(onEntry, options),
  resume = document.querySelector('.description-text');

observer.observe(resume);
