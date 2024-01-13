import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "~/hooks/useAuth";

// routes
import { publicRoutes } from "~/routes";

// layout
import { MainLayout } from "~/layouts";

function App() {
  return (
    <Router>
      <AuthContext>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              let Layout = MainLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <route.component />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </AuthContext>
    </Router>
  );
}

export default App;
