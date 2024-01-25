import Production from "./production.js";
import Development from "./development.js";

export default class Environment {
  constructor(environment) {
    this.env = environment;
  }
}

export const production = new Environment(Production);
export const development = new Environment(Development);
export const factory = (env) => {
  let returnEnv;
  switch (env) {
    case "dev":
      returnEnv = development.env;
      break;
    case "prod":
      returnEnv = production.env;
      break;
  }
  return returnEnv;
};
