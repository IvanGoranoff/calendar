import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import moment from "moment";

function App() {
  const [fromDate, setFromDate] = React.useState(null);
  const [toDate, setToDate] = React.useState(null);

  const handleFromDate = (fromDate) => {
    setFromDate(fromDate);
  };

  const handleRangeDate = (e) => {
    setFromDate(new Date())
    setToDate(moment().add(e.target.value, 'd'))
  }; 
  const handleToDate = (toDate) => {
    if (fromDate > toDate) {
      setToDate(fromDate);
    } else {
      setToDate(toDate);
    }
  };
  const DifferenceInTime = toDate - fromDate;
  const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingRight: "10px",
        alignItems: "center",
        height: "100vh",
      }}
    >
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
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="To Date"
          selected={new Date()}
          value={toDate}
          minDate={fromDate}
          onChange={handleToDate}
          renderInput={(params) => <TextField {...params} />}
          inputFormat="dd.MM.yyyy"
        />
      </LocalizationProvider>
      <TextField
        variant="outlined"
        value={toDate ? DifferenceInDays : null}
        onChange={(e) => handleRangeDate(e)}
      />
     
    </div>
  );
}

export default App;
