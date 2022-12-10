import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { userId } from '../redux/UserAction';

const ProfilePage = () => {
    const userInfo = useSelector(state => state.userProfileDetail);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
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
    useEffect(() => {
        dispatch(userId(id));
    }, [id])
    return (
        <div className='w-full flex flex-col justify-center items-center sm:fixed sm:inset-0 bg-[#302d29]'>
            <div className='fixed top-0 right-0 bg-[#ff9100] w-[70%] h-full z-10' style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
            <div className='fixed top-0 right-0 bg-[#ffb412] w-[40%] h-full shadow-xl z-20' style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
            <div className='w-full rounded-3xl bg-[#302d29] p-4 z-50 border-4 border-[#ffb412]' style={{ maxWidth: 800 }}>
                <div className='sm:grid sm:grid-cols-3 gap-3'>
                    <div className='sm:col-span-1rounded-xl'>
                        <div className='relative border border-white bg-[#ff9100] rounded-t-xl h-32'>
                            <div className='flex flex-col'>
                                <span className='rounded-full absolute top-20 left-[50%] translate-x-[-50%] bg-white p-0.5'>
                                    <span className='flex rounded-full border-2 bg-white border-[#ff9100] p-2'>
                                        <img src={userInfo.avatar} alt='' className='w-12 h-12' />
                                    </span>
                                </span>
                            </div>
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
                    <div className='sm:col-span-2 rounded-b-2xl bg-white border border-gray-200 shadow-lg'>
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
            <button type='button' className='bg-[#64affa] rounded-lg text-[#043566] hover:bg-[#043566] hover:text-white px-6 py-2 my-4 z-50' onClick={() => navigate('/')}>بازگشت به صفحه اصلی </button>
        </div>
    )
}

export default ProfilePage;

