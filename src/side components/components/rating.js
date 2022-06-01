
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Rating() {
    return (
        <>


            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="4 ★ and above"  />
                <FormControlLabel control={<Checkbox />} label="3 ★ and above" />
                <FormControlLabel control={<Checkbox />} label="2 ★ and above"  />
                <FormControlLabel control={<Checkbox />} label="1 ★ and above" />
            </FormGroup>
        </>
    )
}