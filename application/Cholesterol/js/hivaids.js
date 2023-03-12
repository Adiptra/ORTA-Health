// GENRE 
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener('click', function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }
    }
  })
}

// const btns = document.querySelectorAll('.buttons button ');
// const contents = document.querySelectorAll('.detail-definition-content article');

// for (let i = 1; i < btns.length; i++) {
//   btns[i].addEventListener('click', filterContent);
// }

// function setActiveBtn(e) {
//   btns.forEach(btn => {
//     btn.classList.remove('btn-clicked');
//   });

//   e.target.classList.add('btn-clicked');
// }

// function filterContent(e) {
//   setActiveBtn(e);

//   contents.forEach(content => {
//     content.classList.remove('content-shrink');
//     content.classList.add('content-expand');

//     const contentType = parseInt(content.dataset.content);
//     const btnType = parseInt(e.target.dataset.btn);

//     if (contentType !== btnType) {
//       content.classList.remove('.content-expand');
//       content.classList.add('content-shrink');
//     }
//   })
// }

// btns[0].addEventListener('click', (e) => {
//   setActiveBtn(e);
//   contents.forEach(content => {
//     content.classList.remove('content-shrink');
//     content.classList.add('content-expanded');
//   })
// })