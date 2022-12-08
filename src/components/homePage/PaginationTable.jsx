import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { allUsersDetails, userId } from '../../redux/UserAction';

const columns = [
  { id: '1', label: 'نام و نام‌خانوادگی', minWidth: 170 },
  { id: '2', label: 'نام کاربری', minWidth: 100 },
  { id: '3', label: 'ایمیل', minWidth: 100 },
  { id: '4', label: 'کشور', minWidth: 100 },
  { id: '5', label: 'شهر', minWidth: 100 },
  { id: '6', label: 'شماره تماس', minWidth: 100 },
  { id: '7', label: 'شرکت', minWidth: 100 },
];
const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const allUsersInfo = useSelector(state => state.allUsersInfoList);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios.get('https://jsonplaceholder.ir/users')
      .then(response => {
        // dispatch(allUsersDetails(response.data))
        setdata(response.data)
      })
  }, []);

  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center w-full bg-[#302d29]'>
      <div className='fixed top-0 left-0 bg-[#ff9100] w-[40%] h-full shadow-xl z-20' style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
      <div className='fixed top-0 left-0 bg-[#ffb412] w-[70%] h-full z-10' style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
      <Paper sx={{ width: '80%', overflow: 'hidden', borderRadius: '8px' }} className='z-50'>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table" sx={{ "& .MuiTableRow-root:hover": { backgroundColor: "#ffb412" } }}>
            <TableHead >
              <TableRow >
                {columns.map((item, index) => (
                  <TableCell
                    key={index}
                    align='center'
                    style={{ minWidth: item.minWidth, fontWeight: 'bold', fontSize: '18px' }}
                  >
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>ّ
              {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((item, index) =>
                  <TableRow hover='red' role="checkbox" tabIndex={-1} key={index} className='cursor-pointer'
                    onClick={() => {
                      dispatch(userId(item.id))
                      navigate('/' + item.id)
                    }}>
                    <TableCell align='center' >
                      {item.name}
                    </TableCell>
                    <TableCell align='center' >
                      {item.username}
                    </TableCell>
                    <TableCell align='center' >
                      {item.email}
                    </TableCell>
                    <TableCell align='center' >
                      {item.address.country}
                    </TableCell>
                    <TableCell align='center' >
                      {item.address.city}
                    </TableCell>
                    <TableCell align='center' >
                      {item.phone}
                    </TableCell>
                    <TableCell align='center' >
                      {item.company}
                    </TableCell>
                  </TableRow>
                )}
            </TableBody>
          </Table>
        </TableContainer>
        {data && <TablePagination
          rowsPerPageOptions={[2, 5, 10]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />}
      </Paper>
    </div>
  );
}
export default PaginationTable;