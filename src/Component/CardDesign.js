import { Avatar, Box, Button, Card, CardActions, CardMedia, Grid, ImageListItem, ImageListItemBar, Typography, Stack } from '@mui/material';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import React from 'react'
import '../App.css';
import MotionContainer from '../theme/animate/MotionContainer';

export const CardDesign = ({ theme }) => {
    
    const Colleges = [
        {
            name: "Anna University",
            address: {
                area: "Guindy",
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "https://www.thenewsminute.com/sites/default/files/Anna_university_Wikicommons_Sivahari_1200-compressed.jpg",
            logo: "https://s.yimg.com/fz/api/res/1.2/N9_QAPbrKtsQg3ITtc03uw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MjYw/https://s.yimg.com/zb/imgv1/c5c0b3ed-f0eb-368d-a37a-a12484dc07d5/t_500x300",
            rate: 9.5,
            stream: "Engineering",
            exam: "JEEE",
            fees: "75,000",
            course: "B.E | M.E| B.TECH | M.TECH...",
            desc: "The first version of Anna University was formed in 1978 and various governments changed the varsity's structure and affiliation scope repeatedly... "
        },
        {
            name: "Madras University",
            address: {
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "http://4.bp.blogspot.com/-HSCW53xsZ80/UTY9a3KsurI/AAAAAAAAAos/Kt-6lR54VnI/s1600/university-of-madras-distance-education.jpg",
            logo: "https://rozgarpatrika.com/wp-content/uploads/2019/06/madras-university-logo.png",
            rate: 8.5,
            stream: "Arts & Science",
            exam: "TANCET",
            course: "BSc | B.Com | M.Com | BBA...",
            fees: "60,000"
        },
        {
            name: "IIT Madras University",
            address: {
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "https://generic.wordpress.soton.ac.uk/webscience/wp-content/uploads/sites/117/2019/04/madras.jpg",
            logo: "https://tse1.mm.bing.net/th?id=OIP.yNbXUiFgimmLY0qmwoOoUwHaHa&pid=Api&P=0",
            rate: 10,
            stream: "Science and Technology",
            exam: "none",
            course: "B.E | M.E| B.TECH | M.TECH...",
            fees: "74,000"
        },
        {
            name: "Jeppiaar Engineering College",
            address: {
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "https://jeppiaararts.in/img/0A8A1819-min.JPG",
            logo: "https://www.eduvidya.com/admin/Upload/Institutes/635284265482725564_Jeppiaar%20Engineering%20College.jpeg",
            rate: 5.5,
            stream: "Engineering",
            exam: "JEEE",
            course: "B.E | M.E | B.TECH | MBA...",
            fees: "90,000"

        },
        {
            name: "MOP Vaishnav College",
            address: {
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "https://images.edexlive.com/uploads/user/imagelibrary/2019/11/22/w600X390/mopvc_banner.jpg",
            logo: "http://www.infinitecourses.com/admin/RelatedImages/Institutes/634983459129201120_M.O.P.%20Vaishnav%20College%20for%20Women%20Logo.jpg",
            rate: 7.5,
            stream: "Arts & Science",
            exam: "TANCET",
            course: "BSc | B.Com | M.Com | BBA...",
            fees: "85,000"
        },
        {
            name: "Vivekananda Global University",
            address: {
                district: "Jaipur",
                state: "Rajastan"
            },
            image: "https://tse4.mm.bing.net/th?id=OIP.f2TqjIzYVvCOHNA8p_SXSAHaE7&pid=Api&P=0",
            logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
            rate: 9.5,
            stream: "Arts & Science",
            exam: "TANCET",
            course: "B.E | M.E | B.TECH | M.TECH...",
            fees: "55,000"
        },
        {
            name: "Board of Secondary Education",
            address: {
                state: "West Bengal"
            },
            image: "https://tse2.mm.bing.net/th?id=OIP.RCXB_-hjv8Hge2Bq3UCO1AHaE7&pid=Api&P=0",
            logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
            rate: 7.5,
            stream: "Upper Degree",
            exam: "none",
            course: "B.E | M.E| B.TECH | M.TECH...",
            fees: "50,000"
        },
        {
            name: "SRM University",
            address: {
                district: "Chennai",
                state: "Tamilnadu"
            },
            image: "https://tse1.mm.bing.net/th?id=OIP.aloUOv7JowIfSoF5GBdEbQHaE6&pid=Api&P=0",
            logo: "https://static.kabaddiadda.com/images/playerImages/aiiu/7310_SRM_University.png",
            rate: 9.5,
            stream: "Engineering and Science",
            exam: "JEEE",
            course: "B.E | M.E| B.TECH | M.TECH...",
            fees: "1,00,000"
        },
        {
            name: "Vivekananda Global University",
            address: {
                district: "Jaipur",
                state: "Rajastan"
            },
            image: "https://tse4.mm.bing.net/th?id=OIP.f2TqjIzYVvCOHNA8p_SXSAHaE7&pid=Api&P=0",
            logo: "https://cf-media.api-setu.in/logo/issuers/003255.png",
            rate: 9.5,
            stream: "Arts & Science",
            exam: "TANCET",
            course: "B.E | M.E | B.TECH | M.TECH...",
            fees: "55,000"
        },
    ]

    return (
        <>
            {/* // ---------------------------DeskTop----------------------------------- */}
            <Stack
                sx={{
                    bgcolor: 'primary.lighter',
                    width: "100%",
                    display: { xl: "inline-flex", md: "inline-flex", xs: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    // my: 5,
                    py: 5
                }}
                direction="column"
            >

                <Grid
                    container
                    maxWidth={{ xl: 'xl', lg: 'lg', md: 'md', sm: 'sm', xs: 'xs' }}
                    display="flex"
                    justifyItems="center"
                    alignItems="center"
                    columnSpacing={{ xl: 4, lg: 6, md: 10, sm: 2, xs: 1 }}
                    rowSpacing={{ xl: 3, lg: 3, md: 2, sm: 8, xs: 2 }}
                >
                    {Colleges.map((e) => {
                        return (
                            <Grid item xl={3} lg={4} md={6} sm={6} xs={12}  >
                                <Card component={MotionContainer} sx={{ width: "351px", bgcolor: theme ? "grey.900" : 'primary.lighter', animation: 'ease-in' }} className="main-card"  >
                                    <ImageListItem sx={{ width: "351px" }} >
                                        <Card>
                                            <ImageListItemBar
                                                sx={{
                                                    background: 'none'
                                                }}
                                                actionIcon={
                                                    <Avatar sx={{ position: "absolute", width: 60, height: 60, m: "0px 0px 0px 10px", }}>
                                                        <img src={e.logo} alt='' width={60} />
                                                    </Avatar>
                                                }

                                                title={
                                                    <>
                                                        <Box className="gold-rating" sx={{ position: "absolute", height: 75, width: 80, ml: 34, mt: -3, justifyContent: "center", pt: 2, p: 1, pl: 2, borderRadius: " 0px 0px 0px 10px " }}>
                                                            <Typography variant="body1" color="common.white" pt={1} >Rating</Typography>
                                                            <Typography variant="h6" color="common.goldrod" fontWeight={'bold'} >{e.rate}/10</Typography>
                                                        </Box>
                                                    </>
                                                }
                                                actionPosition='left'
                                                position='top'
                                            />

                                            <CardMedia
                                                component={'img'}
                                                height='295'
                                                image={e.image}
                                            />

                                            <ImageListItemBar
                                                className="imgbar"

                                                sx={{ bgcolor: theme ? "rgba(2, 27, 27, 0.82)" : "white" }}
                                                title={
                                                    <Typography className='typo' variant='h6' color={theme ? "primary.main" : "common.black"} >{e.name}</Typography>
                                                }

                                                subtitle={
                                                    <>
                                                        <Typography className='typo' fontSize={13} color={theme ? "primary.main" : "common.black"} >{e.address.district},{e.address.state}</Typography>

                                                        <Box className="box-hover"
                                                        // sx={{ display:{xs:"block"} }}
                                                        // sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                                                        >

                                                            <Grid  >
                                                                <Typography className='typo' variant="caption" color={theme ? "primary.main" : "common.black"} sx={{ '&:hover': { color: theme ? "black" : "white" } }}>{e.course}</Typography>
                                                            </Grid>

                                                            <Grid item display={'flex'} sx={{ pt: 1 }}>

                                                                <Grid sx={{ pr: '10px', textAlign: 'left' }}  >

                                                                    <Button className='typo' variant='text' size='small' sx={{ fontSize: '13px', color: theme ? "primary.main" : "common.black" }}  >
                                                                        <SchoolOutlinedIcon sx={{ color: '#0db995', mr: 1 }} fontSize="medium" />
                                                                        Admission
                                                                    </Button>
                                                                </Grid>

                                                                <Grid sx={{ pr: '10px', ml: '47px' }}>
                                                                    <Button className='typo' variant='text' size='small' sx={{ fontSize: '13px', color: theme ? "#0db999" : "common.black" }}>
                                                                        <MenuBookOutlinedIcon sx={{ color: '#0db995', mr: 1 }} fontSize="medium" />
                                                                        Course&fees
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>


                                                    </>

                                                }

                                            />

                                        </Card>
                                    </ImageListItem>

                                    <CardActions className='action-hover'>
                                        <Stack
                                            direction={'row'}
                                            spacing={2}
                                            justifyContent="space-between"
                                            px={1}
                                            my={1}

                                        >

                                            <Button variant="outlined"
                                                //  color= "#0db995 "
                                                sx={{
                                                    border: "2.5px solid #0db995",
                                                    '&:hover': { border: "2.5px solid #0db995", bgcolor: theme ? "#0db4" : '#0db995' },
                                                    bgcolor: theme ? "gray.700" : '#0db995',
                                                    color: theme ? "#0db995" : "white",
                                                    width: '150px',
                                                    justifyContent: "space-between",
                                                    pr: 5
                                                }}
                                                size="medium"
                                            >
                                                <ArrowForwardIcon sx={{ mr: 1 }} />
                                                Apply
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                // color=  "#0db995 "
                                                sx={{
                                                    border: "2.5px solid #0db995",
                                                    '&:hover': { border: "2.5px solid #0db995" },
                                                    py: -5,
                                                    color: "#0db999",
                                                    width: '150px',
                                                    justifyContent: "space-between",
                                                }}
                                                size="medium"
                                            >
                                                <DownloadIcon fontSize='small' />
                                                Brochure

                                            </Button>
                                        </Stack>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>

            </Stack>
            {/* // ---------------------------Mobile------------------------------------- */}
            <Stack
                sx={{
                    bgcolor: theme ? "dark" : "primary.lighter",
                    display: { xs: "-ms-flexbox", md: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    py: 4
                }}
                direction="column"
            >

                <Grid
                    container
                    maxWidth={'md'}
                    width={100}
                    columnSpacing={{ xs: 1 }}
                    rowSpacing={{ xs: 3 }}
                >
                    {Colleges.map((e) => {
                        return (
                            <Grid container item xs={12} mx={3} justifyContent='center' >
                                <Card sx={{ width: 280, bgcolor: theme ? "grey.900" : 'primary.lighter' , boxShadow:'2px 2px 6px grey '}}   >
                                    <ImageListItem sx={{ width: 280 }} >

                                        <ImageListItemBar
                                            sx={{
                                                background: 'none'
                                            }}
                                            actionIcon={
                                                <Avatar sx={{ position: "absolute", width: 60, height: 60, m: "0px 0px 0px 10px", }}>
                                                    <img src={e.logo} alt='' width={60} />
                                                </Avatar>
                                            }

                                            title={
                                                <>
                                                    <Box className="gold-rating" sx={{ position: "absolute", height: 75, width: 80, ml: 26, mt: -3, justifyContent: "center", pt: 2, p: 1, pl: 1, borderRadius: " 0px 0px 0px 10px " }}>
                                                        <Typography variant={ "body2" } color="common.white" pt={1} >Rating</Typography>
                                                        <Typography variant="h6" color="common.goldrod" fontWeight={'bold'} >{e.rate}/10</Typography>
                                                    </Box>
                                                </>
                                            }
                                            actionPosition='left'
                                            position='top'
                                        />

                                        <CardMedia
                                            component={'img'}
                                            height='290'
                                            image={e.image}
                                        />

                                        <ImageListItemBar
                                            sx={{ bgcolor: theme ? "rgba(2, 27, 27, 0.82)" : "white" }}
                                            title={  //"#0db999"
                                                <Typography variant='h6' color={theme ? "white" : "common.black"} >{e.name}</Typography>
                                            }

                                            subtitle={ //#0db999
                                                <>
                                                    <Typography fontSize={13} color={theme ? "white" : "common.black"} >{e.address.district},{e.address.state}</Typography>

                                                    <Box
                                                        // className="box-hover"
                                                        sx={{ display: { xs: "block" } }}
                                                    // sx={{ display: { xs: "block", sm: "block", md: "none" } }}
                                                    >

                                                        <Grid  >
                                                            <Typography variant="caption" color={theme ? "white" : "common.black"} >{e.course}</Typography>
                                                        </Grid>

                                                        <Grid item display={'flex'} sx={{ pt: 1, justifyContent: "space-between" }}>

                                                            <Grid sx={{ pr: '10px', textAlign: 'left' }}  >

                                                                <Button variant='text' size='small' sx={{ fontSize: '11px', color: theme ? "white" : "common.black" }}  >
                                                                    <SchoolOutlinedIcon sx={{ color: "primary.main", mr: 1 }} fontSize="small" />
                                                                    Admission
                                                                </Button>
                                                            </Grid>

                                                            <Grid >
                                                                <Button variant='text' size='small' sx={{ fontSize: '11px', color: theme ? "white" : "common.black" }}>
                                                                    <MenuBookOutlinedIcon sx={{ color: 'primary.main', mr: 1 }} fontSize="small" />
                                                                    Course&fees
                                                                </Button>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>


                                                </>

                                            }

                                        />
                                    </ImageListItem>

                                    <CardActions  >
                                        <Stack
                                            direction={'row'}
                                            spacing={2}
                                            justifyContent="space-between"
                                            width={280}
                                            px={1}
                                            my={1}

                                        >

                                            <Button variant="outlined"
                                                //  color= "#0db995 "
                                                sx={{
                                                    border: "2.5px solid #0db995",
                                                    '&:hover': { border: "2.5px solid #0db995", bgcolor: theme ? "#0db4" : '#0db995' },
                                                    bgcolor: theme ? "gray.700" : 'primary.main',
                                                    color: theme ? "#0db995" : "white",
                                                    width: '100px',
                                                    justifyContent: "space-between",
                                                    pr: 5,
                                                    fontSize: "13px"
                                                }}
                                                size="small"
                                            >
                                                <ArrowForwardIcon sx={{ mr: 1 }} />
                                                Apply
                                            </Button>

                                            <Button
                                                variant="outlined"
                                                // color=  "#0db995 "
                                                sx={{
                                                    border: "2.5px solid #0db995",
                                                    '&:hover': { border: "2.5px solid #0db995" },
                                                    py: -5,
                                                    color: "#0db999",
                                                    width: '120px',
                                                    justifyContent: "space-between",
                                                    fontSize: "13px"
                                                }}
                                                size="small"
                                            >
                                                <DownloadIcon fontSize='small' />
                                                 Brochure

                                            </Button>
                                        </Stack>
                                    </CardActions>

                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>

            </Stack>
        </>
    )
}
