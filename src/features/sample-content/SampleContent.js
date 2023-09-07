import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography, CssBaseline, Divider } from "@mui/material";
import { getInteractionDetailsThunk, getAgentDetailsThunk, setCurrentAgentState, getTeamThunk, setCurrentInteractionState, setCurrentMediaState } from "./sampleContentSlice";
import { subscribeToInteractionState, subscribeToAgentState, subscribeToMedia } from "./sampleContentAPI";
import { MainContainer } from "../../shared-components/MainContainer";
import { Method } from "../../shared-components/Method";
import { Event } from "../../shared-components/Event";

/*
// For Widgets that communicate with AXP APIs, TODO
import initAuth from "../../services/Auth";
*/

const theme = createTheme({
  palette: {
    secondary: {
      main: "#e53935",
    },
  },
});


export function SampleContent(props) {
  const dispatch = useDispatch();

  const interactionState = useSelector(({ sampleContent }) => sampleContent.interactionState);
  const media = useSelector(({ sampleContent }) => sampleContent.media);
  const agentState = useSelector(({ sampleContent }) => sampleContent.agentState);

  const agent = useSelector(({ sampleContent }) => sampleContent.agent);
  const team = useSelector(({ sampleContent }) => sampleContent.team);
  const interaction = useSelector(({ sampleContent }) => sampleContent.interaction);
  const interactionId = props.interactionId;

  /*  // For Widgets that communicate with AXP APIs, TODO
  useEffect(() => {
    initAuth({ dispatch }).then((response) => {
      dispatch(getAgentDetailsThunk());

    });
  }, []);
  */

  useEffect(() => {
    // Events
    subscribeToAgentState((data) => {
      dispatch(setCurrentAgentState(data));
    });
    subscribeToInteractionState((data) => {
      dispatch(setCurrentInteractionState(data));
    });
    subscribeToMedia((data) => {
      dispatch(setCurrentMediaState(data));
    });

    // Methods
    if (interactionId && !interaction)
      dispatch(getInteractionDetailsThunk({ interactionId }));
    if (!agent)
      dispatch(getAgentDetailsThunk());
    if (!team)
      dispatch(getTeamThunk())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agent, interaction]);


  return (
    (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth={false}>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              marginTop: 8,
            }}
          >
            <Typography
              component="div"
              variant="h4"
              sx={{ fontFamily: "noto-sans,sans-serif", marginBottom: "10px" }}
            >
              {"Welcome the Workspaces Sample Widget!"}
            </Typography>
            <Typography
              component="div"
              variant="p"
              sx={{ fontFamily: "noto-sans,sans-serif", marginBottom: "10px" }}
            >
              {"Showcasing Workspaces Widget Framework Events & Methods, Avaya Experience Platform APIs & more..."}
            </Typography>
            <Divider />
            <MainContainer title="Events">
              <Event title={"Agent State - onAgentStateEvent"} value={agentState || {}} />
              <Event title={"Interaction - onAnyInteractionEvent"} value={interactionState || {}} />
              <Event title={"Media - onMediaEvent"} value={media || {}} />

            </MainContainer>
            <Divider />
            <MainContainer title="Methods">
              <Method title={"Agent Details"} value={agent || {}} method={() => { dispatch(getAgentDetailsThunk()) }} methodLabel="Get Agent" />
              <Method title={"Team"} value={team || {}} method={() => { dispatch(getTeamThunk()) }} methodLabel="Get Team" />
              {interactionId && <Method title={"Interaction Data"} value={interaction || {}} method={() => { dispatch(getInteractionDetailsThunk({ interactionId })) }} methodLabel="Get Interaction" />}
            </MainContainer>
          </Box>
        </Container >
      </ThemeProvider >
    )
  );
}

// Hello.propTypes = {
//   firstname: PropTypes.string.isRequired
// }

SampleContent.propTypes = {
  interactionId: PropTypes.string
}