import ApiCalls from "../api/ApiCalls.ts";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable.tsx";
import SideBar from "../components/SideBar.tsx";

const ContactUs = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    ApiCalls.findContactUs((onData: any) => {
      setRows(onData.data);
    });
  }, []);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },  {
      field: "email",
      headerName: "Email",
      width: 200,
    },  {
      field: "phone",
      headerName: "Phone",
      width: 200,
    },  {
      field: "message",
      headerName: "Message",
      width: 500,
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
