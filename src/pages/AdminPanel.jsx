import React, { useState } from "react";
import AdminLogin from "./AdminLogin";
import AdminPanelContent from "./AdminPanelContent";

const AdminPanel = () => {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <AdminLogin onSuccess={() => setAuthenticated(true)} />;
  }

  return <AdminPanelContent />;
};

export default AdminPanel;
