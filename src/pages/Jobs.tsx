import {useEffect, useState} from "react";
import ApiCalls from "../api/ApiCalls.ts";
import {GridColDef} from "@mui/x-data-grid";
import SideBar from "../components/SideBar.tsx";
import DataTable from "../components/DataTable.tsx";
import {FormatDate, FormatTime} from "../utils/FormatDate.ts";
import IconButton from "@mui/material/IconButton";
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from "react-hot-toast";




const Jobs = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    ApiCalls.findAllJobs((onData: any) => {
      setRows(onData.data);
    });
  }, []);
  const handleDeleteClick = async (row:any) => {
    try {

       ApiCalls.UpDataJobs(({ id: row.id, is_deleted: true }),( )=>{
         toast.error("Deleted");
        setRows((prevRows) => prevRows.filter((r:any) => r.id !== row.id));
      } );



    } catch (error:any) {

      toast.error(error);
    }
  };

  const handleUpdateClick = async (row:any) => {
    try {

       ApiCalls.UpDataJobs(({ id: row.id, is_approved: true }),()=>{
         toast.success("Job Approved");

      });


    } catch (error:any) {

      toast.error(error);    }
  };

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "Job Title",
      width: 150,
    },{
      field: "category",
      headerName: "Category",
      width: 200,
    },{
      field: "description",
      headerName: "Description",
      width: 150,
    },{
      field: "full_description",
      headerName: "Full Description",
      width: 150,
    },{
      field: "created_at",
      headerName: "Created At",
      width: 200,
      valueFormatter: (params) => FormatTime(params.value)
    },{
      field: "start_date",
      headerName: "Start Date",
      width: 150,
      valueFormatter: (params) => FormatDate(params.value)
    },{
      field: "end_date",
      headerName: "End Date",
      width: 150,
      valueFormatter: (params) => FormatDate(params.value)
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

  return <>
    <SideBar title="ContactUs" />
    <DataTable
        columns={columns}
        rows={rows}
        getRowId={(row) => row.id}
        searchable={true}
    />
  </>
};

export default Jobs;
