import React from 'react';
import { Avatar, Box, Grid, List, ListItem } from '@material-ui/core';
import { useStyles } from '../styles';

export default function OrderScreenWomen() {
    const styles = useStyles();

  return (
    <Box className={styles.root}>
        <Box className={styles.main}>
            <Grid container>
                <Grid item md={2}>
                    <List>
                        <ListItem>
                            <Avatar src='/images/womenservices.png'></Avatar>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={10}>
                    Services list
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}
