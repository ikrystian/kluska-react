
import { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SwipeableViews from 'react-swipeable-views';



interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Dashboard() {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <main className={'flex flex-auto flex-col justify-end'}>
            <SwipeableViews
                index={value}
                className={'h-full text-white'}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0}>
                   Add training
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Stats
                </TabPanel>
                <TabPanel value={value} index={2}>
                    History
                </TabPanel>
            </SwipeableViews>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}
                      indicatorColor="secondary"
                      textColor="inherit"
                      variant="fullWidth">a
                    <Tab icon={<SpaceDashboardIcon/>} aria-label="phone"/>
                    <Tab icon={<FavoriteIcon/>} aria-label="favorite"/>
                    <Tab icon={<PersonPinIcon/>} aria-label="person"/>
                </Tabs>
            </AppBar>
        </main>
    )
}
