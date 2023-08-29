import ApiCalls from "./api/ApiCalls.ts";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "./components/DataTable.tsx";
import SideBar from "./components/SideBar.tsx";

const ContactUs = () => {

  const [rows, setRows] = useState([]);
  
  useEffect(() => {
    ApiCalls.findContactUs((onData: any) => {
      setRows(onData.data);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "flightName",
      headerName: "Flight name",
      width: 150,
    },
  ];

  return (
    <>
      <SideBar title="ContactUs" />
      <DataTable
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
        searchable={true}
      />
    </>
  );
};

export default ContactUs;
