'use strict';
var server= require('server');
//server.extend(module.superModule);

server.get('MyAssets', function(req, res, next){
let assetsFolder = dw.content.ContentMgr.getFolder('student_guide_folder');
if (!empty(assetsFolder)) {
   // getting all online articles in folder

   let assetsMap = assetsFolder.getOnlineContent();


   // If there are content assets in the folder
    if (assetsMap.size() > 0) {
   let assets = new dw.util.ArrayList();

   // Loop over the list of content assets and add their IDs to our ArrayList

   for (let i = 0; i < assetsMap.size(); ++i) {
      assets.add(assetsMap[i].getID());
   }


   // Render our template sending the list of Content Assets'IDs
   res.render('training/folder', {
      assets: assets

   });
   }
}

return next ();
});


// geting the assets folder and checking if it exists
 module.exports = server.exports();