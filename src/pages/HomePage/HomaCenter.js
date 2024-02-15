import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { listeMenu } from '../../data/Data'

function HomaCenter() {
  return (
    <Grid container justifyContent={"center"} >
<Grid item bgcolor={"#f0f0f0"} width={"100%"} padding={5} justifyContent={"center"} >
<Stack justifyContent={"center"} direction={"row"} >
<Typography fontWeight={"bold"}  width={"60%"} fontSize={25} textAlign={"center"}  >
NOTRE INFRASTRUCTURE NUMÉRIQUE REPOSE SUR DU TRAVAIL OPEN SOURCE, MAIS
</Typography>
</Stack>
<Stack direction={"column"} justifyContent={"center"}  alignItems={"center"} >
<Typography fontSize={18} mt={2} width={"50%"}>
L'open source connait de plus en plus de déséquilibre alarmant. Il y a de plus en plus de consomateurs pour (très) peu de contributeurs.
</Typography>
<div>
<ul>
    {
        listeMenu.map((e)=>(
            <li>{e}</li>
        ))
    }
    
</ul>

</div>
</Stack>
</Grid>
    </Grid>
  )
}

export default HomaCenter