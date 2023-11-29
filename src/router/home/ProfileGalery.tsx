import {
    Box,
    Dialog,
    DialogTitle,
    ImageList,
    ImageListItem,
} from '@mui/material';
import { useState } from 'react';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1701220319318-4b102144f8e8',
        title: 'lorem'
    },
    {
        img: 'https://images.unsplash.com/photo-1701079169931-efac6c6847ce',
        title: 'lorem'
    },
    {
        img: 'https://images.unsplash.com/photo-1701007839975-594820067d4c',
        title: 'lorem'
    },
    {
        img: 'https://images.unsplash.com/photo-1682687982502-b05f0565753a',
        title: 'lorem'
    },
    {
        img: 'https://images.unsplash.com/photo-1700317440744-a126fc87b900',
        title: 'lorem'
    },
    {
        img: 'https://images.unsplash.com/photo-1701206886289-05bc76ff6071',
        title: 'lorem'
    }
];

export interface SimpleDialogProps {
    open: boolean;
    imageUrl: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const {onClose, imageUrl, open} = props;

    const handleClose = () => {
        onClose(imageUrl);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle> <img loading="lazy" alt="" src={imageUrl}/> </DialogTitle>
        </Dialog>
    );
}

export default function ProfileGalery() {

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(0);
    const handleClickOpen = (data: number) => {
        setId(data);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <main className={'flex flex-auto flex-col justify-end max-h-[calc(100vh-56px)]'}>

            <Box sx={{overflowY: 'scroll', padding: 1}}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img} onClick={() => {
                            handleClickOpen(index)
                        }}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <SimpleDialog
                imageUrl={itemData[id].img}
                open={open}
                onClose={handleClose}
            />
        </main>
    )
}
