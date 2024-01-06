import axios from "axios";
import { useEffect, useState } from "react";

import { Activity } from "../models/activityModels";

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN
const useApi = (
  url: string,
  before = null as null | string,
  after = null as null | string
) => {
  const [data, setData] = useState<null | Activity[]>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (before && after) {
          const response = await axios.get(
            `${url}?before=${before}&after=${after}`,
            {
              headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
              },
            }
          );
          setData(response.data);
        } else {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          });
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url, after, before]);


  return { data };
};

export default useApi;
