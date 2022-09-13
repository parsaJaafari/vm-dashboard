import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CardComponent from "../../../components/Card";
import { getCountries } from "../../../services/api/countriesApi";
import {useDispatch, useSelector} from "react-redux";
import {addLocation} from "../../../features/vmSlice"


const InstanceLocationStep = () => {
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();
  const selectedLocation = useSelector((state) => state.vm.location)

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getCountries();
      setLocations(data);
    };
    fetchCountries();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {locations.map((location) => {
        return (
          <CardComponent selected={selectedLocation.id === location.id} onChange={() => dispatch(addLocation(location))}>
            <CardMedia
              component="img"
              height="300"
              image={location.url}
              alt={location.title}
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                {location.title}
              </Typography>
            </CardContent>
          </CardComponent>
        );
      })}
      ;
    </Box>
  );
};

export default InstanceLocationStep;
