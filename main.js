// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
// (function () {
//   'use strict';
  fetch('https://randomuser.me/api/?results=12&nat=us')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('You done did it this time...' + response.status);
          return;
        }
        response.json().then(function(data) {
          console.log('Here is the data:', data);

        // var totalResults = data.results[i];
        //
        // for (var i = 0; i < totalResults; i++){

          // let picture = data.results[i].picture.large;
          // let nameFirst = data.results[i].name.first;
          // let nameLast = data.results[i].name.last;
          // let email = data.results[i].email;
          // let locStreet = data.results[i].location.street;
          // let locCity = data.results[i].location.city;
          // let locState = data.results[i].location.state;
          // let locZip = data.results[i].location.postcode;
          // let phone = data.results[i].phone;
          let customers = data.results;

          function renderCustomer(){
            return `
              <div class="directory">
                ${customers.map(customer => `
                    <div class="customers">
                       <img src="${customer.picture.large}" alt="user" height="280" width="280">
                       <h3>${customer.name.first} ${customer.name.last}</h3>
                       <hr>
                       <span>${customer.email}</span>
                       <ul>
                         <li>${customer.location.street} ${customer.location.city}</li>
                         <li>${customer.location.state} ${customer.location.postcode}</li>
                       </ul>
                     </div>`).join('')}
              </div>
            `;
           }

           let markup = `<header>
                         INTERNAL COMPANY DIRECTORY
                         <header>
                         ${renderCustomer(customers)}`

          document.body.innerHTML = markup;
        })
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    })
});
