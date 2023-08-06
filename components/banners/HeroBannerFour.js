import Link from "next/link"

const HeroBannerFour = () =>{
    return(
        <div id="uni_hero" className="uni-hero uni-hero-4 uk-section-2xlarge uk-section-xlarge@m uk-padding-remove-bottom@m uk-panel">
        <div className="uk-position-top uk-position-z-index-negative uk-overflow-hidden uk-blend-overlay" data-uk-height-viewport="">
            <img className="uk-position-top-left uk-position-fixed uk-blur-large" style={{left: "-4%", top: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
            <img className="uk-position-bottom-right uk-position-fixed uk-blur-large" style={{right: "-4%", bottom: "-4%"}} width="500" src="images/gradient-circle.svg" alt="Circle" />
        </div>
        <div className="uk-position-top uk-position-z-index-negative uk-opacity-50" data-uk-height-viewport="">
            <div className="uk-position-cover uk-background-cover dark:uk-hidden" style={{backgroundImage: 'url("images/gradient-02.png")'}}  data-uk-img></div>
        </div>
        <div className="uk-panel uk-position-z-index">
            <div className="uk-container">
                <div className="uk-panel">
                    <div className="uk-grid uk-grid-2xlarge uk-flex-middle uk-flex-between" data-uk-grid data-uk-height-viewport="offset-top: true;">
                        <div className="uk-width-6-12@m">
                            <div className="uk-panel uk-position-z-index uk-text-center uk-text-left@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                                <h2 className="uk-h2 uk-heading-d3@m uk-margin-small uk-margin@m">High Quality NFT Collection</h2>
                                <p className="uk-text-xlarge uk-width-xlarge@m">
                                    A 890 piece custom Nerko's collection <br className="uk-visible@m" />
                                    is joining the NFT space on Opensea.
                                </p>
                                <Link href="#" className="uk-button uk-button-large@m uk-button-gradient uk-margin-small-top">
                                    <span>View in OPENSEA</span>
                                    <i className="uk-icon-small unicon-arrow-up-right uk-text-bold"></i>
                                </Link>
                                <div className="uk-grid uk-grid-xsmall uk-flex-middle uk-flex-center uk-flex-left@m uk-text-left uk-margin-large-top uk-margin-xlarge-top@m uk-margin-medium-bottom" data-uk-grid>
                                    <div>
                                        <ul className="uni-community-members uk-subnav">
                                            <li>
                                                <div className="uk-panel uk-overflow-hidden uk-radius-circle">
                                                    <canvas width="48" height="48"></canvas>
                                                    <img className="uk-cover" src="images/users/07.png" alt="user image" data-uk-cover="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="uk-panel uk-overflow-hidden uk-radius-circle">
                                                    <canvas width="48" height="48"></canvas>
                                                    <img className="uk-cover" src="images/users/03.png" alt="user image" data-uk-cover="" />
                                                </div>
                                            </li>
                                            <li>
                                                <div className="uk-panel uk-overflow-hidden uk-radius-circle">
                                                    <canvas width="48" height="48"></canvas>
                                                    <img className="uk-cover" src="images/users/01.png" alt="user image" data-uk-cover="" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="uk-h4 uk-h3@m uk-margin-remove">47k+</h5>
                                        <p className="uk-text-meta uk-margin-remove">Community members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="uk-width-6-12@m uk-flex-center">
                            <div className="uk-panel" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                                <img className="uk-position-top-right uk-text-black-5 dark:uk-text-white-10" width="40" src="images/objects/circle-01.svg" alt="object" style={{top: "-8%", right:" 40%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img className="uk-position-top-right uk-text-primary-40 uni-animation-spin" width="64" src="images/objects/star-01.svg" alt="object" style={{top: "24%", right: "24%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img className="uk-position-top-right uk-text-black-20 dark:uk-text-white-40" width="80" src="images/objects/star-02.svg" alt="object" style={{top: "0%", right: "0%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img className="uk-position-bottom-left uk-text-black-20 dark:uk-text-white-40" width="40" src="images/objects/circle-02.svg" alt="object" style={{bottom: "16%", left: "-8%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img className="uk-position-bottom-left uk-text-secondary-40 uni-animation-spin" width="64" src="images/objects/star-01.svg" alt="object" style={{bottom: "24%", left: "10%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <img className="uk-position-bottom-left uk-text-darkgrey dark:uk-text-white" width="80" src="images/objects/square-round.svg" alt="object" style={{bottom: "0%", left: "24%"}}  data-anime="opacity:[0, 1]; scale:[0, 1]; onview: true; delay: 400;" />
                                <div className="uk-grid uk-grid-xsmall uk-child-width-1-2" data-uk-grid="masonry: true;">
                                    <div>
                                        <div className="uni-item uk-card" style={{transform: "rotate(10.84deg)"}}>
                                            <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                <div className="uk-cover uk-position-cover uk-background-darkgrey dark:uk-background-white uk-opacity-10 uk-radius uk-radius-2xlarge@m" style={{transform: "translate(24px, 24px)"}} data-uk-cover></div>
                                                <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-xlarge@m uk-box-shadow-small">
                                                    <canvas width="400" height="400"></canvas>
                                                    <img src="images/artwork/06.jpg" alt="Artwork" className="uk-cover" data-uk-cover />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <canvas width="400" height="400"></canvas>
                                    </div>
                                    <div>
                                        <canvas width="400" height="400"></canvas>
                                    </div>
                                    <div className="uk-margin-large-top">
                                        <div className="uni-item uk-card" style={{transform: "rotate(-10.25deg)"}}>
                                            <div className="uni-item-featured-image uk-panel uk-flex-middle uk-flex-center">
                                                <div className="uk-cover uk-position-cover uk-border uk-radius uk-radius-2xlarge@m" style={{transform: "translate(24px, 24px)"}} data-uk-cover></div>
                                                <div className="uk-panel uk-image-middle uk-overflow-hidden uk-radius uk-radius-xlarge@m uk-box-shadow-small">
                                                    <canvas width="400" height="400"></canvas>
                                                    <img src="images/artwork/16.jpg" alt="Artwork" className="uk-cover" data-uk-cover />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default HeroBannerFour