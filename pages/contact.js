import Footer from '../components/layouts/Footer';
import HeaderInner from '../components/layouts/HeaderInner';
export default function NerkoTemplate() {
  return (
    
        <>		
        <HeaderInner/>
            <div className="uni-contact uk-section uk-section-large@m uk-panel uk-overflow-hidden uk-border-top">
                <header className="uni-page-header">
                    <div className="uk-container">
                        <h1 className="heading uk-h3 uk-h1@m uk-text-center">Contact</h1>
                    </div>
                </header>
                <div className="uk-margin-top uk-margin-large-top@m">
                    <div className="uk-container uk-container-xsmall">
                        <div className="uk-grid uk-child-width-1-1" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-small uk-card-large@m uk-card-default uk-card-border uk-radius-medium uk-radius-large@m dark:uk-background-white-5">
                                    <form action="?" className="uk-grid uk-grid-xsmall uk-child-width-1-1" data-uk-grid>
                                        <div className="uk-width-1-2@m">
                                            <div className="uk-form-controls">
                                                <input className="uk-input uk-form-medium uk-text-bold" type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="uk-width-1-2@m">
                                            <div className="uk-form-controls">
                                                <input className="uk-input uk-form-medium uk-text-bold" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="uk-form-controls">
                                            <input className="uk-input uk-form-medium uk-text-bold" type="text" placeholder="Subject" />
                                        </div>
                                        <div className="uk-form-controls">
                                            <textarea className="uk-textarea uk-padding uk-height-xsmall uk-radius-large uk-text-bold" rows="5" placeholder="Type your message"></textarea>
                                        </div>
                                        <div className="uk-form-controls uk-flex-center">
                                            <button type="submit" className="uk-button uk-button-primary uk-width-small@m uk-margin-auto">Send message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-small uk-card-large@m">
                                    <div className="uk-grid uk-child-width-1-2@m" data-uk-grid="">
                                        <div className="uk-panel">
                                            <h2 className="uk-h5 uk-h4@m">Other details</h2>
                                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat perferendis eveniet mollitia omnis iste voluptatibus impedit quaerat modi facere est?</p>
                                        </div>
                                        <div className="uk-panel">
                                            <ul className="uk-list">
                                                <li><a href="tel:123-456-7890" className="uk-link-reset">123-456-7890</a></li>
                                                <li><a href="mailto:support@nftmarket.com" className="uk-link-reset">support@nftmarket.com</a></li>
                                                <li>120 HT Baker ST, Marylebone, Leeds</li>
                                            </ul>
                                            <ul className="uk-subnav uk-subnav-small uk-margin-top uk-text-gray-70 dark:uk-text-gray-40">
                                                <li>
                                                    <a aria-label="twitter" href="https://twitter.com/unistudioco"><i className="uk-icon-small brand-twitter"></i></a>
                                                </li>
                                                <li>
                                                    <a aria-label="facebook" href="https://facebook.com/unistudioco"><i className="uk-icon-small brand-facebook"></i></a>
                                                </li>
                                                <li>
                                                    <a aria-label="snapchat" href="https://snapchat.com/unistudioco"><i className="uk-icon-small brand-snapchat"></i></a>
                                                </li>
                                                <li>
                                                    <a aria-label="youtube-play" href="https://youtube.com/unistudioco"><i className="uk-icon-small brand-youtube-play"></i></a>
                                                </li>
                                                <li>
                                                    <a aria-label="reddit-alien" href="https://reddit.com/unistudioco"><i className="uk-icon-small brand-reddit-alien"></i></a>
                                                </li>
                                                <li>
                                                    <a aria-label="quora" href="https://quora.com/unistudioco"><i className="uk-icon-small brand-quora"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        </>        
  	);
}
