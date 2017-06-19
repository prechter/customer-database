// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
// (function () {
//   'use strict';
  fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Rut-roh :( ' + response.status);
          return;
        }
        response.json().then(function(data) {
          let customers = data.results;

          function renderCustomer(){
            return `
                ${customers.map(customer => `
                    <div class="customer">
                       <img src="${customer.picture.large}" alt="user">
                       <h3>${customer.name.first} ${customer.name.last}</h3>
                       <span>${customer.email}</span>
                       <ul>
                         <li>${customer.location.street}</li>
                         <li>${customer.location.city}, ${customer.location.state} ${customer.location.postcode}</li>
                         <li>${customer.location.phone}</li>
                       </ul>
                     </div>`).join('')}
              `;
           }

           let markup = `<header>
                         INTERNAL COMPANY DIRECTORY
                         </header>
                         <div id="wrapper">
                          ${renderCustomer(customers)}
                         </div>`

          document.body.innerHTML = markup;
        })
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    })
});

// Different approach below
//
//
// fetch('https://randomuser.me/api/?results=12&nat=us')
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Rut-roh :( ' + response.status);
//         return;
//       }
//       response.json().then(function(data) {
//
//         let photo = data.results[i].picture.large;
//         let name = data.results[i].name.first + customer.name.last;
//         let email = data.results[i].email;
//         let address1 = data.results[i].location.street
//         let address2 = data.results[i].location.state + data.results[i].location.city + data.results[i].location.postcode;
//         let phone = data.results[i].phone;
//
//
//         let markup = `
//         <h1>INTERNAL COMPANY DIRECTORY</h1>
//         <div id="wrapper">
//           <div class="customer">
//             <img src="${photo}" alt="user">
//             <h3>${name}</h3>
//             <hr>
//             <span>${email}</span>
//             <ul>
//               <li>${address1}</li>
//               <li>${address2}</li><br>
//               <li>${phone}</li>
//             </ul>
//           </div>
//         </div>`
//
//         document.body.innerHTML = markup;
//       })
//   .catch(function(err) {
//   console.log('Fetch Error :-S', err);
//   })
// });
