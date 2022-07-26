import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";

export const TabsTab: VFC = memo(() => {
  return (
    <Tabs>
      <TabList>
        <Tab>html</Tab>
        <Tab>css</Tab>
        <Tab>js</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Switch>
            <Route exact path="/home">
              {/* <Route exact path="/"> */}
              <Home />
              {/* <Login /> */}
            </Route>
          </Switch>
        </TabPanel>
        <TabPanel>
          <p>css</p>
        </TabPanel>
        <TabPanel>
          <p>js</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
});
