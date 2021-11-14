import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectDate() {
  const [date, setDate] = React.useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <Grid>
      <Box>
        <FormControl fullWidth sx={{ width: "288px", marginRight: "24px" }}>
          <InputLabel id="demo-simple-select-label">Filter By Date</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={date}
            label="Filter By Date"
            onChange={handleChange}
          >
            <MenuItem value={10}>Today</MenuItem>
            <MenuItem value={20}>Tomorrow</MenuItem>
            <MenuItem value={30}>This Week</MenuItem>
            <MenuItem value={40}>This Month</MenuItem>
            <MenuItem value={50}>This Year</MenuItem>
            <MenuItem value={60}>All Time</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default SelectDate;