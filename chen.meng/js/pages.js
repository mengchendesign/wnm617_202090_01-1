
// go look up async and await
const ListPage = async() => {
   let d = await query({type:'dogs_by_user_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#list-page .animallist").html(makeAnimalList(d.result))
}





const RecentPage = async() => { }

const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#user-profile-page .profile").html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
   let d = await query({type:'dog_by_id',params:[sessionStorage.animalId]});

   console.log(d);

   $("#animal-profile-page .profile").html(makeAnimalProfile(d.result))
}