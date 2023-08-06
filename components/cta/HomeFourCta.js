const HomeFourCta = () => {
    return(
        <div className="uni-cta uk-section uk-section-xlarge@m uk-panel uk-overflow-hidden">
            <div className="uk-container">
                <div className="uk-card uk-flex-center uk-text-center">
                    <div className="uk-panel uk-width-2xlarge@m uk-position-z-index" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                        <img className="uk-position-top-left" width="24" src="images/objects/circle-01.png" alt="Object" style={{top: "0%", left: ",-16%"}}/>
                        <img className="uk-position-bottom-right" width="24" src="images/objects/x.png" alt="Object" style={{bottom: "16%", right: ",-8%"}}/>
                        <img className="uk-position-top-right" width="40" src="images/objects/ethereum-02.png" alt="Object" style={{top: "0%", right: ",-16%"}}/>
                        <img className="uk-position-bottom-left" width="48" src="images/objects/bitcoin-01.png" alt="Object" style={{bottom: "16%", left: ",-8%"}}/>
                        <div className="uk-panel" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; delay: anime.stagger(100);">
                            <h2 className="uk-h3 uk-heading-d1@m">Let's start <span className="uk-text-gradient">minting</span></h2>
                            <p className="uk-text-xlarge@m">Invest and manage all your NFTs at one place.</p>
                            <a href="#" className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-medium-top@m">
                                <span>Get started</span>
                                <i className="uk-icon-small unicon-arrow-up-right uk-text-bold"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourCta