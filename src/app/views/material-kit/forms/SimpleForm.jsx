import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";

const SimpleForm = () => {
  
  const fileUpload = (e)=>{
    const form = new FormData()
    Array.from(e.target.files).forEach((fl)=>{
      form.append("data",fl)
    })
    fetch(process.env.REACT_APP_SERVER,{method:"POST",body:form}).then(e=>console.log(e)).catch(e=>{
      console.log(e)
    })
    // axios.post(process.env.REACT_APP_SERVER,form).then(res=>console.log(res.status)).catch(err=>console.log(err))
  }

  return (
    <div>
        <Button variant="contained" component="label" onChange={fileUpload}>
          Upload File
          <input type="file" hidden multiple/>
        </Button>
    </div>
  );
};

export default SimpleForm;
