//component import
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// style import
import styles from './FooterLinkBar.module.css'

const FooterBarLinks = () => {

   return (
      <div className={styles.aboutLinksContainer}>
         <ul>
            <li className='splash-footer-li'>
               <a href='https://github.com/tannerhladek/whats-next-react-express-sequelize-solo-project'>
                  <GitHubIcon />
                  <span>
                     What's Next Repo
                  </span>
               </a>
            </li>
            <li className='splash-footer-li'>
               <a href='https://www.linkedin.com/in/tannerhladek/'>
                  <LinkedInIcon />
                  <span>
                     Tanner Hladek
                  </span>
               </a>
            </li>
         </ul>
      </div>

   );
}

export default FooterBarLinks;
