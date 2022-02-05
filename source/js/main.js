import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";
import initAccordion from "./modules/init-accordion";
import initMenu from "./modules/init-menu";

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initAccordion();
initMenu();
