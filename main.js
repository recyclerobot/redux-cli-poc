import { createStore } from "redux";
import program from "commander";

import { actions } from "./actions";
import { reducer } from "./reducer";

// Create our store
const store = createStore(reducer);

// Helper
const list = val => val.split(",");

program.option("-s, --log-store", "log complete redux store");

program
  .command("action")
  .option("-t, --type <ActionType>", "Set Action Type")
  .option(
    "-i, --inputs <ActionInputParameters>",
    "Set Action Input Parameters",
    list
  )
  .action(function(action) {
    const appliedAction = actions[action.type].apply(this, action.inputs);
    console.log("⚡️ action:");
    console.log(JSON.stringify(appliedAction, null, 2));
    store.dispatch(actions[action.type].apply(this, action.inputs));
  });

program.parse(process.argv);

if (program.logStore) {
  console.log("📕 store:");
  const storeState = JSON.stringify(store.getState(), null, 2);
  console.log(storeState);
}

export default program;
