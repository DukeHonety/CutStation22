import {Box, Fade, Typography, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core'
import React, { useContext } from 'react'
import Logo from '../components/Logo'
import { useStyles } from '../styles';
import {useNavigate} from "react-router-dom"
import { Store } from '../Store';
import { setOrderType } from '../actions';

export default function ChooseScreen(props) {
    const styles = useStyles();
    const { dispatch } = useContext(Store)
    const navigate = useNavigate()

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        navigate("/" + orderType, {replace: true})
    };

  return (
    <Fade in={true}>
        <Box className={[styles.root, styles.black]}>
            <Box className={[styles.main, styles.center]}>
                <Logo large></Logo>
                <Typography variant='h3' component='h3' className={styles.center} gutterBottom>
                    Choose gategory
                </Typography>
                <Box className={styles.cards}>
                    <Card className={[styles.cards, styles.space]}>
                        <CardActionArea onClick={() => chooseHandler('Men')}>
                            <CardMedia component="img" alt="Men" image="/images/men.png" className={styles.media} />
                            <CardContent>
                                <Typography gutterBottom variant='h4' color='textPrimary' component='p'>Men</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={[styles.cards, styles.space]}>
                        <CardActionArea onClick={() => chooseHandler('Women')}>
                            <CardMedia component="img" alt="Women" image="/images/women.png" className={styles.media} />
                            <CardContent>
                                <Typography gutterBottom variant='h4' color='textPrimary' component='p'>Women</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box className={[styles.main, styles.center]}>
                <Card className={[styles.cards, styles.space]}>
                    <CardActionArea onClick={() => navigate("/", {replace: true})}>
                        <CardContent>
                            <Typography gutterBottom variant='h4' color='textPrimary' component='p'>Back</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Box>
            </Box>
        </Box>
    </Fade>
  )
}
