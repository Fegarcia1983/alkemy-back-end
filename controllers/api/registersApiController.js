/*=====================================
=>          REQUIRED MODULES         <=
=====================================*/
const { promiseImpl } = require('ejs');
const path = require('path');
const db = require(path.join(__dirname, `..`,`..`, `database`, `models`));

/*=====================================
=>          MODULE TO EXPORT         <=
=====================================*/
const apiRegisters = {
   list: (req, res) => {
      let lim = req.query.limit == undefined ? 5 : Number(req.query.limit);
      let off = req.query.start == undefined ? 0 : Number(req.query.start);
      let ord = req.query.sort == undefined ? `DESC` : Number(req.query.sort);
      db.Registers.findAndCountAll({
         include: [{
            association: `categories`
         }],
         order: [
            [`date`, ord]
         ],
         offset: off,
         limit: lim
      })
      .then((registers) => {
         let totalAmount = 0;
         registers.rows.forEach(row => {
            if(row.dataValues.in_out) {
               totalAmount += row.dataValues.mount
            }else{
               totalAmount -= row.dataValues.mount
            }
         })
         let registersJSON = {
            meta: {
               status: 200,
               elements_in_page: lim,
               pagination: {
                  first_page: `http://localhost:3000/api/registers?start=0`,
                  next_page: registers.count > (off + lim) ? `http://localhost:3000/api/registers?start=` + (off + lim) : null,
                  prev_page: off == 0 ? null : `http://localhost:3000/api/registers?start=` + (off - lim),
                  last_page: registers.count % lim <= 5 ? `http://localhost:3000/api/registers?start=` + (Math.round(registers.count / lim, 0) * lim) : `http://localhost:3000/api/registers?start=` + ((Math.round(registers.count / lim, 0) + 1) * lim)
               }
            },
            data: registers,
            total: totalAmount
         }
         res.json(registersJSON)
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

   create: (req, res) => {
      db.Registers.create({
         in_out: req.body.in_out,
         date: req.body.date,
         concept: req.body.concept,
         mount: req.body.mount,
         category_id: req.body.category_id
      })
      .then(created => {
         let createdJSON = {
            meta: {
               status: 201
            },
            data: created
         }
         res.json(createdJSON);
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

   update: (req, res) => {
     res.status(200).json({ id: 1, name: 'PUT' });
   },

   delete: async (req, res) => {
      let registerToDelete = await db.Registers.findAll({
         where: {
            id: req.params.id
         }
      });
      let deleteConfirm = db.Registers.destroy({
         where: {
            id: req.params.id
         }
      })
      Promise.all([registerToDelete, deleteConfirm])
      .then(([registerToDelete, deleteConfirm]) => {
         if(deleteConfirm == 1){
            let deletedJSON = {
               meta: {
                  status: 200
               },
               data: registerToDelete
            }
            res.json(deletedJSON);
         } else{
            let deletedJSON = {
               meta: {
                  status: 500
               },
               data: registerToDelete
            }
            res.json(deletedJSON);
         }
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
   }

};

/*=====================================
=>          EXPORTING MODULE         <=
=====================================*/
module.exports = apiRegisters;