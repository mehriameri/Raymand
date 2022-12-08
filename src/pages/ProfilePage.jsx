import React from 'react';
import { useSelector } from 'react-redux';
import Map from '../components/profilePage/Map';
import {
    AccountCircleOutlined,
    MailOutlined,
    BadgeOutlined,
    PhoneEnabled,
    PinOutlined,
    LanguageOutlined,
    PinDropOutlined,
    ApartmentOutlined
} from '@mui/icons-material';

const ProfilePage = () => {
    const userInfo = useSelector(state => state.userProfileDetail);
    const icons = {
        'id': <BadgeOutlined style={{ color: '#f7990c' }} />,
        'name': <AccountCircleOutlined style={{ color: '#f7990c' }} />,
        'username': <BadgeOutlined style={{ color: '#f7990c' }} />,
        'email': <MailOutlined style={{ color: '#f7990c' }} />,
        'password': <PinOutlined style={{ color: '#f7990c' }} />,
        'avatar': <PhoneEnabled style={{ color: '#f7990c' }} />,
        'address': <PinDropOutlined style={{ color: '#f7990c' }} />,
        'phone': <PhoneEnabled style={{ color: '#f7990c' }} />,
        'website': <LanguageOutlined style={{ color: '#f7990c' }} />,
        'company': <ApartmentOutlined style={{ color: '#f7990c' }} />
    }
    return (
        <div className='w-full flex flex-col justify-center items-center fixed inset-0 bg-[#302d29]'>
            <div className='fixed top-0 right-0 bg-[#ff9100] w-[70%] h-full z-10' style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
            <div className='fixed top-0 right-0 bg-[#ffb412] w-[40%] h-full shadow-xl z-20' style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            <div className='w-full rounded-3xl bg-[#302d29] p-4 z-50 border-4 border-[#ffb412]' style={{ maxWidth: 800 }}>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='rounded-xl col-span-1'>
                        <div className='relative border border-white bg-[#ff9100] rounded-t-xl h-32'>
                            <span className='absolute top-20 left-[36%] rounded-full bg-white p-0.5'>
                                <span className='flex rounded-full border-2 bg-white border-[#ff9100] p-2'>
                                    <img src={userInfo.avatar} alt='' className='w-12 h-12' />
                                </span>
                            </span>
                        </div>
                        <div className='flex flex-col bg-white py-8 px-4'>
                            {Object
                                .keys(userInfo)
                                ?.filter(item => item == 'name' || item == 'email' || item == 'phone' || item == 'website' || item == 'company')
                                ?.map((item, index) => {
                                    return <div key={index} className='flex gap-2 cursor-pointer p-2 m-1'>
                                        {icons[item]}
                                        <p>{userInfo[item]}</p>
                                    </div>
                                }
                                )}
                        </div>
                        <div className='flex flex-col items-center rounded-b-xl bg-[#ffe9c8] py-2'>
                            {Object
                                .keys(userInfo)
                                ?.filter(item => item == 'username' || item == 'password')
                                ?.map((item, index) => {
                                    return <div key={index} className='flex justify-between bg-white border border-gray-200 rounded-lg w-[80%] p-2 m-1'>
                                        <p>{userInfo[item]}</p>
                                        <div className='flex gap-1 items-center'>
                                            <p className='text-sm text-gray-500'>{item}</p>
                                            <p className='text-xs'>{icons[item]}</p>
                                        </div>
                                    </div>
                                })}
                        </div>
                    </div>
                    <div className='rounded-b-2xl bg-white border border-gray-200 shadow-lg col-span-2'>
                        {Object
                            .keys(userInfo)
                            ?.filter(item => item == 'address')
                            ?.map((item, index) => {
                                const address = userInfo[item];
                                return <div key={index}>
                                    <Map position={[parseFloat(userInfo[item].geo.lat), parseFloat(userInfo[item].geo.lng)]} name={userInfo.name} avatar={userInfo.avatar} />
                                    <div className='flex gap-2 bg-white border border-gray-200 rounded-lg p-2 mx-2 my-4'>
                                        <p className='text-xs'>{icons[item]}</p>
                                        <p>{address.country}،  {address.city}، {address.street}، {address.alley}، پلاک {address.number} </p>
                                    </div>
                                </div>
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;



