import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Brand() {
    return (
        <>


            <TextField
                id="input-with-icon-textfield"
                
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                placeholder='Search Brand'
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Poco" />
                <FormControlLabel control={<Checkbox />} label="Real me" />
            </FormGroup>
        </>
    )
}