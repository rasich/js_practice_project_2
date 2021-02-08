const filter = () => {
  const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        // btnAll = menu.querySelector('.all'),
        // btnLovers = menu.querySelector('.lovers'),
        // btnChef = menu.querySelector('.chef'),
        // btnGirl = menu.querySelector('.girl'),
        // btnGuy = menu.querySelector('.guy'),
        // btnGrandmother = menu.querySelector('.grandmother'),
        // btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        // markLovers = wrapper.querySelectorAll('.lovers'),
        // markChef = wrapper.querySelectorAll('.chef'),
        // markGirl = wrapper.querySelectorAll('.girl'),
        // markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');
  
  // const typeFilter = () => {
  //   markAll.forEach(mark => {
  //     mark.style.display = 'none';
  //     mark.classList.remove('animated', 'fadeIn');
  //   });
    
  //   no.style.display = 'none';
  //   no.classList.remove('animated', 'fadeIn');

  //   if (markType) {
  //     markType.forEach(mark => {
  //       mark.style.display = 'block';
  //       mark.classList.add('animated', 'fadeIn');
  //     });
  //   } else {
  //     no.style.display = 'block';
  //     no.classList.add('animated', 'fadeIn');
  //   }
  // };

  // btnAll.addEventListener('click', () => {
  //   typeFilter(markAll);
  // });

  // btnLovers.addEventListener('click', () => {
  //   typeFilter(markLovers);
  // });

  // btnChef.addEventListener('click', () => {
  //   typeFilter(markChef);
  // });

  // btnGirl.addEventListener('click', () => {
  //   typeFilter(markGirl);
  // });

  // btnGuy.addEventListener('click', () => {
  //   typeFilter(markGuy);
  // });
  
  // btnGrandmother.addEventListener('click', () => {
  //   typeFilter();
  // });
    
  // btnGranddad.addEventListener('click', () => {
  //   typeFilter();
  // });
  
  // menu.addEventListener('click', (e) => {
  //   let target = e.target;

  //   if (target && target.tagName == "LI") {
  //       items.forEach(btn => btn.classList.remove('active'));
  //       target.classList.add('active');
  //   }
  // });
      
      
  items.forEach(item => {
    item.addEventListener('click', () => {
      let emptyMark = false;
      
      items.forEach(item => item.classList.remove('active'));
      item.classList.add('active');


      markAll.forEach(mark => {
        mark.style.display = 'none';
        mark.classList.remove('animated', 'fadeIn');
      });

      no.style.display = 'none';
      no.classList.remove('animated', 'fadeIn');
      
      markAll.forEach(mark => {
        if (mark.classList.contains(item.classList[0])) {
          mark.style.display = 'block';
          mark.classList.add('animated', 'fadeIn');
          no.style.display = 'none';
          no.classList.remove('animated', 'fadeIn');
          emptyMark = true;
        } else if (!emptyMark) {
          no.style.display = 'block';
          no.classList.add('animated', 'fadeIn');
        }
      });
    });
  });
};

export default filter;