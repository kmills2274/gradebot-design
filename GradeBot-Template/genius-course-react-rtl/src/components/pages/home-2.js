import React from 'react';

import Header from '../layouts/header';
import SliderTwo from '../layouts/slider-2';
import PopularCourse from '../layouts/popular_course';
import AboutUs from '../layouts/about_us';
import SearchCourseTwo from '../layouts/search_course_2';
import LatestNews from '../layouts/latest_news';
import Sponsor from '../layouts/sponsor';
import BestCourse from '../layouts/best_course';
import BestProduct from '../layouts/best_product';
import FAQTwo from '../layouts/faq_2';
import CourseCategoryTwo from '../layouts/course_category_2';
import Testimonial from '../layouts/testimonial';
import CourseTeacherTwo from '../layouts/course_teacher_2';
import ContactTwo from '../layouts/contact_2';

class HomeOne extends React.Component {
    render() {
        return (
            <div className="Genius-Course">
                <Header />
                <SliderTwo />
                <Sponsor SponsorClass={"sponsor-section sponsor-2"} SponsorTitle={false} SponsorNav={false} />
                <PopularCourse />
                <AboutUs />
                <SearchCourseTwo />
                <LatestNews />
                <BestProduct />
                <BestCourse GrayBg={true} />
                <FAQTwo />
                <CourseCategoryTwo />
                <Testimonial />
                <CourseTeacherTwo />
                <ContactTwo />
            </div>
        )
    }
};


export default HomeOne;

