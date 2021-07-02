const resourceController = require("../controllers/resourceController");

const routes = async (app, opts) => {
  // Get all resources
  app.route({
    method: "GET",
    url: "/resources",
    handler: resourceController.getResources,
  });

  // Add new resource
  app.route({
    method: "POST",
    url: "/resources",
    handler: resourceController.addResource,
  });
};

module.exports = routes;
