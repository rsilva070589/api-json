import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import Button from '@mui/material/Button'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

 

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	} 

    function UpdateUser() {
      var data = JSON.stringify({       
        "name": user.name,        
        "birth_date": user.birth_date,
        "address": user.address
        }); 

        var config = {
        method: 'put',
        url: `https://pap3ln1bx4.execute-api.us-east-1.amazonaws.com/patients/post/${user.email}`,
        headers: {        
          'Content-Type': 'application/json'
        },
        data : data
        };
        
        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
      }    

      const Submit = () => {		 
        UpdateUser()  
        props.updateUser(user.email, user)
         
      }
      

  return ( 
    <React.Fragment>
      <Box 
      component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off">
          
           
        <TextField
          required
          id="name"
          label="Nome" 
          variant="filled"
		  type="text" name="name" value={user.name} onChange={handleInputChange}
        />
 

		<TextField
          required 
          label="Aniversario" 
          variant="filled"
		  type="text" name="birth_date" value={user.birth_date} onChange={handleInputChange}
        />
        
		<TextField
          required 
          label="Endereço" 
          variant="filled"
		  type="text" name="address" value={user.address} onChange={handleInputChange}
        />
          
      </Box>
 
      <Button onClick={Submit}>Salvar</Button>	
     <Button onClick={() => props.setEditing(false)} >  Cancelar  </Button>

    </React.Fragment>
      
  )
}

export default EditUserForm
