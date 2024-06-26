// This file is special. These routes are "gptSpecific". They only apply to certain games
// and playtypes. This is for things like - say - custom BMS tables.

import bmsRouter from "./bms/router";
import iidxRouter from "./iidx/router";
import { Router } from "express";

const router: Router = Router({ mergeParams: true });

router.use("/bms", bmsRouter);
router.use("/iidx", iidxRouter);

export default router;
