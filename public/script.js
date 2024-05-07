// document.getElementById('myForm').addEventListener('submit', function(event) {
//     // Prevent the form from submitting normally
//     event.preventDefault();
  
//     // Get the form data
//     const formData = new FormData(event.target);
  
//     // Send the POST request
//     fetch('/ratings', {
//       method: 'POST',
//       body: formData
//     })
//    .then(response => response.json())
//    .then(data => {
//       console.log('Success:', data);
//     })
//    .catch((error) => {
//       console.error('Error:', error);
//     });
//   });