import Head from 'next/head';
import HeaderFive from '../components/layouts/HeaderFive';
import HeroBannerFive from '../components/banners/HeroBannerFive';
import DividerTwo from '../components/DividerTwo';
import HomeTwoNumber from '../components/number/HomeTwoNumber';
import HomeFiveRoadMap from '../components/roadmap/HomeFiveRoadMap';
import TeamFive from '../components/team/TeamFive';
import ChoseUs5 from '../components/choseus/ChoseUs5';
import HomeFiveAbout from '../components/about/HomeFiveAbout';
import Footer2 from '../components/layouts/Footer2';
import HomeFiveCollection from '../components/collection/HoemFiveCollection';
import FaqThree from '../components/faq/FaqThree';
import HomeFiveCta from '../components/cta/HomeFiveCta';
export default function NerkoTemplate() {
  return (    
        <div className="wrap uk-overflow-hidden">     
            <Head>
				<title>Landing 05 || Nerko Next JS Template</title>
			</Head> 
			<HeaderFive/>
			<HeroBannerFive/>
            <DividerTwo/>
            <ChoseUs5/>	
            <DividerTwo/>
			<HomeFiveAbout/>	
            <HomeTwoNumber/>
            <DividerTwo/>	
            <HomeFiveRoadMap/>
			<DividerTwo/>
            <TeamFive/>	
            <DividerTwo/>	
            <HomeFiveCollection/>
            <DividerTwo/>	
            <FaqThree/>	
            <DividerTwo/>
            <HomeFiveCta/>
			<Footer2/>
		</div> 
        
  	);
}
