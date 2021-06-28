const client = require("../db/db_config");

const getResources = async (req, res) => {
  const allResources = await client.query(
    `SELECT * FROM devsources_db.resources`
  );

  res.send({ allResources });
};

const addResource = async (req, res) => {
  try {
    const newResource = await client.insert({
      table: "resources",
      records: [
        {
          name: req.body.name,
          description: req.body.description,
          link: req.body.link,
        },
      ],
    });

    res.send({ newResource });
  } catch (error) {}
  res.send({ error });
};

module.exports = {
  getResources,
  addResource,
};
