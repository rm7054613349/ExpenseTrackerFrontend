import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);
    console.log(user);
    
    return (
        <div>
            <Navbar activeMenu={activeMenu} />
            {user && (
                <div className='flex'>
                    <div className='max-[1080px]:hidden'>
                        <Sidebar activeMenu={activeMenu} />
                    </div>

                    <div className='grow mx-5'>{children}</div>
                </div>
            )}
        </div>
    )
}

export default DashboardLayout
