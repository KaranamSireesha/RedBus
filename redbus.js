const passenger = document.querySelector('.passenger')
const count = document.getElementById("count");
const busType = document.getElementById("bus");
var numberofSeatsBooked=document.getElementById("numberofSeats");
var totalAmount = document.getElementById("total");
c=0;

let ticketPrice = +busType.value;

function buttonUpdate() {

  const button = document.createElement("button");
  button.textContent = "Proceed to Pay";

  let buttonContainer = document.getElementById("button-container");
  buttonContainer.innerHTML = ''; 
  buttonContainer.appendChild(button);

  buttonContainer.addEventListener('click', function(){
    // buttonContainer = alert("Your ticket booking is successfull. Happy Journey!");
    window.location.href = "./index2.html"
  })
}


busType.addEventListener('change', e => {
  ticketPrice = +e.target.value;
});

var image = document.querySelectorAll(".seat.seat-img.image");
for (let i = 0; i < image.length; i++) {
  image[i].onclick = function () {
    this.src = "./assets/MicrosoftTeams-image (3).png";
    c=c+1;
    updateDetails(c);
  };
}



var imageF = document.querySelectorAll(".seat.seat-img.imageF, .seat.seat-img1.imageF");
for (let i = 0; i < imageF.length; i++) {
  imageF[i].onclick = function () {
    this.src = "./assets/Seat-pink.png";
    c=c+1;
    updateDetails(c);
  };
}

function updateDetails(){
  numberofSeatsBooked.innerHTML=`no of seats booked ${c}`
  totalAmount.innerHTML = `${ticketPrice*c}`
  if(c>0){
    setTimeout( buttonUpdate,300);
  }
}

// Alert messages for unavailable seats

var booked = document.querySelectorAll(
  ".seat-img.unavailable, .seat-img1.unavailable"
);

for (let i = 0; i < booked.length; i++) {
  booked[i].addEventListener("click", function () {
    booked[i] = alert("This seat is reserved!");
  });
}
