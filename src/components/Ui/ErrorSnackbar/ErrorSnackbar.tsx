import React, { FC } from "react";
import { errorState } from "../../../store/index";
import { Snackbar as Snackbar, Alert } from "@mui/material";
import { observer } from "mobx-react";

const ErrorSnackbar: React.FC = () => (
    <Snackbar open={errorState.errors.length > 0}>
        <Alert
            variant="filled"
            severity="error"
            onClose={() => errorState.dequeue()}
        >
            {errorState.errors[0]}
        </Alert>
    </Snackbar>
);

export default observer(ErrorSnackbar);