import { closeAllDialogs } from "./dialogs";
import { ingest } from "../ingest";

let c64;

export function initLoaderDialog(nascentC64) {
  c64 = nascentC64;

}

function launch(filename, bytes) {
  ingest(c64, filename, bytes);
  closeAllDialogs();
}
