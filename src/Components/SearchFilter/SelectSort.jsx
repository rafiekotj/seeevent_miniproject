import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectSort() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Grid>
      <Box>
        <FormControl fullWidth sx={{ width: "288px" }}>
          <InputLabel id="demo-simple-select-label">Sorting By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sort}
            label="Sorting By"
            onChange={handleChange}
          >
            <MenuItem value={10}>Date</MenuItem>
            <MenuItem value={20}>Name</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default SelectSort;