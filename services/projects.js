import store from "../data/projects.json";

const getProjects = () => {
  return store;
};

module.exports = { getProjects };
