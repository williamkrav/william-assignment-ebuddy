import { useDispatch, useSelector } from 'react-redux';  
import moment from "moment";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies"; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Container } from "@mui/material";
import { fetchUserAsync,updateUserAsync } from "../redux/userAction";
import UserState from "../states/user";
import { useEffect, useState } from 'react';
import UpdateUserFormModal from '../components/updateModal';
import { User } from '@monorepo/entities';
import { Logout } from '../utils/auth';

const Dashboard = () => {
  const [updateId, setUpdateId] = useState("")
  const [error, setError] = useState("")
  const handleUpdate = (id: string) => {
    setUpdateId(id)
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUserAsync())
  },[])

  
  const users:UserState = useSelector((state: any) => state.users);

  const onSubmit = async (user:User)=>{
    let err = ""
    if(user.name == ""){
      err = "Name is empty"
    }
    if(isNaN(user.totalAverageWeightRatings)){
      err = "Average weight is invalid"
    }
    if(isNaN(user.numberOfRents)){
      err = "Number of rents is invalid"
    }
    let findUser = users.users?.find(e=>user?.id===updateId)
    if(!findUser){
      err = "User not found"
    }
    if (err){
      setError(err)
    }else{
      findUser!.name = user.name
      findUser!.totalAverageWeightRatings = user.totalAverageWeightRatings
      findUser!.numberOfRents = user.numberOfRents

      await updateUserAsync(user)
    }
  }

  return (
    <Container>
      <Button sx={{my:2}} onClick={()=>Logout()} variant="contained" color="error">Logout</Button>
      <TableContainer component={Paper}>
        <UpdateUserFormModal
          onClose={()=>setUpdateId("")}
          onSubmit={(onSubmit)}
          open={!!updateId}
          error={error}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Weight Avg</TableCell>
              <TableCell>Rents Count</TableCell>
              <TableCell>Last Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.users?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.totalAverageWeightRatings}</TableCell>
                <TableCell>{row.numberOfRents}</TableCell>
                <TableCell>{moment.unix(row.recentlyActive).format("YYYY MMM DD HH:mm")}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleUpdate(row?.id)}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);

  const token = cookies.token || null;


  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props:{}
  }

};

export default Dashboard;
