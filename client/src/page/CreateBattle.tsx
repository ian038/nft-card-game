import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return <div>CreateBattle</div>;
};

export default PageHOC(
  CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>Create your own battle and wait for other players to join you</>
);
