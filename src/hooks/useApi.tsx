import axios from "axios";
import { useEffect, useState } from "react";

import { Activity } from "../models/activityModels";

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
                Authorization: `Bearer 38dd14ec6ecdf59367529209653d160633ad3286`,
              },
            }
          );
          setData(response.data);
        } else {
          const response = await axios.get(url, {
            headers: {
              Authorization: `Bearer 38dd14ec6ecdf59367529209653d160633ad3286`,
            },
          });
          setData(response.data);
        }
      } catch (error) {
        console.log(error);
        setData([
          {
            start_date_local: "2024-01-04T22:00:00Z",
            elapsed_time: 6000,
            id: 252525123222,
            name: "hola un placer competir",
            total_elevation_gain: 40,
            distance: 8522,
          },
          {
            start_date_local: "2024-01-04T17:00:00Z",
            elapsed_time: 8000,
            id: 252525456221322,
            name: "hola un placer competir 2",
            total_elevation_gain: 11,
            distance: 8000,
          },
          {
            start_date_local: "2024-01-04T07:00:00Z",
            elapsed_time: 9000,
            id: 252525456222123,
            name: "hola un placer competir 3",
            total_elevation_gain: 10,
            distance: 7002,
          },
          {
            start_date_local: "2023-12-22T15:00:00Z",
            elapsed_time: 7000,
            id: 252525221235642,
            name: "hola un placer competir 4",
            total_elevation_gain: 121,
            distance: 6500,
          },
        ]);
      }
    };

    fetchData();
  }, [url, after, before]);


  return { data };
};

export default useApi;
