import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import moment from "moment";

function App() {
  const [fromDate, setFromDate] = React.useState(null);


 const handleFromDate = (fromDate) => {
    setFromDate(fromDate);
  }
  
  console.log(fromDate)
  return (
    <div style={{ display: "flex", justifyContent: "center",  paddingRight: "10px", alignItems: "center", height: "100vh" }}   >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="From Date"
          value={fromDate}
          selected={new Date()}
          onChange={handleFromDate}
          minDate={moment().toDate()}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="dd.MM.yyyy"        
        />
      </LocalizationProvider>    

      <TextField disabled  defaultValue=" Available to"
      value={ fromDate?` Available to ${fromDate?.getDate()}.${fromDate?.getMonth()+1}.${fromDate?.getFullYear()+1}`: null}  
      variant="outlined"  /> 
    </div>
  );
}

export default App;
