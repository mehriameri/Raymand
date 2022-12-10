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
import { allUsersDetails, userId } from '../redux/UserAction';

const HomePage = () => {
  const [page, setPage] = useState(getSessionStorageOrDefault('pageNumber', 0));
  const [rowsPerPage, setRowsPerPage] = useState(getSessionStorageOrDefault('rowsPerPageNumber', 5));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allUsersInfo = useSelector(state => state.allUsersInfoList);
  const columns = [
    { id: '1', label: 'نام و نام‌خانوادگی' },
    { id: '2', label: 'نام کاربری' },
    { id: '3', label: 'ایمیل' },
    { id: '4', label: 'کشور' },
    { id: '5', label: 'شهر' },
    { id: '6', label: 'شماره تماس' },
    { id: '7', label: 'شرکت' },
    { id: '8', label: ' جزییات بیشتر' },
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log('handleChangePage');
    sessionStorage.setItem('pageNumber', newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    sessionStorage.setItem('pageNumber', 0);
    sessionStorage.setItem('rowsPerPageNumber', JSON.stringify(+event.target.value));
  };
  function getSessionStorageOrDefault(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
  useEffect(() => {
    if (allUsersInfo.length === 0) {
      axios.get('https://jsonplaceholder.ir/users')
        .then(response => {
          dispatch(allUsersDetails(response.data));
        })
    }
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
                    style={{ minWidth: 100, fontWeight: 'bold', color: '#043566', fontSize: '18px', backgroundColor: "#64affa", fontFamily: 'Yekan' }}
                  >
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>ّ
              {allUsersInfo
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((item, index) =>
                  <TableRow hover='red' role="checkbox" tabIndex={-1} key={index} className='cursor-pointer'>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }}>
                      {item.name}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }}>
                      {item.username}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }} >
                      {item.email}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }}>
                      {item.address.country}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }} >
                      {item.address.city}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }} >
                      {item.phone}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }}>
                      {item.company}
                    </TableCell>
                    <TableCell align='center' style={{ fontFamily: 'Yekan' }}>
                      <button className='rounded-lg bg-[#64affa] hover:bg-[#043566] hover:text-white px-4 py-1'
                        onClick={() => {
                          dispatch(userId(item.id))
                          navigate('/users/' + item.id)
                        }}>
                        جزییات
                      </button>
                    </TableCell>
                  </TableRow>
                )}
            </TableBody>
          </Table>
        </TableContainer>
        {allUsersInfo && <TablePagination
          rowsPerPageOptions={[2, 5, 10]}
          component="div"
          count={allUsersInfo.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={'تعداد ردیف در هر صفحه'}
          style={{ display: 'flex', justifyContent: 'center' }}
        />}
      </Paper>
    </div>
  );
}

export default HomePage;
