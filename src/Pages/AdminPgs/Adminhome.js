import React, { useState } from 'react';
import {
  // BrowserRouter as Switch,
  Routes,
  Route
} from "react-router-dom";
import LeftSide from './SideBarold/LeftSide';
import Registration from '../AdminPgs/Registration/Registration';
import styles from '../AdminPgs/Adminhome.module.css';
import taxko from '../../Images/taxko_logo.png'
import URegistration from '../ClientPgs/URegistration/URegistration';
import Login from './Login/loginpage'
import Dashboard from "../AdminPgs/DashBoard/DashBoard";
import Uupdate from '../ClientPgs/UUpdate/Uupdate';
import TotalClient from './TotalClients/TotalClient';
import IncomeClient from './IncomeClient/IncomeClient';
import DocFolder from './DocFolder/DocFolder';
import FileUpload from './FileUpload/FileUpload'
import ResetPass from './ResetPass/ResetPass';
import ChangePass from './ChangePass/ChangePass';
import UserUpdate from './UserUpdate/UserUpdate';
import HelpView from './Help/Help';
import Protected from '../../Protected';
import MyFolder from './MyFolderPage/MyFolder';
import Gst from './GST/Gst';
import GstrFolder from './GstrFolder/GstrFolder';
import GstrFileUpload from './GstrFileUpload/GstrFileUpload';
import Test from './TestPages/TestPages';
import GstClients from './GSTClients/GstClients';
import CreateNewTicket from './CreateNewTicket/CreateNewTicket';
import InvestNowPage from './InvestNowPage/InvestNowPage';
import InvestNowView from './InvestNowView/InvestNowView';
import Subscription from './Subscription/Subscription';
import SubscriptionPlan from './SubscriptionPlan/SubscriptionPlan';
import UserSubscriptionPage from './UserSubscriptionPage/UserSubscriptionPage';
import HelpClientMailView from './HelpClientMailView/HelpClientMailView';
import KYCFile from './KYCFile/KYCFile';
import DOCsFile from './DOCsFile/DOCsFile';
import ClientList from './ClientList/ClientList'

const Adminhome = () => {


  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('LogedIn'));
  //  console.log('admin', loggedIn);


  return (
    <div>
      {/* <Switch> */}

      <div className="container-fluid">
        <div className="row">
          <div className={`col-sm-3 col-md-3 col-lg-3 col-xl-3`}>
            <LeftSide loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </div>

          <div className={`col-sm-9 col-md-9 col-lg-9 col-xl-9`}>

            <nav className={styles.navclass}>
              <img src={taxko} alt="" />
              <span className={styles.taxko_text}>TAXKO</span>
            </nav>

            <Routes>



              <Route exact path='myfolder' element={<MyFolder />} />
              <Route exact path='gst' element={<Gst />} />
              <Route exact path='gstr' element={<GstrFolder />} />
              <Route exact path='gstrfileupload' element={<GstrFileUpload />} />
              <Route exact path='test' element={<Test />} />
              {/* <Route exact path='notification' element={<Notification />} /> */}




              <Route exact path='' element={<Login setLoggedIn={setLoggedIn} />} />
              <Route path="User_registration" element={<Registration />} />
              <Route path="forgetpass" element={<ResetPass />} />
              <Route path="help" element={<HelpView />} />
              <Route path="help/helpclientmailview" element={<HelpClientMailView />} />
              <Route path="help/createnewticket" element={<CreateNewTicket />} />

              <Route path="investNow" element={<Protected Cmp={InvestNowPage} />} />
              <Route path="investNow/investNowview/:category/:title" element={<Protected Cmp={InvestNowView} />} />
              <Route path="dashboard" element={<Protected Cmp={Dashboard} />} />
              <Route path="dashboard/clientreg" element={<Protected Cmp={URegistration} />} />

              <Route path="dashboard/clientlist" element={<Protected Cmp={ClientList} />} />

              <Route path="dashboard/tc" element={<Protected Cmp={TotalClient} />} />
              <Route path="dashboard/tc/clientreg" element={<Protected Cmp={URegistration} />} />
              <Route path="dashboard/tc/Cupdate/:id" element={<Protected Cmp={Uupdate} />} />
              <Route path="dashboard/tc/myfolder" element={<Protected Cmp={MyFolder} />} />
              <Route path="dashboard/tc/myfolder/kycfile" element={<Protected Cmp={KYCFile} />} />
              <Route path="dashboard/tc/myfolder/docfile" element={<Protected Cmp={DOCsFile} />} />
              <Route path="dashboard/tc/myfolder/incomefolder" element={<Protected Cmp={DocFolder} />} />
              <Route path="dashboard/tc/myfolder/incomefolder/fileupload" element={<Protected Cmp={FileUpload} />} />
              <Route path="dashboard/tc/myfolder/gstfolder" element={<Protected Cmp={Gst} />} />
              <Route path="dashboard/tc/myfolder/gstfolder/gstrfolder" element={<Protected Cmp={GstrFolder} />} />
              <Route path="dashboard/tc/myfolder/gstfolder/gstrfolder/gstrfileupload" element={<Protected Cmp={GstrFileUpload} />} />
              {/* <Route path="dashboard/tc/file/:id/fileupload/:id/:year" element={<Protected Cmp={FileUpload} />} /> */}

              <Route path="dashboard/tic" element={<Protected Cmp={IncomeClient} />} />
              <Route path="dashboard/tic/clientreg" element={<Protected Cmp={URegistration} />} />
              <Route path="dashboard/tic/Cupdate/:id" element={<Protected Cmp={Uupdate} />} />
              <Route path="dashboard/tic/myfolder" element={<Protected Cmp={MyFolder} />} />
              <Route path="dashboard/tic/myfolder/kycfile" element={<Protected Cmp={KYCFile} />} />
              <Route path="dashboard/tic/myfolder/docfile" element={<Protected Cmp={DOCsFile} />} />
              <Route path="dashboard/tic/myfolder/incomefolder" element={<Protected Cmp={DocFolder} />} />
              <Route path="dashboard/tic/myfolder/incomefolder/fileupload" element={<Protected Cmp={FileUpload} />} />
              {/* <Route path="dashboard/tic/myfolder/gstfolder" element={<Protected Cmp={Gst} />} />
              <Route path="dashboard/tic/myfolder/gstfolder/gstrfolder" element={<Protected Cmp={GstrFolder} />} />
              <Route path="dashboard/tic/myfolder/gstfolder/gstrfolder/gstrfileupload" element={<Protected Cmp={GstrFileUpload} />} /> */}


              <Route path="dashboard/gstclients" element={<Protected Cmp={GstClients} />} />
              <Route path="dashboard/gstclients/clientreg" element={<Protected Cmp={URegistration} />} />
              <Route path="dashboard/gstclients/Cupdate/:id" element={<Protected Cmp={Uupdate} />} />
              <Route path="dashboard/gstclients/myfolder" element={<Protected Cmp={MyFolder} />} />
              <Route path="dashboard/gstclients/myfolder/kycfile" element={<Protected Cmp={KYCFile} />} />
              <Route path="dashboard/gstclients/myfolder/docfile" element={<Protected Cmp={DOCsFile} />} />
              <Route path="dashboard/gstclients/myfolder/gstfolder" element={<Protected Cmp={Gst} />} />
              <Route path="dashboard/gstclients/myfolder/gstfolder/gstrfolder" element={<Protected Cmp={GstrFolder} />} />
              <Route path="dashboard/gstclients/myfolder/gstfolder/gstrfolder/gstrfileupload" element={<Protected Cmp={GstrFileUpload} />} />

              <Route exact path="changepass" element={<Protected Cmp={ChangePass} />} />

              <Route exact path="userUpdate" element={<Protected Cmp={UserUpdate} />} />
              <Route exact path="UserSubscriptionPage" element={<Protected Cmp={UserSubscriptionPage} />} />
              <Route exact path="UserSubscriptionPage/subscriptionplan" element={<Protected Cmp={SubscriptionPlan} />} />
              <Route exact path="UserSubscriptionPage/subscriptionplan/subcription" element={<Protected Cmp={Subscription} />} />

              <Route path="/refferal/user/:referralParam" element={<Registration />} />

            </Routes>



          </div>
        </div>
      </div>


      {/* </Switch> */}




    </div>
  );
}

export default Adminhome;
