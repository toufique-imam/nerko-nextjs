const ChoseUs4 = () => {
    return(
        <>
             <div id="uni_about" className="uni-about uk-section uk-section-xlarge@m uk-panel">
                <div className="uk-container">
                    <header className="uk-grid-xsmall uk-flex-center uk-flex-middle uk-grid" data-uk-grid data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;">
                        <div className="uk-panel uk-text-center">
                            <h2 className="uk-h3 uk-h1@m">Why <span className="uk-text-gradient">choose us!</span></h2>
                        </div>
                    </header>
                    <div className="uk-panel uk-margin-medium-top uk-margin-2xlarge-top@m" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;">
                        <img className="uk-position-top-left uk-text-secondary" width="16" src="images/objects/circle-01.png" alt="Object" style={{top: "-16%", left: "8%"}} />
                        <img className="uk-position-bottom-right uk-text-primary" width="24" src="images/objects/circle-02.png" alt="Object" style={{bottom: "16%", right: "-8%"}} />
                        <img className="uk-position-bottom-left" width="28" src="images/objects/x.png" alt="Object" style={{bottom: "16%", left: "-8%"}} />
                        <div className="uk-grid uk-child-width-1-4@s" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);">
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-layers"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                                Huge <br className="uk-visible@m" />
                                                collection
                                            </h3>
                                            <p>A collection of 890 unique Nerkos built to go beyond the digital space.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin-large-top@m">
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-checkmark-outline"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                                High <br className="uk-visible@m" />
                                                quality
                                            </h3>
                                            <p>The nerko’s collection includes dozens of rare costumes ands colorways of artist's.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-task-approved"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                                Top <br className="uk-visible@m" />
                                                ressource
                                            </h3>
                                            <p>Tasty design resources made with care for each pixel. NFTs and game resources.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-margin-large-top@m">
                                <div className="uk-panel uk-card uk-card-small uk-card-medium@m uk-card-border uk-padding-large-horizontal uk-radius-medium uk-radius-large@m">
                                    <div className="uk-grid uk-grid-small@m uk-flex-column" data-uk-grid="">
                                        <div>
                                            <i className="uk-icon uk-icon-large uk-text-gradient unicon-collaborate"></i>
                                        </div>
                                        <div className="uk-panel uk-width-expand">
                                            <h3 className="uk-h5 uk-h4@m">
                                                Big <br className="uk-visible@m" />
                                                community
                                            </h3>
                                            <p>Be part of a community of nerko owners and create user generated items.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChoseUs4;