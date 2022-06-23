import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, u are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, u are logged in and u can delete ur account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, u are logged in and u can delete all accounts");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", verifyAdmin, getAllUsers);

export default router;
