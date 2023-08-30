import ApiCalls from "../api/ApiCalls.ts";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable.tsx";
import SideBar from "../components/SideBar.tsx";
import {FormatTime} from "../utils/FormatDate.ts";

const Users = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        ApiCalls.findALlUsers((onData: any) => {
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
        },
        {
            field: "created_at",
            headerName: "Created At",
            width: 200,
            valueFormatter: (params) => FormatTime(params.value)
        },
    ];

    return (
        <>
            <SideBar title="Users" />
            <DataTable
                columns={columns}
                rows={rows}
                getRowId={(row) => row.id}
                searchable={true}
            />
        </>
    );
};

export default Users;
