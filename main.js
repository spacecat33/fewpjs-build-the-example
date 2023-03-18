// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let modal = document.getElementById('modal')
modal.setAttribute("class", "hidden")

// make event listener for heart click

let heartButtonArray = document.querySelectorAll(".like-glyph")

  heartButtonArray.forEach(heartButton => heartButton.addEventListener("click", (event) => {
    mimicServerCall("not URL")
    .then(res => {
      console.log(res)
      if (heartButton.innerText === EMPTY_HEART) {
        heartButton.innerText = FULL_HEART
        heartButton.className = "activated-heart"
      } else {
        heartButton.innerText = EMPTY_HEART
        heartButton.className = ""
        console.log(heartButton.className)
      } 
    })
    .catch(reject => {
      console.log(reject)
      modal.setAttribute("class", "")
      setInterval( () => {modal.setAttribute("class", "hidden")}, 3000)
      if (heartButton.innerText === FULL_HEART) {
        heartButton.innerText = EMPTY_HEART
        heartButton.className = ""
      } else {
        heartButton.innerText = FULL_HEART
        heartButton.className = "activated-heart"
      }
    })
  }))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
