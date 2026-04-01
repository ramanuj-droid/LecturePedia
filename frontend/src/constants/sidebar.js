import {
  FaHome,
  FaBook,
  FaChartBar,
  FaUser,
  FaUserShield,
  FaSignOutAlt
} from "react-icons/fa";

export const SIDEBAR_ITEMS = [
  { icon: FaHome, label: "Home", path: "/dashboard" },
  { icon: FaBook,  label: "My Courses", path: "/courses" },
  { icon: FaChartBar, label: "Progress", path: "/progress" },
  { icon: FaUser, label: "Profile", path: "/profile" }
];


export const LOGOUT_ITEM = {
  icon: FaSignOutAlt,
  label: "Logout"
};