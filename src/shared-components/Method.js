import React from "react";
import PropTypes from 'prop-types';
import { Button } from "@avaya/neo-react";
import ReactJson from 'react-json-view'
import { Typography } from "@mui/material";


export function Method(props) {
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
                <div>
                    <Button onClick={() => { props.method() }}>
                        {props.methodLabel}
                    </Button>
                </div>
            </div>
        )
    );
}

Method.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
    methodLabel: PropTypes.string,
    method: PropTypes.func
  }