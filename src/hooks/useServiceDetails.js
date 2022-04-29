import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) => {
  const [service, setService] = useState({});
  const url = `https://powerful-forest-43309.herokuapp.com/service/${serviceId}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  return [service, setService];
};
export default useServiceDetails;
