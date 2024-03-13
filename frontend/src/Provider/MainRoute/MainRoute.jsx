import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import MainHome from "../../Pages/Home/MainHome/MainHome";
import Login from "../../Pages/Login/Login.jsx";
import SignUp from "../../Pages/SignUp/SignUp.jsx";
import Description from "../../Pages/Description/Description.jsx";
import MyJobs from "../../Pages/MyJobs/index.jsx";
import SavedJobs from "../../Pages/SavedJobs/SavedJobs.jsx";
import CandidateProfile from "../../Pages/ViewProfiles/Candidates/CandidateProfile.jsx";
import Wallet from "../../Pages/Wallet/Wallet.jsx";
import PostNewJob from "../../Pages/PostNewJob/PostNewJob.jsx";
import FinalHomeScreen from "../../Pages/FinalHomeScreen/FinalHomeScreen.jsx";
import EmployeeLanding from "../../Pages/ViewProfiles/Employee/EmployeeLanding/EmployeeLanding.jsx";
import BuyCoins from "../../Pages/BuyCoins/BuyCoins.jsx";
import PaymentSummery from "../../Pages/PaymentSummery/PaymentSummery.jsx";
import AllJobs from "../../Pages/AllJobs/AllJobs.jsx";
import JobDetails from "../../Pages/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <MainHome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/description",
        element: <Description />,
      },
      {
        path: "/myjobs",
        element: <MyJobs />,
      },
      {
        path: "/savedJobs",
        element: <SavedJobs />,
      },

      {
        path: "/view-profile",
        element: <CandidateProfile />,
      },
      {
        path: "/wallet",
        element: <Wallet />,
      },

      {
        path: "/postnewjob",
        element: <PostNewJob />,
      },
      {
        path: "/view-employee-landing",
        element: <EmployeeLanding />,
      },
      {
        path: "/post-a-newjob",
        element: <FinalHomeScreen />,
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/bycoins",
        element: <BuyCoins />,
      },
      {
        path: "/payment-summery",
        element: <PaymentSummery />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },

    ],
  },
]);

export default router;
