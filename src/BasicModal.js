import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({isOpen,setOpen,setClose,data}) {

  return (
    <div>
      {/* <Button onClick={setOpen}>Open modal</Button> */}
      <Modal
        open={isOpen}
        onClose={setClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color:'red',fontWeight:'bolder'}}>
             {data.name} ({new Date().toDateString()})
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {data.name?.toUpperCase()}:{data.horoscope}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Tarot Message: {data.message}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Lucky Color: {data.color}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Lucky Number: {data.number}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
