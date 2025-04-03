import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/IndexOnePage";
import About from "./Components/About/About";
import OurCauses from "./Components/Causes/OurCauses";
import OurTeam from "./Components/Team/OurTeam";
import BlogGrid from "./Components/News/BlogGrid";
import EventDetails from "./Components/EventDetails/EventDetails";
import Event from "./Components/Event/Event";
import ContactUs from "./Components/Contact/ContactUs";
import Cursore from "./Components/Cursore";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import DonateUs from "./Components/Donate/DonateUs";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Blog from "./Components/Blog/Blog";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TeamDetails from "./Components/TeamDetails/TeamDetails";

function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Components/signin" element={<SignIn/>} />
        <Route path="/Components/signup" element={<SignUp/>} />
        <Route path="/Components/donateus" element={<DonateUs/>} />
        <Route path="/Components/about" element={<About/>} />
        <Route path="/Components/ourcauses" element={<OurCauses/>} />
        <Route path="/Components/ourteam" element={<OurTeam />} />
        <Route path="/Components/teamdetails" element={<TeamDetails/>} />
        <Route path="/Components/bloggrid" element={<BlogGrid />} />
        <Route path="/Components/eventdetails" element={<EventDetails/>} />
        <Route path="/Components/event" element={<Event/>}/>
        <Route path ="/Components/blogdetails" element={<BlogDetails/>} />
        <Route path="/Components/contactus" element={<ContactUs/>} /> 
        <Route path="/Components/PageNotFound" element={<PageNotFound/>}/>
        <Route path="/Components/blog" element={<Blog/>} />
        <Route path="/Components/privacypolicy" element={<PrivacyPolicy/>} />

      </Routes>
      <Cursore/>

    </>
  );
}

export default App;