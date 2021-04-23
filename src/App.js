import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./routes/Landing";
import { Provider as DataProvider } from "./context/DataContext"
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <div>
        <DataProvider>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </DataProvider>
    </div>
  );
};

export default App;
