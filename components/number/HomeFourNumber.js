const HomeFourNumber = () =>{
    return(
        <div id="uni_numbers" class="uni-numbers uk-section uk-section-large@m">
            <div class="uk-container">
                <div class="uk-panel">
                    <img class="uk-position-bottom-left uk-text-secondary uni-animation-delay-large" width="32" src="images/objects/bitcoin-01.png" alt="Object" style={{bottom: "-32%", left: "30%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                    <img class="uk-position-top-right" width="24" src="images/objects/ethereum-01.png" alt="Object" style={{top: "-25%", right: "25%"}} data-anime="opacity:[0, 1]; scale:[0, 1]; onview: -250; delay: 200;" />
                    <div class="uk-grid uk-grid-large uk-grid-divider uk-child-width-expand@m uk-text-center" data-uk-grid="" data-anime="targets: > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -250; delay: anime.stagger(100);">
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">400k+</h4>
                                <span>Wallets Connected</span>
                            </div>
                        </div>
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">20k+</h4>
                                <span>Collections droped.</span>
                            </div>
                        </div>
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">230+</h4>
                                <span>Creative artists</span>
                            </div>
                        </div>
                        <div>
                            <div class="uk-panel">
                                <h4 class="uk-h3 uk-h1@m uk-margin-xsmall uk-margin@m">2.5x</h4>
                                <span>Estimated Value</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeFourNumber
