import React from 'react';
import { useSelector } from 'react-redux';
import Map from './Map';
import { AccountCircleOutlined, MailOutlined, BadgeOutlined, PhoneEnabled, PinOutlined, LanguageOutlined, PinDropOutlined, ApartmentOutlined } from '@mui/icons-material';

const ProfilePage = () => {
    const userInfo = useSelector(state => state.userProfileDetail);
    const icons = [
        'i',
        <AccountCircleOutlined style={{color:'#f7990c'}}/>,
        <BadgeOutlined style={{color:'#f7990c'}}/>,
        <MailOutlined style={{color:'#f7990c'}}/>,
        <PinOutlined style={{color:'#f7990c'}}/>,
        'a',
        <PinDropOutlined style={{color:'#f7990c'}}/>,
        <PhoneEnabled style={{color:'#f7990c'}}/>,
        <LanguageOutlined style={{color:'#f7990c'}}/>,
        <ApartmentOutlined style={{color:'#f7990c'}}/>,
    ];
    var userInfoArray = []
    for (let i = 0; i < icons.length; i++) {
        userInfoArray[i] = Object.entries(userInfo)[i].concat((icons[i]));
    }
    console.log(userInfoArray)
    return (
        <div className='w-full flex flex-col justify-center items-center fixed inset-0 border border-black'>
            <div className='flex'>
            <div className='fixed top-0 right-0 bg-[#f7990c] w-[40%] h-full z-10'></div>
            <div className='fixed top-0 right-[40%] bg-[#f7990c] w-[10%] h-[50%] rounded-full z-10'></div>
            </div>
            <div className='w-full rounded-3xl bg-[#61523c] p-6 z-50' style={{ maxWidth: 1200 }}>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='rounded-xl col-span-1'>
                        <div className='relative border bg-[#f7990c] rounded-t-xl h-40'>
                            <span className='absolute top-28 left-[37%] rounded-full bg-white border-4 border-white '>
                                <span className='flex rounded-full border-2 bg-[#f7990c] p-2'>
                                    <img src={userInfo.avatar} alt='' className='w-12 h-12' />
                                </span>
                            </span>
                        </div>
                        <div className='bg-white py-8 px-4'>
                            {userInfoArray
                                .filter((item) => item.includes('name') || item.includes('email') || item.includes('phone') || item.includes('website') || item.includes('company'))
                                .map((item, index) => {
                                    return <div className='flex gap-2 p-4 m-1'>
                                       {item[2]}
                                        <p key={index}>{item[1]}</p>
                                    </div>
                                })}
                        </div>
                        <div className='flex flex-col items-center rounded-b-xl py-2 bg-gray-100'>
                            {userInfoArray
                                .filter((item) => item.includes('username') || item.includes('password'))
                                .map((item, index) => {
                                    return <div className='flex justify-between bg-white border border-gray-200 rounded-lg w-[80%] p-2 m-1'>
                                        <p key={index}>{item[1]}</p>
                                        <div className='flex gap-1'>
                                            <p>{item[0]}</p>
                                            <p>{item[2]}</p>
                                        </div>
                                    </div>
                                })}
                        </div>
                    </div>
                    <div className='rounded-b-2xl bg-white border border-gray-200 shadow-lg col-span-2'>
                        <Map position={[38, 46]} />
                        <p>آدرس :</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;

// parseInt(userInfo.address.geo.lat),parseInt(userInfo.address.geo.lng)
// {userInfo.address.country}، {userInfo.address.city}، {userInfo.address.street}، {userInfo.address.alley}، پلاک {userInfo.address.number}


