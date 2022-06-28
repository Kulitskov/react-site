import React, {Component} from 'react';
import avatar from '../Pictures/avatar.jpg'
import '../css/Home.css'

class Home extends Component {
    render() {
        return (
            <div>
                {/*Hello*/}
                <div className="photo_text">
                    <img className="photo" src={avatar} alt="а где фотка"/>

                    <div>
                        <h1 className="name" >Куликов Сергей</h1>
                        <h2 className="name"> Бвт2001 </h2>
                        <h3 className="name">Результат данного сайта - мое психическое порушенье</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;