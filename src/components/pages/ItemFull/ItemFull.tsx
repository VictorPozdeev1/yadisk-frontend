import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { apiStoreDocuments } from "../../../store";
import { toJS } from "mobx";

import { Dialog, Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Spinner from "../../Ui/Spinner/Spinner";

const ItemFull: FC = () => {
  const { id } = useParams();
  const document = toJS(apiStoreDocuments.documents)
    .find(d => d.resource_id === id);

  const fullImageUrl = document
    ?.sizes?.[0]
    ?.url;

  const bookRatio: number = 0.7;
  const [limitedByWidth, setLimitedByWidth] = React.useState<boolean>(window.innerWidth / window.innerHeight < bookRatio);
  useEffect(() => {
    function handleResize() {
      const newLimitedByWidth = window.innerWidth / window.innerHeight < bookRatio;
      //if (limitedByWidth != newLimitedByWidth)
      setLimitedByWidth(newLimitedByWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const percentsToTake = 90;
  const boxSize: { width: string, height: string } = limitedByWidth
    ? { width: `${percentsToTake}vw`, height: `${(percentsToTake / bookRatio).toFixed(0)}vw` }
    : { width: `${(percentsToTake * bookRatio).toFixed(0)}vh`, height: `${percentsToTake}vh` }

  if (!document)
    return <Spinner />;

  return (
    <Dialog
      open={true}
      onClose={() => { history.back() }} // eslint-disable-line
      PaperProps={{ sx: { m: 0 } }}
    >
      <Box
        sx={{
          backgroundImage: `url(${fullImageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          ...boxSize
        }}
      >
        {fullImageUrl ? (
          null
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