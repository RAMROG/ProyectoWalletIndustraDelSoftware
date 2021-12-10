import React from 'react';
import { Link } from 'react-router-dom';
import "../../../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import finanzas from '../../assets/img/finanzas.jpg';

const Equipo = () => {
    return (
        <div className="">
            <header className="header header-scrolled fixed-top d-flex align-items-center header-transparent">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1 className="text-light">
                            <span>Wallet</span>
                        </h1>
                            {/**ARREGLAR LOGO POR SI SE NECESITA */}
                            {/*<Link to="/"><img src={Logo} className="img-fluid" alt="" /></Link>*/}
                    </div>
                    <nav className="navbar-global">
                        <ul>
                            <li><Link to="/landing-page" ><FontAwesomeIcon icon={['fa', 'home']}/> Inicio</Link></li>
                            <li><Link to="/equipo" className="active"><FontAwesomeIcon icon={['fa', 'users']}/> Equipo</Link></li>
                            <li><Link to="/create-user"><FontAwesomeIcon icon={['fa', 'align-justify']}/> Suscribete</Link></li>
                            <li><Link to="/login"><FontAwesomeIcon icon={['fa', 'user']}/> Iniciar Sesion</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            <main className="main">
                {/*<!-- ======= Our Team Section ======= -->*/}
                <section className="breadcrumbs">
                <div className="container">

                    <div className="d-flex justify-content-between align-items-center">
                    <h2>Nuestro Equipo</h2>
                    <ol>
                        <li><Link to="/landing-page">Inicio</Link></li>
                        <li>Our Team</li>
                    </ol>
                    </div>

                </div>
                </section>{/*<!-- End Our Team Section -->*/}
                <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        {/*<img src="assets/img/team/team-1.jpg" className="img-fluid" alt="">*/}
                                        <div className="social">
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Cristopher Bueso Valladares</h4>
                                        <span>FrontEnd</span>
                                        <p>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        {/*<img src="assets/img/team/team-3.jpg" className="img-fluid" alt="">*/}
                                        <div className="social">
                                    
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Victor Miguel Pineda</h4>
                                        <span>FrontEnd</span>
                                        <p>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <div className="member-img">
                                        {/*<img src="assets/img/team/team-4.jpg" className="img-fluid" alt="">*/}
                                        <div className="social">
                                        
                                        </div>
                                    </div>
                                    <div className="member-info">
                                        <h4>Roger Alfredo Molina</h4>
                                        <span>FrontEnd</span>
                                        <p>Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
                                    </div>
                                </div>
                            </div>


                          
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                    <div className="footer-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4>Suscribete</h4>
                                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                </div>
                                <div className="col-lg-6">
                                    <form>
                                        {/**<input className="form-control" placeholder="Correo" type="email" onChange={(e) => setEmail(e.target.value)}/> */}
                                        <input type="submit" value="Suscribete"></input><input type="email" name="email"></input>
                                    {/*<input type="email" name="email"><input type="submit" value="Subscribe">*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Wallet</span></strong>. 
                        </div>
                        <div className="credits">
                            Diseñado por Grupo Wallet
                        </div>
                    </div>
                </footer>
        </div>
    )
}

export default Equipo;
