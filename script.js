function removeTransition(f){
    if (f.propertyName !== 'transform') return;
    f.target.classList.remove('playing');
  }

  function playMusic(f) {
    const knopka = document.querySelector(`audio[data-key = '${f.keyCode}']`); //Хватаем кнопки все.
    const igra = document.querySelector(`div[data-key = '${f.keyCode}']`); //Хватаем весь контейнер с кнопками monkeyPatch :(
    if (!knopka) return; //Если нажата другая кнопка, пропуск и возврат ф-ции.

    igra.classList.add('playing'); //Добавляем стиль нажатия при нажатии на кнопку.
    knopka.currentTime = 0; //Создает допуск к повторному проигрыванию мелодии.
    knopka.play(); //запускает проигрывание медиа с помощью встроенного метода play.
  }

  const keys = Array.from(document.querySelectorAll('.key')); //Переменная со всем массивом кнопок внутри.
  keys.forEach(igra => igra.addEventListener('transitionend', removeTransition)); //Стрелочная функция для каждого элемента(кнопки).
  window.addEventListener('keydown', playMusic); //Добавление слушателя на нажатие любой кнопки с ызовом функции playMusic, в которой 
                                                 //прописана команда проигрывания мелодии