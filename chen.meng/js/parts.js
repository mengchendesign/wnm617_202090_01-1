
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
<div class="animal-profile">
   <div class="animal-profile-image">
      <img src="${o.img}" alt="">
   </div>
   <h2>${o.name}</h2>
   <div>Type ${o.type}</div>
   <div>Breed ${o.breed}</div>
   <div><p>${o.description}</p></div>
</div>`);


const makeAnimalPopup = o => `
<div class="display-flex animal-popup" style="flex-wrap:wrap">
   <div class="flex-none">
      <div class="animal-image">
         <img src="${o.img}" alt="">
      </div>
   </div>
   <div class="flex-none animal-popup-description">
      <h2>${o.name}</h2>
      <div>${o.type}</div>
      <div>${o.breed}</div>
      <div>${o.age}</div>
      <div>${o.mood}</div>
   </div>
   <div class="form-button js-animal-jump" data-id="${o.animal_id}" style="width:100%">Visit</div>
</div>
`;





const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}

const makeUserProfileUpdateForm = o => `
${FormControl({
   namespace:'user-edit',
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type your user name',
   value:o.username
})}
${FormControl({
   namespace:'user-edit',
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type your full name',
   value:o.name
})}
${FormControl({
   namespace:'user-edit',
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type your email',
   value:o.email
})}
`;




const makeAnimalProfileUpdateForm = o => `
<!--<div class="user-profile-image">
   <img src="${o.img}">
</div>-->
${FormControl({
   namespace:'animal-edit',
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type the animal name',
   value:o.name
})}
${FormControl({
   namespace:'animal-edit',
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type the type',
   value:o.type
})}
${FormControl({
   namespace:'animal-edit',
   name:'breed',
   displayname:'Breed',
   type:'text',
   placeholder:'Type the breed',
   value:o.breed
})}
<div class="form-control">
   <label for="animal-edit-description" class="form-label">Description</label>
   <textarea id="animal-edit-description" class="form-input" data-role="none" placeholder="Type a description" style="height:6em">${o.description}</textarea>
</div>
`;