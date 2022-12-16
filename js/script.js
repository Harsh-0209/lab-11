      // creating ul, input and button
      const li = document.querySelector('ul');
      const a = document.querySelector('input');
      const button = document.querySelector('button');

      //as mentioned in question adding button which which works on clickand assigning input value empty
      button.addEventListener('click', () => {
        const item = a.value;
        a.value = '';

        //creating li span and button
        const listitem = document.createElement('li');
        const y = document.createElement('span');
        const z = document.createElement('button');

        // appending span and button as child
        listitem.appendChild(y);
        y.textContent = item;
        x.appendChild(z);

        z.textContent = 'Delete';
        list.appendChild(x);

        z.addEventListener('click', () => {
          li.removeChild(x);
        });

        a.focus();
      });
    