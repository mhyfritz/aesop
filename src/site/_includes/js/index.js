import { type } from "@camwiegert/typical";
import initDarkMode from "./darkMode";
import initCodeLigatures from "./codeLigatures";

initDarkMode();
initCodeLigatures();

window.type = type;
