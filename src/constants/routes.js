const ROUTES = {
  INDEX: {
    ID: 0,
    NAVIGATE: "/",
    COMPONENT: {
      MOBILE: "<Home/>",
      DESKTOP: "<Home/>",
    },
  },
  DASHBOARD: {
    ID: 1,
    NAVIGATE: "dashboard",
    COMPONENT: {
      MOBILE: "<MDashboard/>",
      DESKTOP: "<DDashboard/>",
    },
  },
  LOGIN: {
    ID: 2,
    NAVIGATE: "login",
    COMPONENT: {
      MOBILE: "<MLogin/>",
      DESKTOP: "<DLogin/>",
    },
  },
  REGISTER: {
    ID: 3,
    NAVIGATE: "register",
    COMPONENT: {
      MOBILE: "<MRegister/>",
      DESKTOP: "<DRegister/>",
    },
  },
  CHAT: {
    ID: 4,
    NAVIGATE: "chat",
    COMPONENT: {
      MOBILE: "<MChatContainer/>",
      DESKTOP: "<DChatContainer/>",
    },
  },
};

export default ROUTES;
