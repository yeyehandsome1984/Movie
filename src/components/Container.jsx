// src/Container.js

import Center from './Center';


function Container () {
  return (
    <div>
      <header>
        <h1>Movie App</h1>
      </header>
      <Center
        Title="General"
        description1="About forwarding limits"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />
      <Center
        Title="Android"
        description1="Verifying your number"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />
      <Center
        Title="iPhone"
        description1="Break Limit"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />
      <Center
        Title="Web and Desktop"
        description1="About forwarding limits"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />
      <Center
        Title="KaiOS"
        description1="About forwarding limits"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />
      <Center
        Title="WhatsApp Business for Android"
        description1="About forwarding limits"
        description2="How to update Whatsapp"
        description3="How to change group privacy settings"
      />

    </div>
  );
};

export default Container;
