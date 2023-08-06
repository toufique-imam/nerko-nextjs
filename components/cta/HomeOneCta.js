import Link from 'next/link';
const HomeOneCta = () =>{
    return(        
        <>
            <div className="uni-cta uk-section uk-section-2xlarge@m uk-panel uk-overflow-hidden">
                <img className="uk-cover uk-opacity-10" data-uk-cover src="images/collection-cta.png" alt="arrow" />
                <div className="uk-container">
                    <div className="uk-card uk-flex-center uk-text-center">
                        <div className="uk-panel uk-width-xlarge@m uk-position-z-index" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
                            <img className="uk-position-top-left" width="24" src="images/objects/circle-01.png" alt="Object" style={{top: "0%", left: "-16%"}} />
                            <img className="uk-position-bottom-right" width="24" src="images/objects/x.png" alt="Object" style={{bottom: "16%", right: "-8%"}} />
                            <img className="uk-position-top-right" width="40" src="images/objects/ethereum-02.png" alt="Object" style={{top: "0%", right: "-16%"}} />
                            <img className="uk-position-bottom-left" width="48" src="images/objects/bitcoin-01.png" alt="Object" style={{bottom: "16%", left: "-8%"}} />
                            <h2 className="uk-h3 uk-heading-d1@m">Let's start minting</h2>
                            <Link href="#" className="uk-button uk-button-small uk-button-large@m uk-button-gradient uk-margin-small-top uk-margin-large-top@m">Join community</Link>
                        </div>
                    </div>
                </div>
            </div>          
        </>
    )
}

export default HomeOneCta;