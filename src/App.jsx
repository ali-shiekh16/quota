import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "../src/utils/ScrollToTop";
import Fall from "./components/Fall/Fall";
import AppState from "./context/app/AppState";
import Governance from "./pages/Governance/Governance";
import Home from "./pages/Home/Home";
import HomeAAS from "./pages/Home/pages/HomeAAS/HomeAAS";
import HomeGovernance from "./pages/Home/pages/HomeGovernance/HomeGovernance";
import HomeLp from "./pages/Home/pages/HomeLp/HomeLp";
import HomeNft from "./pages/Home/pages/HomeNft/HomeNft";
import HomeOnchain from "./pages/Home/pages/HomeOnchain/HomeOnchain";
import HomePhil from "./pages/Home/pages/HomePhil/HomePhil";
import HomeTax from "./pages/Home/pages/HomeTax/HomeTax";
import HomeToken from "./pages/Home/pages/HomeToken/HomeToken";
import Launch from "./pages/Launch/Launch";
import { AppRoute } from "./routing/AppRoute";

function App() {
  return (
    <AppState>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Fall />}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={
                <AppRoute protect={false}>
                  <Outlet />
                </AppRoute>
              }
            >
              <Route path="" element={<Home />} />
              <Route path="governance" element={<HomeGovernance />} />
              <Route path="aas" element={<HomeAAS />} />
              <Route path="onchain" element={<HomeOnchain />} />
              <Route path="lp" element={<HomeLp />} />
              <Route path="phil" element={<HomePhil />} />
              <Route path="tax" element={<HomeTax />} />
              <Route path="token" element={<HomeToken />} />
              <Route path="nft" element={<HomeNft />} />
            </Route>
            <Route
              path="/governance"
              element={
                <AppRoute protect={false}>
                  <Outlet />
                </AppRoute>
              }
            >
              <Route path="" element={<Governance />} />
            </Route>
            <Route
              path="/launch"
              element={
                <AppRoute protect={false}>
                  <Outlet />
                </AppRoute>
              }
            >
              <Route path="" element={<Launch />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AppState>
  );
}

export default App;
