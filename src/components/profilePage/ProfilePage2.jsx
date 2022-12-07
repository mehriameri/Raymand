import React from 'react';
import { useSelector } from 'react-redux';
import Map from './Map';
import { AccountCircleOutlined, MailOutlined, BadgeOutlined, PhoneEnabled, PinOutlined, LanguageOutlined, PinDropOutlined, ApartmentOutlined } from '@mui/icons-material';

const ProfilePage = () => {
    const userInfo = useSelector(state => state.userProfileDetail);
    const {
        id: آیدی,
        name: نام,
        username: نامکاربری,
        email: ایمیل,
        password: پسورد,
        avatar: avatar,
        phone: تلفن,
        website: وبسایت,
        company: شرکت,
        address: آدرس
    } = { ...userInfo }
    const new_obj = {
        ...{
            آیدی,
            نام,
            نامکاربری,
            ایمیل,
            پسورد,
            avatar,
            تلفن,
            وبسایت,
            شرکت,
            آدرس
        }
    }
    const icons = [
        'i',
        <AccountCircleOutlined />,
        <BadgeOutlined />,
        <MailOutlined />
        , <PinOutlined />,
        'a',
        <PhoneEnabled />,
        <LanguageOutlined />,
        <ApartmentOutlined />,
        <PinDropOutlined />
    ];
    var eachitem = []
    for (let i = 0; i < icons.length; i++) {
        eachitem[i] = Object.entries(new_obj)[i].concat((icons[i]));
    }
    return (
        <div className='w-full flex flex-col justify-center items-center fixed inset-0 border border-black'>
            <div className='w-full border-2 border-red-600 rounded-xl p-6' style={{ maxWidth: 1000 }}>
                <div className='grid grid-cols-3'>
                    <div className='border border-red-400 col-span-1'>
                        <div className='relative border bg-red-500 h-32'>
                            <span className='absolute top-24 left-20 rounded-full bg-white border-4 border-white '>
                                <span className='flex rounded-full bg-white border-2 border-red-500 p-2'>
                                    <img src={userInfo.avatar} alt='' className='w-12 h-12' />
                                </span>
                            </span>
                        </div>
                        <div className=''>
                            {eachitem.filter(item => !item.includes(آدرس) && !item.includes(avatar)).map((item, index) => {
                                return <div className='flex gap-2 p-4 m-1'>
                                    <p>{item[2]}</p>
                                    <p key={index}>{item[0]} : {item[1]}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='border border-blue-400 col-span-2'>
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
// {userInfo && userInfo.name}
// {userInfo && <div>
//    <p>آدرس :</p>
//     <p>{userInfo.email}</p>
//     {/* <p>{userInfo.address.city} </p> */}
// </div>}
// <Map position={[38,46 ]} />

// const {
//     'id': 'آیدی کارت',
//     'name': 'نام',
//     'username': 'نام کاربری',
//     'email': 'ایمیل',
//     'password': 'پسورد',
//     'avatar': 'avatar',
//     'phone': 'تلفن همراه',
//     'website': 'وبسایت',
//     'company': 'شرکت/کمپانی'
// } = { ...x };

// const nameIcon=<img src="https://img.icons8.com/material-outlined/24/null/badge.png"/>
// const emailIcon=<img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-email-business-kiranshastry-lineal-kiranshastry.png"/>