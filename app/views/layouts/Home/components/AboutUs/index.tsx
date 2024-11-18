import React from 'react';
import RandomImage from '../../../../common/RandomImage';

import './styles.css';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47332.61544702337!2d24.699674842183246!3d42.14411353050403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd108a248763d%3A0x6470d1fa6f1338a0!2sPlovdiv!5e0!3m2!1sen!2sbg!4v1731846284321!5m2!1sen!2sbg';

const AboutUs = () => (
  <section id="about" className="about-us">
    <div className="left-side-about">
      <h3>About us</h3>
      <RandomImage
        className="circular-logo"
        alt="circular-logo"
        hasError
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit a,
        voluptates, dignissimos consequuntur esse similique delectus commodi,
        provident in ab tempore quia.
        Rerum omnis quisquam magnam animi vero quo,
        non dicta harum sed natus! Saepe necessitatibus eligendi
        sint hic dolorum? Ut iure dignissimos aspernatur autem nam perspiciatis magni,
        asperiores unde ad facere reprehenderit quos!
        Dolorem illo perspiciatis facere vitae dicta sed, accusamus odio
        tempora, placeat aut mollitia veniam dolores libero nostrum,
        repellat repellendus. Soluta nesciunt, quisquam earum sunt ad
        quidem necessitatibus debitis officia mollitia iusto at incidunt odit
        repudiandae consectetur rerum ipsam delectus sit quis eaque molestias
        tempora natus eum corporis.
        Nesciunt dolores repellat atque temporibus porro non molestiae quos fuga harum maxime,
        nobis impedit veniam perferendis? Maxime expedita magnam earum saepe sed nostrum debitis
        voluptatum unde impedit exercitationem reprehenderit error temporibus voluptates, provident
        adipisci maiores a illo. Placeat reprehenderit
        ipsum nisi doloribus non corporis earum libero
      </p>
    </div>
    <div className="right-side-about">
      <iframe
        title="google maps"
        src={GOOGLE_MAPS_URL}
        width="600"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
);

export default AboutUs;
