// let video;

// function init() {
//     // function  called when the page is loaded
//     video = document.querySelector('#myVideo')

//     //  for initial value
//     video.width = window.innerWidth;
//     video.height = window.innerHeight;

//     //  for dealing with window resize
//     window.onresize = function () {
//         video.width = window.innerWidth;
//         video.height = window.innerHeight;
//     }
// }

function titleCase(title, minorWords) {
  let newArr = [];
  let tempWord = '';
  let titleArr = title.split(' ');
  let minorArr = minorWords.split(' ');


  for (i = 0; i < titleArr.length; i++) {
      for (j = 0; j < titleArr[i].length; j++) {
        // console.log(title.arr[i])
        
        tempWord = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1).toLowerCase();
         
      }
     console.log(tempWord);
     newArr.push(tempWord)
  }
  console.log(newArr);

}

titleCase('a clash of KINGS', 'a an the of')