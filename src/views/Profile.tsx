import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { useAppSelector } from "../app/hooks"
import { selectUser } from "../features/user/userSlice"

export default function Profile(){
    const {age, email, name, surName } = useAppSelector(selectUser)

    return(
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profile
        </Typography>
        <Typography variant="h5" component="div">
          {name} {surName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
          {age}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )
}