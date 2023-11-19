import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { apiStoreDocuments } from "../../../store";
import { toJS } from "mobx";

import { Dialog, DialogTitle, DialogContent, Typography, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Spinner from "../../Ui/Spinner/Spinner";

const ItemFull: FC = () => {
  const { id } = useParams();
  const document = toJS(apiStoreDocuments.documents)
    .find(d => d.resource_id === id);
  if (!document)
    return <Spinner />;

  const fullImageUrl = document
    ?.sizes?.[0]
    ?.url;

  return (
    // <Dialog
    //   open={true}
    //   onClose={() => { history.back() }} // eslint-disable-line
    //   sx={{
    //     minWidth: '100vw',
    //     minHeight: '100vh',
    //     // backgroundColor: 'red',
    //   }}
    // >
    //   <DialogTitle padding={1}>
    //     <Typography variant="h3">
    //       {(document as Document).name}
    //     </Typography>
    //   </DialogTitle>
    //   <Divider />
    //   <DialogContent>
    //     {fullImageUrl ? (
    //       <img
    //         src={fullImageUrl}
    //         alt="12"
    //       />
    //     ) : (
    //       < Typography variant="h4">
    //         {'not found :('}
    //       </Typography>
    //     )
    //     }
    //   </DialogContent>
    // </Dialog >
    <Dialog
      open={true}
      // sx={{ backgroundColor: 'red' }}
      onClose={() => { history.back() }} // eslint-disable-line

    >
      <Box
        sx={{
          // position: 'absolute' as 'absolute',
          // top: '50%',
          // left: '50%',
          width: '64vh',
          minWidth: '64vh',
          height: '90vh',
          minHeight: '90vh',
          // backgroundColor: 'blue',
          backgroundImage: `url(${fullImageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {fullImageUrl ? (
          null
          // <img
          //   src={fullImageUrl}
          //   alt="12" width={'100%'} height={'100%'}
          // //background-repeat: no-repeat;
          // />
        ) : (
          < Typography variant="h4">
            {'Image url not found :('}
          </Typography>
        )
        }
      </Box>
    </Dialog >
  );
};

export default ItemFull;