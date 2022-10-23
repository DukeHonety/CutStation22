import React, { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Dialog,
    DialogTitle,
    Grid,
    List,
    ListItem,
    Slide,
    TextField,
    Typography,
  } from '@material-ui/core';
  import { useStyles } from '../styles';
import { listCategories, listProducts } from '../actions';
import { Store } from '../Store';
import { Alert } from '@material-ui/lab';
import Logo from '../components/Logo';

export default function OrderScreenMen() {
    const styles = useStyles();
    const [categoryName, setCategoryName] = useState('');
    const { state, dispatch } = useContext(Store);
    const { categories, loading, error } = state.categoryList;
    const {
        products,
        loading: loadingProducts,
        error: errorProducts
    } = state.productList;
    useEffect(() => {
        if (!categories){
            listCategories(dispatch);
        } else {
            listProducts(dispatch, categoryName);
        }
    }, [categoryName, categories]);
    const categoryClickHandler = (name) => {
        setCategoryName(name);
        listProducts(dispatch, categoryName);
    }

  return (
    <Box className={styles.root}>
        <Box className={styles.main}>
            <Grid container>
                <Grid item md={2}>
                    <List>
                        {loading ?(
                            <CircularProgress />
                            ): error ? (
                                <Alert severity="error">{error}</Alert>
                            ) :
                            (
                            <>
                            <ListItem button>
                                <Logo></Logo>
                            </ListItem>
                            {categories.map((category) => (
                                <ListItem button key={category.name}
                                onClick={() => categoryClickHandler(category.name)}
                                >
                                    <Avatar alt={category.name} src={category.image} />
                                </ListItem>
                            ))}
                            </>
                        )}
                    </List>
                </Grid>
                <Grid item md={10}>
                    <Box item mt={10}></Box>
                    <Typography gutterBottom className={styles.title} variant="h2" component="h2">
                        {categoryName ||  'Main Menu'}
                    </Typography>
                    
                    <Grid container spacing={1}>
                        {loadingProducts ? (
                            <CircularProgress />
                        ) : errorProducts ? (
                            <Alert severity='error'>{errorProducts}</Alert>
                        ) : (
                            products.map((product) => <Grid item md={6}>
                                <Card className={styles.card}>
                                    <CardActionArea>
                                        <CardMedia component="img" alt={product.name} image={product.image} className={styles.media}>
                                        </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="boldy2" color="textPrimary" component='P'>
                                                {product.name}
                                            </Typography>
                                            <Box className={styles.cardFooter}>
                                                <Typography variant="boldy2" color="textSecondary" component='P'>
                                                {product.volume} מ"ל
                                                </Typography>
                                                <Typography variant="boldy2" color="textPrimary" component='P'>
                                                {product.price} ש"ח
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>)
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>
  )
}
