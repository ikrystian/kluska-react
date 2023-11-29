import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Dashboard() {


    return (
        <main className={'flex flex-auto flex-col justify-end'}>
            <Outlet/>
            <BottomNavigation sx={{ width: 500 }}  value={useLocation().pathname}>
                <BottomNavigationAction
                    label="Recents"
                    icon={<RestoreIcon />}
                    component={Link}
                    to="/home/dashboard/"
                />
                <BottomNavigationAction
                    label="Stats"
                    icon={<FavoriteIcon />}
                    component={Link}
                    to="/home/dashboard/summary"
                />
                <BottomNavigationAction
                    label="Archive"
                    icon={<LocationOnIcon />}
                    component={Link}
                    to="/home/dashboard/archive"
                />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
        </main>
    )
}
