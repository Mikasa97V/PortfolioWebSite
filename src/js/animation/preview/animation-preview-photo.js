const onEntry = (entry) => {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('preview__preview-photo_show');
    } else {
      change.target.classList.remove('preview__preview-photo_show');
    }
  });
}

let options = {
    threshold: [0.5]
  },
  observer = new IntersectionObserver(onEntry, options),
  photo = document.querySelector('.preview__preview-photo');

observer.observe(photo);
