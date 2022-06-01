
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function Offer() {
    return (
        <>


            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Buy More,Save More"  />
                <FormControlLabel control={<Checkbox />} label="No Cost EMI" />
                <FormControlLabel control={<Checkbox />} label="Special Price"  />
                
            </FormGroup>
        </>
    )
}