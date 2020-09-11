import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import HomeOne from './components/pages/home-1';
import HomeTwo from './components/pages/home-2';
import HomeThree from './components/pages/home-3';
import HomeFour from './components/pages/home-4';
import AboutUs from './components/pages/about-us';
import ContactUs from './components/pages/contact-us';
import Shop from './components/pages/shop';
import Teacher from './components/pages/teacher';
import TeacherDetail from './components/pages/teacher_details';
import Blog from './components/pages/blog';
import BlogSingle from './components/pages/blog_single';
import Course from './components/pages/course';
import CourseDetails from './components/pages/course_details';
import FAQ from './components/pages/faq';
import Checkout from './components/pages/checkout';
import Preloader from './components/layouts/preloader';

const getBasename = path => path.substr(0, path.lastIndexOf('/'));


const App = () => {

  return (
      <Router basename={getBasename(window.location.pathname)}>
      <Preloader />
        <Switch>
          <Route path='/' exact component={HomeOne} />
          <Route path='/home-2' exact component={HomeTwo} />
          <Route path='/home-3' exact component={HomeThree} />
          <Route path='/home-4' component={HomeFour} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact' component={ContactUs} />
          <Route path='/shop' component={Shop} />
          <Route path='/teacher' component={Teacher} />
          <Route path='/teacher-details' component={TeacherDetail} />
          <Route path='/blog' component={Blog} />
          <Route path='/blog-single' component={BlogSingle} />
          <Route path='/course' component={Course} />
          <Route path='/course-details' component={CourseDetails} />
          <Route path='/course' component={Course} />
          <Route path='/faq' component={FAQ} />
          <Route path='/checkout' component={Checkout} />

        </Switch>
      </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
