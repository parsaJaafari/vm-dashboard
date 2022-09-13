import * as React from "react";
import Card from "@mui/material/Card";

const CardComponent = ({ children, selected, onChange }) => {
  return (
    <Card onClick={onChange}  sx={{ width: 300, display: "flex", alignItems: "center", flexDirection: 'column', border: selected? "2px solid blue": 'none' }}>
      {children}
    </Card>
  );
};

export default CardComponent;
