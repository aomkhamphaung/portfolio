import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className="services section" id="services">
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>Web Development</h3>
                </div>

                <span className='services__button'>View More <i class="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className='services__modal-content'>
                        <i className='uil uil-times services__modal-close'></i>

                        <h3 className="services__modal-title">Web Development</h3>
                        <p className="services__modal-description">Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop user interface.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Website Development.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I create UX element interactions.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I position your company brand.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>UI/UX Design</h3>
                </div>

                <span className='services__button'>View More <i class="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                    <div className='services__modal-content'>
                        <i className='uil uil-times services__modal-close'></i>

                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description">Providing quality work to clients and companies.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop user interface.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Website Development.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I create UX element interactions.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I position your company brand.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design and mockups of products for companies.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services