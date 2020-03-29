import { addAsyncStatus } from "./utils/statusupdater.js";

import { hittrain,swordTrain, hammerTrain } from "./bots/train.js";
import { chop } from  "./bots/chop.js";
import { fish } from "./bots/fisher.js";
import { autorepair } from "./utils/repair.js";
import { assa } from "./bots/sin.js";
import { dye } from "./bots/dye.js";
import { knit } from "./bots/knit.js";

import { textMods } from "./UImods/coordsUI.js";
import { uwdetect } from "./UImods/uw.js";
import { heal } from "./bots/heal.js";

export var trainbot = addAsyncStatus("hittrain",hittrain);
export var swordbot = addAsyncStatus("swordTrain",swordTrain);
export var hammerbot = addAsyncStatus("hammerTrain",hammerTrain);
export var chopbot = addAsyncStatus("chop",chop);
export var fishbot = addAsyncStatus("fish",fish);
export var repairbot = addAsyncStatus("autorepair",autorepair);
export var sinbot = addAsyncStatus("assa",assa);
export var dyebot = addAsyncStatus("dye",dye);
export var knitbot = addAsyncStatus("knit",knit);
export var healbot = addAsyncStatus("heal",heal);
export var uimod1 = addAsyncStatus("textmod",textMods);
export var uw = addAsyncStatus("uwdetect",uwdetect);