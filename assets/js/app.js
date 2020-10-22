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

let models =  document.querySelectorAll('.models__item');
let cards =  document.querySelectorAll('.models__card');

models.forEach((model)=> {
  model.addEventListener('click', (e)=> {
    models.forEach((model)=> {
      if(model.dataset.id == e.currentTarget.dataset.id) {
        model.classList.add('active')
      }else {
        model.classList.remove('active')
      }
    });

    cards.forEach(card => {
      console.log(card);
      if(`model-${e.currentTarget.dataset.id}` == card.id) {
         card.classList.remove('card-hide');
      }else {
        card.classList.add('card-hide');
      }

    });
  })
});