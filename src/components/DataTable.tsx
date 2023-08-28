import { type FC, useState } from 'react'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Layout from "./Layout.tsx";

interface DataTableProps {
    columns: GridColDef[]
    rows: any[]
    getRowId?: (row: any) => string
    searchable?: boolean
}

type SearchValues = Record<string, string>

const DataTable: FC<DataTableProps> = ({
                                           columns,
                                           rows,
                                           getRowId,
                                           searchable = true
                                       }) => {
    const [searchValues, setSearchValues] = useState<SearchValues>({})

    const handleSearchChange = (columnField: string, value: string) => {
        setSearchValues((prevValues) => ({
            ...prevValues,
            [columnField]: value
        }))
    }

    const filteredRows = rows.filter((row) => {
        return Object.keys(searchValues).every((columnField) => {
            const searchValue = searchValues[columnField]?.toLowerCase()
            const cellValue = String(row[columnField]).toLowerCase()
            return cellValue.includes(searchValue)
        })
    })

    return (
        <Layout>
            {searchable && (
            <Box sx={{
        marginBottom: '1rem',
            mt: '1rem'
    }}>
    {columns.map((column) => (
        <TextField
            key={column.field}
        label={`Search ${column.headerName as string}`}
        variant="outlined"
        size="small"
        onChange={(e) => {
        handleSearchChange(column.field, e.target.value)
    }}
        value={searchValues[column.field] ?? ''}
        sx={{ margin: '4px' }}
        />
    ))}
    </Box>
)}
    <DataGrid
        sx={{
        px: '1rem',
            height: searchable ? 'calc(100% - 40px)' : '100%'
    }}
    rows={filteredRows}
    columns={columns}
    getRowId={getRowId}
    initialState={{
        pagination: {
            paginationModel: {
                pageSize: 15
            }
        }
    }}
    pageSizeOptions={[5]}
    disableRowSelectionOnClick
    />
    </Layout>
)
}

export default DataTable
