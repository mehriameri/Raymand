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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfileInfo = useSelector(state => state);
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
        console.log(response.data)
        dispatch(allUsersDetails(response.data))
      })
  }, [])
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='my-20 border border-red-300'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" >
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
            {userProfileInfo && userProfileInfo.allUsersInfo
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((item, index) =>
                <TableRow hover role="checkbox" tabIndex={-1} key={index} className='cursor-pointer'
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
      <TablePagination
        rowsPerPageOptions={[2, 5, 10]}
        component="div"
        count={userProfileInfo?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
export default PaginationTable;
      // var pageView = sessionStorage.getItem("pageView");
        // if (pageView == null) {
        //   pageView = [];
        // }
        // sessionStorage.setItem("pageView", JSON.stringify(response.data));
        // setRowsData(JSON.parse(pageView));