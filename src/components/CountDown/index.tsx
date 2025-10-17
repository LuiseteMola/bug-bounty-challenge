import React from "react";
import useCountDown from "../../hooks/useCountDown";
import { Box, Typography } from "@mui/material";

const CountDownTimer = React.forwardRef<HTMLDivElement>((props, ref) => {
    const { countdownMinutes, countdownSeconds } = useCountDown(3600); // 1 hour

    return (
        <Box>
            <Typography variant="h6" component="div" color="primary">
                {countdownMinutes}:{countdownSeconds}
            </Typography>
        </Box>
    )
});


export default CountDownTimer;