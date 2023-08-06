import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const HomeOneRoadMap  = () => {
    return(
        <>
            <div id="uni_roadmap" className="uni-roadmap uk-section uk-section-large@m uk-padding-3xlarge-bottom@m uk-panel uk-overflow-hidden swiper-parent">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-text-center uk-child-width-auto@m uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                        <div className="uk-panel">
                            <h2 className="uk-h3 uk-h1@m">Nerko's Roadmap</h2>
                        </div>
                    </header>
                    <div className="roadmap__wrapper" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                        <div className="uk-margin-slider-custom">
                                                                                                    
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Scrollbar, A11y]}
                                spaceBetween={32}
                                slidesPerView={1}
                                navigation
                            
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                className="uk-overflow-unset"
                                >
                                <SwiperSlide> 
                                        
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>0</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 01</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Planning</h3>
                                            <p className="uni-phase-description uk-text-large@m">Quality comes first. we took our time to plan out everything and build our production pipeline for a good quality artworks.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide >
                                
                                <SwiperSlide>
                                
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>25</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 02</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Production</h3>
                                            <p className="uni-phase-description uk-text-large@m">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>50</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 03</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Launch</h3>
                                            <p className="uni-phase-description uk-text-large@m">Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFTs.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>75</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 04</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Minting</h3>
                                            <p className="uni-phase-description uk-text-large@m">Per-Sale Minting is opened forr our Whitelisted members. The price for whitelist minting will be 0.5 SOL.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                
                                </SwiperSlide>
                                <SwiperSlide>
                                        
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>99</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 05</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">New Nfts</h3>
                                            <p className="uni-phase-description uk-text-large@m">Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>                               
                                    <div className="uni-phase uk-panel uk-overflow-hidden uk-card uk-card-small uk-card-medium@m uk-radius uk-radius-xlarge@m uk-box-shadow-xsmall dark:uk-background-white-5">
                                        <span className="uni-phase-progress uk-text-small uk-text-bold uk-position-top-right uk-position-small uk-text-white uk-background-gradient"><span>100</span>%</span>
                                        <div className="uk-panel">
                                            <span className="uni-phase-count uk-text-overline uk-text-gradient">Phase 06</span>
                                            <h3 className="uni-phase-title uk-h4 uk-h3@m uk-margin-remove-bottom">Metaverse</h3>
                                            <p className="uni-phase-description uk-text-large@m">A complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                                            <hr className="uk-width-2xsmall uk-margin-medium@m" />
                                            <ul className="uk-list uk-text-small uk-text-medium@m">
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Release website and logo</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Grow community</li>
                                                <li className="uk-flex-middle"><i className="uk-icon uk-icon-xsmall uk-icon-small@m unicon-checkmark-outline uk-margin-xsmall-right uk-text-gradient"></i> Launch the project</li>
                                            </ul>
                                        </div>
                                    </div>                   
                                    
                                </SwiperSlide>
                            
                            </Swiper>
                            
                        
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default HomeOneRoadMap;