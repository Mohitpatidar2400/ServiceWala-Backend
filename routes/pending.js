import express from "express";
import { getPending,setPending,deletePending } from "../controllers/pending.js";
import { isAuthenticated } from "../middlewares/customer.js";
import { isSAuthenticated } from "../middlewares/service_provider.js";

const router = express.Router();

router.post("/post_pending",isAuthenticated, setPending);
router.get("/get_pending",isSAuthenticated, getPending);
router.delete("/delete_pending",isSAuthenticated, deletePending);

export default router;
