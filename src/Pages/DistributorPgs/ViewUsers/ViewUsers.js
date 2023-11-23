import style from './ViewUsers.module.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { url_ } from '../../../Config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ViewUsers = () => {
  const Navigate = useNavigate()
  const userProf = useLocation().state.userProfession;
  const storedToken = window.localStorage.getItem('jwtToken');
  const distributor_pan=localStorage.getItem("pan")

  
  useEffect(() => {
    GetUserDATA();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [userdata, setuserdata] = useState([]);
  const [fetch_url, setfetch_url] = useState();
  const [subendDate, setsubendDate] = useState();

  const GetUserDATA = async () => {






    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${storedToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'

    };
    
    await fetch(`
        
        
        
        
        ${userProf === "Today's Subscription" ? `${url_}/distrubutor/subscriptions/today/${distributor_pan}` :
        userProf === "Yesterday's Subscription" ? `${url_}/distrubutor/subscriptionslist/yestarday/${distributor_pan}` :
          userProf === "Week's Subscription" ? `${url_}/distrubutor/subscriptionslist/week/${distributor_pan}` :
            userProf === "Present Year's Subscription" ? `${url_}/distrubutor/subscriptionslist/year/${distributor_pan}` :
              userProf === "Last Year's Subscription" ? `${url_}/distrubutor/subscriptionslist/previousyear/${distributor_pan}` :
                userProf === "Today's Renewal" ? `${url_}/Renewal/today/distrubutor/${distributor_pan}` :
                  userProf === "Tomorrow's Renewal" ? `${url_}/Renewal/tommarow/distrubutor/${distributor_pan}` :
                    userProf === "Week's Renewal" ? `${url_}/Renewal/week/distrubutor/${distributor_pan}` :
                      userProf === "Month's Renewal" ? `${url_}/Renewal/month/distrubutor/${distributor_pan}` :
                        userProf === "3 Months's Renewal" ? `${url_}/Renewal/threemonth/distrubutor/${distributor_pan}` :
                          userProf === "6 Months's Renewal" ? `${url_}/Renewal/sixmonth/distrubutor/${distributor_pan}` :
                
                            null}

    `, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        const filteredData=result.filter((item)=>{
          if(new Date(item.subendtdate)<(new Date().getDate())){
            return false
          }
          else{
            return true
          }
        })
        // console.log(filteredData)
        setuserdata(filteredData)

        
      })
      .catch((error) => {
        console.log(error);
      })

  }
  function GoBack() {
    window.history.back(); // This will navigate to the previous page in the browser's history
  }

  
  return (


    <div className="d-flex w-100">


      <div className={`${style.workport} `}>

        {/* Top Port Starts */}
        <h2 className=' mt-2 d-flex justify-content-around align-items-center w-100'>
          <div style={{ fontSize: "xxx-large", cursor: "pointer" }} onClick={GoBack}>
            &#8617;&nbsp;
          </div>
          <b>{userProf}</b>
          <div>
          </div>
        </h2>
        <div className={`${style.top} `}>
          <div className={`${style.inputbox} `}>
            <div className={`${style.seachbox} `}>
              <input type="search" className={`${style.inputbox} `} placeholder='Search Admin By PAN/Name'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className={`${style.seachlogo} `}>
              <h1><i class="fa-solid fa-magnifying-glass"></i></h1>
            </div>
          </div>
        </div>
        {/* Top Port Ends */}

        {/* Bottom Port Starts */}
        <div className={`${style.bottom} `}>

          <div className={`${style.drow} `}>
            <div className={`${style.name} `} ><p className={`${style.gdtxt1} `}>Sr. No</p></div>
            <div className={`${style.name} `} ><p className={`${style.gdtxt2} `}>Admin Name</p></div>
            <div className={`${style.name} `} ><p className={`${style.gdtxt3} `}>PAN</p></div>
            <div className={`${style.name} `} ><p className={`${style.gdtxt4} `}>Mobile</p></div>
            <div className={`${style.name} `} ><p className={`${style.gdtxt6} `}>Status</p></div>
          </div>


          {
            
            
            userdata
              .filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.pan.toLowerCase().includes(searchQuery.toLowerCase())

              )


              .map((item, index) => (



                <div className={`${style.ddata} `}>
                  <div className={`${style.name} `} ><p className={`${style.srno} `}>{index + 1}</p></div>
                  <div className={`${style.name} `} ><p className={`${style.an} `}>{item.name}</p></div>
                  <div className={`${style.name} `}  ><p className={`${style.pan} text-primary`}>{item.pan}</p></div>
                  <div className={`${style.name} `} ><p className={`${style.mobile} `}>{item.mobile}</p></div>
                  <div className={`${style.name} `} ><p className={`${style.status} `}><i class="fa-solid fa-circle" style={{ color: item.paid ? "#32e132" : "#ff0000" }}></i></p></div>
                </div>

              ))
          }




        </div>
      


      </div>

    </div >


  );
}

export default ViewUsers;