const modals = () => {
  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger= document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector),
          windows = document.querySelectorAll('[data-modal]'),
          scroll = calcScroll(),
          gift = document.querySelector('.fixed-gift');

    function closeWindows() {
      windows.forEach(item => {
        item.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      gift.style.marginRight = `0px`;
    }
    
    trigger.forEach(item => {
      item.addEventListener('click', (e) => {
        btnPressed = true;

        if (e.target) {
          e.preventDefault();
        }

        if (destroy) {
          item.remove();
        }

        modal.classList.add('animated', 'fadeIn');
        
        closeWindows();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
        gift.style.marginRight = `${scroll}px`;
      });
    });

    close.addEventListener('click', () => {
      closeWindows();
    });

    modal.addEventListener('click', (e) => {
      if (e.currentTarget === e.target) {
        closeWindows();
      }
    });

    document.addEventListener('keydown', (e) => {
      if(e.keyCode == 27) {
        closeWindows();
      }
    }); 
  }

  function showModalByTime(selector, time) {
    setTimeout(function() {
      let display;

      document.querySelectorAll('[data-modal]').forEach(item => {
        if (getComputedStyle(item).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${calcScroll()}px`;

        document.querySelector('.fixed-gift').style.marginRight = `${calcScroll()}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

      if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

  openByScroll('.fixed-gift');
  
  // showModalByTime('.popup-consultation', 60000);
};

export default modals;