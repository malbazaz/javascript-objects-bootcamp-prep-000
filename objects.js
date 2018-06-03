var playlist
<<<<<<< HEAD
playlist= Object.assign({},{shakira:"BOOM"})
=======
playlist= Object.assign({}, {shakira:"BoomBoom"})
>>>>>>> 16d3886125eefde4141e51a115ab4af335cf5fcc
console.log(playlist)
var artistName
var songTitle

<<<<<<< HEAD

function updatePlaylist(playlist,artistName,songTitle){
Object.assign(playlist,{[artistName]:songTitle})
  return playlist
}
function removeFromPlaylist(playlist,artistName){
    delete playlist[artistName]
  return playlist
=======
function updatePlaylist(playlist,artistName,songTitle){
var playlist1
playlist1 = Object.assign({},playlist,{[artistName]:songTitle})
  return playlist1
}
function removeFromPlaylist(playlist,artistName){
var playlist1
playlist1= delete playlist.artistName
  return playlist1
>>>>>>> 16d3886125eefde4141e51a115ab4af335cf5fcc
}