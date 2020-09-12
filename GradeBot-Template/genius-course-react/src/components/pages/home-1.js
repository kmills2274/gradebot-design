import React from 'react';
import Landing from '../layouts/particles';
import Header from '../layouts/header';
import Slider from '../layouts/slider';
import AboutUs from '../layouts/about_us';
import WhyChooseUs from '../layouts/why_choose_us';
import LatestNews from '../layouts/latest_news';
import CourseTeacher from '../layouts/course_teacher';
import FAQ from '../layouts/faq';
import CourseCategory from '../layouts/course_category';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';



class HomeOne extends React.Component {
    render() {
        return (
            <div className="Genius-Course">
                <Header />
                <Landing />
                <Slider />
                <AboutUs />
                <WhyChooseUs />
                <LatestNews />
                <CourseTeacher />
                <FAQ />
                <CourseCategory />
                <ContactArea />
                <Footer />
            </div>
        )
    }
};


export default HomeOne;

