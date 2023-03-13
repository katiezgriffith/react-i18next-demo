import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Nav = () => {
  const { t } = useTranslation();

  return (
    <Link to="/">{t('home')}</Link>,
    <Link to="/page2">{t('page2')}</Link>
    );
}

export default Nav