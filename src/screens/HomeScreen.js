import React from 'react'
import {Box, Card, CardActionArea, Typography} from '@material-ui/core'
import TouchAppIcon from '@material-ui/icons/TouchApp'
import { useStyles } from '../styles'
import Logo from '../components/Logo'
import {useNavigate} from "react-router-dom"

export default function HomeScreen(props) {
    const styles = useStyles();
    const navigate = useNavigate()

  return (
    <Card>
        <CardActionArea onClick={() => navigate("/choose", {replace: true})}>
            <Box className={[styles.root, styles.white]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo large></Logo><br/>
                    <Typography component="h6" variant="h6">
                        Fast & Easy
                    </Typography>
                    <Typography component="h1" variant="h1">
                        To order <br/> click <br/> here
                    </Typography>
                    <TouchAppIcon fontSize='large'></TouchAppIcon>
                </Box>
                <Box className={[styles.center, styles.green]}>
                    <Typography component="h5" variant="h5">
                        Touch to start
                    </Typography>
                </Box>
            </Box>
        </CardActionArea>
    </Card>
  )
}
