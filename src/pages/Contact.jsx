import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className=" flex justify-center items-center flex-col">
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />

      <div className="containerContact flex flex-col items-center justify-center sm:flex-row sm:justify-around">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a
                  href="https://www.linkedin.com/in/adamdipinto/"
                  target="_blank"
                >
                  _adamdipinto
                </a>
              </h3>
              <p>
                This is where I network and build my professional protfolio.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-twitter-square" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://twitter.com/AdamDipinto" target="_blank">
                  @AdamDipinto
                </a>
              </h3>
              <p>
                This is where I read news and network with different social
                groups.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1">
            <div className="content">
              <div className="icon">
                <i className="fa fa-github-square" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <h3>
                <a href="https://github.com/atom888" target="_blank">
                  atom888
                </a>
              </h3>
              <p>This is where I share code and work on projects.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center  mt-10 bg-white text-black'>
          <h1 className='text-3xl'>CO - ORDINATOR DETAILS</h1> 
        </div>
      </div>
    </div>
  );
}

export default Contact;
