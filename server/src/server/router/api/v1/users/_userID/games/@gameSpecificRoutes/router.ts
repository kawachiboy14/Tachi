// This file is special. These routes are "gptSpecific". They only apply to certain games
// and playtypes. This is for things like - say - eamusement exports, which only make sense
// for certain games.

import bmsRouter from "./bms/router";
import iidxRouter from "./iidx/router";
import jubeatRouter from "./jubeat/router";
import { Router } from "express";

const router: Router = Router({ mergeParams: true });

router.use("/bms", bmsRouter);
router.use("/iidx", iidxRouter);
router.use("/jubeat", jubeatRouter);

export default router;
