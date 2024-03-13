import React from 'react';
import explore from '../../../assets/Explore.png'
import view_profile from '../../../assets/view_profile.png'
import refer_And_Earn from '../../../assets/refer_And_Earn.png'
import signOut from '../../../assets/signOut.png'

const ProfileDropdown = () => {
  const handleLogout = () => {

  };

  return (
    <div className="absolute right-0 mt-1 bg-white rounded-lg shadow-md p-4" style={{ width: '246px', padding: '20px 16px', borderRadius: '12px', marginLeft: '-20px' }}>
      <div className="flex items-center mb-2 gap-1">
        <img src="" alt="Profile" className="h-12 w-12 rounded-full mr-4" />
        <div>
          <p className="text-base font-semibold mb-0">Harsh Dhabekar</p>
          <p className="text-gray-600">8319154475</p>
        </div>
      </div>

      <p className="flex text-gray-800 mb-4">
        <img src={explore} alt="Icon" className="h-4 w-4 mr-1" />
        Explore Plans: Upto
      </p>

      <hr className="border-t border-gray-300 my-4" />

      <div className="flex flex-col space-y-2">
        <button className="flex items-center text-black">
          <img src={view_profile} alt="Icon" className="h-4 w-4 mr-1" />
          View Profile
        </button>
        <button className="flex items-center text-black">
          <img src={refer_And_Earn} alt="Icon" className="h-4 w-4 mr-1" />
          Refer and Earn
        </button>
        <button className="flex items-center text-red-500">
          <img src={signOut} alt="Icon" className="h-4 w-4 mr-1" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
