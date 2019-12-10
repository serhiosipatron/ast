import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">О нас</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Основным направлением деятельности предприятия AutoSTandart  является  производство дисковых тормозных колодок AST на автомобили:
            Mercedes Sprinter,  Mercedes Vario, Mercedes Vito, Volkswagen Crafter, Volkswagen LT, Volkswagen Т5,  Ford Transit, Iveco, Renault Trafic, Renault Master, Opel  Vivaro, Opel  Movano.
          </p>
          <p>
            Предприятие основано в 2005 году. Специалисты постоянно повышают квалификацию, имеют опыт более 10-ти лет в производстве, разработках и тестировании тормозных колодок.
          </p>
          <p>
            На сегодняшний день продукция AutoSTandart  пользуется спросом по всей территории Украины. Многолетний опыт в производстве, а также сотрудничество с транспортными компаниями дает возможность с уверенностью говорить о надежном качестве нашей продукции.
          </p>
          <p>
            Тормозные колодки AutoSTandart изготовлены с учетом всех требований к эксплуатации  тормозной системы коммерческого транспорта. В производстве применяются современные технологии и высококачественные материалы.
          </p>
          <p>
            В состав фрикционной смеси тормозной входят компоненты импортного производства,  которые используют ведущие производители. Многокомпонентность обеспечивает надежную работу тормозных колодок, придает им  высокую эффективность торможения в разных по воздействию механических нагрузок и  колебаниях температур.
          </p>
          <p>
            Качество продукции ТМ AST подтверждено сертификатом Государственной системы сертификации УкрСЕПРО Министерства торговли и развития в Украине, соответствует требованиям  стандарта ДСТУ UN/ECE R 90-01:2005 р.5
          </p>
          <p>
            КАРТИНКА???
          </p>
          <h2 className="major">Качество</h2>
          <p>
            Перед запуском в производство тормозные колодки AutoSTandart испытываются во всех режимах торможения на стендах независимого  автомобилестроительного завода в условиях, максимально приближенных к реальным условиям эксплуатации автомобиля, а также проходят дорожные испытания и тестируется непосредственно на маршрутах городов и дорог.
          </p>
          Испытания охватывают следующие параметры:
          <ul>
            <li>
              коэффициент трения;
            </li>
            <li>
              износ диска;
            </li>
            <li>
              усилие отрыва накладки от основания;
            </li>
            <li>
              температурный режим;
            </li>
            <li>
              эффективность торможения
            </li>
          </ul>
          Разработанная специалистами и внедренная в производство технология изготовления тормозных колодок AutoSTandart  гарантирует:
          <ul>
            <li>
              Эффективное бесшумное торможение без посторонних звуков;
            </li>
            <li>
              тормозные колодки дают минимальный и  равномерный износ диска (коэффициент износа дисков меньше других производителей);
            </li>
            <li>
              эффективность и  качество торможения сохраняются   при повышенных нагрузках    на сложных участках городских дорог и трасс
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Ассортимент</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
