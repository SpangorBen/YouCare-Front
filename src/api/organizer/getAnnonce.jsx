import { useEffect } from "react";
import axios from "../../axios";

const Annonce = () => {
  const getAnnonce = async () => {
    try {
      const response = await axios.get("/annonce");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAnnonce();
  }, []);
  return null;
};

export default Annonce;
