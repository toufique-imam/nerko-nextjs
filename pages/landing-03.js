import Head from 'next/head';
import Header3 from '../components/layouts/Header3';
import Divider from '../components/Divider';
import HomeThreeCta from '../components/cta/HomeThreeCta';
import HomeTwoNumber from '../components/number/HomeTwoNumber';
import HomeThreeRoadMap from '../components/roadmap/HomeThreeRoadMap';
import TeamThree from '../components/team/TeamThree';
import FaqTwo from '../components/faq/FaqTwo';
import HomeThreeAbout from '../components/about/HomeThreeAbout';
import HeroBannerThree from '../components/banners/HeroBannerThree';
import HomeThreeMinting from '../components/minting/HomeThreeMinting';
import Newsletter from '../components/newsletter/Newsletter';
import Footer2 from '../components/layouts/Footer2';
import BrandTwo from '../components/brand/BrandTwo';
export default function NerkoTemplate() {
  return (    
        <div class="wrap uk-overflow-hidden">
			<Head>
				<title>Landing 03 || Nerko Next JS Template</title>
			</Head>
			<Header3/>
			<HeroBannerThree/>	
			<Divider/> 						
			<HomeThreeMinting/>
			<Divider/>   				
			<HomeThreeAbout/>
			<Divider/> 
			<Newsletter/>
			<Divider/> 
			<TeamThree/>
			<Divider/> 
			<HomeTwoNumber/>
			<Divider/> 
			<HomeThreeRoadMap/>
			<Divider/> 
			<BrandTwo/>
			<Divider/> 
			<FaqTwo/>
			<Divider />
			<HomeThreeCta/>
			<Footer2 />
		</div> 
        
  	);
}
