import React from 'react';
import { useSelector } from 'react-redux';
import Map from './Map';
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
    const icons = [
        <BadgeOutlined style={{ color: '#f7990c' }} />,
        <AccountCircleOutlined style={{ color: '#f7990c' }} />,
        <BadgeOutlined style={{ color: '#f7990c' }} />,
        <MailOutlined style={{ color: '#f7990c' }} />,
        <PinOutlined style={{ color: '#f7990c' }} />,
        <PhoneEnabled style={{ color: '#f7990c' }} />,
        <PinDropOutlined style={{ color: '#f7990c' }} />,
        <PhoneEnabled style={{ color: '#f7990c' }} />,
        <LanguageOutlined style={{ color: '#f7990c' }} />,
        <ApartmentOutlined style={{ color: '#f7990c' }} />,
    ];
    var userInfoArray = [];
    for (let i = 0; i < icons.length; i++) {
        userInfoArray[i] = Object.entries(userInfo)[i]?.concat((icons[i]));
    };

    return (
        <div className='w-full flex flex-col justify-center items-center fixed inset-0 bg-[#302d29]'>
            <div className='fixed top-0 left-0 bg-[#ff9100] w-[40%] h-full shadow-xl z-20' style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }}></div>
            <div className='fixed top-0 left-0 bg-[#ffb412] w-[60%] h-full z-10' style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 0)' }}></div>
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
                        <div className='bg-white py-8 px-4'>
                            {userInfoArray
                                ?.filter((item) => item?.includes('name') || item?.includes('email') || item?.includes('phone') || item?.includes('website') || item?.includes('company'))
                                ?.map((item, index) => {
                                    return <div key={index} className='flex gap-2 cursor-pointer p-2 m-1'>
                                        {item[2]}
                                        <p>{item[1]}</p>
                                    </div>
                                })}
                        </div>
                        <div className='flex flex-col items-center rounded-b-xl bg-[#ffe9c8] py-2'>
                            {userInfoArray
                                ?.filter((item) => item?.includes('username') || item?.includes('password'))
                                ?.map((item, index) => {
                                    return <div key={index} className='flex justify-between bg-white border border-gray-200 rounded-lg w-[80%] p-2 m-1'>
                                        <p>{item[1]}</p>
                                        <div className='flex gap-1 items-center'>
                                            <p className='text-sm text-gray-500'>{item[0]}</p>
                                            <p className='text-xs'>{item[2]}</p>
                                        </div>
                                    </div>
                                })}
                        </div>
                    </div>
                    <div className='rounded-b-2xl bg-white border border-gray-200 shadow-lg col-span-2'>
                        {userInfoArray
                            ?.filter((item) => item?.includes('address'))
                            ?.map((item, index) => {
                                return <>
                                    <Map position={[parseFloat(item[1].geo.lat), parseFloat(item[1].geo.lng)]} />
                                    <div key={index} className='flex gap-2 bg-white border border-gray-200 rounded-lg p-2 mx-2 my-4'>
                                        <p className='text-xs'>{item[2]}</p>
                                        <p>{item[1].country}،  {item[1].city}، {item[1].street}، {item[1].alley}، پلاک {item[1].number} </p>
                                    </div>
                                </>
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;



