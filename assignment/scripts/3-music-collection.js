console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

  //  *** SOLUTION ***

  // 1. create an empty array, " myCollection";

  const myCollection = [];

  // 2. Create addToCollection function;
    
  function addToCollection(Collection, title, artist, yearPublished){
    const newAlbum ={
      title :title,
      artist:artist,
     yearPublished:yearPublished
    };
    Collection.push(newAlbum);
    return newAlbum;
    
  }
  console.log(myCollection) // Still an empty array 

  // 3.Using and testing the addToCollection function;

  console.log(addToCollection(myCollection,'Thriller', 'Michael Jackson', 1982 ));

  console.log(myCollection) // Contains one element which is an object at this point!
   
  console.log('*****') // console divider

  console.log(addToCollection(myCollection,'Hotel California', 'Eagles', 1976 ));
  console.log(addToCollection(myCollection,'Jecel', 'Suldan Seraar', 2020 ));
  console.log(addToCollection(myCollection,'Dogoney', 'Hassan Samtar', 2023 ));
  console.log(addToCollection(myCollection,'Liin Macan', 'Ahmed Xariir', 2021 ));
  console.log(addToCollection(myCollection,'Yawaye', 'Farhiya',2020));

  console.log('*****') // console divider

  console.log(myCollection); // contains 6 elements of 'objects'
  console.log(myCollection[1].artist); // Eagles

  console.log('*****') // console divider

  
  // Create ShowCollection function
   function showCollection(collection){
    for(const album of collection){
      console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
    }
   }

  //  Test the ShowCollection function
  console.log('Showing the entire collection:');
  showCollection(myCollection);

  // Create the findByArtist function
  function findByArtist(collection, artist){
    function isArtistMatch (album){
      return album.artist.toLowerCase() === artist.toLowerCase();
    }
    return collection.filter(isArtistMatch);
  }

  // Test the findByArtist function
  console.log('Finding albums by Michael Jackson:');
  console.log(findByArtist(myCollection, 'Michael Jackson'))
  // Test findArtist with multiple matches?
  // Added another album first;

  addToCollection(myCollection, 'Bad', 'Michael jackson', 1987);
  
  //Check
  console.log('Finding all Michael Jackson albums:');
  console.log(findByArtist(myCollection, 'Michael Jackson'));











// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
