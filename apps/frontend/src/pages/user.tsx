import { useSelector } from 'react-redux';  
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies"; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { fetchUserAsync } from "../redux/userAction";
import UserState from "../states/user";
import rootReducer from '../redux/index'; 

const Dashboard = () => {
  const handleUpdate = (id: string) => {
    console.log(`Update action triggered for ID: ${id}`);
  };
  const users:UserState = useSelector((state: any) => state.user);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.users?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.numberOfRents}</TableCell>
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
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parseCookies(context);

  const token = cookies.token || null;

  await fetchUserAsync()

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
