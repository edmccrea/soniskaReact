import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className='faq-body'>
      <div className='faq-container'>
        <img className='faq-img' src='/imgs/logo.png' alt='' />
        <h1 className='faq-title'>Frequently Asked Questions (FAQ)</h1>
        <button className='faq-accordion'>
          What is the mastering process?
        </button>
        <div className='faq-panel'>
          <h2 className='faq-subtitle'>Test</h2>
          <ul className='faq-list'>
            <li>Balance harmonics</li>
            <li>Spectral correction</li>
            <li>Control dynamics</li>
            <li>Optimise loudness</li>
            <li>Add analog warmth</li>
            <li>Give coherence to an album</li>
            <li>Optimise for playability on all media</li>
          </ul>
          <h2 className='faq-subtitle'>Test</h2>
          <ul className='faq-list'>
            <li>Adjust stereo width and add ambiance</li>
            <li>Edit flaws</li>
            <li>Adjust length of silence between songs and PQ points</li>
            <li>Insert Metadata</li>
            <li>
              Apply noise reduction to eliminate clicks, pops, hum and hiss
            </li>
          </ul>
        </div>
        <button className='faq-accordion'>
          What are Apple Digital Masters?
        </button>
        <div className='faq-panel'>
          <p>
            <em>
              Soniska is an Apple certified Apple digital masters provider
            </em>
            , we can provide a master that can be labeled Apple Digital Master
            (depending on your aggregator or distributor capability).
            <br />
            <br />
            In short:
            <br />
            <br />
            When creating a master, mastering engineers take into account the
            limitations and characteristics of the medium or destination format,
            as well as the listening environment of their audience. We follow
            Apple’s guidelines as to provide a master that is optimised for
            iTunes (and as test have shown it will in general also sound better
            on all media).
            <br />
            <br />
            We have found that a true Apple Digital Master should allow around
            1db of headroom to avoid digital clipping. In this regard however,
            we need to mention that depending of the medium you use to
            distribute your music you will have to provide one wav file that
            will be sent to all online shops or streaming services without
            regards to the mastered for iTunes guideline. Although we strongly
            recommend that the ADM guidelines be followed for all release,
            please let us know and we will adapt the master so it sounds optimal
            for all medias or provide an extra master that will peak higher than
            the ADM master.
            <br />
            <br />
            For you to check the ADM quality we will send you the preview in AAC
            format for you to judge for yourself and compare with your favourite
            artists.
          </p>
        </div>
        <button className='faq-accordion'>How do I pay?</button>
        <div className='faq-panel'>
          <p>
            We will send you an invoice at the same time as the final master
            file, you pay only when you are satisfied.
            <br />
            <br />
            You can choose pay by credit or debit card via paypal at no extra
            cost, by paypal transfer, By Swish or by Bankgiro transfer to
            874-7560 and leave you name as a reference in the transfer.
            <br />
            <br />
            For international bank transfer let us know in the order form and we
            will forward you our IBAN and BIC numbers for a transfer.
          </p>
        </div>
        <button className='faq-accordion'>How do I order &#38; upload?</button>
        <div className='faq-panel'>
          <p>
            Go to the “Order Mastering” page and chose the mastering you
            require, fill in the order form then click the “Submit & Upload
            button” and you will have access to the Wetransfer upload page to
            upload your audio material.
            <br />
            <br />
            You should receive a confirmation email when you submit the form and
            when you have finished the upload. If you haven’t received any email
            in your inbox, check your junk mail folder.
          </p>
        </div>
        <button className='faq-accordion'>What is the waiting time?</button>
        <div className='faq-panel'>
          <p>
            Depending on the amount of work ongoing we are usually able to
            deliver single tracks and EPs within 3 to 4 days and albums anytime
            within 7 days. In any case we’ll keep you informed if we are in a
            busy period but do let us know if your project has a crazy short
            deadline.
          </p>
        </div>
        <button className='faq-accordion'>What is the Free Test Master?</button>
        <div className='faq-panel'>
          <p>
            It’s a real master of 1 track as we would normally do except that
            it’s free and that we send you the master available for streaming in
            high resolution 24bit 96kHz.
          </p>
        </div>
        <button className='faq-accordion'>
          How do I prepare a mix for mastering?
        </button>
        <div className='faq-panel'>
          <p>
            Please do not over compress or use any limiter on the final mix
            unless it’s for tonal purpose. We advise that the sound files you
            send do not peak above -3db but You can normalise to 0db if you
            want, we will level the sound to our needs.
          </p>
        </div>
        <button className='faq-accordion'>
          What format should I send the mixes to be mastered?
        </button>
        <div className='faq-panel'>
          <p>
            We accept .wav and .aiff files of a minimum resolution of 16bit 44.1
            kHz.
            <br />
            <br />
            We recommend a bit depth of 24 bit and a resolution of minimum 48khz
            , ideally 88.2, 96khz or above.
            <br />
            <br />
            for MFIT the minimum resolution is 24 bit 44.1khz
            <br />
            <br />
            Please do not upsample the files{' '}
            <em>and please do not send MP3.</em>
          </p>
        </div>
        <button className='faq-accordion'>
          How many revision/recalls can I get?
        </button>
        <div className='faq-panel'>
          <p>
            You can ask for as many recalls or revisions as you want.
            <br />
            <br />
            Our experience is that our customers are generally satisfied with
            the first or second master and we rarely do more than 4 or 5 recalls
            but we want you to be 100% satisfied so you can ask for as many
            revisions as you want regarding any aspect of the master.
          </p>
        </div>
        <button className='faq-accordion'>
          What happens if I am not happy with the master?
        </button>
        <div className='faq-panel'>
          <p>
            If you are not happy, get back to us and we will make the changes
            required for your satisfaction.
            <br />
            <br />
            In the extreme case you really don’t want to go further with us,
            simply let us know and we will refund you if you have already paid.
          </p>
        </div>
        <button className='faq-accordion'>
          Can you insert IRSC codes and metadata?
        </button>
        <div className='faq-panel'>
          <p>
            Yes of course we can add the irsc codes and metadata to the DDP,
            simply add the codes to the order form or email them to us later if
            you don’t have them yet.
          </p>
        </div>
        <button className='faq-accordion'>Do you review mixes?</button>
        <div className='faq-panel'>
          <p>
            Yes we can review mixes free of charge, no problem, just send us the
            file!
            <br />
            <br />
            We asses the mix on the first listen and we actually would rather
            you go back to the mix if any element of the mix is out of place
            than try to correct the impossible with the mastering process.
          </p>
        </div>
        <button className='faq-accordion'>What is a Stem Mastering?</button>
        <div className='faq-panel'>
          <p>
            Stem Mastering is a method of mixing audio material based on
            creating groups of audio tracks and processing them separately prior
            to combining them into a final master mix. Stems are also sometimes
            referred to as submixes, subgroups, or busses.
            <br />
            <br />
            Basicaly we would use in general 4 stereo stems (for example:
            vocals, drums, bass, other instruments) and we would mix and process
            them ourselves before creating the stereo master.
            <br />
            <br />
            This technique can be useful if a mix sounds muddy for example or if
            an album has been mixed by different engineer or recorded in
            different studios.
            <br />
            <br />
            We have found that some of our customers can struggle with their
            final mix down quality and like to leave it to us to make the final
            decisions to optimise the mix down and create a cleaner master.
          </p>
        </div>
        <button className='faq-accordion'>
          Can we work with your genre of music?
        </button>
        <div className='faq-panel'>
          <p>
            We do not specialise in any genre of music or type of project, Over
            the years we have worked on many projects and an extensive range of
            genres, if you are unsure try the free test mastering service or
            please get in contact with us.
          </p>
        </div>
        <button className='faq-accordion'>Reference songs?</button>
        <div className='faq-panel'>
          <p>
            We recommend you send us some reference songs so we have an idea of
            the loudness, tone and dynamics you are looking for. In the event
            you don’t send us any reference we will master the song so it is
            ready for release, sounds modern and fits within any playlist of the
            same genre.
          </p>
        </div>
        <button className='faq-accordion'>Mixing service</button>
        <div className='faq-panel'>
          <p>
            We normally only offer mixing to artists or producers signed to a
            major label, But we can do an exception for the right song.
            <br />
            <br />
            Contact us for more info.
          </p>
        </div>
        <button className='faq-accordion'>Resaturation/Re-mastering</button>
        <div className='faq-panel'>
          <p>
            We offer an audio restoration service and we can also re-master your
            old catalog, please contact us to discus the project.
          </p>
        </div>
        <button className='faq-accordion'>Prices</button>
        <div className='faq-panel'>
          <p>
            ur prices include 25% VAT (moms) and apply to unsigned artists. We
            will not charge you the 25% VAT if you can provide us a EU VAT
            number on the order page or by email.
          </p>
        </div>
        <button className='faq-accordion'>
          Please contact us directly if you are...
        </button>
        <div className='faq-panel'>
          <ul className='faq-list'>
            <li>Signed to a record label or publisher</li>
            <li>A publisher</li>
            <li>A record label</li>
            <li>A sound design company</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
