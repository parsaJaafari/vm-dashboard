import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CardComponent from "../../../components/Card";
import { getSystemTypes } from "../../../services/api/systemTypesApi";
import { useDispatch, useSelector } from "react-redux";
import { addSystemType } from "../../../features/vmSlice";

const InstanceLocationStep = () => {
  const [systems, setSystems] = useState([]);
  const dispatch = useDispatch();
  const selectedSystemType = useSelector((state) => state.vm.systemType)


  useEffect(() => {
    const fetchSystems = async () => {
      const data = await getSystemTypes();
      setSystems(data);
    };
    fetchSystems();
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
      {systems.map((system) => {
        return (
          <CardComponent selected={selectedSystemType.id === system.id} onChange={() => dispatch(addSystemType(system))}>
            <CardMedia
              component="img"
              height="300"
              image={system.url}
              alt={system.title}
            />
            <CardContent>
              <Typography gutterBottom variant="body2" component="div">
                {system.title}
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
