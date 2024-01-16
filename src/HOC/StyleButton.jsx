import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const WithStyleButton = (WrappedComponent) => {
  return function StyleButton(props) {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default WithStyleButton;
