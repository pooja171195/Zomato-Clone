import './getsup.css'
import gsup from "../../images/gsup.png"

export const Getsup = () =>{

    return (
        <div className='gsup'>
            <div className="g-wrap">
                <div className='gwr-t'>
                    <h2>What do you get on sign-up</h2>
                    <p>Zomato Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</p>
                </div>
                <div className='gwr-b'>
                    <div className='gwr-b-l'>
                        <div className="gwr-b-l-txt">
                            <div className='gbl'>
                                <div className='gbl-t'>
                                    <div className='gblt-o'><p>1</p></div>
                                    <h2>Restaurant Partner app</h2>
                                    </div>
                                <p>Manage all your orders on your smartphone with our Android app</p>
                                </div>
                            </div>
                        <div className="gwr-b-l-txt">
                        <div className='gbl'>
                                <div className='gbl-t'>
                                    <div className='gblt-o'><p>2</p></div>
                                    <h2>Restaurant Partner web dashboard</h2>
                                    </div>
                                <p>Manage all your orders on your desktop or laptop</p>
                                </div>
                        </div>
                        <div className="gwr-b-l-txt">
                        <div className='gbl'>
                                <div className='gbl-t'>
                                    <div className='gblt-o'><p>3</p></div>
                                    <h2>API Integration</h2>
                                    </div>
                                <p>Manage all your orders on your existing Point of Sale (POS) or third party software</p>
                                </div>
                        </div>
                    </div>
                    <div className="gwr-b-r">
                        <div className='gwr-b-r-pic'>
                            <img src={gsup} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}