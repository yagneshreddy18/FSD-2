import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function ButtonBasic() {
  return (
    <>
      

      {/* ===== Component 2 : Button ===== */}
      <Button size="small" variant="contained">Small</Button>
      <Button size="medium" variant="contained">Medium</Button>
      <Button size="large" variant="contained">Large</Button>
      <br /><br />

      

     
      <TextField label="Small" size="small" variant="outlined" />
      <TextField label="Medium" size="medium" variant="outlined" />
      <br /><br />

      
      <Select defaultValue="" displayEmpty size="small">
        <MenuItem value="">Select Option</MenuItem>
        <MenuItem value="1">Option 1</MenuItem>
        <MenuItem value="2">Option 2</MenuItem>
      </Select>
      <br /><br />

      
      <Rating value={3} />
      <br /><br />

  
      <FormControlLabel control={<Checkbox />} label="Accept Terms" />
    </>
  );
}
