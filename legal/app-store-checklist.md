# Apple App Store Submission Checklist / App Store上架检查清单

**Last Updated / 最后更新日期: November 20, 2025**

**Target Launch Date / 预计上线日期: November 30, 2025 (Thanksgiving)**

---

## English Version

### Pre-Submission Overview

This comprehensive checklist covers all requirements for submitting EarthLord to the Apple App Store based on the latest November 2025 App Store Review Guidelines.

**Important:** Complete ALL items before submitting for review to maximize approval chances and minimize rejection/resubmission delays.

---

## 1. App Store Connect Account Setup

### 1.1 Developer Account
- [ ] Apple Developer Program membership active ($99/year)
- [ ] Payment and banking information configured
- [ ] Tax forms completed (W-8/W-9 as applicable)
- [ ] Agreements, Tax, and Banking status: Active (green)

### 1.2 App Record Created
- [ ] App created in App Store Connect
- [ ] Bundle ID registered and matches Xcode project: `com.aixue.earthlord` (example)
- [ ] App name "EarthLord" or "地球新主" confirmed (check availability)
- [ ] Primary language set: English
- [ ] Additional language added: Chinese (Simplified)

---

## 2. Build and Technical Requirements

### 2.1 Xcode Build
- [ ] Built with latest stable Xcode version (Xcode 16+ for iOS 18/19 SDK)
- [ ] iOS deployment target: iOS 16.0 or higher (recommended)
- [ ] Supports iPhone and iPad (Universal app recommended)
- [ ] Supports latest devices (iPhone 16 series, iPad Pro M4, etc.)
- [ ] No deprecated APIs or compiler warnings
- [ ] Optimized for performance and battery life

### 2.2 TestFlight Upload
- [ ] Build uploaded to App Store Connect via Xcode or Transporter
- [ ] Build processed successfully (no errors)
- [ ] TestFlight internal testing completed
- [ ] TestFlight external testing completed (minimum 10 testers recommended)
- [ ] Critical bugs identified and fixed
- [ ] Privacy Policy URL added to TestFlight metadata

### 2.3 Technical Compliance
- [ ] App does not crash on launch or during core gameplay
- [ ] All features functional (GPS, camera, photos, notifications, purchases)
- [ ] Location services work correctly (foreground and background)
- [ ] In-app purchases tested and functional
- [ ] Push notifications deliver properly
- [ ] No placeholder content, test data, or debug features
- [ ] Respects iOS permission prompts and handles denials gracefully
- [ ] Supports light and dark mode appropriately
- [ ] VoiceOver accessibility tested (basic navigation accessible)
- [ ] Offline functionality handled gracefully (error messages, not crashes)

### 2.4 Performance
- [ ] App launches in under 3 seconds on target devices
- [ ] No memory leaks or excessive memory usage
- [ ] Smooth frame rate (60fps for UI, 30fps minimum for animations)
- [ ] Battery drain acceptable for location-based app
- [ ] Network requests efficient and properly handle errors

---

## 3. App Metadata (App Store Listing)

### 3.1 Basic Information

**App Name:**
- [ ] Primary: "EarthLord" (max 30 characters)
- [ ] Subtitle (optional): "Post-Apocalyptic Strategy" (max 30 characters)

**Categories:**
- [ ] Primary Category: Games > Strategy
- [ ] Secondary Category: Games > Adventure

**Content Rights:**
- [ ] Selected: "I own the rights" or "I have permission"

### 3.2 Pricing and Availability

**Price:**
- [ ] Base App: Free

**In-App Purchases:**
- [ ] Pioneer Monthly Pass: $9.99/month - Created in App Store Connect
- [ ] Lord's Premium Pass: $19.99/month - Created in App Store Connect
- [ ] All consumables configured (Energy Packs, Resource Bundles, Accelerators)
- [ ] Subscription groups created properly
- [ ] Subscription display names and descriptions clear
- [ ] Subscription durations and prices correct
- [ ] Promotional images for subscriptions uploaded (optional but recommended)

**Availability:**
- [ ] Countries/Regions selected (all or specific markets)
- [ ] Release: Manual release after approval (or Automatic)
- [ ] Pre-order setup (optional for Nov 30 target)

### 3.3 App Information

**General:**
- [ ] Copyright: © 2025 AiXue AI
- [ ] Contact Email: onestnet@gmail.com
- [ ] Privacy Policy URL: [Your hosted privacy policy URL]
- [ ] Terms of Service URL (EULA): [Your hosted terms URL] (optional, uses Apple's standard if not provided)

**Age Rating:**
- [ ] Age Rating Questionnaire completed
- [ ] Rating: 13+ (based on content)
- [ ] Selections:
  - Cartoon/Fantasy Violence: Infrequent/Mild
  - User-Generated Content: Moderated (chat, photos)
  - Location Services: Yes
  - Unrestricted Web Access: No
  - Gambling and Contests: None

**Additional Requirements (New 2025):**
- [ ] **Third-party AI disclosure:** Confirmed we do NOT share data with third-party AI
- [ ] **Medical/Wellness topics:** None
- [ ] **Violent themes disclosure:** Fantasy violence disclosed
- [ ] **Creator app controls:** N/A (not a creator app)

### 3.4 App Description

**Description (Max 4,000 characters):**

English:
```
Conquer the world from your backyard! EarthLord is a next-generation location-based strategy game set in a post-apocalyptic world where survivors compete for territory and resources.

EXPLORE THE REAL WORLD
• Use GPS to discover territories around your location
• Claim real-world landmarks and neighborhoods as your domain
• Venture outdoors to expand your empire

BUILD YOUR EMPIRE
• Construct buildings to generate resources
• Research technologies to unlock powerful upgrades
• Manage energy, materials, and rare items strategically
• Develop your territories into thriving strongholds

STRATEGIC WARFARE
• Defend your lands from rival players
• Launch tactical attacks to conquer new territories
• Form alliances with other survivors
• Coordinate large-scale campaigns with your guild

SOCIAL GAMEPLAY
• Chat and strategize with players worldwide
• Trade resources and form diplomatic agreements
• Compete on global leaderboards
• Join seasonal events and challenges

FEATURES
✓ Real-time location-based gameplay
✓ Stunning graphics and immersive post-apocalyptic theme
✓ Free to play with optional subscriptions for enhanced benefits
✓ Regular updates with new content and features
✓ Safe and moderated community

Whether you're exploring your neighborhood or traveling the world, every location is an opportunity to expand your empire. Will you become the ultimate EarthLord?

Download now and claim your territory!

Note: Continued use of GPS running in the background can dramatically decrease battery life.
```

Chinese (Simplified):
```
从您的后院征服世界！《地球新主》是一款新一代基于位置的策略游戏，设定在末世世界中，幸存者们争夺领土和资源。

探索真实世界
• 使用GPS发现您周围的领地
• 占领现实地标和街区作为您的领土
• 外出探险扩展您的帝国

建设帝国
• 建造建筑以生成资源
• 研究科技解锁强大升级
• 战略性地管理能量、材料和稀有物品
• 将您的领地发展成繁荣的据点

战略战争
• 保卫您的领地免受对手侵扰
• 发动战术攻击征服新领地
• 与其他幸存者结盟
• 与您的公会协调大规模战役

社交玩法
• 与全球玩家聊天和制定策略
• 交易资源并达成外交协议
• 在全球排行榜上竞争
• 参加季节性活动和挑战

功能特色
✓ 实时基于位置的游戏玩法
✓ 令人惊叹的图形和沉浸式末日主题
✓ 免费游玩，可选订阅以获得增强权益
✓ 定期更新新内容和功能
✓ 安全且受监管的社区

无论您是在探索附近还是环游世界,每个位置都是扩展帝国的机会。您能成为终极地球新主吗？

立即下载并占领您的领地！

注意：在后台持续使用GPS会大幅降低电池续航。
```

- [ ] Description compelling and informative
- [ ] No misleading claims or exaggerations
- [ ] Battery warning included for background location
- [ ] Keywords naturally integrated
- [ ] Proper formatting (line breaks, bullets)

**Keywords (Max 100 characters):**
- [ ] English: `strategy,location,gps,territory,survival,multiplayer,war,empire,conquest,outdoor`
- [ ] Chinese: `策略,位置,GPS,领地,生存,多人,战争,帝国,征服,户外`

**Promotional Text (Optional, 170 characters):**
- [ ] Updated for seasonal promotions or launch announcement
- [ ] Example: "🎉 LAUNCH SPECIAL: Thanksgiving launch celebration! Join now for exclusive founder rewards!"

**Support URL:**
- [ ] URL: [Your support website or email contact page]
- [ ] Accessible without login

**Marketing URL (Optional):**
- [ ] URL: [Your marketing/game website]

### 3.5 What's New (Version Notes)

For version 1.0 initial submission:
```
Welcome to EarthLord!

🌍 Explore the post-apocalyptic world through real-world locations
⚔️ Conquer territories and build your empire
🤝 Form alliances with players worldwide
🏆 Compete for glory on global leaderboards

Thank you for joining us at launch! We're excited to have you as a founding player.

For support, contact: onestnet@gmail.com
```

- [ ] Version notes written (enthusiastic but professional)
- [ ] Contact information included for support

---

## 4. App Screenshots and Previews

### 4.1 Screenshots Required (for each device size)

**iPhone 6.9" (iPhone 16 Pro Max) - Required:**
- [ ] Screenshot 1: Main map view with territories
- [ ] Screenshot 2: Territory detail/building interface
- [ ] Screenshot 3: Battle or attack screen
- [ ] Screenshot 4: Social features (alliance, chat)
- [ ] Screenshot 5: Player profile or achievements
- [ ] Dimensions: 1320 x 2868 pixels (portrait) or 2868 x 1320 pixels (landscape)
- [ ] Format: PNG or JPEG, sRGB color space
- [ ] No alpha channels or transparency

**iPhone 6.7" (iPhone 15 Pro Max, 14 Pro Max) - Required:**
- [ ] Same 5 screenshots as above
- [ ] Dimensions: 1290 x 2796 pixels (portrait)

**iPhone 6.5" (iPhone 11 Pro Max, XS Max) - Required:**
- [ ] Same 5 screenshots
- [ ] Dimensions: 1284 x 2778 pixels (portrait)

**iPad Pro (6th Gen) 12.9" - Required if supporting iPad:**
- [ ] Same 5 screenshots (can reuse iPhone or create iPad-specific)
- [ ] Dimensions: 2048 x 2732 pixels (portrait)

**Screenshot Best Practices:**
- [ ] High quality, no compression artifacts
- [ ] Actual in-game content (not mockups or concept art)
- [ ] No simulator chrome or device frames (unless part of marketing design)
- [ ] Localized text if providing Chinese screenshots
- [ ] Clear, bright, appealing composition
- [ ] Showcase core features and unique selling points
- [ ] Include captions or overlay text explaining features (optional but recommended)

### 4.2 App Previews (Videos) - Optional but Recommended

**iPhone 6.9" Preview:**
- [ ] 15-30 second gameplay video
- [ ] Format: .mov, .mp4, or .m4v
- [ ] Resolution: 1320 x 2868 or 2868 x 1320
- [ ] Frame rate: 25-30 fps
- [ ] Codec: H.264 or HEVC
- [ ] Shows actual gameplay (required)
- [ ] Audio optional but recommended
- [ ] No third-party ads or app promotion

**Best Practices:**
- [ ] Opens with compelling hook (first 3 seconds critical)
- [ ] Shows map exploration, territory claiming, building
- [ ] Demonstrates battle or social features
- [ ] Professional editing and pacing
- [ ] Localized for Chinese market if providing Chinese version

---

## 5. Legal and Compliance Documents

### 5.1 Required Policies
- [ ] **Privacy Policy:** Hosted at accessible URL, covers all data collection
  - Location data usage explained
  - Third-party services disclosed (Supabase, Google/Apple Sign-In)
  - User rights explained (access, deletion, correction)
  - GDPR and CCPA compliant
  - Children's privacy (COPPA - under 13 prohibited)
  - Contact information: onestnet@gmail.com

- [ ] **Terms of Service:** Hosted at accessible URL
  - Account registration rules
  - User conduct and prohibited activities
  - Intellectual property rights
  - Liability disclaimers
  - Dispute resolution

- [ ] **Monetization Policy:** Accessible in-app or via URL
  - Subscription terms clearly stated
  - Auto-renewal explained
  - Refund policy (defer to Apple)
  - Cancellation instructions

### 5.2 App Review Information (for Apple Reviewers)

**Sign-In Required:**
- [ ] Demo Account Provided:
  - Username: `demo@earthlord.app` (example)
  - Password: `ReviewDemo2025!`
  - Ensure account is pre-configured with some progress for testing
  - Do NOT use real user account

**Contact Information:**
- [ ] First Name: [Your first name or company rep]
- [ ] Last Name: [Your last name]
- [ ] Phone Number: [Contact number with country code]
- [ ] Email: onestnet@gmail.com

**Notes:**
```
Thank you for reviewing EarthLord!

LOCATION TESTING:
• GPS location required for gameplay. Please enable location permissions.
• If testing indoors, some features may be limited. Outdoor testing recommended.
• To test territory claiming: Walk or simulate location to discover nearby territories.

IN-APP PURCHASES:
• Subscriptions and consumables configured. Sandbox testing enabled.
• No purchase required to test core gameplay.

DEMO ACCOUNT:
• Username: demo@earthlord.app
• Password: ReviewDemo2025!
• Account has starting resources and tutorial completed.

CONTACT:
For any questions: onestnet@gmail.com | WeChat: aixue2075

BATTERY WARNING:
Background location usage may drain battery during extended testing.
```

- [ ] Notes are clear, helpful, and professional
- [ ] Specific testing instructions provided for unique features
- [ ] Contact information easily accessible

**Attachment (if needed):**
- [ ] Demo video showing key features (if app is complex)
- [ ] Additional screenshots or diagrams (if helpful)

### 5.3 Export Compliance
- [ ] Export Compliance Information completed
- [ ] Select: "No" (if app doesn't use encryption beyond standard iOS encryption)
- [ ] OR Select: "Yes" and provide documentation (if using custom encryption)
  - Most apps using standard HTTPS/TLS can select "No"

---

## 6. App Privacy Details (Nutrition Labels)

As of 2025, App Privacy Details are REQUIRED. Complete the questionnaire in App Store Connect.

### 6.1 Data Collection Declaration

**Contact Info:**
- [x] Collected: Email Address, Name (username)
- Purpose: App Functionality, Analytics, Account Management
- Linked to User: Yes
- Used for Tracking: No

**Location:**
- [x] Collected: Precise Location
- Purpose: App Functionality (core gameplay), Analytics
- Linked to User: Yes
- Used for Tracking: No

**User Content:**
- [x] Collected: Photos (territory verification), Gameplay Content
- Purpose: App Functionality
- Linked to User: Yes
- Used for Tracking: No

**Identifiers:**
- [x] Collected: User ID
- Purpose: App Functionality, Analytics
- Linked to User: Yes
- Used for Tracking: No

**Usage Data:**
- [x] Collected: Product Interaction, Advertising Data (if using IDFA)
- Purpose: Analytics, App Functionality
- Linked to User: Yes
- Used for Tracking: No (unless using for ads)

**Purchases:**
- [x] Collected: Purchase History
- Purpose: App Functionality, Analytics
- Linked to User: Yes
- Used for Tracking: No

**Third-Party AI Sharing (New 2025 Requirement):**
- [ ] NOT sharing data with third-party AI services
- [ ] If sharing: Explicit user permission obtained before sharing

### 6.2 Privacy Practices
- [ ] Privacy Policy URL entered
- [ ] Data Collection purposes accurately described
- [ ] "Linked to User" correctly identified for each data type
- [ ] "Used for Tracking" correctly declared (likely "No" for most data)

---

## 7. In-App Purchases Configuration

### 7.1 Subscription Groups
- [ ] Subscription Group created: "EarthLord Premium"
- [ ] Group display name: "Premium Subscriptions"

**Pioneer Monthly Pass:**
- [ ] Product ID: `com.aixue.earthlord.pioneer.monthly` (example)
- [ ] Reference Name: Pioneer Monthly Pass
- [ ] Duration: 1 Month
- [ ] Price: $9.99 (Tier 10 or custom)
- [ ] Subscription Group: EarthLord Premium (Level 1)
- [ ] Localized Display Name (EN): "Pioneer Monthly Pass"
- [ ] Localized Display Name (ZH): "开拓者月卡"
- [ ] Localized Description written
- [ ] Reviewed in App Store: Yes
- [ ] Screenshot/Promotional image uploaded (optional)

**Lord's Premium Pass:**
- [ ] Product ID: `com.aixue.earthlord.lord.monthly`
- [ ] Reference Name: Lord's Premium Pass
- [ ] Duration: 1 Month
- [ ] Price: $19.99 (Tier 20 or custom)
- [ ] Subscription Group: EarthLord Premium (Level 2 - higher tier)
- [ ] Localized Display Name (EN): "Lord's Premium Pass"
- [ ] Localized Display Name (ZH): "领主通行证"
- [ ] Localized Description written
- [ ] Reviewed in App Store: Yes

### 7.2 Consumables (Sample - create all)

**Small Energy Pack:**
- [ ] Product ID: `com.aixue.earthlord.energy.small`
- [ ] Type: Consumable
- [ ] Price: $0.99 (Tier 1)
- [ ] Localized names and descriptions

(Repeat for all consumable products: Medium Energy, Large Energy, Mega Energy, Resource Bundles, Accelerators, Special Offers)

- [ ] All consumables created and configured
- [ ] Prices match Monetization Policy
- [ ] Localized for English and Chinese
- [ ] Reviewed in App Store: Yes

### 7.3 Testing
- [ ] Sandbox testing completed for all IAPs
- [ ] Purchases trigger correctly in app
- [ ] Receipts validated properly
- [ ] Subscriptions renew correctly in sandbox
- [ ] Restoration of purchases works
- [ ] Family Sharing enabled for eligible products (if desired)

---

## 8. App Review Guidelines Compliance (2025)

### 8.1 Safety (Guideline 1)
- [ ] No objectionable content (violence is fantasy/mild only)
- [ ] User-generated content is moderated (chat, photos, territory names)
- [ ] Reporting mechanism for inappropriate content in place
- [ ] Physical harm warnings included (outdoor safety, don't trespass)
- [ ] Child safety: Age-gated at 13+, no data collection from under 13

### 8.2 Performance (Guideline 2)
- [ ] App complete and functional (no placeholder content)
- [ ] No crashes, bugs, or broken links
- [ ] Metadata accurate (screenshots match app)
- [ ] Demo account works perfectly
- [ ] All features accessible to reviewer

**Beta Software:**
- [ ] Built with official release version of Xcode (not beta)
- [ ] Targets released iOS SDK (not beta iOS)

### 8.3 Business (Guideline 3)

**3.1 Payments:**
- [ ] All in-app purchases use Apple In-App Purchase system (REQUIRED)
- [ ] No external payment links or methods for digital goods
- [ ] Subscription auto-renewal clearly disclosed
- [ ] Clear cancellation instructions provided in-app

**3.1.1 In-App Purchase:**
- [ ] Subscriptions restore properly across devices
- [ ] Subscription terms displayed before purchase
- [ ] Privacy Policy and Terms linked from subscription screen
- [ ] "Restore Purchases" button available

**3.1.2 Subscriptions:**
- [ ] Auto-renewable subscription terms clearly explained:
  - Duration and price
  - Payment charged to Apple Account
  - Auto-renewal unless cancelled 24 hours before end of period
  - Manage/cancel in Account Settings
  - Links to Privacy Policy and Terms of Use
- [ ] Subscription benefits clearly listed
- [ ] Free trial disclosed if offering (not required)

**3.1.3 Other Purchase Methods:**
- [ ] NOT using external purchase methods for in-app content (against guidelines)
- [ ] External link rules: Only linking to account management/support, NOT purchases

**3.2 Other Business Model Issues:**
- [ ] No unapproved advertising (we have none)
- [ ] No cryptocurrency or NFTs (we have none)
- [ ] No loan features (we have none)

### 8.4 Design (Guideline 4)

**4.1 Copycats:**
- [ ] **NEW 2025:** App does NOT use another developer's icon, brand, or name without permission
- [ ] Original game design (not a clone)
- [ ] Unique branding and visuals

**4.2 Minimum Functionality:**
- [ ] App is more than a repackaged website
- [ ] Provides substantial functionality beyond basic GPS map
- [ ] Engaging gameplay and features

**4.3 Spam:**
- [ ] Not creating multiple similar apps
- [ ] App is unique and provides value

**4.5 Location Services:**
- [ ] Location services used only for app functionality (not ads/tracking)
- [ ] Location permission purpose string clear and accurate
- [ ] Functionality degrades gracefully if location denied (shows error, doesn't crash)
- [ ] Uses significant location change API for background (not continuous polling)

### 8.5 Legal (Guideline 5)

**5.1 Privacy:**
- [ ] Privacy Policy posted and linked
- [ ] Data collection disclosed in App Privacy Details
- [ ] Location permission purpose string: "EarthLord needs your location to discover territories and enable location-based gameplay."
- [ ] Camera permission purpose string: "EarthLord uses your camera to capture territory verification photos."
- [ ] Photo Library permission purpose string: "EarthLord accesses your photos to upload territory verification images."
- [ ] All permission requests include clear explanations

**5.1.1 Data Collection and Storage:**
- [ ] Complies with GDPR (EU users)
- [ ] Complies with CCPA (California users)
- [ ] Complies with COPPA (no users under 13)
- [ ] Secure data transmission (HTTPS/TLS)
- [ ] User data deletion available

**5.1.2 Data Use and Sharing:**
- [ ] **NEW 2025:** Clearly disclose if sharing data with third-party AI (we do not)
- [ ] Third-party SDKs disclosed (Supabase, Google Sign-In, Apple Sign-In)
- [ ] No selling of user data

**5.2 Intellectual Property:**
- [ ] All content is original or properly licensed
- [ ] No use of Apple's trademarks beyond necessary identification
- [ ] No misleading app name or icon

**5.3 Gaming, Gambling, and Lotteries:**
- [ ] No real-money gambling
- [ ] No loot boxes with randomized rewards for real money
- [ ] If offering sweepstakes/contests: Compliant with local laws (we don't offer)

**5.4 VPN Apps:**
- [ ] Not applicable (we're not a VPN app)

### 8.6 Kids Category (Guideline 1.3)
- [ ] Not applicable - we're 13+, not targeting kids

### 8.7 Age Verification (NEW 2025 for Creator Apps)
- [ ] Not applicable - we're not a creator app hosting user-generated mini-apps

---

## 9. Localization

### 9.1 English (Primary)
- [ ] App interface: Fully in English
- [ ] Metadata: Complete
- [ ] Screenshots: English
- [ ] App Store description: English

### 9.2 Chinese (Simplified) - if supporting
- [ ] App interface: Fully translated and tested
- [ ] Metadata: Translated
- [ ] Screenshots: Chinese or universal (gameplay with minimal text)
- [ ] App Store description: Translated
- [ ] Keywords: Chinese
- [ ] In-app purchases: Localized names/descriptions

### 9.3 Other Languages (future consideration)
- [ ] Spanish, Japanese, Korean, etc. (expand later)

---

## 10. Final Pre-Submission Checks

### 10.1 App Store Connect Review
- [ ] All required fields in App Store Connect filled out
- [ ] Green checkmark next to "App Information"
- [ ] Green checkmark next to "Pricing and Availability"
- [ ] Green checkmark next to "App Privacy"
- [ ] Green checkmark next to build selection
- [ ] Screenshots uploaded for all required device sizes
- [ ] Age rating completed
- [ ] In-app purchases submitted for review with app

### 10.2 Build Selection
- [ ] Latest build selected for submission
- [ ] Build tested thoroughly before selection
- [ ] Version number correct (1.0 for initial launch)
- [ ] Build number unique (e.g., 1, or build date format 20251120)

### 10.3 Testing with Demo Account
- [ ] Logged in successfully with demo credentials
- [ ] Completed tutorial (if applicable)
- [ ] Claimed at least one territory
- [ ] Tested building construction
- [ ] Tested combat/attack features
- [ ] Tested alliance/social features
- [ ] Tested in-app purchase flow (sandbox)
- [ ] Tested account settings and profile
- [ ] No crashes or major bugs encountered

### 10.4 Content Review
- [ ] All text proofread for spelling/grammar (English and Chinese)
- [ ] No placeholder text (e.g., "Lorem ipsum", "Test", "TODO")
- [ ] No test images or mockups
- [ ] No internal debug features visible
- [ ] No offensive or inappropriate content
- [ ] Copyright notices correct: © 2025 AiXue AI

### 10.5 Legal and Support
- [ ] Privacy Policy live and accessible
- [ ] Terms of Service live and accessible
- [ ] Monetization Policy live and accessible (or included in ToS)
- [ ] Support email monitored: onestnet@gmail.com
- [ ] Support website/FAQ ready (if applicable)

---

## 11. Submission Process

### 11.1 Submit for Review
- [ ] In App Store Connect, navigate to app version
- [ ] Click "Add for Review" on all in-app purchases
- [ ] Click "Submit for Review" on app version
- [ ] Confirm all information is correct
- [ ] Submit!

### 11.2 Post-Submission
- [ ] Confirmation email received from Apple
- [ ] Status changed to "Waiting for Review"
- [ ] Monitor App Store Connect for status updates
- [ ] Respond to any Apple inquiries within 24 hours

**Expected Timeline:**
- Waiting for Review: 1-3 days
- In Review: 1-2 days
- Total: 2-5 days average (can be faster or slower)

### 11.3 If Rejected
- [ ] Read rejection reason carefully
- [ ] Address all issues mentioned
- [ ] Make necessary changes to build and/or metadata
- [ ] Respond to reviewer via Resolution Center if clarification needed
- [ ] Resubmit with detailed explanation of changes

**Common Rejection Reasons to Avoid:**
- Crashes or bugs during review
- Incomplete or misleading metadata
- Missing demo account or non-functional demo account
- Lack of proper permissions explanations
- Privacy Policy missing or non-compliant
- Guideline 3.1.1 violation (payment methods)
- Guideline 4.5 violation (location services misuse)

### 11.4 If Approved
- [ ] Release app (manual or automatic based on earlier selection)
- [ ] Announce launch on marketing channels
- [ ] Monitor reviews and ratings
- [ ] Respond to user feedback
- [ ] Track analytics and performance
- [ ] Plan for version 1.1 updates

---

## 12. Launch Day Checklist (November 30, 2025)

### 12.1 Pre-Launch (1 week before)
- [ ] Ensure app approved and ready for release
- [ ] Marketing materials prepared (social media posts, press release)
- [ ] Support team briefed and ready
- [ ] Server infrastructure scaled for launch traffic
- [ ] Database backups verified
- [ ] Monitoring and analytics tools configured

### 12.2 Launch Day
- [ ] Release app at optimal time (e.g., 12 AM PST, 9 AM EST)
- [ ] Post announcement on social media
- [ ] Monitor server performance and user feedback
- [ ] Respond to initial reviews
- [ ] Track downloads and user engagement
- [ ] Watch for critical bugs and prepare hotfix if needed

### 12.3 Post-Launch (First Week)
- [ ] Respond to all reviews (especially negative ones)
- [ ] Monitor crash reports and analytics
- [ ] Gather user feedback for improvements
- [ ] Prepare version 1.0.1 with bug fixes (if needed)
- [ ] Celebrate successful launch!

---

## 13. Contact and Resources

**Developer:**
- Company: AiXue AI (爱学人工智能)
- Email: onestnet@gmail.com
- WeChat: aixue2075

**Apple Resources:**
- App Store Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- App Store Connect: https://appstoreconnect.apple.com/
- Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Developer Forums: https://developer.apple.com/forums/
- Developer Support: https://developer.apple.com/support/

**Internal Resources:**
- Privacy Policy: /Users/mike/Downloads/landlord/earthlord-website/legal/privacy-policy.md
- Terms of Service: /Users/mike/Downloads/landlord/earthlord-website/legal/terms-of-service.md
- Monetization Policy: /Users/mike/Downloads/landlord/earthlord-website/legal/monetization-policy.md
- Age Rating Guide: /Users/mike/Downloads/landlord/earthlord-website/legal/age-rating.md

---

## 14. Notes and Updates

**Version History:**
- v1.0 (2025-11-20): Initial checklist created based on Nov 2025 guidelines

**Key 2025 Updates Incorporated:**
- Third-party AI data sharing disclosure requirement
- Clone app protections (unique branding verification)
- Updated age rating system (13+ questionnaire)
- Creator app age verification (not applicable but noted)
- Loan app restrictions (not applicable)
- External payment link restrictions

---

**Good luck with your App Store submission!**

This checklist is comprehensive, but always refer to the official Apple App Store Review Guidelines for the most current requirements. Apple updates guidelines regularly, so stay informed.

---

## 中文版本

### 提交前概述

本综合检查清单涵盖了根据2025年11月最新App Store审核指南向Apple App Store提交《地球新主》的所有要求。

**重要提示：** 在提交审核前完成所有项目，以最大化批准机会并最小化拒绝/重新提交延迟。

---

## 1. App Store Connect账户设置

### 1.1 开发者账户
- [ ] Apple开发者计划成员资格有效（$99/年）
- [ ] 支付和银行信息已配置
- [ ] 税务表格已完成（适用的W-8/W-9）
- [ ] 协议、税务和银行状态：有效（绿色）

### 1.2 应用记录已创建
- [ ] 在App Store Connect中创建应用
- [ ] Bundle ID已注册并与Xcode项目匹配：`com.aixue.earthlord`（示例）
- [ ] 应用名称"EarthLord"或"地球新主"已确认（检查可用性）
- [ ] 主要语言设置：英语
- [ ] 添加附加语言：中文（简体）

---

## 2. 构建和技术要求

### 2.1 Xcode构建
- [ ] 使用最新稳定Xcode版本构建（iOS 18/19 SDK使用Xcode 16+）
- [ ] iOS部署目标：iOS 16.0或更高版本（推荐）
- [ ] 支持iPhone和iPad（推荐通用应用）
- [ ] 支持最新设备（iPhone 16系列、iPad Pro M4等）
- [ ] 无已弃用的API或编译器警告
- [ ] 针对性能和电池续航进行了优化

### 2.2 TestFlight上传
- [ ] 通过Xcode或Transporter将构建上传到App Store Connect
- [ ] 构建成功处理（无错误）
- [ ] TestFlight内部测试已完成
- [ ] TestFlight外部测试已完成（推荐至少10名测试人员）
- [ ] 关键错误已识别并修复
- [ ] 隐私政策URL已添加到TestFlight元数据

### 2.3 技术合规
- [ ] 应用在启动或核心游戏玩法期间不会崩溃
- [ ] 所有功能正常（GPS、相机、照片、通知、购买）
- [ ] 位置服务正常工作（前台和后台）
- [ ] 应用内购买已测试且功能正常
- [ ] 推送通知正常发送
- [ ] 无占位符内容、测试数据或调试功能
- [ ] 尊重iOS权限提示并优雅地处理拒绝
- [ ] 适当支持浅色和深色模式
- [ ] VoiceOver无障碍测试（基本导航可访问）
- [ ] 优雅地处理离线功能（错误消息，而非崩溃）

### 2.4 性能
- [ ] 应用在目标设备上3秒内启动
- [ ] 无内存泄漏或过度内存使用
- [ ] 流畅的帧率（UI为60fps，动画至少30fps）
- [ ] 基于位置的应用电池消耗可接受
- [ ] 网络请求高效并正确处理错误

---

## 3. 应用元数据（App Store列表）

### 3.1 基本信息

**应用名称：**
- [ ] 主要：地球新主 / EarthLord（最多30个字符）
- [ ] 副标题（可选）：末日策略游戏（最多30个字符）

**类别：**
- [ ] 主要类别：游戏 > 策略
- [ ] 次要类别：游戏 > 冒险

**内容权利：**
- [ ] 已选择："我拥有权利"或"我有许可"

### 3.2 定价和可用性

**价格：**
- [ ] 基础应用：免费

**应用内购买：**
- [ ] 开拓者月卡：$9.99/月 - 在App Store Connect中创建
- [ ] 领主通行证：$19.99/月 - 在App Store Connect中创建
- [ ] 所有消耗品已配置（能量包、资源包、加速器）
- [ ] 订阅组正确创建
- [ ] 订阅显示名称和描述清晰
- [ ] 订阅期限和价格正确
- [ ] 订阅促销图片已上传（可选但推荐）

**可用性：**
- [ ] 已选择国家/地区（所有或特定市场）
- [ ] 发布：批准后手动发布（或自动）
- [ ] 预购设置（11月30日目标可选）

### 3.3 应用信息

**一般信息：**
- [ ] 版权：© 2025 AiXue AI
- [ ] 联系电子邮件：onestnet@gmail.com
- [ ] 隐私政策URL：[您托管的隐私政策URL]
- [ ] 服务条款URL（EULA）：[您托管的条款URL]（可选，如果不提供则使用Apple标准）

**年龄分级：**
- [ ] 年龄分级问卷已完成
- [ ] 分级：13+（基于内容）
- [ ] 选择：
  - 卡通/幻想暴力：不频繁/轻度
  - 用户生成内容：受监控（聊天、照片）
  - 位置服务：是
  - 不受限制的网络访问：否
  - 赌博和竞赛：无

**附加要求（2025年新增）：**
- [ ] **第三方AI披露：** 确认我们不与第三方AI共享数据
- [ ] **医疗/健康主题：** 无
- [ ] **暴力主题披露：** 幻想暴力已披露
- [ ] **创作者应用控制：** 不适用（不是创作者应用）

### 3.4 应用描述

**描述（最多4,000个字符）：**

中文：
```
从您的后院征服世界！《地球新主》是一款新一代基于位置的策略游戏，设定在末世世界中，幸存者们争夺领土和资源。

探索真实世界
• 使用GPS发现您周围的领地
• 占领现实地标和街区作为您的领土
• 外出探险扩展您的帝国

建设帝国
• 建造建筑以生成资源
• 研究科技解锁强大升级
• 战略性地管理能量、材料和稀有物品
• 将您的领地发展成繁荣的据点

战略战争
• 保卫您的领地免受对手侵扰
• 发动战术攻击征服新领地
• 与其他幸存者结盟
• 与您的公会协调大规模战役

社交玩法
• 与全球玩家聊天和制定策略
• 交易资源并达成外交协议
• 在全球排行榜上竞争
• 参加季节性活动和挑战

功能特色
✓ 实时基于位置的游戏玩法
✓ 令人惊叹的图形和沉浸式末日主题
✓ 免费游玩，可选订阅以获得增强权益
✓ 定期更新新内容和功能
✓ 安全且受监管的社区

无论您是在探索附近还是环游世界，每个位置都是扩展帝国的机会。您能成为终极地球新主吗？

立即下载并占领您的领地！

注意：在后台持续使用GPS会大幅降低电池续航。
```

英文：
```
Conquer the world from your backyard! EarthLord is a next-generation location-based strategy game set in a post-apocalyptic world where survivors compete for territory and resources.

EXPLORE THE REAL WORLD
• Use GPS to discover territories around your location
• Claim real-world landmarks and neighborhoods as your domain
• Venture outdoors to expand your empire

BUILD YOUR EMPIRE
• Construct buildings to generate resources
• Research technologies to unlock powerful upgrades
• Manage energy, materials, and rare items strategically
• Develop your territories into thriving strongholds

STRATEGIC WARFARE
• Defend your lands from rival players
• Launch tactical attacks to conquer new territories
• Form alliances with other survivors
• Coordinate large-scale campaigns with your guild

SOCIAL GAMEPLAY
• Chat and strategize with players worldwide
• Trade resources and form diplomatic agreements
• Compete on global leaderboards
• Join seasonal events and challenges

FEATURES
✓ Real-time location-based gameplay
✓ Stunning graphics and immersive post-apocalyptic theme
✓ Free to play with optional subscriptions for enhanced benefits
✓ Regular updates with new content and features
✓ Safe and moderated community

Whether you're exploring your neighborhood or traveling the world, every location is an opportunity to expand your empire. Will you become the ultimate EarthLord?

Download now and claim your territory!

Note: Continued use of GPS running in the background can dramatically decrease battery life.
```

- [ ] 描述引人入胜且信息丰富
- [ ] 无误导性声明或夸大
- [ ] 包含后台位置的电池警告
- [ ] 关键词自然整合
- [ ] 正确格式化（换行、项目符号）

**关键词（最多100个字符）：**
- [ ] 中文：`策略,位置,GPS,领地,生存,多人,战争,帝国,征服,户外`
- [ ] 英文：`strategy,location,gps,territory,survival,multiplayer,war,empire,conquest,outdoor`

**宣传文本（可选，170个字符）：**
- [ ] 为季节性促销或发布公告更新
- [ ] 示例："🎉 发布特别活动：感恩节发布庆典！立即加入获取独家创始人奖励！"

**支持URL：**
- [ ] URL：[您的支持网站或电子邮件联系页面]
- [ ] 无需登录即可访问

**营销URL（可选）：**
- [ ] URL：[您的营销/游戏网站]

### 3.5 新功能（版本说明）

对于版本1.0初始提交：
```
欢迎来到《地球新主》！

🌍 通过现实世界位置探索末日世界
⚔️ 征服领地并建立您的帝国
🤝 与全球玩家结盟
🏆 在全球排行榜上竞争荣耀

感谢您在发布时加入我们！我们很高兴您成为创始玩家。

如需支持，请联系：onestnet@gmail.com
```

- [ ] 版本说明已编写（热情但专业）
- [ ] 包含支持联系信息

---

## 4. 应用截图和预览

### 4.1 需要的截图（每种设备尺寸）

**iPhone 6.9"（iPhone 16 Pro Max）- 必需：**
- [ ] 截图1：带领地的主地图视图
- [ ] 截图2：领地详情/建筑界面
- [ ] 截图3：战斗或攻击屏幕
- [ ] 截图4：社交功能（联盟、聊天）
- [ ] 截图5：玩家个人资料或成就
- [ ] 尺寸：1320 x 2868像素（纵向）或2868 x 1320像素（横向）
- [ ] 格式：PNG或JPEG，sRGB色彩空间
- [ ] 无alpha通道或透明度

**iPhone 6.7"（iPhone 15 Pro Max, 14 Pro Max）- 必需：**
- [ ] 与上述相同的5张截图
- [ ] 尺寸：1290 x 2796像素（纵向）

**iPhone 6.5"（iPhone 11 Pro Max, XS Max）- 必需：**
- [ ] 相同的5张截图
- [ ] 尺寸：1284 x 2778像素（纵向）

**iPad Pro（第6代）12.9" - 如果支持iPad则必需：**
- [ ] 相同的5张截图（可以重用iPhone或创建iPad特定的）
- [ ] 尺寸：2048 x 2732像素（纵向）

**截图最佳实践：**
- [ ] 高质量，无压缩伪影
- [ ] 实际游戏内容（不是模型或概念艺术）
- [ ] 无模拟器chrome或设备框架（除非是营销设计的一部分）
- [ ] 如果提供中文截图，则文本本地化
- [ ] 清晰、明亮、吸引人的构图
- [ ] 展示核心功能和独特卖点
- [ ] 包含说明功能的标题或叠加文本（可选但推荐）

### 4.2 应用预览（视频）- 可选但推荐

**iPhone 6.9"预览：**
- [ ] 15-30秒游戏玩法视频
- [ ] 格式：.mov、.mp4或.m4v
- [ ] 分辨率：1320 x 2868或2868 x 1320
- [ ] 帧率：25-30 fps
- [ ] 编解码器：H.264或HEVC
- [ ] 显示实际游戏玩法（必需）
- [ ] 音频可选但推荐
- [ ] 无第三方广告或应用推广

**最佳实践：**
- [ ] 以引人入胜的钩子开场（前3秒至关重要）
- [ ] 显示地图探索、领地占领、建造
- [ ] 演示战斗或社交功能
- [ ] 专业编辑和节奏
- [ ] 如果提供中文版本，则为中文市场本地化

---

## 5. 法律和合规文档

### 5.1 必需政策
- [ ] **隐私政策：** 托管在可访问URL，涵盖所有数据收集
  - 位置数据使用已说明
  - 第三方服务已披露（Supabase、Google/Apple登录）
  - 用户权利已说明（访问、删除、更正）
  - 符合GDPR和CCPA
  - 儿童隐私（COPPA - 禁止13岁以下）
  - 联系信息：onestnet@gmail.com

- [ ] **服务条款：** 托管在可访问URL
  - 账户注册规则
  - 用户行为和禁止活动
  - 知识产权
  - 责任免责声明
  - 争议解决

- [ ] **收费政策：** 应用内或通过URL可访问
  - 订阅条款清楚说明
  - 自动续订已说明
  - 退款政策（服从Apple）
  - 取消说明

### 5.2 应用审核信息（给Apple审核员）

**需要登录：**
- [ ] 提供演示账户：
  - 用户名：`demo@earthlord.app`（示例）
  - 密码：`ReviewDemo2025!`
  - 确保账户预配置了一些进度以供测试
  - 不要使用真实用户账户

**联系信息：**
- [ ] 名字：[您的名字或公司代表]
- [ ] 姓氏：[您的姓氏]
- [ ] 电话号码：[带国家代码的联系电话]
- [ ] 电子邮件：onestnet@gmail.com

**注释：**
```
感谢您审核《地球新主》！

位置测试：
• 游戏玩法需要GPS位置。请启用位置权限。
• 如果在室内测试，某些功能可能受限。推荐户外测试。
• 要测试领地占领：步行或模拟位置以发现附近的领地。

应用内购买：
• 订阅和消耗品已配置。沙箱测试已启用。
• 测试核心游戏玩法无需购买。

演示账户：
• 用户名：demo@earthlord.app
• 密码：ReviewDemo2025!
• 账户有起始资源并且教程已完成。

联系：
如有任何问题：onestnet@gmail.com | 微信：aixue2075

电池警告：
后台位置使用可能在长时间测试期间耗尽电池。
```

- [ ] 注释清晰、有帮助且专业
- [ ] 为独特功能提供特定测试说明
- [ ] 联系信息易于访问

**附件（如果需要）：**
- [ ] 显示关键功能的演示视频（如果应用复杂）
- [ ] 额外的截图或图表（如果有帮助）

### 5.3 出口合规
- [ ] 出口合规信息已完成
- [ ] 选择："否"（如果应用不使用标准iOS加密之外的加密）
- [ ] 或选择："是"并提供文档（如果使用自定义加密）
  - 使用标准HTTPS/TLS的大多数应用可以选择"否"

---

## 6. 应用隐私详情（营养标签）

截至2025年，应用隐私详情是必需的。在App Store Connect中完成问卷。

### 6.1 数据收集声明

**联系信息：**
- [x] 已收集：电子邮件地址、姓名（用户名）
- 目的：应用功能、分析、账户管理
- 与用户关联：是
- 用于跟踪：否

**位置：**
- [x] 已收集：精确位置
- 目的：应用功能（核心游戏玩法）、分析
- 与用户关联：是
- 用于跟踪：否

**用户内容：**
- [x] 已收集：照片（领地验证）、游戏玩法内容
- 目的：应用功能
- 与用户关联：是
- 用于跟踪：否

**标识符：**
- [x] 已收集：用户ID
- 目的：应用功能、分析
- 与用户关联：是
- 用于跟踪：否

**使用数据：**
- [x] 已收集：产品交互、广告数据（如果使用IDFA）
- 目的：分析、应用功能
- 与用户关联：是
- 用于跟踪：否（除非用于广告）

**购买：**
- [x] 已收集：购买历史
- 目的：应用功能、分析
- 与用户关联：是
- 用于跟踪：否

**第三方AI共享（2025年新要求）：**
- [ ] 不与第三方AI服务共享数据
- [ ] 如果共享：在共享前获得明确的用户许可

### 6.2 隐私实践
- [ ] 隐私政策URL已输入
- [ ] 数据收集目的准确描述
- [ ] 每种数据类型的"与用户关联"正确识别
- [ ] "用于跟踪"正确声明（大多数数据可能是"否"）

---

## 7. 应用内购买配置

### 7.1 订阅组
- [ ] 订阅组已创建："地球新主高级"
- [ ] 组显示名称："高级订阅"

**开拓者月卡：**
- [ ] 产品ID：`com.aixue.earthlord.pioneer.monthly`（示例）
- [ ] 参考名称：开拓者月卡
- [ ] 期限：1个月
- [ ] 价格：$9.99（第10层或自定义）
- [ ] 订阅组：地球新主高级（第1级）
- [ ] 本地化显示名称（EN）："Pioneer Monthly Pass"
- [ ] 本地化显示名称（ZH）："开拓者月卡"
- [ ] 本地化描述已编写
- [ ] 在App Store中审核：是
- [ ] 截图/促销图片已上传（可选）

**领主通行证：**
- [ ] 产品ID：`com.aixue.earthlord.lord.monthly`
- [ ] 参考名称：领主通行证
- [ ] 期限：1个月
- [ ] 价格：$19.99（第20层或自定义）
- [ ] 订阅组：地球新主高级（第2级 - 更高层级）
- [ ] 本地化显示名称（EN）："Lord's Premium Pass"
- [ ] 本地化显示名称（ZH）："领主通行证"
- [ ] 本地化描述已编写
- [ ] 在App Store中审核：是

### 7.2 消耗品（示例 - 创建所有）

**小能量包：**
- [ ] 产品ID：`com.aixue.earthlord.energy.small`
- [ ] 类型：消耗品
- [ ] 价格：$0.99（第1层）
- [ ] 本地化名称和描述

（对所有消耗品重复：中能量、大能量、超大能量、资源包、加速器、特别优惠）

- [ ] 所有消耗品已创建和配置
- [ ] 价格与收费政策匹配
- [ ] 已为英语和中文本地化
- [ ] 在App Store中审核：是

### 7.3 测试
- [ ] 所有IAP的沙箱测试已完成
- [ ] 购买在应用中正确触发
- [ ] 收据正确验证
- [ ] 订阅在沙箱中正确续订
- [ ] 购买恢复有效
- [ ] 家庭共享已为符合条件的产品启用（如果需要）

---

## 8. 应用审核指南合规（2025年）

### 8.1 安全（指南1）
- [ ] 无令人反感的内容（暴力仅为幻想/轻度）
- [ ] 用户生成的内容受到监控（聊天、照片、领地名称）
- [ ] 不当内容报告机制已就位
- [ ] 包含人身伤害警告（户外安全、不要擅自闯入）
- [ ] 儿童安全：年龄限制为13+，不从13岁以下收集数据

### 8.2 性能（指南2）
- [ ] 应用完整且功能正常（无占位符内容）
- [ ] 无崩溃、错误或损坏的链接
- [ ] 元数据准确（截图与应用匹配）
- [ ] 演示账户完美运行
- [ ] 审核员可访问所有功能

**测试版软件：**
- [ ] 使用官方发布版本的Xcode构建（非测试版）
- [ ] 针对已发布的iOS SDK（非测试版iOS）

### 8.3 业务（指南3）

**3.1 支付：**
- [ ] 所有应用内购买使用Apple应用内购买系统（必需）
- [ ] 数字商品无外部支付链接或方法
- [ ] 订阅自动续订清楚披露
- [ ] 应用内提供明确的取消说明

**3.1.1 应用内购买：**
- [ ] 订阅跨设备正确恢复
- [ ] 购买前显示订阅条款
- [ ] 从订阅屏幕链接隐私政策和条款
- [ ] "恢复购买"按钮可用

**3.1.2 订阅：**
- [ ] 自动续订订阅条款清楚说明：
  - 期限和价格
  - 支付从Apple账户扣费
  - 自动续订，除非在期限结束前24小时取消
  - 在账户设置中管理/取消
  - 链接到隐私政策和使用条款
- [ ] 订阅权益清楚列出
- [ ] 如果提供免费试用则披露（不是必需的）

**3.1.3 其他购买方法：**
- [ ] 不对应用内内容使用外部购买方法（违反指南）
- [ ] 外部链接规则：仅链接到账户管理/支持，不是购买

**3.2 其他业务模式问题：**
- [ ] 无未批准的广告（我们没有）
- [ ] 无加密货币或NFT（我们没有）
- [ ] 无贷款功能（我们没有）

### 8.4 设计（指南4）

**4.1 模仿者：**
- [ ] **2025年新增：** 应用不使用另一个开发者的图标、品牌或名称而未经许可
- [ ] 原创游戏设计（不是克隆）
- [ ] 独特的品牌和视觉效果

**4.2 最低功能：**
- [ ] 应用不仅仅是重新打包的网站
- [ ] 提供超越基本GPS地图的实质性功能
- [ ] 引人入胜的游戏玩法和功能

**4.3 垃圾邮件：**
- [ ] 不创建多个类似应用
- [ ] 应用独特且提供价值

**4.5 位置服务：**
- [ ] 位置服务仅用于应用功能（不是广告/跟踪）
- [ ] 位置权限目的字符串清晰准确
- [ ] 如果位置被拒绝，功能优雅降级（显示错误，不崩溃）
- [ ] 对后台使用重大位置变化API（不是持续轮询）

### 8.5 法律（指南5）

**5.1 隐私：**
- [ ] 隐私政策已发布并链接
- [ ] 应用隐私详情中披露数据收集
- [ ] 位置权限目的字符串："《地球新主》需要您的位置来发现领地并启用基于位置的游戏玩法。"
- [ ] 相机权限目的字符串："《地球新主》使用您的相机捕获领地验证照片。"
- [ ] 照片库权限目的字符串："《地球新主》访问您的照片以上传领地验证图像。"
- [ ] 所有权限请求包含清晰的说明

**5.1.1 数据收集和存储：**
- [ ] 符合GDPR（欧盟用户）
- [ ] 符合CCPA（加州用户）
- [ ] 符合COPPA（无13岁以下用户）
- [ ] 安全数据传输（HTTPS/TLS）
- [ ] 用户数据删除可用

**5.1.2 数据使用和共享：**
- [ ] **2025年新增：** 如果与第三方AI共享数据，则清楚披露（我们不共享）
- [ ] 第三方SDK已披露（Supabase、Google登录、Apple登录）
- [ ] 不出售用户数据

**5.2 知识产权：**
- [ ] 所有内容都是原创或正确许可的
- [ ] 除了必要的识别之外，不使用Apple的商标
- [ ] 无误导性应用名称或图标

**5.3 游戏、赌博和彩票：**
- [ ] 无真实货币赌博
- [ ] 无带真实货币随机奖励的战利品箱
- [ ] 如果提供抽奖/竞赛：符合当地法律（我们不提供）

**5.4 VPN应用：**
- [ ] 不适用（我们不是VPN应用）

### 8.6 儿童类别（指南1.3）
- [ ] 不适用 - 我们是13+，不针对儿童

### 8.7 年龄验证（2025年新增，适用于创作者应用）
- [ ] 不适用 - 我们不是托管用户生成小程序的创作者应用

---

## 9. 本地化

### 9.1 英语（主要）
- [ ] 应用界面：完全英文
- [ ] 元数据：完整
- [ ] 截图：英文
- [ ] App Store描述：英文

### 9.2 中文（简体）- 如果支持
- [ ] 应用界面：完全翻译并测试
- [ ] 元数据：翻译
- [ ] 截图：中文或通用（最少文本的游戏玩法）
- [ ] App Store描述：翻译
- [ ] 关键词：中文
- [ ] 应用内购买：本地化名称/描述

### 9.3 其他语言（未来考虑）
- [ ] 西班牙语、日语、韩语等（稍后扩展）

---

## 10. 最终提交前检查

### 10.1 App Store Connect审查
- [ ] App Store Connect中的所有必填字段已填写
- [ ] "应用信息"旁边的绿色对勾
- [ ] "定价和可用性"旁边的绿色对勾
- [ ] "应用隐私"旁边的绿色对勾
- [ ] 构建选择旁边的绿色对勾
- [ ] 所有必需设备尺寸的截图已上传
- [ ] 年龄分级已完成
- [ ] 应用内购买已与应用一起提交审核

### 10.2 构建选择
- [ ] 选择最新构建提交
- [ ] 选择前彻底测试构建
- [ ] 版本号正确（初始发布为1.0）
- [ ] 构建号唯一（例如，1，或构建日期格式20251120）

### 10.3 使用演示账户测试
- [ ] 使用演示凭据成功登录
- [ ] 完成教程（如果适用）
- [ ] 占领至少一个领地
- [ ] 测试建筑建造
- [ ] 测试战斗/攻击功能
- [ ] 测试联盟/社交功能
- [ ] 测试应用内购买流程（沙箱）
- [ ] 测试账户设置和个人资料
- [ ] 没有遇到崩溃或主要错误

### 10.4 内容审查
- [ ] 所有文本校对拼写/语法（英语和中文）
- [ ] 无占位符文本（例如，"Lorem ipsum"、"Test"、"TODO"）
- [ ] 无测试图像或模型
- [ ] 无内部调试功能可见
- [ ] 无冒犯性或不当内容
- [ ] 版权声明正确：© 2025 AiXue AI

### 10.5 法律和支持
- [ ] 隐私政策已上线且可访问
- [ ] 服务条款已上线且可访问
- [ ] 收费政策已上线且可访问（或包含在服务条款中）
- [ ] 支持电子邮件已监控：onestnet@gmail.com
- [ ] 支持网站/常见问题已准备好（如果适用）

---

## 11. 提交流程

### 11.1 提交审核
- [ ] 在App Store Connect中，导航到应用版本
- [ ] 对所有应用内购买点击"添加以供审核"
- [ ] 对应用版本点击"提交审核"
- [ ] 确认所有信息正确
- [ ] 提交！

### 11.2 提交后
- [ ] 收到Apple的确认电子邮件
- [ ] 状态更改为"等待审核"
- [ ] 监控App Store Connect的状态更新
- [ ] 在24小时内回复Apple的任何询问

**预期时间表：**
- 等待审核：1-3天
- 审核中：1-2天
- 总计：平均2-5天（可能更快或更慢）

### 11.3 如果被拒绝
- [ ] 仔细阅读拒绝原因
- [ ] 解决所有提到的问题
- [ ] 对构建和/或元数据进行必要的更改
- [ ] 如果需要澄清，通过解决中心回复审核员
- [ ] 重新提交并详细说明更改

**要避免的常见拒绝原因：**
- 审核期间崩溃或错误
- 元数据不完整或误导
- 缺少演示账户或演示账户无法使用
- 缺少适当的权限说明
- 隐私政策缺失或不合规
- 违反指南3.1.1（支付方法）
- 违反指南4.5（位置服务滥用）

### 11.4 如果批准
- [ ] 发布应用（根据之前的选择手动或自动）
- [ ] 在营销渠道上宣布发布
- [ ] 监控评论和评分
- [ ] 回应用户反馈
- [ ] 跟踪分析和性能
- [ ] 计划版本1.1更新

---

## 12. 发布日检查清单（2025年11月30日）

### 12.1 发布前（提前1周）
- [ ] 确保应用已批准并准备发布
- [ ] 营销材料已准备好（社交媒体帖子、新闻稿）
- [ ] 支持团队已简报并准备好
- [ ] 服务器基础设施已为发布流量扩展
- [ ] 数据库备份已验证
- [ ] 监控和分析工具已配置

### 12.2 发布日
- [ ] 在最佳时间发布应用（例如，太平洋时间凌晨12点、东部时间上午9点）
- [ ] 在社交媒体上发布公告
- [ ] 监控服务器性能和用户反馈
- [ ] 回应初始评论
- [ ] 跟踪下载和用户参与度
- [ ] 注意关键错误并准备热修复（如果需要）

### 12.3 发布后（第一周）
- [ ] 回应所有评论（尤其是负面评论）
- [ ] 监控崩溃报告和分析
- [ ] 收集用户反馈以进行改进
- [ ] 准备版本1.0.1并修复错误（如果需要）
- [ ] 庆祝成功发布！

---

## 13. 联系和资源

**开发者：**
- 公司：爱学人工智能（AiXue AI）
- 电子邮件：onestnet@gmail.com
- 微信：aixue2075

**Apple资源：**
- App Store审核指南：https://developer.apple.com/app-store/review/guidelines/
- App Store Connect：https://appstoreconnect.apple.com/
- 人机界面指南：https://developer.apple.com/design/human-interface-guidelines/
- 开发者论坛：https://developer.apple.com/forums/
- 开发者支持：https://developer.apple.com/support/

**内部资源：**
- 隐私政策：/Users/mike/Downloads/landlord/earthlord-website/legal/privacy-policy.md
- 服务条款：/Users/mike/Downloads/landlord/earthlord-website/legal/terms-of-service.md
- 收费政策：/Users/mike/Downloads/landlord/earthlord-website/legal/monetization-policy.md
- 年龄分级指南：/Users/mike/Downloads/landlord/earthlord-website/legal/age-rating.md

---

## 14. 注释和更新

**版本历史：**
- v1.0（2025-11-20）：基于2025年11月指南创建的初始检查清单

**整合的2025年关键更新：**
- 第三方AI数据共享披露要求
- 克隆应用保护（独特品牌验证）
- 更新的年龄分级系统（13+问卷）
- 创作者应用年龄验证（不适用但已注明）
- 贷款应用限制（不适用）
- 外部支付链接限制

---

**祝您App Store提交顺利！**

此检查清单是全面的，但始终参考官方Apple App Store审核指南以获取最新要求。Apple定期更新指南，因此请保持了解。

---

**Effective Date / 生效日期: November 20, 2025**

For questions about this checklist, contact us at onestnet@gmail.com or WeChat: aixue2075

如有关于本检查清单的问题，请通过onestnet@gmail.com或微信aixue2075联系我们
