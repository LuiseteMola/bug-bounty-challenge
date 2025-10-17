import React from "react";
import i18n, { defaultTranslationModules } from "../../i18n";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

const LanguageSelector = React.forwardRef<HTMLDivElement>((props, ref) => {
    const translationModules = defaultTranslationModules;
    const currentLanguage = i18n.language;

    const currentLanguageFlag = translationModules.find(m => m.locale === currentLanguage)?.flag;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div ref={ref}>
            <Button onClick={handleOpenMenu} size="small" variant="text" sx={{ margin: '0 8px', padding: "0 0" }}>
                <Typography variant="h4">{currentLanguageFlag}</Typography>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
            >
                {translationModules.map((m, idx) =>
                    <MenuItem key={idx} onClick={() => {
                        i18n.changeLanguage(m.locale);
                        handleCloseMenu();
                    }}>
                        <Typography variant="h4" sx={{ fontSize: '1.4em' }}>
                            {m.flag}
                        </Typography>
                    </MenuItem>
                )}
            </Menu>
        </div>
    )
});

export default LanguageSelector;