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
                  <div>
                     What's Next Repo
                  </div>
               </a>
            </li>
            <li className='splash-footer-li'>
               <a href='https://www.linkedin.com/in/tannerhladek/'>
                  <LinkedInIcon />
                  Tanner Hladek
               </a>
            </li>
         </ul>
      </div>

   );
}

export default FooterBarLinks;
