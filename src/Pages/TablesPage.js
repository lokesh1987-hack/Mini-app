import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getExpandedRowModel,
} from "@tanstack/react-table";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { styled } from "@mui/material/styles";

const object = {
  1010: {
    account_name: "Advertising And Marketing",
    current: "5,000",
    previous: "3,200",
    children_total_current: "8,500",
    children_total_previous: "4,000",
    children: {
      1011: {
        account_name: "Offline Marketing",
        current: "2,000",
        previous: "500",
      },
      1012: {
        account_name: "Online Marketing",
        current: "1,500",
        previous: "300",
      },
    },
  },
  1020: {
    account_name: "Bank Fees",
    current: "750",
    previous: "800",
  },
  1030: {
    account_name: "IT and Internet Expenses",
    current: "10, 000",
    previous: "5,500",
    children_total_current: "11,500",
    children_total_previous: "6,000",
    children: {
      1031: {
        account_name: "Internet Expenses",
        current: "0",
        previous: "0",
        children_total_current: "1,500",
        children_total_previous: "500",
        children: {
          10311: {
            "account name": "Airtel",
            current: "0",
            previous: "500",
            children_total_current: "1,500",
            children_total_previous: "500",
            children: {
              103111: {
                "account name": "Xtreme Fiber",
                current: "1,500",
                previous: "0",
              },
            },
          },
        },
      },
    },
  },
};

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("account_name", {
    cell: ({ row, getValue }) => (
      <div
        style={{
          paddingLeft: `${row.depth * 2}rem`,
          alignItems: "center",
          display: "flex",
        }}
      >
        {row.getCanExpand() ? (
          <span
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            }}
          >
            {row.getIsExpanded() ? <RemoveCircleIcon /> : <AddCircleIcon />}
          </span>
        ) : (
          ""
        )}
        <span style={{ marginLeft: "10px" }}>{getValue()}</span>
      </div>
    ),
    id: "account_name",
    header: () => <span>Account Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("current", {
    id: "current",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("previous", {
    id: "previous",
    header: () => <span>Previous</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("children_total_current", {
    id: "children_total_current",
    header: () => <span>Total children (Current)</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("children_total_previous", {
    id: "children_total_previous",
    header: () => <span>Total children (Previous)</span>,
    footer: (info) => info.column.id,
  }),
];

let defaultData = Object.values(object).map((item) => {
  if (item.children) {
    item.children = Object.values(item.children);
  }
  return item;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function TablePage() {
  const [data, setData] = React.useState(() => defaultData);
  const [expanded, setExpanded] = useState({});
  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.children,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div style={{ height: "70vh", marginTop: "10%" }}>
      <TableContainer component={Paper} sx={{ width: "70%", mx: "auto" }}>
        <MuiTable sx={{ minWidth: 650 }} aria-label="table">
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <StyledTableCell key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} component="th" scope="row">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
}
export default TablePage;
