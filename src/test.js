import React from "react";
import Infos from "./example_data.json";

const Test = () => {
  const info = Infos.map((item) => (
    <div key={item.id}>
      <p>{item.name}</p>
      <p>{item.categories}</p>
      <img src={item.profile_image_url} width="100" />
      <ul>
        {item.images.map((images, index) => (
          <li key={index} style={{display: "inline", marginLeft: "2px"}}>
            <img src={images} width="50" />
          </li>
        ))}
      </ul>
      <p>Operationtime</p>
      {item.operation_time.map((item, index) => (
        <ul key={index}>
          <li style={{display: "inline", marginLeft: "2px"}}>
            {`${item.day}`}
            {item.time_open === "closed"
              ? " : Closed"
              : `Open : ${item.time_open} -  ${item.time_close}`}
          </li>
        </ul>
      ))}
      <p>Address : {item.address}</p>
      ==================================
    </div>
  ));

  return <div>{info}</div>;
};

export default Test;
