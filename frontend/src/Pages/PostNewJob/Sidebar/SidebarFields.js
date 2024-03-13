import CoinsIcon from "../../../assets/CoinsIcon.png";
import referIcon from "../../../assets/referIcon.png";
import reportIconBlack from "../../../assets/reportIconBlack.png";
import savedIconBlack from "../../../assets/savedIconBlack.png";
import searchIconBlack from "../../../assets/searchIconBlack.png";
import workBlack from "../../../assets/workBlack.png";

const SidebarFields = [
  {
    name: "Jobs",
    linkTo: "postnewjob",
    icon : workBlack,
  },
  {
    name: "Search Candidates",
    linkTo: "searchcandidates",
    icon : searchIconBlack
  },
  {
    name: "Saved Applicants",
    linkTo: "interviews",
    icon : savedIconBlack
  },
  {
    name: "Reports",
    linkTo: "archived",
    icon : reportIconBlack
  },
  {
    name: "Coins",
    linkTo: "archived",
    icon : CoinsIcon
  },
  {
    name: "Refer and Earn",
    linkTo: "archived",
    icon : referIcon
  },
];

export default SidebarFields;
