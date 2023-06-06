import React from 'react'
import './home.css';

const Landing = () => {
  return (
    <>
      <div className="homeLanding">
        <section class="home" id="home">
          <div class="text">
            <h1><span>Welcome</span> to <br /> QR Scanner</h1><p>Lorem ipsum dolor sit amet consectetur <br />dipisicing elit. Assumenda, quasi.</p>
          </div>
        </section>

        <div class="about-section">
          <section class="about-landing" id="about-landing">
            <div class="heading">
              <span>About Us</span>
              <h1>Best Customer Experience</h1>
            </div>

            <div class="about-container">
              <div class="about-img">
                <img src='/img/about.png' alt="about" />
              </div>

              <div class="about-text">
                <span>About Us</span>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta eligendi neque nemo praesentium itaque saepe, dicta quae eum quidem modi, suscipit in natus placeat ipsa obcaecati ipsum aperiam amet et beatae recusandae earum minus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa ab qui reprehenderit hic modi, eos temporibus aliquam.</p>
                <p class="btn">Learn More</p>
              </div>

            </div>
          </section>
        </div>


        <div class="services-section">
          <section class="services" id="Services">

            <div class="row">
              <div class="heading">
                <span>Our Services</span>
                <h1>We Provide Best Services</h1>
              </div>
            </div>

            <div class="row">

              <div class="column">
                <div class="card">
                  <div class="icon-wrapper">
                    <i class="fa-solid fa-id-card"></i>
                  </div>
                  <h3>Documnets</h3>
                  <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>


              <div class="column">
                <div class="card">
                  <div class="icon-wrapper">
                    <i class="fa-solid fa-file"></i>
                  </div>
                  <h3>Driver Details</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>


              <div class="column">
                <div class="card">
                  <div class="icon-wrapper">
                    <i class="fas fa-wrench"></i>
                  </div>
                  <h3>Checklist</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                    consequatur necessitatibus eaque.
                  </p>
                </div>
              </div>
            </div>

            <div class="reviews-section">
              <section id="testimonials">

                <div class="row">
                  <div class="heading">
                    <span>Testimonials</span>
                    <h1>Our Work Says About Us</h1>
                  </div>
                </div>

                <div class="testimonial-box-container">

                  <div class="testimonial-box">

                    <div class="box-top">

                      <div class="profile">

                        <div class="profile-img">
                          <img src='/img/rev1.jpg' alt='rev1' />
                        </div>

                        <div class="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>

                    <div class="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>

                  <div class="testimonial-box">

                    <div class="box-top">

                      <div class="profile">

                        <div class="profile-img">
                          <img src='/img/rev2.jpg' alt='rev2' />
                        </div>

                        <div class="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>

                    <div class="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>
                  <div class="testimonial-box">

                    <div class="box-top">

                      <div class="profile">

                        <div class="profile-img">
                          <img src='/img/rev3.jpg' alt='rev3' />
                        </div>

                        <div class="name-user">
                          <strong>Adarsh kumar</strong>
                          <span>adarshs738@gmsail.com</span>
                        </div>
                      </div>

                      <div class="reviews">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                      </div>
                    </div>

                    <div class="client-comment">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p>
                    </div>
                  </div>
                </div>

              </section>
            </div>
          </section>
        </div>

        <section>
          <div class="row">
            <div class="heading">
              <span>Contact Us</span>
              <h1>Get In Touch</h1>
            </div>
          </div>

          <div class="contact-container">
            <div class="content">
              <div class="left-side">
                <div class="address details">
                  <i class="fas fa-map-marker-alt" style={{ color: "gray" }}></i>
                  <div class="topic">Address</div>
                  <div class="text-one">BIT SINDRI</div>
                  <div class="text-two">SINDRI, SHEHARPURA</div>
                </div>

                <div class="phone details">
                  <i class="fas fa-phone-alt" style={{ color: "gray" }}></i>
                  <div class="topic">Phone</div>
                  <div class="text-one">+0098 9893 5647</div>
                  <div class="text-two">+0096 3434 5678</div>
                </div>

                <div class="email details">
                  <i class="fas fa-envelope" style={{ color: "gray" }}></i>
                  <div class="topic">Email</div>
                  <div class="text-one">adarshs738@gmail.com</div>
                  <div class="text-two">adarshs738@gmail.com</div>
                </div>

              </div>

              <div class="right-side">
                <div class="topic-text">Send us a message</div>
                <p>If you have any query you can message here</p>
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Enter your name" />
                  </div>

                  <div class="input-box">
                    <input type="text" placeholder="Enter your email" />
                  </div>

                  <div class="input-box message-box">
                    <input type="text-area" placeholder="Enter your message" />
                  </div>

                  <div class="button">
                    <input type="button" value="Send Now" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Landing