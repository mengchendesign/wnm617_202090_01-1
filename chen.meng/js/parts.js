
const makeAnimalList = templater(o=>`
   <div class="animallist-item js-animal-jump" data-id="${o.id}">
      <div class="animallist-icon">
         <img src="${o.img}" alt="">
      </div>
      <div class="animallist-description">
         <div class="animallist-name">${o.name}</div>
         <div class="animallist-type"><strong>Type</strong> ${o.type}</div>
         <div class="animallist-breed"><strong>Breed</strong> ${o.breed}</div>
         <div class="animallist-age"><strong>Age</strong> ${o.age}</div>
         <div class="animallist-mood"><strong>Mood</strong> ${o.mood}</div>
      </div>
   </div>
   `);

const makeUserProfile = templater(o=>`
   <div class="user-profile-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="user-form">
   <h2>${o.name}</h2>
   <h3>@${o.username}</h3>
   <div class="user-button">
   <div><a href="#user-settings-page">Settings</a></div>
   </div>
   </div>
   `);

const makeAnimalProfile = templater(o=>`
   <div class="animal-profile-image">
      <img src="${o.img}" alt="">
   </div>
   <h2>${o.name}</h2>
   `);