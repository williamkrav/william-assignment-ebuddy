import React, { useEffect, useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { User } from "@monorepo/entities";

interface Props {
  open: boolean
  user?: User
  onClose: ()=>void
  onSubmit: (user:User)=>void
  error: string
}

const UpdateUserFormModal = (props:Props) => {
  const { open,user,error, onClose, onSubmit } = props
  const [formData, setFormData] = useState({
    name: "",
    weightAvg: 0,
    rentsCount: 0,
  });

  useEffect(()=>{
    
    if(user){

      setFormData({
        name: user.name,
        rentsCount: user.numberOfRents,
        weightAvg: user.totalAverageWeightRatings,
      })
    }
  },[user])

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      totalAverageWeightRatings: formData.weightAvg,
      numberOfRents: formData.rentsCount
    } as User)
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor:'white',
          width: 400,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>Update User Form</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{mb:2,mt:1}}
          />
          <TextField
            fullWidth
            label="Weight Avg"
            name="weightAvg"
            type="number"
            value={formData.weightAvg}
            onChange={handleChange}
            required
            sx={{mb:2}}
          />
          <TextField
            fullWidth
            label="Rents Count"
            name="rentsCount"
            type="number"
            value={formData.rentsCount}
            onChange={handleChange}
            margin="normal"
            required
            sx={{mb:2}}
          />
            {error && (
            <Typography color="error" sx={{ textAlign: 'center', marginTop: 1 }}>
              {error}
            </Typography>
          )}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={onClose} color="secondary">Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateUserFormModal;
