let formSubm = document.querySelector("#submitBtn");

formSubm.addEventListener("click", SubmitEventFunc, false);

let counter =0;
function SubmitEventFunc(event) {
    counter++;
   document.getElementById("formStatus").innerText= "Form Submitted Without refresh " +counter + " times";
  event.preventDefault();
 

}

formSubm.addEventListener('mouseover', function(event) {
    document.getElementById("userMouseStatus").innerText="Mouse pointer is hovered on the submit button";
    console.log('Mouse over event triggered!');
});

formSubm.addEventListener('mouseout', function(event) {
    document.getElementById("userMouseStatus").innerText="Mouse pointer is away from the submit button";
    console.log('Mouse over event triggered!');
});


document.addEventListener('keydown', (event) => {
     document.getElementById('keyStat').textContent = `Last key pressed : ${event.key}`;
});