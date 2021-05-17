import React from 'react';
import './footer.css';


export default function footer(){
    return (
        <>
        <footer>
            <div id="copyright">
                Copyright &#169; 2021 All rights reserved.
            </div>
            <div className="media">
            <a href="https://facebook.com"><div className="face"></div></a><a href="https://instagram.com"><div className="insta"></div></a>
            </div>
            <div>To help other students for other subjects kindly share it on example@gmail.com</div>
        </footer>
        </>
    )
}
