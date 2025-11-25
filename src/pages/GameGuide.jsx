import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GameGuide = () => {
    const { i18n } = useTranslation();
    const isZh = i18n.language.startsWith('zh');

    return (
        <div className="min-h-screen bg-void-black text-white">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-5xl">
                <h1 className="text-4xl font-bold mb-4 text-neon-cyan">
                    {isZh ? '地球新主 - 完整游戏指南' : 'Earth Lord - Complete Game Guide'}
                </h1>
                <p className="text-gray-400 mb-12">
                    {isZh ? '最后更新: 2025年11月' : 'Last Updated: November 2025'}
                </p>

                {/* Table of Contents */}
                <nav className="mb-12 p-6 bg-slate-grey rounded-lg border border-white/10">
                    <h2 className="text-xl font-bold mb-4 text-neon-cyan">
                        {isZh ? '目录' : 'Table of Contents'}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                        <a href="#intro" className="text-gray-400 hover:text-neon-cyan">{isZh ? '游戏简介' : 'Introduction'}</a>
                        <a href="#start" className="text-gray-400 hover:text-neon-cyan">{isZh ? '新手入门' : 'Getting Started'}</a>
                        <a href="#explore" className="text-gray-400 hover:text-neon-cyan">{isZh ? '地图与探索' : 'Map & Exploration'}</a>
                        <a href="#territory" className="text-gray-400 hover:text-neon-cyan">{isZh ? '领地系统' : 'Territory System'}</a>
                        <a href="#building" className="text-gray-400 hover:text-neon-cyan">{isZh ? '建造系统' : 'Building System'}</a>
                        <a href="#resource" className="text-gray-400 hover:text-neon-cyan">{isZh ? '资源与物品' : 'Resources & Items'}</a>
                        <a href="#comm" className="text-gray-400 hover:text-neon-cyan">{isZh ? '通讯系统' : 'Communication'}</a>
                        <a href="#achievement" className="text-gray-400 hover:text-neon-cyan">{isZh ? '成就系统' : 'Achievements'}</a>
                        <a href="#tips" className="text-gray-400 hover:text-neon-cyan">{isZh ? '进阶技巧' : 'Advanced Tips'}</a>
                        <a href="#faq" className="text-gray-400 hover:text-neon-cyan">{isZh ? '常见问题' : 'FAQ'}</a>
                    </div>
                </nav>

                <div className="prose prose-invert max-w-none">
                    {/* Introduction */}
                    <section id="intro" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '游戏简介' : 'Introduction'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '背景故事' : 'Background Story'}
                        </h3>
                        <p className="text-gray-400 mb-6">
                            {isZh
                                ? '在一场全球性灾难之后，旧世界的秩序已经崩塌。作为幸存者，你需要在这片废墟中寻找资源、建立领地、与其他幸存者合作或竞争，成为这片土地的新主人。'
                                : 'After a global catastrophe, the old world order has collapsed. As a survivor, you need to search for resources in the ruins, establish territory, cooperate or compete with other survivors, and become the new master of this land.'}
                        </p>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '核心玩法' : 'Core Gameplay'}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="p-4 bg-slate-grey rounded-lg text-center">
                                <div className="text-3xl mb-2">🗺️</div>
                                <h4 className="font-bold mb-1">{isZh ? '实地探索' : 'Explore'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '在现实世界中行走发现资源' : 'Walk in real world to find resources'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg text-center">
                                <div className="text-3xl mb-2">🏠</div>
                                <h4 className="font-bold mb-1">{isZh ? '圈地建设' : 'Claim Land'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '行走路径圈定领地' : 'Walk paths to claim territory'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg text-center">
                                <div className="text-3xl mb-2">📦</div>
                                <h4 className="font-bold mb-1">{isZh ? '收集资源' : 'Collect'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '搜寻废墟获取物资' : 'Scavenge ruins for supplies'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg text-center">
                                <div className="text-3xl mb-2">🤝</div>
                                <h4 className="font-bold mb-1">{isZh ? '社交互动' : 'Socialize'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '与玩家交易组建联盟' : 'Trade and form alliances'}</p>
                            </div>
                        </div>
                    </section>

                    {/* Getting Started */}
                    <section id="start" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '新手入门' : 'Getting Started'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '主界面介绍' : 'Main Interface'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '图标' : 'Icon'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '名称' : 'Name'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '功能' : 'Function'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🗺️</td><td className="py-3 px-4">{isZh ? '地图' : 'Map'}</td><td className="py-3 px-4">{isZh ? '查看周围环境、开始探索' : 'View surroundings, start exploring'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏠</td><td className="py-3 px-4">{isZh ? '领地' : 'Territory'}</td><td className="py-3 px-4">{isZh ? '管理你的领地和建筑' : 'Manage your territories and buildings'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">📦</td><td className="py-3 px-4">{isZh ? '资源' : 'Resources'}</td><td className="py-3 px-4">{isZh ? '背包、POI列表、交易' : 'Inventory, POI list, trading'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">👤</td><td className="py-3 px-4">{isZh ? '个人' : 'Profile'}</td><td className="py-3 px-4">{isZh ? '资料、成就、统计' : 'Profile, achievements, stats'}</td></tr>
                                    <tr><td className="py-3 px-4">📻</td><td className="py-3 px-4">{isZh ? '通讯' : 'Comms'}</td><td className="py-3 px-4">{isZh ? '聊天频道、玩家互动' : 'Chat channels, player interaction'}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '首次探索步骤' : 'First Exploration Steps'}
                        </h3>
                        <ol className="list-decimal pl-6 text-gray-400 space-y-3 mb-6">
                            <li>{isZh ? '点击地图标签，查看当前位置' : 'Click the Map tab to view your current location'}</li>
                            <li>{isZh ? '点击屏幕上的「开始探索」按钮' : 'Click the "Start Exploring" button on screen'}</li>
                            <li>{isZh ? '开始在现实中行走，系统会记录你的行走路径' : 'Start walking in the real world, the system will record your path'}</li>
                            <li>{isZh ? '走一个闭合路线（回到起点附近）' : 'Walk a closed route (return near your starting point)'}</li>
                            <li>{isZh ? '恭喜！你获得了第一块领地！' : 'Congratulations! You\'ve claimed your first territory!'}</li>
                        </ol>

                        <div className="p-4 bg-green-900/30 border-l-4 border-green-500 rounded-r-lg mb-6">
                            <p className="text-green-300">
                                💡 {isZh ? '提示：首次圈地面积至少需要 100 平方米，路径点至少 10 个。' : 'Tip: First territory requires at least 100 square meters and 10 path points.'}
                            </p>
                        </div>
                    </section>

                    {/* Map & Exploration */}
                    <section id="explore" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '地图与探索' : 'Map & Exploration'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? 'POI 类型' : 'POI Types'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '图标' : 'Icon'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '类型' : 'Type'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '常见资源' : 'Common Resources'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏥</td><td className="py-3 px-4">{isZh ? '医院/诊所' : 'Hospital/Clinic'}</td><td className="py-3 px-4">{isZh ? '药品、绷带、医疗器械' : 'Medicine, bandages, medical equipment'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏪</td><td className="py-3 px-4">{isZh ? '超市/商店' : 'Supermarket/Store'}</td><td className="py-3 px-4">{isZh ? '食物、饮料、日用品' : 'Food, drinks, daily necessities'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏭</td><td className="py-3 px-4">{isZh ? '工厂/仓库' : 'Factory/Warehouse'}</td><td className="py-3 px-4">{isZh ? '金属、工具、机械零件' : 'Metal, tools, mechanical parts'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏢</td><td className="py-3 px-4">{isZh ? '办公楼' : 'Office Building'}</td><td className="py-3 px-4">{isZh ? '电子元件、书籍、文具' : 'Electronics, books, stationery'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🏫</td><td className="py-3 px-4">{isZh ? '学校' : 'School'}</td><td className="py-3 px-4">{isZh ? '书籍、文具、实验器材' : 'Books, stationery, lab equipment'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🌳</td><td className="py-3 px-4">{isZh ? '公园/绿地' : 'Park/Green Area'}</td><td className="py-3 px-4">{isZh ? '木材、草料、种子' : 'Wood, grass, seeds'}</td></tr>
                                    <tr><td className="py-3 px-4">⛽</td><td className="py-3 px-4">{isZh ? '加油站' : 'Gas Station'}</td><td className="py-3 px-4">{isZh ? '燃料、汽车零件' : 'Fuel, car parts'}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? 'GPS 信号状态' : 'GPS Signal Status'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '状态' : 'Status'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '精度' : 'Accuracy'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '建议' : 'Recommendation'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🟢 {isZh ? '优秀' : 'Excellent'}</td><td className="py-3 px-4">&lt; 20m</td><td className="py-3 px-4">{isZh ? '最佳状态，适合圈地' : 'Best for claiming territory'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🟡 {isZh ? '良好' : 'Good'}</td><td className="py-3 px-4">20-50m</td><td className="py-3 px-4">{isZh ? '正常游玩' : 'Normal gameplay'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🟠 {isZh ? '一般' : 'Fair'}</td><td className="py-3 px-4">50-100m</td><td className="py-3 px-4">{isZh ? '可能影响定位精度' : 'May affect positioning accuracy'}</td></tr>
                                    <tr><td className="py-3 px-4">🔴 {isZh ? '较差' : 'Poor'}</td><td className="py-3 px-4">&gt; 100m</td><td className="py-3 px-4">{isZh ? '建议到开阔地带' : 'Move to open area'}</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Territory System */}
                    <section id="territory" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '领地系统' : 'Territory System'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '圈地条件' : 'Territory Requirements'}
                        </h3>
                        <div className="p-6 bg-slate-grey rounded-lg border border-white/10 mb-6">
                            <ul className="list-disc pl-6 text-gray-400 space-y-2">
                                <li>{isZh ? '最少 10 个路径点' : 'Minimum 10 path points'}</li>
                                <li>{isZh ? '最小面积 100 平方米' : 'Minimum area 100 square meters'}</li>
                                <li>{isZh ? '路径不与他人领地重叠' : 'Path must not overlap with other territories'}</li>
                                <li>{isZh ? '起终点距离 < 30米（闭合）' : 'Start and end points within 30 meters (closed loop)'}</li>
                            </ul>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '领地管理' : 'Territory Management'}
                        </h3>
                        <p className="text-gray-400 mb-4">{isZh ? '在「领地」标签页可以：' : 'In the Territory tab you can:'}</p>
                        <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
                            <li>{isZh ? '查看所有领地列表' : 'View all your territories'}</li>
                            <li>{isZh ? '查看单个领地详情和地图' : 'View individual territory details and maps'}</li>
                            <li>{isZh ? '重命名领地' : 'Rename territories'}</li>
                            <li>{isZh ? '查看领地内的建筑' : 'View buildings in your territory'}</li>
                            <li>{isZh ? '管理领地资源存储' : 'Manage territory resource storage'}</li>
                        </ul>
                    </section>

                    {/* Building System */}
                    <section id="building" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '建造系统' : 'Building System'}
                        </h2>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            🔥 {isZh ? '生存基础（Tier 1）' : 'Survival Basics (Tier 1)'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '建筑' : 'Building'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '材料' : 'Materials'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '时间' : 'Time'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '功能' : 'Function'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10">
                                        <td className="py-3 px-4">{isZh ? '篝火' : 'Campfire'}</td>
                                        <td className="py-3 px-4">{isZh ? '木头×30, 石头×20' : 'Wood×30, Stone×20'}</td>
                                        <td className="py-3 px-4">30min</td>
                                        <td className="py-3 px-4">{isZh ? '照明、取暖、烹饪' : 'Light, warmth, cooking'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">{isZh ? '简易庇护所' : 'Simple Shelter'}</td>
                                        <td className="py-3 px-4">{isZh ? '木头×50, 草料×30' : 'Wood×50, Grass×30'}</td>
                                        <td className="py-3 px-4">2h</td>
                                        <td className="py-3 px-4">{isZh ? '休息恢复、存储' : 'Rest, storage'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            🌾 {isZh ? '功能扩展（Tier 2）' : 'Functional Expansion (Tier 2)'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '建筑' : 'Building'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '材料' : 'Materials'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '时间' : 'Time'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '功能' : 'Function'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10">
                                        <td className="py-3 px-4">{isZh ? '农田' : 'Farm'}</td>
                                        <td className="py-3 px-4">{isZh ? '土壤×100, 木头×40, 种子×10' : 'Soil×100, Wood×40, Seeds×10'}</td>
                                        <td className="py-3 px-4">4h</td>
                                        <td className="py-3 px-4">{isZh ? '每5天产食物×5' : 'Food×5 every 5 days'}</td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="py-3 px-4">{isZh ? '温室' : 'Greenhouse'}</td>
                                        <td className="py-3 px-4">{isZh ? '木头×80, 玻璃×120, 金属×100' : 'Wood×80, Glass×120, Metal×100'}</td>
                                        <td className="py-3 px-4">10h</td>
                                        <td className="py-3 px-4">{isZh ? '不受天气影响' : 'Weather-proof'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">{isZh ? '仓库' : 'Warehouse'}</td>
                                        <td className="py-3 px-4">{isZh ? '木头×80, 金属×30' : 'Wood×80, Metal×30'}</td>
                                        <td className="py-3 px-4">3h</td>
                                        <td className="py-3 px-4">{isZh ? '存储+200格' : 'Storage +200 slots'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            ⚡ {isZh ? '高级设施（Tier 3）' : 'Advanced Facilities (Tier 3)'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '建筑' : 'Building'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '材料' : 'Materials'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '时间' : 'Time'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '功能' : 'Function'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10">
                                        <td className="py-3 px-4">{isZh ? '发电站' : 'Power Station'}</td>
                                        <td className="py-3 px-4">{isZh ? '金属×200, 电子元件×100' : 'Metal×200, Electronics×100'}</td>
                                        <td className="py-3 px-4">20h</td>
                                        <td className="py-3 px-4">{isZh ? '提供电力' : 'Provides power'}</td>
                                    </tr>
                                    <tr className="border-b border-white/10">
                                        <td className="py-3 px-4">{isZh ? '研究中心' : 'Research Center'}</td>
                                        <td className="py-3 px-4">{isZh ? '金属×150, 玻璃×120, 书籍×50' : 'Metal×150, Glass×120, Books×50'}</td>
                                        <td className="py-3 px-4">15h</td>
                                        <td className="py-3 px-4">{isZh ? '解锁新科技' : 'Unlock new tech'}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4">{isZh ? '通讯塔' : 'Comm Tower'}</td>
                                        <td className="py-3 px-4">{isZh ? '金属×100, 电子元件×80' : 'Metal×100, Electronics×80'}</td>
                                        <td className="py-3 px-4">8h</td>
                                        <td className="py-3 px-4">{isZh ? '扩展通讯范围' : 'Extend comm range'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-4 bg-yellow-900/30 border-l-4 border-yellow-500 rounded-r-lg">
                            <p className="text-yellow-300">
                                ⚠️ {isZh ? '注意：大部分建筑需要定期维护，未维护的建筑会降低效率。' : 'Warning: Most buildings require regular maintenance. Unmaintained buildings will have reduced efficiency.'}
                            </p>
                        </div>
                    </section>

                    {/* Resources & Items */}
                    <section id="resource" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '资源与物品' : 'Resources & Items'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '物品分类' : 'Item Categories'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '分类' : 'Category'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '示例' : 'Examples'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '用途' : 'Use'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🍞 {isZh ? '食物' : 'Food'}</td><td className="py-3 px-4">{isZh ? '罐头、面粉、蔬菜' : 'Canned food, flour, vegetables'}</td><td className="py-3 px-4">{isZh ? '恢复饥饿值' : 'Restore hunger'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">💧 {isZh ? '饮水' : 'Water'}</td><td className="py-3 px-4">{isZh ? '瓶装水、蒸馏水' : 'Bottled water, distilled water'}</td><td className="py-3 px-4">{isZh ? '恢复口渴值' : 'Restore thirst'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🪵 {isZh ? '材料' : 'Materials'}</td><td className="py-3 px-4">{isZh ? '木头、石头、金属' : 'Wood, stone, metal'}</td><td className="py-3 px-4">{isZh ? '建造建筑' : 'Build structures'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">🔧 {isZh ? '工具' : 'Tools'}</td><td className="py-3 px-4">{isZh ? '镐、斧头、刀' : 'Pickaxe, axe, knife'}</td><td className="py-3 px-4">{isZh ? '采集效率提升' : 'Boost gathering'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">💊 {isZh ? '药品' : 'Medicine'}</td><td className="py-3 px-4">{isZh ? '绷带、抗生素' : 'Bandages, antibiotics'}</td><td className="py-3 px-4">{isZh ? '恢复健康值' : 'Restore health'}</td></tr>
                                    <tr><td className="py-3 px-4">⛽ {isZh ? '燃料' : 'Fuel'}</td><td className="py-3 px-4">{isZh ? '木炭、汽油' : 'Charcoal, gasoline'}</td><td className="py-3 px-4">{isZh ? '建筑维护' : 'Building maintenance'}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '获取资源的方式' : 'Ways to Get Resources'}
                        </h3>
                        <div className="p-6 bg-slate-grey rounded-lg border border-white/10 mb-6">
                            <ul className="list-disc pl-6 text-gray-400 space-y-2">
                                <li><strong>{isZh ? '搜寻废墟' : 'Scavenge Ruins'}</strong> - {isZh ? '最主要的资源来源' : 'Main source of resources'}</li>
                                <li><strong>{isZh ? '探索掉落' : 'Exploration Drops'}</strong> - {isZh ? '行走时随机获得' : 'Random drops while walking'}</li>
                                <li><strong>{isZh ? '建筑产出' : 'Building Output'}</strong> - {isZh ? '农田等建筑定期产出' : 'Periodic output from farms etc.'}</li>
                                <li><strong>{isZh ? '玩家交易' : 'Player Trading'}</strong> - {isZh ? '与其他玩家交换' : 'Trade with other players'}</li>
                                <li><strong>{isZh ? '成就奖励' : 'Achievement Rewards'}</strong> - {isZh ? '完成成就获得' : 'Rewards from achievements'}</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-green-900/30 border-l-4 border-green-500 rounded-r-lg">
                            <p className="text-green-300">
                                💡 {isZh ? '提示：交易是异步的，无需双方同时在线！' : 'Tip: Trading is asynchronous - both players don\'t need to be online!'}
                            </p>
                        </div>
                    </section>

                    {/* Communication */}
                    <section id="comm" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '通讯系统' : 'Communication System'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '通讯设备' : 'Communication Devices'}
                        </h3>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/20">
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '设备' : 'Device'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '范围' : 'Range'}</th>
                                        <th className="py-3 px-4 text-neon-cyan">{isZh ? '功能' : 'Function'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-400">
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">📻 {isZh ? '收音机' : 'Radio'}</td><td className="py-3 px-4">{isZh ? '无限制' : 'Unlimited'}</td><td className="py-3 px-4">{isZh ? '仅接收官方频道' : 'Receive official channel only'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">📱 {isZh ? '对讲机' : 'Walkie-talkie'}</td><td className="py-3 px-4">3km</td><td className="py-3 px-4">{isZh ? '双向通讯' : 'Two-way communication'}</td></tr>
                                    <tr className="border-b border-white/10"><td className="py-3 px-4">📡 {isZh ? '营地电台' : 'Camp Radio'}</td><td className="py-3 px-4">30km</td><td className="py-3 px-4">{isZh ? '广播功能' : 'Broadcast feature'}</td></tr>
                                    <tr><td className="py-3 px-4">🛰️ {isZh ? '卫星通讯' : 'Satellite Comm'}</td><td className="py-3 px-4">100km+</td><td className="py-3 px-4">{isZh ? '全功能' : 'Full features'}</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '频道类型' : 'Channel Types'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">{isZh ? '官方频道' : 'Official Channel'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '全服公开，获取官方公告和活动信息' : 'Server-wide, official announcements and events'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">{isZh ? '公共频道' : 'Public Channel'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '基于地区或主题，可自建或加入' : 'Region or topic-based, create or join'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">{isZh ? '私人频道' : 'Private Channel'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '需要邀请加入，团队内部通讯' : 'Invite-only, team internal communication'}</p>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">{isZh ? '群组聊天' : 'Group Chat'}</h4>
                                <p className="text-sm text-gray-400">{isZh ? '2-10人小规模对话，快速沟通' : '2-10 person small group, quick communication'}</p>
                            </div>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section id="achievement" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '成就系统' : 'Achievement System'}
                        </h2>
                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '成就分类' : 'Achievement Categories'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">🗺️ {isZh ? '探索成就' : 'Exploration'}</h4>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '探索 10/50/100 个不同 POI' : 'Explore 10/50/100 different POIs'}</li>
                                    <li>{isZh ? '累计行走 10/50/100 公里' : 'Walk 10/50/100 km total'}</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">🏗️ {isZh ? '建造成就' : 'Building'}</h4>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '建造 5/20/50 个建筑' : 'Build 5/20/50 buildings'}</li>
                                    <li>{isZh ? '建造全部类型建筑' : 'Build all building types'}</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">🎒 {isZh ? '生存成就' : 'Survival'}</h4>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '连续登录 7/30/100 天' : 'Login streak 7/30/100 days'}</li>
                                    <li>{isZh ? '收集 20/50/100 种物品' : 'Collect 20/50/100 item types'}</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-slate-grey rounded-lg">
                                <h4 className="font-bold mb-2">🤝 {isZh ? '社交成就' : 'Social'}</h4>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '交易 10/50/100 次' : 'Trade 10/50/100 times'}</li>
                                    <li>{isZh ? '获得 10 个好友' : 'Get 10 friends'}</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4 text-green-400">
                            {isZh ? '成就稀有度' : 'Achievement Rarity'}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 rounded-full bg-gray-600 text-white text-sm">{isZh ? '⚪ 普通' : '⚪ Common'}</span>
                            <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm">{isZh ? '🔵 稀有' : '🔵 Rare'}</span>
                            <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm">{isZh ? '🟣 史诗' : '🟣 Epic'}</span>
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold">{isZh ? '🟡 传说' : '🟡 Legendary'}</span>
                        </div>
                    </section>

                    {/* Advanced Tips */}
                    <section id="tips" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '进阶技巧' : 'Advanced Tips'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-green-400">🗺️ {isZh ? '高效圈地' : 'Efficient Territory Claiming'}</h3>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>{isZh ? '出发前规划好路线' : 'Plan your route before starting'}</li>
                                    <li>{isZh ? 'GPS 信号优秀时圈地最准确' : 'Best accuracy with excellent GPS'}</li>
                                    <li>{isZh ? '避免穿越建筑物或水域' : 'Avoid crossing buildings or water'}</li>
                                    <li>{isZh ? '太大的领地难以管理' : 'Large territories are hard to manage'}</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-green-400">📦 {isZh ? '资源管理' : 'Resource Management'}</h3>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>{isZh ? '食物和水是生存基础，优先搜寻' : 'Food and water are priorities'}</li>
                                    <li>{isZh ? '利用领地仓库增加存储' : 'Use territory warehouse for storage'}</li>
                                    <li>{isZh ? '处理低价值物品腾出空间' : 'Discard low-value items for space'}</li>
                                    <li>{isZh ? '用多余物品换取稀缺资源' : 'Trade excess for rare resources'}</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-green-400">🏗️ {isZh ? '建筑规划' : 'Building Planning'}</h3>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>{isZh ? '篝火和庇护所优先建造' : 'Build campfire and shelter first'}</li>
                                    <li>{isZh ? '农田确保食物来源' : 'Farm ensures food supply'}</li>
                                    <li>{isZh ? '仓库、工作站等功能性建筑' : 'Functional buildings like warehouse'}</li>
                                    <li>{isZh ? '确保建筑正常维护' : 'Keep buildings maintained'}</li>
                                </ul>
                            </div>
                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="text-lg font-bold mb-3 text-green-400">🤝 {isZh ? '社交策略' : 'Social Strategy'}</h3>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li>{isZh ? '加入联盟获得保护和支援' : 'Join alliance for protection'}</li>
                                    <li>{isZh ? '友好的邻居是宝贵资源' : 'Friendly neighbors are valuable'}</li>
                                    <li>{isZh ? '诚信交易建立良好声誉' : 'Trade honestly for reputation'}</li>
                                    <li>{isZh ? '互帮互助，今天帮人明天被帮' : 'Help others, get helped later'}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 text-neon-cyan border-b border-neon-cyan/30 pb-2">
                            {isZh ? '常见问题' : 'FAQ'}
                        </h2>

                        <div className="space-y-4">
                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="font-bold mb-3">Q: {isZh ? '为什么我的圈地失败了？' : 'Why did my territory claim fail?'}</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '路径未闭合（起终点距离 > 30米）' : 'Path not closed (start/end > 30m apart)'}</li>
                                    <li>{isZh ? '面积太小（< 100平方米）' : 'Area too small (< 100 sq meters)'}</li>
                                    <li>{isZh ? '路径点太少（< 10个）' : 'Too few path points (< 10)'}</li>
                                    <li>{isZh ? '与他人领地重叠' : 'Overlaps with other territory'}</li>
                                    <li>{isZh ? 'GPS 信号不佳导致路径异常' : 'Poor GPS caused path errors'}</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="font-bold mb-3">Q: {isZh ? '为什么探索时没有记录我的路径？' : 'Why isn\'t my path being recorded?'}</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '是否点击了「开始探索」' : 'Did you click "Start Exploring"?'}</li>
                                    <li>{isZh ? '位置权限是否已开启' : 'Is location permission enabled?'}</li>
                                    <li>{isZh ? 'GPS 信号是否正常' : 'Is GPS signal working?'}</li>
                                    <li>{isZh ? '移动速度是否过快（> 15km/h）' : 'Moving too fast? (> 15km/h)'}</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="font-bold mb-3">Q: {isZh ? '为什么废墟搜寻不到物品？' : 'Why can\'t I find items in ruins?'}</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '该废墟资源已被其他玩家搜寻完' : 'Other players already scavenged it'}</li>
                                    <li>{isZh ? '背包已满，无法添加物品' : 'Inventory is full'}</li>
                                    <li>{isZh ? '网络连接问题' : 'Network connection issue'}</li>
                                </ul>
                            </div>

                            <div className="p-6 bg-slate-grey rounded-lg border border-white/10">
                                <h3 className="font-bold mb-3">Q: {isZh ? '如何获得更多背包空间？' : 'How to get more inventory space?'}</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    <li>{isZh ? '完成特定成就获得奖励' : 'Complete specific achievements'}</li>
                                    <li>{isZh ? '在商城购买背包扩展' : 'Buy inventory expansion in shop'}</li>
                                    <li>{isZh ? '使用领地仓库存储物品' : 'Use territory warehouse for storage'}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <div className="mt-12 p-6 bg-slate-grey rounded-lg border border-white/10 text-center">
                        <p className="text-gray-300 mb-4">
                            {isZh ? '如果你有任何问题或建议：' : 'If you have any questions or suggestions:'}
                        </p>
                        <p className="mb-2">
                            <span className="text-gray-400">{isZh ? '官方网站' : 'Website'}: </span>
                            <a href="https://earthlord-website.vercel.app" className="text-neon-cyan hover:underline">earthlord-website.vercel.app</a>
                        </p>
                        <p className="mb-4">
                            <span className="text-gray-400">{isZh ? '技术支持' : 'Support'}: </span>
                            <a href="mailto:onestnet@gmail.com" className="text-neon-cyan hover:underline">onestnet@gmail.com</a>
                        </p>
                        <p className="text-lg font-bold text-neon-cyan">
                            {isZh ? '祝你在末世中生存顺利，成为地球新主！' : 'Good luck surviving the apocalypse and becoming the Earth Lord!'}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default GameGuide;
