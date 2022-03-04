import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <div className="link-icon">
          <a href="mailto:ajeyabhat.off@gmail.com">
            <EmailIcon color="secondary" />
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.github.com/aj-ya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon color="secondary" />
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.linkedin.com/in/aj-ya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon color="secondary" />
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://twitter.com/bhat_ajeya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon color="secondary" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
