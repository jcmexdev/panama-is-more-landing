
function addShowClass(element){
  if (element.classList.contains('hide-to-left')) {
    element.classList.add('show-to-left');
  }
  if (element.classList.contains('hide-to-right')) {
    element.classList.add('show-to-right');
  }
}
function removeShowClass(element){
  if (element.classList.contains('hide-to-left')) {
    element.classList.remove('show-to-left');
  }
  if (element.classList.contains('hide-to-right')) {
    element.classList.remove('show-to-right');
  }
}

let callback = function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      addShowClass(entry.target);
    } else {
      removeShowClass(entry.target);
    }
  });
};

let options = {
  threshold: 0.2
};

let observer = new IntersectionObserver(callback, options);

var targets = document.querySelectorAll('.hide');
targets.forEach((target)=>  {
  observer.observe(target);
})


