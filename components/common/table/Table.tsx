import { useState, useMemo, MouseEvent, ChangeEvent } from "react";
import {
  Box,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TableSortLabel,
  SxProps,
  Theme,
  Pagination,
  PaginationItem,
} from "@mui/material";
import { FiFilter, FiRefreshCw, FiSearch } from "react-icons/fi";
import Input from "../ui/Input";
import Loader from "../loader/Laoder";

// Define types for the component
interface Column {
  id: string;
  label: string;
  numeric?: boolean;
  render?: (row: RowData) => React.ReactNode;
}

interface RowData {
  id: string | number;
  [key: string]: any;
}

interface TableProps {
  columns: Column[];
  rows: RowData[];
  sx?: {
    container?: SxProps<Theme>;
  };
  onRowClick?: (row: RowData) => void;
  loading?: boolean;
  onRefresh?: () => void;
  filterOptions?: string[];
  filterKey?: string;
  isFilter?: boolean;
  showPagination?: boolean;
  rowsPerPage?: number;
}

type Order = "asc" | "desc";

const Table: React.FC<TableProps> = ({
  columns,
  rows,
  sx = {},
  onRowClick,
  loading = false,
  onRefresh,
  filterOptions = ["all"],
  filterKey = "isApproved",
  isFilter = true,
  showPagination = true,
  rowsPerPage = 10,
}) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<string>(columns[0]?.id || "");
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const filteredAndSortedRows = useMemo(() => {
    const lowerSearch = searchQuery.toLowerCase();
    let filtered = [...rows];

    // 🔍 Search filtering
    if (searchQuery) {
      filtered = filtered.filter((row) =>
        columns.some((col) => {
          const value = col.render ? col.render(row) : row[col.id];
          return String(value ?? "")
            .toLowerCase()
            .includes(lowerSearch);
        })
      );
    }

    // ✅ Status filtering
    if (filterStatus !== "all") {
      filtered = filtered.filter(
        (row) =>
          String(row[filterKey] ?? "").toUpperCase() ===
          filterStatus.toUpperCase()
      );
    }

    // 🔃 Sorting
    const compare = (a: RowData, b: RowData): number => {
      if (b[orderBy] < a[orderBy]) return -1;
      if (b[orderBy] > a[orderBy]) return 1;
      return 0;
    };

    return filtered.sort(order === "desc" ? compare : (a, b) => -compare(a, b));
  }, [rows, columns, orderBy, order, searchQuery, filterStatus, filterKey]);

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedRows.length / rowsPerPage);
  const paginatedRows = showPagination
    ? filteredAndSortedRows.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    : filteredAndSortedRows;

  const handleSort = (_: MouseEvent<unknown>, property: string): void => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      const allIds = paginatedRows.map((row) => row.id);
      setSelected(allIds);
    } else {
      setSelected([]);
    }
  };

  const handleRowClick = (row: RowData): void => {
    const isSelected = selected.includes(row.id);
    setSelected((prev) =>
      isSelected ? prev.filter((id) => id !== row.id) : [...prev, row.id]
    );
    onRowClick?.(row);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
    setPage(1); // Reset to first page on search
  };

  const handleFilterClick = (): void => {
    setShowFilterDropdown((prev) => !prev);
  };

  const handleFilterSelect = (status: string): void => {
    setFilterStatus(status);
    setShowFilterDropdown(false);
    setPage(1); // Reset to first page on filter
  };

  const handleRefreshClick = (): void => {
    onRefresh?.();
  };

  const handlePageChange = (_: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const formatLabel = (label: string): string =>
    label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Box>
      {/* 🔍 Search & Filter Header */}
      <div className="flex justify-between bg-white rounded-2xl items-center p-3 mb-4">
        <div className="relative w-1/3">
          <div className="relative mt-2">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FiSearch />
            </span>
            <Input
              name="search"
              placeholder="Search..."
              className="pl-10"
              type="search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-500 text-xl">
          {/* 🧩 Filter */}
          {isFilter === true ? (
            <div className="relative">
              <FiFilter
                className="cursor-pointer hover:text-black"
                onClick={handleFilterClick}
              />
              {showFilterDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow z-10 text-sm">
                  {filterOptions.map((status) => (
                    <div
                      key={status}
                      onClick={() => handleFilterSelect(status)}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                        filterStatus === status
                          ? "bg-gray-200 font-semibold"
                          : ""
                      }`}
                    >
                      {formatLabel(status)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            ""
          )}

          {/* 🔄 Refresh */}
          <FiRefreshCw
            className="cursor-pointer hover:text-black"
            onClick={handleRefreshClick}
          />
        </div>
      </div>

      {/* 📋 Table */}
      <Box sx={{ width: "100%", borderRadius: 2, ...sx.container }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          <TableContainer>
            <MuiTable sx={{ minWidth: 750 }}>
              <TableHead sx={{ backgroundColor: "#E3E8F3" }}>
                <TableRow>
                  <TableCell
                    padding="checkbox"
                    sx={{ borderBottom: "1px solid #e5e7eb" }}
                  >
                    <Checkbox
                      checked={
                        selected.length > 0 &&
                        selected.length === paginatedRows.length
                      }
                      indeterminate={
                        selected.length > 0 &&
                        selected.length < paginatedRows.length
                      }
                      onChange={handleSelectAll}
                      sx={{ color: "#6b7280" }}
                    />
                  </TableCell>
                  {columns.map((col) => (
                    <TableCell
                      key={col.id}
                      align={col.numeric ? "center" : "left"}
                      sx={{
                        fontWeight: 600,
                        color: "#374151",
                        fontSize: "0.875rem",
                        borderBottom: "1px solid #e5e7eb",
                        padding: "12px",
                      }}
                    >
                      <TableSortLabel
                        active={orderBy === col.id}
                        direction={orderBy === col.id ? order : "asc"}
                        onClick={(e) => handleSort(e, col.id)}
                        sx={{
                          "&.Mui-active": {
                            color: "#374151",
                          },
                          "&:hover": {
                            color: "#111827",
                          },
                        }}
                      >
                        {col.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + 1}
                      align="center"
                      sx={{ py: 8 }}
                    >
                      <Loader size="small" />
                    </TableCell>
                  </TableRow>
                ) : paginatedRows.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length + 1}
                      align="center"
                      sx={{ py: 8, color: "#6b7280" }}
                    >
                      No data found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedRows.map((row, index) => {
                    const isSelected = selected.includes(row.id);
                    const isEvenRow = index % 2 === 0;
                    return (
                      <TableRow
                        key={row.id}
                        hover
                        selected={isSelected}
                        onClick={() => onRowClick?.(row)}
                        sx={{
                          cursor: "pointer",
                          backgroundColor: isEvenRow ? "#ffffff" : "#f9fafb",
                          "&:hover": {
                            backgroundColor: "#f3f4f6 !important",
                          },
                          borderBottom: "1px solid #f3f4f6",
                        }}
                      >
                        <TableCell
                          padding="checkbox"
                          sx={{
                            borderBottom: "1px solid #f3f4f6",
                            backgroundColor: "inherit",
                          }}
                        >
                          <Checkbox
                            checked={isSelected}
                            onChange={() => handleRowClick(row)}
                            sx={{ color: "#6b7280" }}
                          />
                        </TableCell>
                        {columns.map((col) => (
                          <TableCell
                            key={col.id}
                            align={col.numeric ? "center" : "left"}
                            sx={{
                              borderBottom: "1px solid #f3f4f6",
                              padding: "16px",
                              fontSize: "0.875rem",
                              backgroundColor: "inherit",
                            }}
                          >
                            {col.render ? col.render(row) : row[col.id]}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </MuiTable>
          </TableContainer>
        </Paper>

        {/* Pagination */}
        {showPagination && filteredAndSortedRows.length > rowsPerPage && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: "12px 32px",
              background: "white",
              borderRadius: "0 0 16px 16px",
              borderTop: "1px solid #E3E8F3",
              minHeight: 57,
            }}
          >
            <div
              style={{
                color: "#6B7280",
                fontSize: "14px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              Showing{" "}
              {Math.min(page * rowsPerPage, filteredAndSortedRows.length)} from{" "}
              {filteredAndSortedRows.length} data
            </div>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              shape="rounded"
              boundaryCount={1}
              siblingCount={1}
              showFirstButton
              showLastButton
              size="medium"
              renderItem={(item) => {
                const baseSx = {
                  minWidth: "40px",
                  height: "36px",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#415387",
                  borderRadius: "999px",
                  border: "1.5px solid #BFC6D7",
                  backgroundColor: "#F4F8FE",
                  transition: "background 0.15s, color 0.15s, border 0.15s",
                  "&:hover": { backgroundColor: "#DCE6F7" },
                };

                // First / Last arrows
                if (item.type === "first" || item.type === "last") {
                  return (
                    <PaginationItem
                      {...item}
                      sx={baseSx}
                      children={
                        <span style={{ fontSize: 18, fontWeight: 700 }}>
                          {item.type === "first" ? "«" : "»"}
                        </span>
                      }
                    />
                  );
                }

                // Previous / Next with labels
                if (item.type === "previous" || item.type === "next") {
                  return (
                    <PaginationItem
                      {...item}
                      sx={baseSx}
                      children={
                        <span style={{ fontSize: 16, fontWeight: 700 }}>
                          {item.type === "previous" ? "‹ Previous" : "Next ›"}
                        </span>
                      }
                    />
                  );
                }

                // Page numbers
                return (
                  <PaginationItem
                    {...item}
                    sx={{
                      ...baseSx,
                      color: item.selected ? "#FFF" : "#415387",
                      backgroundColor: item.selected
                        ? "#5C6B9C"
                        : baseSx.backgroundColor,
                      border: item.selected ? "none" : baseSx.border,
                    }}
                  />
                );
              }}
              sx={{
                ".MuiPagination-ul": {
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  p: "8px 16px",
                  backgroundColor: "#F4F8FE",
                  borderRadius: "8px",
                },
                ".MuiPaginationItem-previousNext.Mui-disabled": {
                  color: "#A3AED0",
                  border: "1.5px solid #A3AED0",
                  opacity: 1,
                },
                ".MuiPaginationItem-ellipsis": {
                  border: "none",
                  background: "transparent",
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Table;
