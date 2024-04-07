import { Image } from '@/components/image';
import logo from '../../../public/favicons/favicon-32x32.png';

export const Logo = () => {
  return <Image src={logo} alt={'logo'} />;
};
