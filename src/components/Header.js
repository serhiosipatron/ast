import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-car"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Тормозные колодки ast</h1>
                <p>Производство дисковых Тормозных Колодок в Украине.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:" onClick={() => {props.onOpenArticle('intro')}}>О нас</a></li>
                <li><a href="javascript:" onClick={() => {props.onOpenArticle('work')}}>Ассортимент</a></li>
                <li><a href="javascript:" onClick={() => {props.onOpenArticle('about')}}>Инструкция</a></li>
                <li><a href="javascript:" onClick={() => {props.onOpenArticle('contact')}}>Контакты</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
