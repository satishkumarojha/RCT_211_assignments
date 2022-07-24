import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function Layout1() {
  return (
         <Grid
         mt={'5%'}
         mb={'5%'}
          h="25rem"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={0}
        >
          <GridItem
           rowSpan={3}
           colSpan={1}
            bg="blue"
           
            color="white"
          >
            NAV{" "}
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={2}
            bg="orange"
            
            color="white"
          >
            CONTENT{" "}
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={1}
            bg="red"
           
            color="white"
          >
            WIDGET{" "}
          </GridItem>
        </Grid>
  );
}

export default Layout1;
