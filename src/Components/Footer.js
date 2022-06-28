import React, {Component} from 'react';
import '../css/Footer.css';
import pict_tellegram from '../Pictures/telegram.svg';
import pict_github from '../Pictures/github.svg';
import pict_facebook from '../Pictures/facebook.svg';
// import {Navbar} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <footer>
                <hr/>
                <a href="https://t.me/KulikovSS" target="_blank" rel="noreferrer"><img className="icon" src={pict_tellegram} alt = "Telegram icon"/>Telegram</a>
                <a href="https://github.com/Kulitskov" target="_blank" rel="noreferrer"><img className="icon" src={pict_github} alt = "GitHub icon"/>Git</a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><img className="icon" src={pict_facebook} alt = "Facebook icon"/>Facebook</a>
            </footer>
        );
    }
}

export default Footer;