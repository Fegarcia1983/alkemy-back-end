/*=====================================
=>          REQUIRED MODULES         <=
=====================================*/
const path = require('path');
const db = require(path.join(__dirname, `..`,`..`, `database`, `models`));

/*=====================================
=>          MODULE TO EXPORT         <=
=====================================*/
const apiCategories = {
   list: (req, res) => {
      db.Categories.findAll()
      .then((categories) => {
         let categoriesJSON = {
            meta: {
               status: 200,
            },
            data: categories,
         }
         res.json(categoriesJSON)
      })
      .catch(error => {
         let showError = {
            meta: {
               status: 404
            },
            data: {
               errorName: error.name,
               errorCode: error.parent.errno
            }
         }
         res.json(showError)
      });
   },

};

/*=====================================
=>          EXPORTING MODULE         <=
=====================================*/
module.exports = apiCategories;