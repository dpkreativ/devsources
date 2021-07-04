import React, { useEffect, useState } from "react";
import axios from "axios";
import ResourceCard from "../card/ResourceCard";

const GetResources = () => {
  const [resources, setResources] = useState([]);

  const getResources = async () => {
    const data = await axios
      .get(`https://devsources-api.herokuapp.com/resources`)
      .then((res) => res.data.allResources.data)
      .catch((err) => console.log(err));
    setResources(data);
  };

  useEffect(() => {
    getResources();
  }, []);
  return (
    <div>
      {resources.map((resource) => {
        return (
          <ResourceCard
            key={resource.id}
            title={resource.name}
            description={resource.description}
            link={resource.link}
          />
        );
      })}
    </div>
  );
};

export default GetResources;
