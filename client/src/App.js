import './App.css';
import React,{useState, useEffect} from 'react'
import Appfooter from './components/Appfooter';
import Appnavbar from './components/Appnavbar';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Appnotpage from './components/Appnotpage';
import Applogin from './components/Applogin';
import Appsearch from './components/Appsearch';
import Appmycart from './components/Appmycart';
import Appmyorder from './components/Appmyorder';
import Appabout from './components/Appabout';
import Appcreateuser from './components/Appcreateuser';
import Appproductview from './components/Appproductview';
import Appbuyproduct from './components/Appbuyproduct';
import Adminhome from './components/Adminhome';
import Adminimg from './components/admin/Adminimg';
import Appproductshow from './components/Appproductshow';
import Appordercon from './components/Appordercon';
import Appmyordershow from './components/Appmyordershow';
import {Routes, Route} from 'react-router-dom'
import Cookies from 'js-cookie';

function App() {

  const [umail, setUmail] = useState("")



  useEffect(() => {
    if (Cookies.get('umail') !== undefined){
      setUmail(Cookies.get('umail'))
    }
  }, []);

  return (
    <>
      <Header umail={umail} setUmail={setUmail}/>
      <Appnavbar umail={umail}/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Applogin setUmail={setUmail} />}/>
        <Route path="/createuser" element={<Appcreateuser />}/>
        <Route path="/search" element={<Appsearch />}/>
        <Route path="/mycart" element={<Appmycart umail={umail}/>}/>
        <Route path="/myorder" element={<Appmyorder umail={umail}/>}/>
        <Route path="/about" element={<Appabout />}/>
        <Route path="/productshow/:pcat" element={<Appproductshow />}/>
        <Route path="/productview/:id/:pcat" element={<Appproductview umail={umail}/>} />
        <Route path="/buyproduct/:id/:pname/:pcat/:pprice" element={<Appbuyproduct />} />

        <Route path="/orderconfirm/:pid/:pname/:pcat/:pprice/:pq/:payo/:pho/:apho/:door/:street/:area/:distric/:state/:pincode/:landm" element={<Appordercon umail={umail}/>} />

        <Route path="/myordershow/:oid/:odate/:pid/:pname/:pcat/:pprice/:pqu/:payo/:door/:street/:landm/:area/:distric/:state/:pincode/:phone/:aphone" element={<Appmyordershow umail={umail}/>} />

        <Route path="/admin" element={<Adminhome />} />
        <Route path="/adminimg/:col/:id/:show" element={<Adminimg />} />
        <Route path="/*" element={<Appnotpage />}/>
      </Routes>
      <Appfooter />
    </>
  );
}

export default App;
