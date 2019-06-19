import { createStore } from "redux";
import program from "commander";

import { actions } from "./actions";
import { reducer } from "./reducer";

// Create our store
const store = createStore(reducer);

// Helper
const list = val => val.split(",");

program
  .command("action")
  .option("-t, --type <ActionType>", "Set Action Type")
  .option(
    "-i, --inputs <ActionInputParameters>",
    "Set Action Input Parameters",
    list
  )
  .action(function(action) {
    console.log("action type:", action.type);
    console.log("action inputs:", action.inputs);
    console.log("========================");
    store.dispatch(actions[action.type].apply(this, action.inputs));
  });

program.parse(process.argv);

// final stout
const storeState = JSON.stringify(store.getState(), null, 2);
console.log(storeState);

export default program;
