import { Box, Container, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Trans, useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("app");
  const issues = [
    {
      icon: "🐞",
      title:
        'Console error: Warning: Each child in a list should have a unique "key" prop.',
      description:
        "Hope you are able to find what is causing this error, as it is annoying.",
      solution: 'On React, lists should have a unique "key" property for each item, so rendering performance is optimized. In this case we can simply use the index of the array as key.'
    },
    {
      icon: "🐞",
      title:
        'The word "known" should be displayed bold in the introduction text.',
      description:
        "When implementing a solution, please ensure to not change the i18n text.",
      solution: 'We can use the <Trans> component from react-i18next to add markup to specific parts of the translation text without modifying the original i18n resource. In this case we want to setup every HTML tag coming from the translation. If we want a a more flexible (but dangerous) solution we could also use the "dangerouslySetInnerHTML" property inside the component.'
    },
    {
      icon: "🐞",
      title:
        "User avatar in app bar is missing, although user should be fetched on app start correctly.",
      description:
        "On app start we load the current user object via a MobX store, but for any reason the user avatar is not displayed in the top right of the app bar. Attention: When solving this issue, you might will be confronted with a second bug.",
      solution: 'There was a typo on the MobX store. After it, we needed to fix the AvatarMenu component to forward the ref correctly in their root div element, so the avatar is displayed.'
    },
    {
      icon: "🐞",
      title: "Optional: Countdown is broken sometimes (hard to reproduce).",
      description:
        "Some developers mentioned that the countdown in the app header behaves strange sometimes, but unfortunately they were not able to reproduce this glitch reliably, maybe you find the root cause."
    },
    {
      icon: "⭐️",
      title: "Optional: It would be great to be able to switch the language.",
      description:
        "Please add a language select control in the app bar to swicth the UI language between english and german."
    }
  ];

  return (
    <Box p={2} maxHeight="calc(100vh - 64px)" overflow={["auto", "auto"]}>
      <Container>
        <Typography variant="h1" textAlign="center">
          {t("home.welcome")}
        </Typography>
        <Typography variant="subtitle1" textAlign="center">
          <Trans
            components={{ b: <strong /> }}
          >{t("home.intro")}{" "}</Trans>
        </Typography>
        <Typography variant="body2" textAlign="center" color="textSecondary">
          {t("home.sidenote")}
        </Typography>
        <List>
          {issues.map((issue, idx) => (
            <ListItem key={idx}>
              <Typography variant="h5" sx={{ p: 2 }}>
                {issue.icon}
              </Typography>
              <ListItemText
                primary={issue.title}
                secondaryTypographyProps={{ component: 'div' }}
                secondary={(
                  <>
                    <Typography variant="body2" color="textSecondary" component="div">
                      {issue.description}
                    </Typography>
                    {issue.solution && (
                      <Typography variant="caption" color="darkgreen" component="div">
                        {issue.solution}
                      </Typography>
                    )}
                  </>
                )}
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default observer(Home);
