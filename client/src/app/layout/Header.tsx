import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    isClicked: boolean;
    onSwitchClicked: () => void;
}
export default function({isClicked, onSwitchClicked} : Props){
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6">
                    Store
                </Typography>
                <Switch checked={isClicked} onClick={onSwitchClicked} />
            </Toolbar>
        </AppBar>
    )
}