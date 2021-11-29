import * as BsIcons from "react-icons/bs";

export const dashboardData = [
  {
    title: "Home",
    path: "/",
    icon: <BsIcons.BsShop />, //BsHouseDoor
    cName: "nav-text",
  },
  {
    title: "Xplore Activities",
    path: "/Events",
    icon: <BsIcons.BsSearch />,
    cName: "nav-text",
  },
  {
    title: "Xplore Places",
    path: "/Places",
    icon: <BsIcons.BsPinMapFill />,
    cName: "nav-text",
  },
  {
    title: "My Activities",
    path: "/My-Activities",
    icon: <BsIcons.BsCalendarWeek />,
    cName: "nav-text",
  },
  {
    title: "My Favorite Places",
    path: "/My-Places",
    icon: <BsIcons.BsTree />,
    cName: "nav-text",
  },
  {
    title: "Create Activity",
    path: "/CreateEvent",
    icon: <BsIcons.BsPlusCircle />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/Footer",
    icon: <BsIcons.BsQuestionCircle />,
    cName: "nav-text",
  },
];
