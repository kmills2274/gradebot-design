import React from 'react';

import HeaderTwo from '../layouts/header_2';
import Slider from '../layouts/slider';
import SearchCourse from '../layouts/search_course';
import PopularCourse from '../layouts/popular_course';
import WhyChooseUsTwo from '../layouts/why_choose';
import LatestNews from '../layouts/latest_news';
import Sponsor from '../layouts/sponsor';
import BestCourse from '../layouts/best_course';
import CourseTeacher from '../layouts/course_teacher_3';
import FAQ from '../layouts/faq_3';
import Testimonial from '../layouts/testimonial_2';
import CourseCategory from '../layouts/course_category';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';



class HomeOne extends React.Component {
    render() {
        return (
            <div className="Genius-Course">
                <HeaderTwo />
                <div className="pt150">
                    <Slider />
                </div>
                <SearchCourse Style={true} />
                <LatestNews styleTwo={true} />
                <WhyChooseUsTwo />
                <PopularCourse GrayBg={true} />
                <BestCourse GrayBg={false} />
                <CourseTeacher />
                <FAQ />
                <Testimonial />
                <Sponsor SponsorClass={"sponsor-section sponsor-1"} SponsorTitle={true} SponsorNav={true} />
                <CourseCategory />
                <ContactArea />
                <Footer />

            </div>
        )
    }
};


export default HomeOne;

