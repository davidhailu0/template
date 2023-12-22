import { useEffect, useState } from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import OBI from "app/dto/OBI.model";
import PaginationTable from "./PaginationTable";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppTable = () => {
  const [tableDate, setTableData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(process.env.REACT_APP_SERVER);
      const json = await data.json();
      setTableData(json.map((js) => new OBI(...js)));
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Material", path: "/material" },
            { name: "Table" },
          ]}
        />
      </Box>

      <SimpleCard title="OBI Table">
        <PaginationTable data={tableDate} />
      </SimpleCard>
    </Container>
  );
};

export default AppTable;
