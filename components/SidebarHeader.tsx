import { SiArcgis } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const SidebarHeader = () => {
  return (
    <div className='flex items-center gap-4 px-4 mb-8'>
      <SiArcgis className='w-12 h-12 text-primary' />
      <h2 className='font-extrabold text-xl text-primary'>TourGPT</h2>
      <ThemeToggle />
    </div>
  );
};
export default SidebarHeader;
