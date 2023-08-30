import ApiCalls from "../api/ApiCalls.ts";
import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable.tsx";
import SideBar from "../components/SideBar.tsx";
import {FormatTime} from "../utils/FormatDate.ts";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import {toast} from "react-hot-toast";


const ContactUs = () => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        ApiCalls.findAllJobsApplications((onData: any) => {
            setRows(onData.data);
        });
    }, []);
    const handleDeleteClick = async (row:any) => {
        try {

            ApiCalls.UpDataJobsApplications(({ id: row.id, is_deleted: true }),( )=>{
                toast.error("Deleted");
                setRows((prevRows) => prevRows.filter((r:any) => r.id !== row.id));
            } );


        } catch (error:any) {

            toast.error(error);
        }
    };

    const handleUpdateClick =(row:any) => {
            ApiCalls.UpDataJobsApplications(({ id: row.id, is_approved: true }),()=>{
                console.log(row.id)
                toast.success("Jobs Applications Approved");
            });
    }

    const columns: GridColDef[] = [
        {
            field: "first_name",
            headerName: "Name",
            width: 150,
        },  {
            field: "last_name",
            headerName: "Email",
            width: 200,
        },  {
            field: "mobile_no",
            headerName: "Phone",
            width: 200,
        },  {
            field: "email",
            headerName: "Email",
            width: 200,
        },{
            field: "submitted_at",
            headerName: "Submitted At",
            width: 200,
            valueFormatter: (params) => FormatTime(params.value)
        },
        {
            field: "years_of_experience",
            headerName: "Years Of Experience",
            width: 200,
        },{
            field: "price",
            headerName: "Price",
            width: 200,
        },{
            field: "description",
            headerName: "Description",
            width: 500,
        },{
            field: "additional_info",
            headerName: "Additional Info",
            width: 500,
        },{
            field: "payment",
            headerName: "Payment",
            width: 200,
        },{
            field: "deleteButton",
            headerName: "Delete",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(params.row)}
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },{
            field: "updateButton",
            headerName: "Update",
            width: 100,
            sortable: false,
            filterable: false,
            renderCell: (params) => (
                <IconButton
                    color="primary"
                    onClick={() => handleUpdateClick(params.row)}
                >
                    <CreditScoreIcon />
                </IconButton>
            ),
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
