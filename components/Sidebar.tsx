import MemberProfile from './MemberProfile';
import NavLinks from './NavLinks';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  return (
    <div className='px-4 w-80 h-screen bg-base-300 py-12 grid grid-rows-[auto,1fr,auto] fixed'>
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
};
export default Sidebar;
