
// go look up async and await
const ListPage = async() => {
   let d = await query({type:'dogs_by_user_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#list-page .animallist").html(makeAnimalList(d.result))
}





const RecentPage = async() => {
   let d = await query({type:'recent_locations',params:[sessionStorage.userId]});

   console.log(d)

   let valid_dogs = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);

   let map_el = await makeMap("#recent-page .map");

   makeMarkers(map_el,valid_dogs)
}


const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#user-profile-page .profile").html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
   query({type:'dog_by_id',params:[sessionStorage.animalId]})
   .then(d=>{
      console.log(d);
      $("#animal-profile-page .profile")
         .html(makeAnimalProfile(d.result))
   });

   query({type:'locations_by_dog_id',params:[sessionStorage.animalId]})
   .then(d=>{
      console.log(d);
      makeMap("#animal-profile-page .map").then(map_el=>{
         makeMarkers(map_el,d.result)
      });
   });


}