const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefault, false);
    });
  });

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    item.closest('.file_upload').style.backgroundColor = '';
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
 
      console.log(input.files[0]);
      let dots;
      const arr = input.files[0].name.split('.');

      arr[0].length > 10 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 10) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;