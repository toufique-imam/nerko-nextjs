import Head from 'next/head';
import Header4 from '../components/layouts/Header4';
import HeroBannerFour from '../components/banners/HeroBannerFour';
import BrandOne from '../components/brand/BrandOne';
import Divider from '../components/Divider';
import HomeFourCollection from '../components/collection/HomeFourCollection';
import ChoseUs4 from '../components/choseus/ChoseUs4';
import HomeFourNumber from '../components/number/HomeFourNumber';
import ProcessOne from '../components/process/ProcessOne';
import TeamFour from '../components/team/TeamFour';
import FooterFour from '../components/layouts/FooterFour';
import Newsletter4 from '../components/newsletter/Newsletter4';
import HomeFourRoadMap from '../components/roadmap/HomeFourRoadMap';
import FaqFour from '../components/faq/FaqFour';
import HomeFourCta from '../components/cta/HomeFourCta';

export default function NerkoTemplate() {
  return (    
        <div class="wrap uk-overflow-hidden">
			<Head>
				<title>Landing 04 || Nerko Next JS Template</title>
			</Head>
			<Header4/>
			<HeroBannerFour/>	
			<BrandOne/>	
			<Divider/>	
            <HomeFourCollection/>	
            <Divider/>
            <ChoseUs4/>	
            <Divider/>
            <HomeFourNumber/>		
			<Divider/>   				
			<ProcessOne/>
			<Divider/> 
			<Newsletter4/>
			<Divider/> 
			<HomeFourRoadMap/>
			<Divider/> 	
            <TeamFour/>
            <Divider />	
			<FaqFour/>
			<Divider/>	
            <HomeFourCta/>			
			<FooterFour/>
		</div> 
        
  	);
}
