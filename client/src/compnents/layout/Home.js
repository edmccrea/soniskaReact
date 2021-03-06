import React from 'react';
import './Home.css';
import bbc from '../../imgs/bbc.png';
import eurovision from '../../imgs/eurovision.png';
import melodifestivalen from '../../imgs/melodifestivalen.png';
import MoS from '../../imgs/MoS.png';
import mtv from '../../imgs/mtv.png';
import sony from '../../imgs/sony.png';
import svt from '../../imgs/svt.png';
import universal from '../../imgs/universal.png';
import warner from '../../imgs/warner.png';

const Home = () => {
  return (
    <div>
      <section className='hero'>
        <div className='layer'>
          <div className='empty'></div>
          <div className='hero-flex'>
            <div className='main-title-wrapper'>
              <h1 className='main-title'>SONISKA</h1>
              <p className='main-subtitle'>Malmö based sound Mastering</p>
            </div>
            <div className='upload-section' id='drop-area'>
              <form className='upload-form' action=''>
                <i className='fas fa-cloud-upload-alt cloud-icon'></i>
                <p className='upload-text'>
                  Drag and drop a file here to get started.
                </p>
                <p className='supported-files'>
                  Supported file formats: .wav, .aiff
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*} Mastering */}
      <section className='mastering-wrapper section-wrapper'>
        <div className='info-wrapper'>
          <h2 className='lead'>What is Mastering?</h2>
          <p className='info-text'>
            Mastering is the term most commonly used to refer to the process of
            taking an audio mix and preparing it for distribution. There are
            several considerations in this process: unifying the sound of a
            record, maintaining consistency across an album, and preparing for
            distribution.
            <br />
            <br /> When Mastering with Soniska our main focus is to provide our
            customers with a fresh, experienced and objective listening
            perspective in order to make your audio material to sound better and
            to optimise you projects for compatibility with all listening media.
            We make sure your music is ready for release and we listen to you as
            we want you to be happy with the final master.
            <br />
            <br />
            <a href='/pricing' className='more-post'>
              Click here for more information and a full price list.
            </a>
          </p>
        </div>
        <div className='info-img'>
          <img
            alt='Man in music studio'
            className='slider-img'
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTcgMGgydjNoLTJ2LTN6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiM0NDQ0NDQiIGQ9Ik02IDR2M2gxdjloMnYtOWgxdi0zeiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjNDQ0NDQ0IiBkPSJNMiAwaDJ2OGgtMnYtOHoiPjwvcGF0aD4KPHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTEgOXYzaDF2NGgydi00aDF2LTN6Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiM0NDQ0NDQiIGQ9Ik0xMiAwaDJ2MTBoLTJ2LTEweiI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjNDQ0NDQ0IiBkPSJNMTEgMTF2M2gxdjJoMnYtMmgxdi0zeiI+PC9wYXRoPgo8L3N2Zz4K'
          />
        </div>
      </section>

      <section className='mastering-table'>
        <h2 className='lead'>Mastering Pricing</h2>
        <p className='info-text'>
          We offer a free test mastering so you can try our services. It is for
          one full song and we make the master available to listen in high
          resolution streaming. We have some special offers during these
          difficult times. Check them out below!
        </p>

        <div className='panel'>
          <div className='mastering-plan'>
            <i className='far fa-play-circle fa-5x mastering-image'></i>
            <h2 className='mastering-header'>Single</h2>
            <ul className='mastering-features'>
              <li className='mastering-features-item'>Test</li>
            </ul>
            <span className='mastering-price'>
              500<span className='currency'>kr</span>
            </span>
            <a href='/account/upload' className='price-button'>
              Start
            </a>
          </div>
          <div className='mastering-plan'>
            <i className='fas fa-gift fa-5x mastering-image'></i>
            <h2 className='mastering-header'>Test Mastering</h2>
            <ul className='mastering-features'>
              <li className='mastering-features-item'>Test</li>
            </ul>
            <span className='mastering-price'>Free</span>
            <a href='/account/freetest' className='price-button is-featured'>
              Start
            </a>
          </div>
          <div className='mastering-plan'>
            <i className='fas fa-compact-disc fa-5x mastering-image'></i>
            <h2 className='mastering-header'>Album</h2>
            <ul className='mastering-features'>
              <li className='mastering-features-item'>10 Songs</li>
            </ul>
            <span className='mastering-price'>
              3200<span className='currency'>kr</span>
            </span>
            <a href='/account/upload' className='price-button'>
              Start
            </a>
          </div>
        </div>
      </section>

      {/* Spotify Showcase */}
      <section className='spotify-showcase'>
        <div className='spotify-container'>
          <iframe
            title='spotifyPlayer'
            src='https://open.spotify.com/embed/playlist/1n852LJwHGX7uLUqn8qOxC'
            width='300'
            height='80'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
            className='spotify-player'
          ></iframe>
          <p className='spotify-text'>
            Over the years we have mastered over 5000 songs and here is a small
            selection across all genres.
          </p>
        </div>
      </section>

      {/*Post Production */}
      <section className='post-production section-wrapper'>
        <div className='info-wrapper'>
          <h2 className='lead'>Post Production</h2>
          <p className='info-text'>
            We built the studio with a 108″ screen for a better cinema
            experience, we can organise a simple cinema projection for you to
            check your project and experience it on the big screen in surround.
            We have enough space to comfortably accommodate and sit a team of 6
            to 8 people. <br />
            <br />
            Our surround system allows for surround work. The studio is located
            in a large studio complex with access to parking, kitchen, toilet,
            conference space and we are surrounded by other industry
            professional and studios which offers the possibility to expand
            possibilities for your project.
            <br />
            <br />
            <a href='/pricing' className='more-post'>
              Click here to find out more.
            </a>
          </p>
        </div>
        <div className='info-img'>
          <img
            alt='sound waves'
            className='wave-img'
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDMxNCAzMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxNCAzMTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik03LDEzOC40MjhjLTMuODY2LDAtNywzLjEzNC03LDd2MjMuMTQ1YzAsMy44NjYsMy4xMzQsNyw3LDdzNy0zLjEzNCw3LTd2LTIzLjE0NUMxNCwxNDEuNTYxLDEwLjg2NiwxMzguNDI4LDcsMTM4LjQyOHoiLz4NCgk8cGF0aCBkPSJNMzQuMjczLDEzOC40MjhjLTMuODY2LDAtNywzLjEzNC03LDd2MjMuMTQ1YzAsMy44NjYsMy4xMzQsNyw3LDdzNy0zLjEzNCw3LTd2LTIzLjE0NQ0KCQlDNDEuMjczLDE0MS41NjEsMzguMTQsMTM4LjQyOCwzNC4yNzMsMTM4LjQyOHoiLz4NCgk8cGF0aCBkPSJNNjEuNTQ2LDEyOC42MzVjLTMuODY2LDAtNywzLjEzNC03LDd2NDIuNzNjMCwzLjg2NiwzLjEzNCw3LDcsN3M3LTMuMTM0LDctN3YtNDIuNzMNCgkJQzY4LjU0NiwxMzEuNzY5LDY1LjQxMiwxMjguNjM1LDYxLjU0NiwxMjguNjM1eiIvPg0KCTxwYXRoIGQ9Ik04OC44MTgsMTE3LjA2M2MtMy44NjYsMC03LDMuMTM0LTcsN3Y2NS44NzVjMCwzLjg2NiwzLjEzNCw3LDcsN2MzLjg2NiwwLDctMy4xMzQsNy03di02NS44NzUNCgkJQzk1LjgxOCwxMjAuMTk2LDkyLjY4NSwxMTcuMDYzLDg4LjgxOCwxMTcuMDYzeiIvPg0KCTxwYXRoIGQ9Ik0xMTYuMDkyLDk2LjU4OGMtMy44NjYsMC03LDMuMTM0LTcsN3YxMDYuODI0YzAsMy44NjYsMy4xMzQsNyw3LDdjMy44NjYsMCw3LTMuMTM0LDctN1YxMDMuNTg4DQoJCUMxMjMuMDkyLDk5LjcyMiwxMTkuOTU4LDk2LjU4OCwxMTYuMDkyLDk2LjU4OHoiLz4NCgk8cGF0aCBkPSJNMTQzLjM2NCw0OC4wNzFjLTMuODY2LDAtNywzLjEzNC03LDd2MjAzLjg1N2MwLDMuODY2LDMuMTM0LDcsNyw3YzMuODY2LDAsNy0zLjEzNCw3LTdWNTUuMDcxDQoJCUMxNTAuMzY0LDUxLjIwNSwxNDcuMjMsNDguMDcxLDE0My4zNjQsNDguMDcxeiIvPg0KCTxwYXRoIGQ9Ik0xNzAuNjM3LDY1LjQzYy0zLjg2NiwwLTcsMy4xMzQtNyw3VjI0MS41N2MwLDMuODY2LDMuMTM0LDcsNyw3YzMuODY2LDAsNy0zLjEzNCw3LTdWNzIuNDMNCgkJQzE3Ny42MzcsNjguNTYzLDE3NC41MDMsNjUuNDMsMTcwLjYzNyw2NS40M3oiLz4NCgk8cGF0aCBkPSJNMTk3LjkwOSwxMDAuMTQ4Yy0zLjg2NiwwLTcsMy4xMzQtNyw3djk5LjcwM2MwLDMuODY2LDMuMTM0LDcsNyw3YzMuODY2LDAsNy0zLjEzNCw3LTd2LTk5LjcwMw0KCQlDMjA0LjkwOSwxMDMuMjgyLDIwMS43NzUsMTAwLjE0OCwxOTcuOTA5LDEwMC4xNDh6Ii8+DQoJPHBhdGggZD0iTTIyNS4xODMsMTIxLjA2N2MtMy44NjYsMC03LDMuMTM0LTcsN3Y1Ny44NjRjMCwzLjg2NiwzLjEzNCw3LDcsN3M3LTMuMTM0LDctN3YtNTcuODY0DQoJCUMyMzIuMTgzLDEyNC4yMDEsMjI5LjA0OSwxMjEuMDY3LDIyNS4xODMsMTIxLjA2N3oiLz4NCgk8cGF0aCBkPSJNMjUyLjQ1NiwxMjkuOTcxYy0zLjg2NiwwLTcsMy4xMzQtNyw3djQwLjA1OWMwLDMuODY2LDMuMTM0LDcsNyw3YzMuODY2LDAsNy0zLjEzNCw3LTd2LTQwLjA1OQ0KCQlDMjU5LjQ1NiwxMzMuMTA1LDI1Ni4zMjIsMTI5Ljk3MSwyNTIuNDU2LDEyOS45NzF6Ii8+DQoJPHBhdGggZD0iTTI3OS43MjgsMTM4LjQyOGMtMy44NjYsMC03LDMuMTM0LTcsN3YyMy4xNDVjMCwzLjg2NiwzLjEzNCw3LDcsN2MzLjg2NiwwLDctMy4xMzQsNy03di0yMy4xNDUNCgkJQzI4Ni43MjgsMTQxLjU2MSwyODMuNTk0LDEzOC40MjgsMjc5LjcyOCwxMzguNDI4eiIvPg0KCTxwYXRoIGQ9Ik0zMDcsMTM4LjQyOGMtMy44NjYsMC03LDMuMTM0LTcsN3YyMy4xNDVjMCwzLjg2NiwzLjEzNCw3LDcsN3M3LTMuMTM0LDctN3YtMjMuMTQ1DQoJCUMzMTQsMTQxLjU2MSwzMTAuODY2LDEzOC40MjgsMzA3LDEzOC40Mjh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
          />
        </div>
      </section>

      {/* About */}

      <section className='about'>
        <div className='about-img'>
          <img
            src='https://images.unsplash.com/photo-1548502632-6b93092aad0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt=''
          />
        </div>
        <div className='about-main'>
          <h2>About</h2>
          <div className='about-nav'>
            <ul>
              <li className='contact-btn about-btn about-active'>
                Contact<div className='contact-underline'></div>
              </li>
              <li className='equipment-btn about-btn'>
                Equipment
                <div className='equipment-underline about-inactive'></div>
              </li>
              <li className='location-btn about-btn'>
                Location
                <div className='location-underline about-inactive'></div>
              </li>
            </ul>
          </div>
          <div className='about-content'>
            <div className='contact-content'>
              <p className='about-info-text'>Get in touch with us.</p>
              <form action='' className='contact-form'>
                <label for='name' className='form-label'>
                  Name:
                </label>
                <input type='text' id='name' className='form-input' required />
                <label for='email' className='form-label'>
                  Email:
                </label>
                <input type='text' id='email' className='form-input' required />
                <label for='contents' className='form-label'>
                  Message:
                </label>
                <textarea
                  name='contents'
                  id='contents'
                  cols='30'
                  rows='10'
                  className='form-input'
                  required
                ></textarea>
                <button className='form-btn'>Submit</button>
              </form>
            </div>
            <div className='equipment-content'>
              <p className='about-info-text'>
                Here's the techincal stuff. We have a huge range of professional
                tools at Soniska. Find the full details listed below.{' '}
              </p>
              <div className='equipment-wrapper'>
                <div className='equipment-col-1'>
                  <h4>Monitoring</h4>
                  <ul>
                    <li>Wilmslow Audio Main Custom speakers & Crossover</li>
                    <li>Nord Two ICE Power 600w Stereo 1200AS2 Power Amp</li>
                    <li>5.1 Surround Unity Audio The rock MK2</li>
                    <li>Audese LCD-X, Audeze LCD-2</li>
                    <li>SPL 2489 Surround monitor controller</li>
                    <li>Silver custom Cables</li>
                  </ul>
                  <h4>Converters</h4>
                  <ul>
                    <li>Lynx Hilo</li>
                    <li>Apogee Symphony 2×6</li>
                  </ul>
                  <h4>Controllers/Video</h4>
                  <ul>
                    <li>Dual Slate Raven MTI2</li>
                    <li>BenQ Full HD projector + 108″ screen</li>
                  </ul>
                </div>
                <div className='equipment-col-2'>
                  <h4>Analog Outboard</h4>
                  <ul>
                    <li>Ström Dino Vari-mu Compressor</li>
                    <li>By Mumson & Fletcher MS76 with mastering mods</li>
                    <li>Occult Audio Tube Clipper</li>
                    <li>Occult Audio Passive EQ</li>
                    <li>DR MQ5 mastering equalizer</li>
                  </ul>
                  <h4>Tape Recorders</h4>
                  <ul>
                    <li>Ampex AG-440b 2track 1/4 in 7.5/15 IPS</li>
                    <li>Akai M8 tape recorder preamps</li>
                    <li>Pioneer RG1 dynamic Processor (balanced mods)</li>
                  </ul>
                  <h4>DAW & Software</h4>
                  <ul>
                    <li>Apple iMac 3,4 GHz i5, Apple Macbook 2.9 GHz i5</li>
                    <li>Avid Pro tools 2020 HD Ultimate , Cockos Reaper...</li>
                    <li>Too Many plugins to list!</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='location-content'>
              <p className='about-info-text'>
                Located in central Malmö, our 90m<sup>2</sup> studio is at the
                heart of a huge studio complex and our 60m<sup>2</sup> listening
                room allows for a full band to join the session. We offer
                attended sessions at no extra cost, just let us know and we'll
                get some coffee or some pizza and arrange the session for you.{' '}
              </p>
              <h4>Find us at:</h4>
              <ul>
                <li>Södra Bultoftavägen 51g</li>
                <li>21222</li>
                <li>Malmö</li>
              </ul>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35226.591013639016!2d12.99385884754236!3d55.5946144900075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3d06477dcc7%3A0x287dbaebb92ad83d!2sS%C3%B6dra%20Bulltoftav%C3%A4gen%2051%2C%20212%2022%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1615125085237!5m2!1sen!2sse'
                width='100%'
                height='20%'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
                className='map'
                title='googleMap'
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className='clients'>
        <div className='gallery-item'>
          <img src={mtv} alt='MTV logo' />
        </div>
        <div className='gallery-item'>
          <img src={universal} alt='Universal logo' />
        </div>
        <div className='gallery-item'>
          <img src={bbc} alt='BBC logo' />
        </div>
        <div className='gallery-item'>
          <img src={MoS} alt='Ministry of Sound logo' />
        </div>
        <div className='gallery-item'>
          <img src={svt} alt='SVT logo' />
        </div>
        <div className='gallery-item'>
          <img src={warner} alt='Warner logo' />
        </div>
        <div className='gallery-item'>
          <img src={sony} alt='Sony logo' />
        </div>
        <div className='gallery-item'>
          <img src={eurovision} alt='Eurovision logo' />
        </div>
        <div className='gallery-item'>
          <img src={melodifestivalen} alt='Melodifestivalen logo' />
        </div>
      </section>
    </div>
  );
};

export default Home;
