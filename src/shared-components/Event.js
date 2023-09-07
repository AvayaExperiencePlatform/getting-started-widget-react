import React from "react";
import ReactJson from 'react-json-view'
import PropTypes from 'prop-types';
import { Typography } from "@mui/material";


export function Event(props) {
    return (
        (
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 0.2fr",
                width: "100%",
                padding: "12px"
            }}>
                <Typography
                    component="div"
                    variant="h6"
                    sx={{ fontFamily: "noto-sans,sans-serif", textAlign: "center" }}
                >
                    {props.title}
                </Typography>
                <ReactJson
                    collapsed
                    src={props.value || {}}
                    name={false}
                />
                <div></div>
            </div>
        )
    );
}

Event.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
  }