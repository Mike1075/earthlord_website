import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
    const { t, i18n } = useTranslation();
    const isZh = i18n.language.startsWith('zh');

    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-neon-cyan">
                    {isZh ? '技术支持' : 'Technical Support'}
                </h1>
                <p className="text-gray-300 mb-8">
                    {isZh
                        ? '感谢您选择《地球新主》！如果您在使用过程中遇到任何问题，请参考以下信息。'
                        : 'Thank you for choosing Earth Lord! If you encounter any issues while using the app, please refer to the following information.'}
                </p>

                <div className="prose prose-invert max-w-none">
                    {/* FAQ Section */}
                    <h2 className="text-2xl font-bold mt-8 mb-4 text-neon-cyan">
                        {isZh ? '常见问题' : 'FAQ'}
                    </h2>

                    {/* Question 1 */}
                    <div className="mb-8 p-6 bg-slate-grey rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                            {isZh ? '1. 游戏无法启动或闪退' : '1. App Won\'t Launch or Crashes'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '请确保您的设备运行 iOS 15.0 或更高版本' : 'Please ensure your device is running iOS 15.0 or later'}</li>
                            <li>{isZh ? '尝试重新启动设备后再打开游戏' : 'Try restarting your device and reopening the game'}</li>
                            <li>{isZh ? '检查设备存储空间是否充足' : 'Check if your device has sufficient storage space'}</li>
                            <li>{isZh ? '如问题持续，请尝试删除并重新安装应用' : 'If the problem persists, try deleting and reinstalling the app'}</li>
                        </ul>
                    </div>

                    {/* Question 2 */}
                    <div className="mb-8 p-6 bg-slate-grey rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                            {isZh ? '2. 位置服务问题' : '2. Location Services Issues'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '本游戏需要使用位置服务来提供基于地理位置的游戏体验' : 'This game requires location services to provide a location-based gaming experience'}</li>
                            <li>{isZh ? '请在"设置 > 隐私与安全性 > 定位服务"中确保已开启定位服务' : 'Please enable Location Services in "Settings > Privacy & Security > Location Services"'}</li>
                            <li>{isZh ? '请为《地球新主》选择"使用App期间"或"始终"的定位权限' : 'Select "While Using the App" or "Always" for Earth Lord\'s location permission'}</li>
                            <li>{isZh ? '如果定位不准确，请尝试到开阔地带或检查网络连接' : 'If location is inaccurate, try moving to an open area or check your network connection'}</li>
                        </ul>
                    </div>

                    {/* Question 3 */}
                    <div className="mb-8 p-6 bg-slate-grey rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                            {isZh ? '3. 登录问题' : '3. Login Issues'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '请确保网络连接稳定' : 'Please ensure you have a stable network connection'}</li>
                            <li>{isZh ? '如果使用 Apple 登录失败，请检查 Apple ID 是否正常' : 'If Sign in with Apple fails, check if your Apple ID is working properly'}</li>
                            <li>{isZh ? '尝试切换 Wi-Fi 和移动数据' : 'Try switching between Wi-Fi and cellular data'}</li>
                        </ul>
                    </div>

                    {/* Question 4 */}
                    <div className="mb-8 p-6 bg-slate-grey rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                            {isZh ? '4. 游戏数据同步' : '4. Game Data Sync'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '游戏数据存储在云端，需要网络连接才能同步' : 'Game data is stored in the cloud and requires network connection to sync'}</li>
                            <li>{isZh ? '如发现数据丢失，请检查是否使用了正确的账号登录' : 'If you notice missing data, please check if you\'re logged in with the correct account'}</li>
                            <li>{isZh ? '请勿同时在多台设备上登录同一账号' : 'Please avoid logging into the same account on multiple devices simultaneously'}</li>
                        </ul>
                    </div>

                    {/* Question 5 */}
                    <div className="mb-8 p-6 bg-slate-grey rounded-lg border border-white/10">
                        <h3 className="text-xl font-bold mb-4">
                            {isZh ? '5. 电量消耗' : '5. Battery Consumption'}
                        </h3>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '由于游戏使用 GPS 定位，可能会增加电量消耗' : 'The game uses GPS location services, which may increase battery consumption'}</li>
                            <li>{isZh ? '建议在游戏时保持设备电量充足' : 'We recommend keeping your device charged while playing'}</li>
                            <li>{isZh ? '可在不游戏时关闭应用以节省电量' : 'Close the app when not playing to conserve battery'}</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <h2 className="text-2xl font-bold mt-12 mb-4 text-neon-cyan">
                        {isZh ? '联系我们' : 'Contact Us'}
                    </h2>
                    <p className="text-gray-400 mb-4">
                        {isZh
                            ? '如果以上信息无法解决您的问题，请通过以下方式联系我们：'
                            : 'If the above information doesn\'t resolve your issue, please contact us:'}
                    </p>
                    <div className="p-6 bg-slate-grey rounded-lg border border-white/10 mb-8">
                        <p className="text-gray-300 mb-4">
                            <span className="font-bold">{isZh ? '电子邮件' : 'Email'}: </span>
                            <a href="mailto:onestnet@gmail.com" className="text-neon-cyan hover:underline">
                                onestnet@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-400 mb-4">
                            {isZh
                                ? '发送邮件时，请提供以下信息以便我们更快地帮助您：'
                                : 'When sending an email, please provide the following information to help us assist you faster:'}
                        </p>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2">
                            <li>{isZh ? '设备型号（如 iPhone 15 Pro）' : 'Device model (e.g., iPhone 15 Pro)'}</li>
                            <li>{isZh ? 'iOS 系统版本' : 'iOS version'}</li>
                            <li>{isZh ? '问题的详细描述' : 'Detailed description of the issue'}</li>
                            <li>{isZh ? '问题发生的时间' : 'Time when the issue occurred'}</li>
                            <li>{isZh ? '相关截图（如有）' : 'Relevant screenshots (if any)'}</li>
                        </ul>
                    </div>
                    <p className="text-gray-400 mb-8">
                        {isZh
                            ? '我们将在 1-3 个工作日内回复您的邮件。'
                            : 'We will respond to your email within 1-3 business days.'}
                    </p>

                    {/* Version Info */}
                    <div className="mt-12 p-4 bg-slate-grey rounded-lg border border-white/10">
                        <p className="text-sm text-gray-500">
                            {isZh ? '当前版本' : 'Current Version'}: 1.0.0
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Support;
