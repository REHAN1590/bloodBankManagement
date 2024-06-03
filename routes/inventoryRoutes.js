const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {createInventoryController, getInventoryController, getHospitalController, getOrganisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController, getDonarsController} = require("../controllers/inventoryController");
const router = express.Router();
//routes
//add inventory || POST
router.post("/create-inventory",authMiddleware,createInventoryController);
//get donar records
router.get("/get-donar",authMiddleware,getDonarsController)
//get all blood records
router.get("/get-inventory",authMiddleware,getInventoryController);
//module.exports=router;
//get all Hospital blood records
router.post("/get-inventory-hospital",authMiddleware,getInventoryHospitalController);
//get recent 3 blood records
router.get("/get-recent-inventory",authMiddleware,getRecentInventoryController);
//get all HOSPITAL records
router.get("/get-hospitals",authMiddleware,getHospitalController);
//get all Organisation records
router.get("/get-organisation",authMiddleware,getOrganisationController);
//get all Organisation  for hospital records
router.get("/get-organisation-for-hospital",authMiddleware,getOrganisationForHospitalController);
module.exports=router;