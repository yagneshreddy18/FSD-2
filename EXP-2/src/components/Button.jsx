import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function ButtonBasic() {
  return (
    <>
    <Button size="small" variant='outlined'>Small</Button>
    <Button size="medium" variant='outlined'>Medium</Button>
    <Button size="large" variant='outlined'>Large</Button>
    <br/>
    <br/>
    <Button size='small' variant='contained'>Small</Button>
    <Button size="medium" variant='contained'>Medium</Button>
    <Button size="large" variant='contained'>Large</Button>
    <br/>
    <br/>
    <Button size='small' variant='text'>Small</Button>
    <Button size="medium" variant='text'>Medium</Button>
    <Button size="large" variant='text'>Large</Button>
    <br/>
    <br/>
    <TextField label="Small" size="small" variant="outlined"/>
    <TextField label="Medium" size="medium" variant="outlined" />
    </>
  ) 
}