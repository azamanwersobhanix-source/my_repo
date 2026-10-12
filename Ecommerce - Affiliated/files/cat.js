let cats = [
   {
     tag:'fm',
     name:'Phone Cases',
     cat:'phone case',
     rcm:`If you're looking to protect your smartphone in style, mobile back covers are an essential accessory that combines fashion with functionality. These covers provide a strong layer of protection against accidental drops, scratches, and bumps, ensuring your phone remains in pristine condition. With a wide variety of designs, colors, and materials, from sleek and minimalist silicone cases to rugged armor and leather finishes, you can express your unique personality while keeping your device safe. Many back covers also come with added features like raised edges for screen protection, built-in kickstands, or even card slots for ultimate convenience. Whether you prioritize style, durability, or versatility, mobile back covers offer a perfect blend of aesthetics and utility, making them a must-have for every smartphone user.`
   },
   {
     tag:'fm',
     name:'Earbuds/Air Pods',
     cat:'earbuds',
     rcm:`Bluetooth earbuds are the ultimate blend of convenience, sound quality, and style, making them a top choice for music lovers, fitness enthusiasts, and professionals alike.With no tangled wires to worry about, you get complete freedom to move, whether you’re commuting, working out, or simply relaxing. Modern Bluetooth earbuds offer impressive sound clarity, deep bass, and noise cancellation, delivering an immersive audio experience on par with wired options. Many models also feature water resistance, long battery life, and quick charging capabilities, so they’re always ready when you need them. Plus, intuitive touch controls make it easy to switch songs, adjust volume, and take calls hands-free. With their compact design and high-end features, Bluetooth earbuds are an essential upgrade for anyone looking to elevate their listening experience.`
   },
   {
     tag:'fm',
     name:'Power Banks',
     cat:'powerbank',
     rcm:`Mobile power banks are the ultimate solution for staying powered up on the go, making them a must-have accessory for anyone who relies on their devices. These portable chargers provide the flexibility to recharge your smartphone, tablet, or even a laptop, no matter where you are. With high-capacity options, some power banks can charge your phone multiple times before needing a recharge themselves, which is perfect for travel, long commutes, or outdoor adventures. Equipped with fast-charging capabilities and multiple ports, they allow you to quickly boost more than one device at once. Slim, compact, and often lightweight, today’s power banks are designed for maximum convenience without adding extra bulk. Reliable and versatile, mobile power banks ensure that low battery anxiety is a thing of the past.`
   },
   {
     tag:'fm',
     name:'Protector Glasses',
     cat:'protector',
     rcm:`A mobile protector glass is essential for anyone looking to keep their smartphone screen flawless and protected. This ultra-thin, transparent layer provides a robust defense against scratches, cracks, and smudges, keeping your display clear and vibrant. Modern protector glasses are crafted with impact-resistant tempered glass, so they can absorb the shock of accidental drops and bumps, sparing your actual screen from damage. With features like anti-fingerprint coating, high transparency, and precise touch sensitivity, a quality screen protector lets you enjoy your phone's full display quality and smooth functionality without compromise. Easy to install and replace, mobile protector glass is an affordable and effective way to safeguard your phone's most vulnerable part, keeping it in pristine condition for longer.`
   },
   {
     tag:'fm',
     name:'Phone Holders',
     cat:'phoneholder',
     rcm:`Mobile gimbals and holders are game-changers for anyone looking to capture smooth, professional-quality videos and photos with ease. These devices provide stability and control, allowing you to eliminate shaky footage and focus on framing the perfect shot. Ideal for vloggers, travelers, or anyone documenting life’s moments, mobile gimbals come with smart features like motion tracking, panorama modes, and time-lapse capabilities, making it easy to elevate your content with cinematic effects. Many models are lightweight, foldable, and easy to carry, so you can bring them anywhere inspiration strikes. With intuitive controls and long battery life, mobile gimbals and holders ensure that every shot is steady, stylish, and ready to share, taking your mobile photography and videography to the next level.`
   },
   {
     tag:'fm',
     name:'Charging Cables',
     cat:'type c cable',
     rcm:`Charging cables are an essential accessory that keeps all your devices ready to go, making them an indispensable part of everyday life. Modern charging cables are designed to be durable, fast, and efficient, with features like reinforced connectors and tangle-free designs that stand up to daily wear and tear. Available in various lengths, they offer flexibility whether you're charging at your desk, in your car, or on the go. Many cables now support fast-charging protocols, meaning they can quickly power up your devices, saving you valuable time. Whether you need a cable for your smartphone, tablet, laptop, or multiple devices, a high-quality charging cable provides reliable performance and peace of mind, making sure your devices are always charged and ready when you need them most.`
   },
   {
     tag:'fm',
     name:'Bluetooth Speakers',
     cat:'bluetooth speaker',
     rcm:`Bluetooth speakers are the perfect way to enjoy high-quality audio wherever you go, transforming any space into a personal soundstage. With their compact and portable design, these speakers let you bring powerful, crystal-clear sound to your home, outdoor gatherings, or travel adventures. Many Bluetooth speakers feature impressive bass, multi-device connectivity, and even water resistance, making them versatile for any environment. Advanced models offer long battery life, built-in microphones for hands-free calls, and smart voice assistant compatibility, so you can enjoy a seamless, connected experience. From deep, immersive sound to sleek, modern designs, Bluetooth speakers combine convenience and quality, allowing you to amplify every moment with your favorite tunes.`
   },
   {
     tag:'fm',
     name:'Magnetic Chargers',
     cat:'magnetic charger',
     rcm:`Magnetic chargers bring a whole new level of convenience to charging, offering an effortless, snap-on experience that’s perfect for busy, on-the-go lifestyles. With strong magnetic alignment, these chargers securely latch onto your device, ensuring a perfect connection every time—no more fiddling with cables or connectors. Many models support fast charging, meaning you can power up your device quickly and efficiently. Designed for durability, magnetic chargers are highly resistant to wear, making them ideal for frequent use. They also minimize the strain on charging ports, which can extend your device’s lifespan. Whether you’re at your desk, in the car, or relaxing at home, magnetic chargers provide a seamless and stylish charging experience that’s as reliable as it is easy to use.`
   },
   {
     tag:'fm',
     name:'Selfie Sticks',
     cat:'selfie stick',
     rcm:`Selfie sticks are the ultimate tool for capturing perfect selfies, group shots, and wide-angle photos with ease, making them a must-have for travelers, vloggers, and social media enthusiasts. Designed to extend your reach, selfie sticks allow you to fit more into the frame, whether it’s breathtaking scenery or everyone in a group photo. Many models come with Bluetooth remote controls, adjustable angles, and even tripod functionality, so you can take hands-free photos and videos from virtually any position. Compact and lightweight, they’re easy to carry, and setup takes only seconds. Selfie sticks are versatile and practical, helping you capture every memorable moment with just the right perspective, no matter where your adventures take you.`
   },
   {
     tag:'fm',
     name:'Camera Lenses',
     cat:'camera lens',
     rcm:`Camera lenses are a game-changing accessory for photography enthusiasts, transforming your smartphone or DSLR into a powerful tool for capturing stunning, professional-quality images. Whether you're into macro shots, wide-angle landscapes, or portrait photography, the right lens can unlock a new world of creative possibilities. With advancements in design, modern camera lenses offer superior clarity, sharp focus, and enhanced light sensitivity, allowing you to shoot in diverse conditions with exceptional results. Many lenses are easy to attach and remove, making them a convenient addition to your gear. Whether you're capturing sweeping vistas or intricate details, camera lenses help you elevate your photography to the next level, offering unmatched versatility and performance for every shot.`
   },
   {
     tag:'fm',
     name:'Mobile Pens',
     cat:'stylus pen',
     rcm:`A stylus pen is the perfect companion for anyone looking to enhance their digital experience with precision and ease. Whether you're drawing, taking notes, or navigating your device, a high-quality stylus pen offers a smooth, responsive touch that mimics the feel of pen on paper. With pressure sensitivity and ergonomic designs, these pens give you ultimate control, making them ideal for artists, designers, or anyone looking to boost productivity on tablets and smartphones. Many stylus pens are compatible with a variety of apps, providing a seamless, lag-free experience for everything from sketching to signing documents. Lightweight and portable, a stylus pen combines style and functionality, transforming the way you interact with your devices and making your tasks more efficient and enjoyable.`
   },
   {
     tag:'fm',
     name:'Mobile Gamepads',
     cat:'controller',
     rcm:`Mobile game pads are a must-have for any gamer looking to elevate their mobile gaming experience with precision and comfort. These portable controllers are designed to offer a console-like feel on your smartphone, providing responsive buttons, analog sticks, and customizable controls that make gameplay smoother and more immersive. Perfect for intense action games, racing simulators, or even strategy titles, game pads enhance your performance with better control and reduced input lag compared to on-screen touch controls. Many models are ergonomically designed to fit comfortably in your hands for extended gaming sessions, and some even feature wireless connectivity for seamless play. Compact and easy to use, mobile game pads take your gaming to the next level, turning your smartphone into a portable gaming powerhouse.`
   },
   {
     tag:'fm',
     name:'Mini Printers',
     cat:'mini printer',
     rcm:`Mini printers are the perfect solution for those seeking portability, convenience, and high-quality prints on the go. These compact devices allow you to print everything from receipts and labels to notes and documents directly from your phone or tablet, without the need for bulky, traditional printers. Whether you're a business professional needing quick, portable printing or simply looking for a handy device for everyday tasks, mini printers offer an effortless and fast solution. Many models use Bluetooth or Wi-Fi for seamless connectivity, and with advanced thermal printing technology, they don't require ink, making them low-maintenance and cost-effective. With their sleek, lightweight design, mini printers are ideal for those who need high-quality prints at their fingertips anytime, anywhere, without the hassle.`
   },
   {
     tag:'fm',
     name:'OTGs',
     cat:'otg',
     rcm:`OTGs (On-The-Go adapters) are essential gadgets for anyone looking to expand the functionality of their smartphones, tablets, or laptops. These compact devices allow you to connect USB peripherals, such as keyboards, mice, flash drives, and even game controllers, directly to your mobile device, turning it into a versatile productivity or entertainment hub. Perfect for travelers, students, or professionals on the go, OTGs enable seamless data transfer, enhance device usability, and provide a more comfortable experience for tasks like typing or gaming. With their plug-and-play simplicity, OTGs require no additional software, making them incredibly user-friendly. Lightweight and portable, they’re the perfect accessory for unlocking the full potential of your mobile devices.`
   },
   {
     tag:'fm',
     name:'Mobile Projectors',
     cat:'mobile projector',
     rcm:`Mini projectors are the perfect solution for anyone looking to bring big-screen entertainment into any space with ultimate portability and convenience. These compact devices pack impressive projection power, allowing you to enjoy movies, presentations, or gaming on a larger-than-life scale, whether you're at home, in the office, or on the go. With features like Wi-Fi and Bluetooth connectivity, many mini projectors can easily sync with your smartphone, laptop, or tablet, making them incredibly versatile for streaming or sharing content. Despite their small size, they deliver vibrant colors and sharp images, making them ideal for impromptu movie nights or professional presentations. Lightweight and easy to carry, mini projectors offer a flexible, on-the-go solution for anyone who craves big-screen experiences without the bulk.`
   },
   {
     tag:'fm',
     name:'Earphones/Handfrees',
     cat:'earphones',
     rcm:`Earphones are an essential accessory for anyone who loves to enjoy high-quality audio in a sleek, portable design. Perfect for everything from music and podcasts to calls and online meetings, modern earphones deliver rich sound with deep bass, clear highs, and balanced mids, providing an immersive listening experience. Many models come with noise-canceling features to block out external distractions, making them ideal for use in busy environments. With ergonomic designs that ensure comfort during extended wear, earphones are great for workouts, commutes, or simply relaxing. Easy to slip into a pocket or bag, earphones are the ultimate blend of convenience, style, and performance, allowing you to stay connected to your favorite sounds anytime, anywhere.`
   },
   {
     tag:'fm',
     name:'Ring Lights',
     cat:'ring light',
     rcm:`Ring lights are a must-have tool for anyone looking to enhance their photography, videography, or online presence with perfect, even lighting. Whether you're a content creator, vlogger, or professional, ring lights provide soft, flattering illumination that reduces shadows, highlights your features, and ensures your videos or photos look polished and professional. With adjustable brightness and color temperature settings, they offer flexibility for different environments, making them ideal for beauty tutorials, live streams, or video calls. Compact, easy to set up, and often equipped with smartphone holders or tripods, ring lights are portable and convenient, allowing you to capture flawless, high-quality content wherever you go.`
   },
   {
     tag:'fm',
     name:'Mobile Holders',
     cat:'mobile holder',
     rcm:`Mobile holders are an incredibly convenient accessory for anyone looking to keep their smartphone secure, accessible, and hands-free. Ideal for use at home, in the office, or on the go, mobile holders provide stability and a comfortable viewing angle, making them perfect for video calls, watching content, or navigating with GPS while driving. With designs ranging from adjustable desktop stands to sturdy car mounts, these holders ensure your phone stays in place, even during movement. Many models offer 360-degree rotation, allowing you to switch between portrait and landscape effortlessly. Compact, durable, and easy to use, mobile holders bring both comfort and convenience to your everyday mobile use, allowing you to multitask with ease.`
   },
   {
     tag:'fm',
     name:'Signal Boosters',
     cat:'signal booster',
     rcm:`A WiFi range extender is an essential device for anyone looking to eliminate dead zones and improve connectivity throughout their home or office. These compact devices boost your existing WiFi signal, extending its reach to cover areas that usually suffer from weak or unstable connections. Perfect for larger spaces or homes with thick walls, WiFi range extenders ensure fast, reliable internet access in every corner, from basements to upstairs bedrooms. With quick setup, dual-band support, and compatibility with most routers, they make it easy to enjoy seamless streaming, gaming, and browsing wherever you are. For anyone frustrated with WiFi dead spots, a range extender offers a simple, effective solution for maximizing your network coverage and keeping all devices connected.`
   },
   {
     tag:'fm',
     name:'Smart Watches',
     cat:'smartwatch',
     rcm:`Smartwatches are the perfect blend of style, convenience, and cutting-edge technology, making them an essential gadget for anyone looking to stay connected and on top of their health goals. With features like fitness tracking, heart rate monitoring, and sleep analysis, they help you maintain a healthier lifestyle while keeping you aware of your daily activity. Smartwatches also sync with your smartphone, allowing you to receive notifications, calls, and messages right on your wrist, so you never miss an important update. Many models are water-resistant and offer customizable watch faces, enabling you to match your style effortlessly. With sleek designs, long battery life, and powerful apps, smartwatches are a versatile companion that keeps you connected, motivated, and organized throughout the day.`
   },
   {
     tag:'fm',
     name:'Card Readers',
     cat:'card reader',
     rcm:`Card readers are essential tools for anyone needing fast, reliable access to data on SD cards or other memory cards. Ideal for photographers, videographers, or professionals who frequently transfer files, these compact devices make it easy to move photos, videos, and documents between cameras, laptops, and mobile devices. With high-speed data transfer capabilities, card readers save you valuable time, ensuring your files are quickly accessible. Many models support multiple card formats and are plug-and-play compatible, making them incredibly user-friendly and versatile. Lightweight and portable, card readers are a must-have accessory for anyone looking to streamline their data transfer process, offering convenience and efficiency on the go or in the office.`
   },
   {
     tag:'fm',
     name:'Mobile Waterproof Covers',
     cat:'waterproof phone cover',
     rcm:`Mobile waterproof covers are a game-changer for anyone looking to protect their smartphone from water, dust, and accidental spills. Perfect for adventurers, beachgoers, or anyone who wants peace of mind around water, these covers create a secure, airtight seal that keeps your device safe in wet environments. Made from durable, transparent materials, waterproof covers allow you to use your phone’s touch screen and camera while fully protected, so you never miss capturing memories. Many covers offer additional shock resistance, making them ideal for active lifestyles. Compact and easy to use, mobile waterproof covers are a must-have accessory to keep your device safe and functional, no matter where life takes you.`
   },
   {
     tag:'fm',
     name:'Mobile Camera Magnifiers',
     cat:'camera magnifier',
     rcm:`Mobile camera magnifiers are the perfect tool for anyone looking to capture intricate details and close-up shots with their smartphone, transforming it into a powerful microscope or macro lens. Ideal for hobbyists, photographers, and students, these magnifiers let you explore tiny subjects like flowers, textures, or small objects with stunning clarity and depth. Designed to be easy to clip on and off, they seamlessly align with your mobile camera, providing sharp focus and enhanced magnification without any bulky equipment. Lightweight and portable, mobile camera magnifiers offer incredible versatility, allowing you to uncover and photograph the finer details of the world around you with professional-level quality.`
   },
   {
     tag:'fg',
     name:'Audio Splitters',
     cat:'audio splitter',
     rcm:`Audio splitters are a must-have accessory for anyone who loves to share their favorite tunes, movies, or podcasts with friends and family. These compact devices allow you to connect multiple headphones or speakers to a single device, making it easy to enjoy shared listening experiences without compromising audio quality. Ideal for travel, workouts, or study sessions, audio splitters ensure everyone can listen comfortably without the hassle of tangled earphones. With options that support multiple ports and high-fidelity sound, audio splitters make group listening simple, fun, and convenient. Lightweight and easy to carry, they’re the perfect solution for creating instant shared moments wherever you are.`
   },
   {
     tag:'fg',
     name:'Mobile Gamepads 2',
     cat:'mobile game pad',
     rcm:`Mobile game pads are a fantastic accessory for any gamer seeking a more immersive and precise experience on their smartphone. These compact controllers provide intuitive, console-like controls, allowing for smoother gameplay, faster reactions, and better overall performance in action-packed games. Designed with ergonomic grips, responsive buttons, and analog sticks, mobile game pads reduce hand fatigue during extended play and give you a competitive edge, whether you're into FPS, racing, or adventure games. Many models connect via Bluetooth for easy setup and are compatible with various gaming apps, making them versatile and user-friendly. Lightweight and portable, mobile game pads transform your smartphone into a gaming powerhouse, ensuring comfort, control, and pure enjoyment wherever you go.`
   },
   {
     tag:'fg',
     name:'Classic Gamepads',
     cat:'game pad',
     rcm:`Gamepads are the ultimate accessory for anyone who wants to elevate their gaming experience with precision and comfort. Whether you’re playing on a console, PC, or mobile device, a high-quality gamepad offers responsive buttons, analog sticks, and ergonomic design, making it easier to control complex movements and execute commands with accuracy. Perfect for action-packed games, sports simulations, or even competitive e-sports, gamepads provide a more immersive and intuitive way to play. Many models feature customizable buttons, wireless connectivity, and long battery life, ensuring you stay in the game for longer. Comfortable to hold, easy to set up, and built for performance, gamepads offer the perfect balance of control, convenience, and fun for gamers of all levels.`
   },
   {
     tag:'fg',
     name:'Mobile Cooling Fans',
     cat:'cooling fan',
     rcm:`Mobile cooling fans are a game-changing accessory for anyone who wants to keep their device cool during intense gaming sessions, video streaming, or heavy app usage. Designed to prevent overheating, these compact and portable fans attach seamlessly to your smartphone, providing efficient cooling that helps maintain performance and extend battery life. With adjustable speeds and noise-reducing features, mobile cooling fans offer a comfortable, distraction-free experience while preventing lag and thermal throttling. Lightweight and easy to use, they ensure your device stays at optimal temperatures, even during the most demanding tasks, allowing you to enjoy smoother gameplay and faster performance on the go. Whether you're gaming, multitasking, or streaming, a mobile cooling fan is the perfect accessory to keep your device cool and functioning at its best.`
   },
   {
     tag:'fg',
     name:'Gaming Mouse',
     cat:'game mouse',
     rcm:`A gaming mouse is an essential tool for any serious gamer looking to gain an edge in precision, speed, and comfort. Designed with high-DPI sensors, customizable buttons, and ergonomic grips, a gaming mouse allows you to make split-second movements and execute complex commands with accuracy and ease. Whether you're diving into intense first-person shooters, strategy games, or MMORPGs, the responsiveness and control offered by a high-quality gaming mouse can make all the difference in your performance. Many models feature adjustable weights, RGB lighting, and programmable macros, allowing for a personalized gaming experience. Durable, lightweight, and built for extended sessions, a gaming mouse ensures you’re always at your best, enhancing both gameplay and comfort for a superior experience.`
   },
   {
     tag:'fg',
     name:'Graphic Cards',
     cat:'graphics cards',
     rcm:`A high-quality graphic card is an absolute game-changer for anyone who demands superior visual performance, whether you're a gamer, designer, or video editor. With cutting-edge technology, graphic cards deliver stunning graphics, smooth frame rates, and exceptional rendering capabilities, ensuring your games, videos, and creative projects look their absolute best. They enable seamless multitasking and accelerate tasks like 3D rendering and video processing, enhancing productivity for professionals and content creators. Featuring powerful GPUs, advanced cooling systems, and support for multiple displays, graphic cards bring vibrant colors, sharp detail, and immersive experiences to every frame. For anyone looking to elevate their system's performance and push their visual experience to new heights, investing in a top-tier graphic card is an essential upgrade.`
   },
   {
     tag:'fg',
     name:'PC Cooling Fans',
     cat:'gaming fans',
     rcm:`PC cooling fans are a must-have for anyone looking to optimize their computer's performance and longevity by preventing overheating. These high-performance fans ensure your system stays cool during intense gaming sessions, video editing, or resource-heavy tasks, maintaining stable performance and preventing thermal throttling. With efficient airflow design and quiet operation, PC cooling fans keep temperatures in check while minimizing noise, allowing you to work or play without distractions. Many models come with customizable RGB lighting and various sizes, ensuring a perfect fit for your build while adding a touch of style. Whether you're building a high-end gaming rig or upgrading an existing setup, PC cooling fans are an essential component for maintaining peak performance and reliability.`
   },
   {
     tag:'fg',
     name:'Vlogging Kits',
     cat:'vlogging',
     rcm:`Vlogging kits are the perfect all-in-one solution for anyone looking to take their content creation to the next level. Designed to provide everything you need to shoot professional-quality videos, these kits typically include a high-quality microphone, tripod, lighting setup, and smartphone or camera mount, ensuring that you have all the essentials in one package. With portable, lightweight designs, vlogging kits make it easy to record on the go, whether you're in a studio or outdoors. The included lighting helps you achieve well-lit shots, while the microphone ensures clear, crisp audio, eliminating the need for expensive separate equipment. Whether you're a beginner or an experienced content creator, a vlogging kit provides convenience, versatility, and the tools to produce stunning content with ease.`
   },
   {
     tag:'fg',
     name:'Desktop Desks',
     cat:'desktop table',
     rcm:`A dedicated PC table is an essential piece of furniture for anyone looking to create an organized, comfortable, and efficient workspace. Designed to accommodate all your computer gear—such as the monitor, keyboard, mouse, and accessories—these tables offer ample surface space, sturdy construction, and ergonomic designs to ensure your setup is both functional and comfortable. Many PC tables come with additional storage options, like shelves or drawers, to help keep your cables, documents, and peripherals neatly organized. Whether you’re gaming, working, or simply browsing, a well-designed PC table helps improve posture and productivity, while offering a sleek, modern aesthetic that enhances any room. With its balance of style and practicality, a good PC table is a must-have for creating an ideal computing environment.`
   },
   {
     tag:'fg',
     name:'Microphone Pop Filters',
     cat:'microphone pop filter',
     rcm:`Microphone pop filters are an essential accessory for anyone looking to enhance the clarity and quality of their voice recordings, whether for podcasts, voiceovers, music, or streaming. These simple yet highly effective tools reduce plosive sounds (like the harsh "P" and "B" sounds) that can distort audio and cause unpleasant popping noises. Made from fine mesh material, pop filters create a smooth barrier between your mouth and the microphone, ensuring crisp, clear sound without unwanted interruptions. Easy to attach to most microphones, they are a must-have for anyone serious about producing professional-level audio recordings. Affordable and simple to use, a pop filter ensures your vocals are captured with precision and richness, elevating the overall sound quality of your content.`
   },
   {
     tag:'fg',
     name:'Headphone Stands',
     cat:'headphones stand',
     rcm:`Headphone stands are the perfect way to keep your headphones organized, accessible, and looking great when not in use. Whether you're a gamer, audiophile, or content creator, these stands offer a sleek and practical solution to protect your headphones from damage while saving valuable desk space. Many models feature sturdy, non-slip bases, adjustable heights, and even built-in cable management, ensuring your headphones are displayed neatly and safely. A headphone stand not only keeps your gear in top condition but also adds a touch of style to your workspace or entertainment area. With their compact design and functionality, headphone stands are a must-have accessory to enhance your setup and keep your headphones easily accessible whenever you need them.`
   },
   {
     tag:'fg',
     name:'Gaming T-shirts',
     cat:'gaming tshirts',
     rcm:`Gaming T-shirts are a fantastic way for gamers to showcase their passion and personal style with bold, iconic designs. Crafted from comfortable, breathable materials, these T-shirts feature graphics inspired by popular games, gaming memes, or retro themes, making them perfect for both casual wear and gaming events. Ideal for fans of all ages, gaming T-shirts are available in various colors, styles, and sizes, allowing you to express your gamer identity proudly. Whether you're streaming, attending conventions, or just hanging out, these tees add a unique touch to any outfit while keeping you comfortable. Fun, stylish, and expressive, gaming T-shirts make a great addition to any gamer's wardrobe.`
   },
   {
     tag:'fg',
     name:'Gaming Headphones',
     cat:'gaming headset',
     rcm:`Gaming headphones are an essential accessory for any gamer who wants to fully immerse themselves in high-quality soundscapes. Designed with powerful audio drivers, gaming headphones deliver rich, precise sound, capturing every detail—from subtle footsteps to explosive action—giving you a competitive edge in fast-paced games. With noise-canceling technology, they block out background noise, allowing you to stay focused and alert. Many models feature comfortable, ergonomic designs with memory foam ear cushions and adjustable headbands for extended gaming sessions without discomfort. Equipped with crystal-clear microphones, gaming headphones enable smooth communication with teammates. Whether you’re into multiplayer battles or solo adventures, gaming headphones provide an immersive experience that enhances gameplay and keeps you in the zone.`
   },
   {
     tag:'fg',
     name:'Gaming Steering Wheels',
     cat:'racing wheels',
     rcm:`Gaming steering wheels are a must-have for racing enthusiasts who crave a realistic driving experience. These wheels, complete with responsive pedals and precision steering, allow you to feel every turn, drift, and bump in your virtual race. Designed with feedback technology, many models simulate the sensation of driving, providing resistance and vibration to mirror the road’s texture and vehicle dynamics, creating an incredibly immersive experience. Equipped with customizable buttons and adjustable pedals, gaming steering wheels bring precision control to every race, whether you're navigating tight corners or speeding down straightaways. Perfect for racing games and simulators, a gaming steering wheel transforms gameplay from casual racing to heart-pounding realism, giving you the ultimate edge on the track.`
   },
   {
     tag:'fg',
     name:'Retro Gaming Consoles',
     cat:'game console',
     rcm:`Retro gaming consoles are the perfect way to relive the golden age of gaming, bringing back the nostalgia of classic games with authentic graphics and gameplay. These consoles come pre-loaded with a library of iconic titles that defined an era, allowing you to experience fan-favorites without needing the original hardware. Ideal for both lifelong gamers and newcomers eager to explore gaming history, retro consoles are compact, easy to set up, and often feature modern upgrades like HDMI compatibility for enhanced display on current TVs. With retro controllers that capture the feel of the originals, these consoles deliver a truly immersive throwback experience. Perfect for solo play or multiplayer fun, retro gaming consoles are a fantastic addition to any entertainment setup, offering hours of timeless fun for all ages.`
   },
   {
     tag:'fg',
     name:'Arcade Sticks',
     cat:'arcade stick',
     rcm:`Arcade sticks are a must-have for gamers who want the authentic feel and control of an arcade experience right at home. Built with durable, high-quality joysticks and buttons, these controllers offer precise inputs and responsiveness, making them ideal for fighting games, classic arcade titles, and retro gaming. Their ergonomic design and layout mirror traditional arcade machines, providing better accuracy and comfort than standard controllers. Many models are customizable, allowing you to swap buttons or joysticks to suit your preferences. With their solid build and nostalgic appeal, arcade sticks elevate gameplay, giving you a competitive edge and a satisfying, tactile gaming experience that brings the arcade straight to your fingertips.`
   },
   {
     tag:'fg',
     name:'Gaming Chairs',
     cat:'gaming chair',
     rcm:'A high-quality gaming chair can make a huge difference for anyone who spends long hours at a desk, whether for gaming, work, or study. The best gaming chairs are designed with ergonomics in mind, offering adjustable features like 4D armrests, lumbar support, and reclining capabilities to promote a comfortable and healthy posture. These chairs are often crafted with durable frames, dense foam padding, and premium materials like PU leather or breathable fabric, ensuring lasting support and style. With the right gaming chair, you can experience improved comfort, reduced strain, and a setup that looks as impressive as it feels.'
   },
   {
     tag:'fp',
     name:'External HDDs',
     cat:'hard drive',
     rcm:`External HDDs are a reliable and essential storage solution for anyone who needs extra space for large files, backups, or a portable media library. With ample storage capacities, these drives provide a convenient way to securely store everything from photos and videos to games and work documents. External HDDs are incredibly easy to set up—simply plug in, and you're ready to go, with most models offering high-speed data transfer for quick, efficient file access. Durable and compact, they’re designed for on-the-go use, making them perfect for students, professionals, or gamers who need reliable storage they can take anywhere. With a range of capacities and sleek designs, external HDDs offer the perfect balance of space, speed, and portability, ensuring that all your important data is safe and accessible.`
   },
   {
     tag:'fp',
     name:'USBs',
     cat:'usb',
     rcm:`USB flash drives are a compact and indispensable tool for anyone needing a quick, reliable way to store, transfer, or back up files. Small yet powerful, USBs provide ample storage capacity, making it easy to save everything from documents and presentations to photos, videos, and music. These pocket-sized drives are incredibly portable and compatible with most devices, allowing you to access your data on virtually any computer or laptop without an internet connection. With options for fast data transfer speeds, USB flash drives are perfect for students, professionals, and travelers alike. Whether for work, school, or personal use, USB flash drives offer the ideal mix of convenience, durability, and security, ensuring your important files are always within reach.`
   },
   {
     tag:'fp',
     name:'Wireless Mouse',
     cat:'wireless mouse',
     rcm:`A wireless mouse is the perfect accessory for anyone seeking flexibility, precision, and clutter-free convenience in their workspace. With no cords to worry about, a wireless mouse offers the freedom to work or browse from a comfortable distance, making it ideal for laptops, desktops, and even TVs. Designed for smooth, responsive tracking, it ensures accuracy whether you're editing, gaming, or multitasking. Many models come with ergonomic shapes for all-day comfort, long battery life, and programmable buttons for added functionality. Lightweight and portable, a wireless mouse fits easily into any bag, making it a must-have for both on-the-go professionals and home office setups. Say goodbye to tangled wires and hello to streamlined productivity with a wireless mouse.`
   },
   {
     tag:'fp',
     name:'Wired Mouse',
     cat:'classic mouse',
     rcm:`A wired mouse is an excellent choice for anyone seeking reliable, lag-free performance and precision in their daily tasks. With a direct connection to your device, a wired mouse provides consistent response times, making it perfect for gamers, designers, and professionals who rely on accuracy and speed. There’s no need to worry about batteries or charging; just plug it in and get to work, ensuring uninterrupted use. Many models feature ergonomic designs and customizable buttons, allowing you to work comfortably for hours. Simple, efficient, and dependable, a wired mouse is a staple for any workspace, delivering performance you can always count on without the need for wireless setup.`
   },
   {
     tag:'fp',
     name:'Keyboards',
     cat:'keyboard',
     rcm:`Mechanical keyboards are a fantastic upgrade for anyone who values precision, durability, and a satisfying typing experience. With individual mechanical switches under each key, they provide tactile feedback and a crisp, responsive feel that elevates everything from typing to gaming. Known for their durability, mechanical keyboards can withstand millions of key presses, making them an excellent long-term investment for professionals, gamers, and typing enthusiasts alike. Many models offer customizable RGB lighting, programmable keys, and switch options tailored to your preferred level of clickiness and actuation. Designed for comfort and performance, a mechanical keyboard not only enhances productivity but also adds a sleek, high-tech aesthetic to your setup, making it a must-have for any serious workstation or gaming rig.`
   },
   {
     tag:'fp',
     name:'Cooling Pads',
     cat:'cooling pad',
     rcm:`Laptop cooling pads are an excellent accessory for anyone wanting to keep their device cool and efficient during heavy use. Equipped with multiple quiet fans, these cooling pads provide essential airflow to prevent overheating, which can slow down performance and reduce battery life. Many models offer adjustable fan speeds and ergonomic designs that elevate the laptop for comfortable typing and better posture, making them ideal for gaming, streaming, or work sessions. With additional features like USB ports, anti-slip grips, and LED lights, cooling pads combine functionality with style. Compact and easy to carry, they are the perfect solution for students, professionals, and gamers who need to keep their laptops running smoothly on the go.`
   },
   {
     tag:'fp',
     name:'Webcams',
     cat:'webcam',
     rcm:`Webcams are an essential tool for anyone who wants high-quality video for virtual meetings, streaming, online classes, or staying connected with loved ones. With HD and even 4K resolution options, these cameras capture clear, detailed visuals that bring a professional touch to your video calls and recordings. Many models come with built-in microphones for crisp audio, as well as features like auto-focus, low-light correction, and adjustable angles, ensuring you look and sound your best in any setting. Compact and easy to use, webcams can be mounted on monitors or laptops, making them a versatile addition to your workspace or home setup. For clear, reliable video that enhances your online presence, a quality webcam is a worthwhile investment.`
   },
   {
     tag:'fp',
     name:'Headsets',
     cat:'headsets',
     rcm:`Headsets are a must-have for anyone looking to enjoy clear audio and hands-free communication, whether for work, gaming, or entertainment. With high-quality sound drivers, headsets deliver immersive audio that brings music, movies, and games to life, while noise-canceling microphones ensure that your voice comes through clearly on calls or in-game chats. Designed with comfort in mind, headsets often feature cushioned ear cups and adjustable headbands, allowing for long, comfortable wear during extended sessions. Many models come with intuitive controls for volume and mic muting, making them user-friendly and versatile. Whether you're in a virtual meeting, coordinating with teammates, or simply relaxing with a podcast, a good headset provides the perfect blend of comfort, quality, and convenience.`
   },
   {
     tag:'fp',
     name:'USB Hubs',
     cat:'usb hubs',
     rcm:`USB hubs are the ultimate solution for expanding your connectivity options and keeping your workspace organized. Perfect for anyone who needs to connect multiple devices—whether it's printers, external drives, keyboards, or gaming controllers—USB hubs allow you to maximize the available USB ports on your computer or laptop. Compact and easy to use, they come in various sizes, with models offering additional features like USB 3.0 support for faster data transfer, built-in charging ports, and even stylish designs with LED indicators. Whether you’re a content creator, gamer, or professional working with several peripherals, a USB hub ensures you can manage all your devices seamlessly without cluttering your workspace. With reliable performance and plug-and-play convenience, USB hubs are an essential addition to any tech setup.`
   },
   {
     tag:'fp',
     name:'Laptop Stands',
     cat:'laptop stand',
     rcm:`Laptop stands are a game-changer for anyone looking to improve comfort, productivity, and ergonomics while using their laptop. By elevating your laptop to eye level, these stands help reduce neck and back strain, promoting better posture during long hours of work or study. Many models are adjustable, allowing you to customize the height and angle for optimal viewing and typing comfort. Whether you're working from home, in a coffee shop, or on the go, a portable laptop stand provides the perfect solution for maintaining an efficient and comfortable setup. With sleek, durable designs, some even offer cooling features to prevent your device from overheating. A laptop stand is an essential accessory that transforms your workspace into a more ergonomic, organized, and productive environment.`
   },
   {
     tag:'fp',
     name:'Monitors',
     cat:'monitor',
     rcm:`Monitors are essential for anyone seeking to enhance their computing experience, whether for work, gaming, or entertainment. With a wide range of sizes, resolutions, and refresh rates, modern monitors deliver crisp, vibrant visuals, making everything from detailed spreadsheets to immersive games come to life. High-definition (HD), 4K, and ultra-wide displays provide exceptional clarity and an expansive viewing area, perfect for multitasking or content creation. Gamers will appreciate the fast response times and smooth refresh rates, while professionals benefit from color accuracy and detailed image quality. Many monitors also come with ergonomic features like height adjustment, tilt, and blue light filters, promoting comfort during long hours of use. Whether you're working, gaming, or streaming, a high-quality monitor transforms your entire digital experience, boosting productivity and enjoyment.`
   },
   {
     tag:'fp',
     name:'Optical Drives',
     cat:'cd',
     rcm:`Optical drives are a reliable and versatile accessory for anyone who still enjoys using CDs, DVDs, or Blu-ray discs for storing, playing, or backing up content. Whether you're watching movies, listening to music, or transferring files, an optical drive ensures smooth, hassle-free performance with fast read and write speeds. External optical drives are especially convenient, offering plug-and-play functionality with most computers and laptops without the need for additional drivers. Compact and portable, they make it easy to enjoy physical media while providing a safe backup solution for important files or data. Whether for personal entertainment or professional use, an optical drive is an essential tool for anyone who wants to make the most of their collection of discs or manage data with ease.`
   },
   {
     tag:'fp',
     name:'Mouse Pads',
     cat:'mouse pad',
     rcm:`Mouse pads are an essential yet often overlooked accessory that can significantly enhance your computing experience. Designed to provide a smooth, stable surface for your mouse, they ensure accurate, precise movements, whether you're working, gaming, or browsing. Many mouse pads are made with high-quality materials that reduce friction, prevent wear on your mouse's feet, and offer durability over time. Ergonomic options with wrist support can help alleviate strain during long hours of use, providing both comfort and functionality. With a variety of sizes, textures, and designs available, mouse pads are also a great way to personalize your workspace, adding a touch of style to your desk setup. Whether you're looking for enhanced performance or just a more comfortable working environment, a good mouse pad is an indispensable tool for any computer user.`
   },
   {
     tag:'fp',
     name:'Laptop Covers',
     cat:'laptop cover',
     rcm:`Laptop covers are an essential accessory for anyone who wants to protect their device in style. These sleek, durable covers shield your laptop from scratches, dust, and minor bumps, ensuring your device stays looking new while on the go. Made from high-quality materials like neoprene, silicone, or leather, laptop covers offer a snug fit and lightweight design, making them easy to slip into your bag or backpack. Many models also feature extra compartments for storing accessories like chargers, pens, or cables, adding an extra layer of convenience. Whether you're a student, professional, or traveler, a laptop cover is the perfect solution for safeguarding your device without compromising on style or portability.`
   },
   {
     tag:'fp',
     name:'Laptop Sleeves/Bags',
     cat:'laptop sleeve',
     rcm:`Laptop sleeves are the ultimate solution for protecting your laptop in a lightweight, stylish, and functional way. Crafted from soft yet durable materials like neoprene, felt, or leather, these sleek sleeves provide a snug fit to keep your device safe from scratches, dust, and minor drops while maintaining a slim profile. Perfect for on-the-go professionals, students, and travelers, laptop sleeves are easy to carry and slip into your bag or backpack without adding bulk. Many designs also feature extra pockets for storing chargers, cables, or pens, making them both practical and organized. With a variety of colors and patterns to choose from, laptop sleeves not only safeguard your device but also add a personal touch to your everyday carry.`
   },
   {
     tag:'fp',
     name:'Power Lead Extensions',
     cat:'lead extension',
     rcm:`Power lead extensions are a must-have for anyone looking to extend the reach of their power outlets and ensure convenient access to electricity in any setting. These extensions provide a simple yet effective solution for powering multiple devices in areas where outlets are far out of reach or in short supply. With various lengths and designs available, power lead extensions are perfect for home offices, entertainment setups, or workspaces where you need extra flexibility. Built with safety features like surge protection and durable, insulated cables, they ensure reliable, secure power delivery. Whether you're setting up a new workstation, connecting appliances, or simply needing more room to plug in your devices, power lead extensions offer the convenience and safety you need for seamless, efficient use of your electrical equipment.`
   },
   {
     tag:'fp',
     name:'Wifi Boosters',
     cat:'wifi range extender',
     rcm:`WiFi range extenders are the perfect solution for anyone looking to eliminate dead zones and enhance their internet coverage throughout their home or office. These compact devices amplify your existing WiFi signal, ensuring a strong, reliable connection in areas where your router’s reach may be weak or inconsistent. Whether you're working from a basement, enjoying entertainment in a far room, or browsing in a garden, WiFi range extenders extend the network's range, providing faster speeds and uninterrupted service. With easy setup, many models feature dual-band technology and smart indicators to optimize performance. A WiFi range extender is a game-changer for seamless streaming, gaming, and remote work, ensuring you stay connected wherever you need it most.`
   },
   {
     tag:'fp',
     name:'Card Readers',
     cat:'card reader',
     rcm:`Card readers are an indispensable tool for anyone who frequently transfers data between devices, whether for work, photography, or personal use. These compact and efficient devices allow you to quickly access and transfer files from SD cards, microSD cards, or other memory cards to your computer or laptop without the need for cables. With fast read/write speeds, card readers make it easy to backup photos, videos, and documents, providing a hassle-free way to manage your media files. Many models feature multiple card slots, enabling you to read various card formats simultaneously, while others come with plug-and-play functionality for effortless setup. Whether you're a content creator, traveler, or simply need quick access to your stored files, a card reader is a convenient, reliable, and essential tool for efficient data transfer.`
   },
   {
     tag:'fx',
     name:'Bluetooth Headphones',
     cat:'bluetooth headphone',
     rcm:`Bluetooth headphones are the ideal choice for anyone who values convenience, freedom, and premium sound quality. With wireless connectivity, you can enjoy your favorite music, podcasts, or calls without the hassle of tangled cables, making them perfect for workouts, commuting, or hands-free work calls. Designed with advanced audio technology, Bluetooth headphones deliver rich, immersive sound, crisp highs, and deep bass that bring your audio to life. Many models offer long battery life, comfortable ear cushions, and noise-canceling features to block out distractions, allowing you to stay focused and enjoy uninterrupted listening. Whether you’re a music enthusiast, professional, or frequent traveler, Bluetooth headphones combine superior sound, style, and portability for an unbeatable audio experience.`
   },
   {
     tag:'fx',
     name:'Bluetooth Speakers 2',
     cat:'bluetooth speaker',
     rcm:`Bluetooth speakers are a fantastic choice for anyone who loves high-quality sound on the go. Compact, portable, and powerful, these speakers offer a seamless wireless experience, making it easy to connect to your devices and play your favorite tunes, podcasts, or audiobooks with rich, full sound. Many models come with waterproof or rugged designs, perfect for outdoor adventures, beach days, or poolside gatherings. With impressive battery life and robust audio performance, Bluetooth speakers fill any space with clear, vibrant sound, enhancing your listening experience wherever you are. Whether you're hosting a party, relaxing at home, or exploring the outdoors, Bluetooth speakers are an essential accessory for bringing your music to life anytime, anywhere.`
   },
   {
     tag:'fx',
     name:'Microphones',
     cat:'microphone',
     rcm:`Microphones are an essential tool for anyone looking to achieve clear, professional audio quality, whether for podcasts, streaming, meetings, or music recording. Designed with high sensitivity and noise-canceling capabilities, a quality microphone captures your voice or instrument with precision, eliminating background noise for a clean and immersive sound. Many models offer USB plug-and-play compatibility, making setup easy, while others feature advanced controls for gain, volume, and monitoring for optimal customization. From desktop mics for content creators to portable models for on-the-go recording, microphones are versatile, high-performance tools that enhance any audio experience. If you want to sound your best, a reliable microphone is a must-have for elevating your voice above the crowd.`
   },
   {
     tag:'fx',
     name:'Smart Bulbs',
     cat:'smart bulb',
     rcm:`Smart bulbs are a brilliant upgrade for anyone wanting to add convenience, ambiance, and energy efficiency to their home. These versatile lights can be controlled directly from your smartphone or voice assistant, allowing you to adjust brightness, change colors, or set schedules with just a tap or voice command. With options for millions of colors and dimming capabilities, smart bulbs let you customize lighting to suit any mood—whether you're hosting a gathering, relaxing, or focusing on work. They’re also energy-efficient and long-lasting, saving money over time. Ideal for tech enthusiasts, eco-conscious households, or anyone looking to enhance their living space, smart bulbs combine functionality with style, transforming your home into a smarter, more personalized environment.`
   },
   {
     tag:'fx',
     name:'Coil/Rod Water Heaters',
     cat:'water heater',
     rcm:`Electrical rod or coil water heaters are a simple, efficient solution for anyone who needs hot water quickly without the hassle of installing a large heating system. Compact and easy to use, these heaters immerse directly into water, heating it in minutes—perfect for preparing warm baths, washing dishes, or even quickly boiling water for various needs. With a sturdy, rust-resistant design, these rods are built to last and deliver consistent performance with high energy efficiency. Ideal for apartments, dorm rooms, and travel, electrical rod heaters are both portable and affordable, giving you instant access to hot water whenever and wherever you need it.`
   },
   {
     tag:'fx',
     name:'Smart Plugs',
     cat:'smart plugs',
     rcm:`Smart plugs are a game-changer for anyone looking to add automation and convenience to their home. These compact devices allow you to control any plugged-in appliance remotely from your smartphone or via voice commands with popular smart assistants. Whether you’re turning on lights before arriving home, scheduling your coffee maker to start brewing in the morning, or setting timers to save energy, smart plugs offer a simple way to manage your devices. Many models include energy monitoring features so you can track usage and reduce costs. Perfect for enhancing convenience, security, and energy efficiency, smart plugs transform ordinary appliances into smart devices, making them an essential addition for any tech-savvy or eco-conscious home.`
   },
   {
     tag:'fx',
     name:'Smart Doorbells',
     cat:'doorbell',
     rcm:`Smart doorbells are a fantastic addition for anyone looking to make their home safer and more convenient. With a built-in camera (if it has) and microphone, they let you see and talk to visitors right from your phone, whether you’re at home or away. Motion detection alerts you when someone’s at your door, making it easy to keep an eye on deliveries or unexpected guests. Many models even work at night, so you always have a clear view. Perfect for busy families and anyone who wants a little extra peace of mind, smart doorbells make it simple to stay connected to your home, wherever you are.`
   },
   {
     tag:'fx',
     name:'CCTV Cameras',
     cat:'cctv',
     rcm:`CCTV cameras are an excellent choice for anyone wanting to boost the security of their home or business. These cameras provide 24/7 video surveillance, allowing you to keep an eye on key areas and deter potential intruders. With features like high-definition video, night vision, and motion detection, CCTV cameras ensure clear, reliable footage in various lighting conditions. Many systems now offer remote access, so you can monitor live video from your smartphone or computer, no matter where you are. Ideal for enhancing peace of mind, CCTV cameras are a straightforward and effective way to safeguard your property and stay connected to what matters most.`
   },
   {
     tag:'fx',
     name:'Smoke Detectors',
     cat:'smoke detector',
     rcm:`Smoke detectors are essential for creating a safer home environment, providing early warning in the event of a fire. These devices continuously monitor for smoke, and if they detect it, they emit a loud alarm to alert you and your loved ones, giving you crucial time to evacuate or respond. Modern smoke detectors are easy to install and often come with additional features like carbon monoxide detection or smartphone alerts, ensuring you're notified even when away from home. Ideal for families, apartment dwellers, and homeowners alike, smoke detectors offer reliable protection, giving you peace of mind and helping to keep your household safe day and night.`
   },
   {
     tag:'fx',
     name:'Smart Vacuum Cleaners',
     cat:'vacuum cleaner',
     rcm:`Electric vacuum cleaners, handheld vacuum cleaners, and smart vacuum cleaners are all fantastic tools designed to make cleaning faster, more efficient, and convenient. Electric vacuum cleaners offer powerful suction and versatility for deep cleaning large spaces, making them perfect for homes with carpets, rugs, or high-traffic areas. Handheld vacuum cleaners provide portability and ease of use, allowing you to quickly clean smaller spaces, furniture, or even your car with ease. On the other hand, smart vacuum cleaners take convenience to the next level with advanced features like automated scheduling, app control, and smart navigation to clean your home while you’re away. Whether you need a powerful, all-purpose cleaner or a compact, on-the-go solution, these vacuums cater to different needs, making it easy to keep your living space spotless with minimal effort.`
   },
   {
     tag:'fx',
     name:'Smart Fitness Bands',
     cat:'smart band',
     rcm:`Smart bands are an excellent choice for anyone looking to stay on top of their fitness goals and monitor their health with ease. These sleek, wearable devices track a variety of activities, such as steps, heart rate, calories burned, and even sleep patterns, giving you valuable insights into your daily habits. With features like notifications for calls, messages, and app alerts, smart bands keep you connected while helping you stay active and focused on your wellness journey. Many models also include water resistance, long battery life, and customizable designs, making them comfortable and practical for everyday wear. Whether you're a fitness enthusiast or just starting your health journey, a smart band is a convenient, stylish companion to help you stay motivated and reach your goals.`
   },
   {
     tag:'fx',
     name:'Digital Kitchen Scales',
     cat:'digital scale',
     rcm:`Kitchen scales are an indispensable tool for anyone passionate about cooking or baking, offering precision and accuracy in every recipe. Whether you're weighing ingredients for a new dish, following a strict diet plan, or crafting the perfect baked goods, a kitchen scale ensures you get the right measurements every time. With easy-to-read digital displays, tare functions, and the ability to switch between various units of measurement, these scales make cooking and meal prep more efficient and foolproof. Compact, durable, and easy to clean, kitchen scales are perfect for both novice home cooks and seasoned chefs, helping you elevate your culinary creations with ease and consistency.`
   },
   {
     tag:'fx',
     name:'Smart Water Bottles',
     cat:'smart water bottle',
     rcm:`Electrical water bottles designed to keep water cool are the perfect solution for anyone who loves refreshing, chilled hydration on the go. With built-in insulation and advanced temperature control technology, these bottles can maintain your drink’s coolness for hours, even in hot weather or during long commutes. Simply plug in the bottle to activate its cooling system and enjoy ice-cold water whenever you need it. Ideal for outdoor activities, sports, or daily use, these bottles are a convenient and eco-friendly way to stay hydrated without the need for disposable plastic bottles. With sleek, portable designs and reliable cooling performance, these electrical water bottles make sure your water is always at the perfect temperature, ready for you to enjoy anytime.`
   },
   {
     tag:'fx',
     name:'Massage/Facial Guns',
     cat:'massage gun',
     rcm:`Massage guns and facial guns are fantastic wellness tools for anyone looking to relieve muscle tension, enhance relaxation, and boost skincare routines. Massage guns deliver powerful pulses to deeper muscle layers, effectively easing soreness and promoting blood circulation, making them ideal for athletes or anyone with an active lifestyle. Facial guns, on the other hand, offer gentle, targeted vibrations that help reduce facial tension, improve circulation, and enhance product absorption, giving your skin a refreshed, youthful glow. With adjustable settings and various attachments, these devices allow for a customizable experience that’s easy to incorporate into your daily self-care. Compact, versatile, and easy to use, massage and facial guns bring a spa-quality experience right to your fingertips, promoting both body and facial relaxation anytime you need it.`
   },
   {
     tag:'fx',
     name:'Juicer Machines',
     cat:'juicer machine',
     rcm:`Blender and juicer machines are essential for anyone who loves fresh, nutritious drinks or homemade meals. These versatile appliances effortlessly blend, puree, and juice fruits and vegetables, allowing you to create everything from smoothies and shakes to soups and sauces in minutes. High-powered motors and sharp blades ensure a smooth, consistent texture, while easy-to-clean designs make them convenient for daily use. Whether you're looking to kickstart a healthier lifestyle, make meal prep easier, or simply enjoy delicious, homemade juices, blender and juicer machines are reliable kitchen companions that bring taste and health together effortlessly. Perfect for busy individuals or families, these machines make wholesome, tasty recipes a breeze.`
   },
   {
     tag:'fx',
     name:'Camera Covers',
     cat:'camera cover',
     rcm:`Lens covers are an essential accessory for photographers and videographers who want to protect their valuable lenses from dust, scratches, and accidental damage. These covers fit securely over the lens, providing a reliable barrier against environmental elements, ensuring your lens remains clean and ready for sharp, high-quality images. Many lens covers come with additional features, such as UV protection or anti-glare coatings, to enhance the clarity and durability of your lenses. Lightweight and easy to use, they’re ideal for outdoor shoots, travel, or everyday storage. For anyone serious about maintaining the longevity and performance of their photography gear, lens covers are a simple yet indispensable investment.`
   },
   {
     tag:'fx',
     name:'Portable Projectors',
     cat:'portable projector',
     rcm:`Portable projectors are a game-changer for anyone who loves to enjoy movies, presentations, or gaming on a bigger screen, anywhere and anytime. Compact and lightweight, these projectors are designed for ultimate convenience, allowing you to easily set up a large display wherever you go, whether at home, outdoors, or on the road. With impressive picture quality, many portable projectors offer features like wireless connectivity, built-in speakers, and easy-to-use controls, making them perfect for both casual movie nights and professional presentations. Whether you’re hosting an outdoor movie screening, giving a business presentation, or simply enjoying a film in a cozy space, portable projectors offer a flexible, high-quality viewing experience on the go.`
   },
   {
     tag:'fx',
     name:'Ring Lights 2',
     cat:'ring light',
     rcm:`Ring lights are the ultimate accessory for anyone looking to elevate their photography, videography, or video calls. With their evenly distributed, soft lighting, ring lights eliminate harsh shadows, providing a flattering glow that highlights your best features and creates professional-quality results. Whether you're a content creator, makeup artist, or someone who frequently participates in virtual meetings, ring lights offer adjustable brightness and color temperature settings, allowing you to customize your lighting to suit any environment. Compact, easy to set up, and incredibly versatile, ring lights are perfect for everything from social media shoots to live streaming, ensuring you always look your best with flawless lighting.`
   },
   {
     tag:'fx',
     name:'Drones',
     cat:'camera drone',
     rcm:`Drones are an exciting and innovative way to capture breathtaking aerial views, whether for photography, videography, or simply exploring the skies. These high-tech devices offer exceptional stability, advanced camera capabilities, and precise control, allowing you to take stunning photos and videos from angles that were once impossible to achieve. Whether you’re an aspiring filmmaker, an adventurer looking to document your travels, or a hobbyist interested in aerial photography, drones provide endless possibilities for creativity and exploration. With features like GPS navigation, obstacle avoidance, and long battery life, modern drones are user-friendly and built to deliver incredible results. Compact, portable, and easy to fly, drones are the perfect tool to elevate your photography and take your content to new heights.`
   },
   {
     tag:'fx',
     name:'VR Headsets',
     cat:'vr',
     rcm:`VR headsets are a revolutionary way to experience immersive virtual worlds, offering an entirely new level of entertainment, gaming, and education. With cutting-edge technology, these headsets provide lifelike visuals, 3D audio, and intuitive motion tracking, creating an experience that feels as real as stepping into another universe. Whether you're a gamer looking to dive into the latest VR titles, a fitness enthusiast wanting to enjoy virtual workouts, or someone exploring virtual travel or education, VR headsets offer endless possibilities. Comfortable, lightweight, and equipped with a range of user-friendly features, they bring both excitement and convenience to your entertainment setup, making it easier than ever to explore new worlds from the comfort of your home.`
   },
   {
     tag:'fx',
     name:'Travel Adapters',
     cat:'travel adapter',
     rcm:`Travel adapters are essential companions for anyone traveling internationally, ensuring you can easily charge your devices no matter where you go. Designed to work with different plug types across the globe, these compact and versatile adapters allow you to power up your electronics with ease, whether you’re in Europe, Asia, or the Americas. Many travel adapters are equipped with multiple USB ports, offering convenient charging for your phone, tablet, laptop, or camera all at once. Lightweight and easy to pack, they’re the perfect solution for frequent travelers, business professionals, or anyone on the go, making sure you stay connected and powered up during your adventures without the hassle of finding local charging solutions.`
   },
   {
     tag:'fx',
     name:'Smart Cookers',
     cat:'electrical stove',
     rcm:`Electrical cookers and stoves are a must-have for anyone seeking convenience, efficiency, and precision in the kitchen. With advanced features like adjustable temperature settings, quick heating elements, and easy-to-clean surfaces, these cookers and stoves streamline the cooking process, making meal preparation faster and more enjoyable. Whether you’re whipping up a quick dinner or preparing a multi-course feast, electric cookers provide consistent heat control, ensuring your dishes are cooked to perfection every time. Compact yet powerful, they are perfect for home kitchens, apartments, or even outdoor cooking. With energy-efficient designs and sleek aesthetics, electrical cookers and stoves offer both practicality and style, turning your kitchen into a modern cooking haven.`
   },
   {
     tag:'fx',
     name:'LCD Writing Tablet',
     cat:'writing tablet',
     rcm:`The LCD writing tablet is a fantastic, eco-friendly solution for those who love to jot down ideas, sketch, or take quick notes without the need for paper. With its smooth, responsive screen, it mimics the feel of writing on paper while offering the convenience of instant erasure with the press of a button. Perfect for students, professionals, or anyone who needs a simple, digital way to organize thoughts, the LCD writing tablet is lightweight, portable, and reusable, making it ideal for meetings, brainstorming sessions, or even drawing on the go. It’s an affordable, environmentally friendly alternative to traditional notebooks, and its durable design ensures it’s built to last, offering endless uses without wasting paper. Whether you’re doodling, writing to-do lists, or jotting down quick notes, this sleek device is a must-have for anyone looking to stay organized and creative.`
   },
   {
     tag:'fx',
     name:'Strip Lights',
     cat:'strip lights',
     rcm:`Strip lights are a versatile and stylish lighting solution that can transform any space with a touch of creativity. These flexible, easy-to-install lights offer vibrant colors and customizable brightness, allowing you to set the perfect ambiance for any occasion. Whether you're decorating your living room, enhancing your gaming setup, or adding a subtle glow to your kitchen, strip lights provide a modern and energy-efficient way to brighten up your surroundings. Many models come with features like remote control, color-changing options, and even synchronization with music, making them ideal for parties, mood lighting, or just adding a unique touch to your home. Compact, durable, and simple to install, strip lights are an affordable way to add atmosphere and personality to any room.`
   },
   {
     tag:'fx',
     name:'GPS Trackers',
     cat:'tracker',
     rcm:`GPS trackers are invaluable devices for keeping track of what matters most—whether it's your vehicle, luggage, pets, or even loved ones. With real-time location tracking, these compact devices offer peace of mind, allowing you to monitor location and movement with high accuracy and ease. Many GPS trackers come equipped with geofencing, alerting you if the tracker moves outside a designated area, and long battery life, ensuring continuous tracking over extended periods. Ideal for travelers, parents, pet owners, or anyone wanting added security, GPS trackers are simple to use and often compatible with mobile apps for convenient access on the go. From ensuring your assets are safe to helping you locate essentials in unfamiliar places, GPS trackers offer reliable, portable security that you can count on anytime.`
   },
   {
     tag:'fx',
     name:'Air Purifiers',
     cat:'air humidifier',
     rcm:`Air humidifiers are a fantastic addition to any home, providing a healthier and more comfortable living environment by adding essential moisture to dry indoor air. Ideal for combating dryness in colder months or arid climates, humidifiers help alleviate issues like dry skin, irritated sinuses, and respiratory discomfort. Many models come with adjustable mist settings, quiet operation, and long-lasting water tanks, making them easy to customize for any room or lifestyle. Some even include additional features like built-in essential oil diffusers for a soothing aroma or LED lights to create a calming atmosphere. Whether for sleep, work, or relaxation, air humidifiers are an effective and stylish way to improve air quality and enhance your overall well-being at home.`
   },
   {
     tag:'fx',
     name:'3D Pens',
     cat:'3d pen',
     rcm:`3D pens are a thrilling tool for artists, hobbyists, and creative minds of all ages, bringing imagination to life in a hands-on, three-dimensional way. With a 3D pen, you can draw in mid-air, crafting anything from simple shapes to intricate models with just a flick of your wrist. Ideal for designing prototypes, creating custom art, or adding dimension to school projects, these pens use heated plastic filaments that cool instantly, allowing your creations to stand up on their own. Many models are designed with adjustable temperature settings and different speed controls, giving you full control over your work. Lightweight, easy to handle, and incredibly versatile, 3D pens are perfect for anyone looking to add an innovative tool to their creative toolbox, making every project uniquely interactive and fun.`
   },
   {
     tag:'fx',
     name:'Arduino UNOs',
     cat:'arduino uno',
     rcm:`The Arduino UNO is a must-have for anyone interested in learning, experimenting, or advancing in electronics and programming. Known for its simplicity and versatility, the UNO is perfect for beginners and experts alike, making it an ideal gateway into the world of robotics, IoT, and automation projects. Equipped with an easy-to-use microcontroller, this open-source board allows you to prototype quickly and bring your ideas to life, from simple LED displays to complex sensor-driven projects. Supported by a vast community and countless online tutorials, the Arduino UNO makes learning intuitive and fun. Compact, affordable, and compatible with a wide range of components, this board empowers creators, students, and professionals to innovate, explore, and build virtually anything they can imagine.`
   },
   {
     tag:'fx',
     name:'Smart Tea/Coffee Makers',
     cat:'coffee',
     rcm:`An electric tea or coffee maker is an essential appliance for anyone who loves a perfect cup of tea or coffee with minimal effort and maximum convenience. With just the press of a button, these machines can brew hot, flavorful beverages in minutes, saving you time during busy mornings or relaxing evenings. Many models come with customizable settings, allowing you to adjust brew strength or temperature, and some even include timers so your drink is ready exactly when you need it. Compact and stylish, electric tea and coffee makers fit seamlessly into any kitchen, office, or dorm room, ensuring you get that café-quality experience at home. Reliable, easy to clean, and energy-efficient, these makers are a wonderful addition for anyone who values both quality and convenience in their daily routine.`
   },
   {
     tag:'fx',
     name:'Referigerators',
     cat:'fridge',
     rcm:`Refrigerators are indispensable appliances that keep your food fresh, beverages cold, and ingredients readily accessible, making them essential for every home. Modern refrigerators come with innovative features like adjustable temperature controls, humidity-controlled drawers, and even smart technology, allowing you to customize settings for optimal food preservation and efficient energy use. With spacious compartments, sleek designs, and layouts tailored to suit all kinds of storage needs, today’s refrigerators offer a perfect blend of style and functionality. Some models also include advanced features like ice makers, water dispensers, and Wi-Fi connectivity, which adds convenience and efficiency to your kitchen. Ideal for families, busy professionals, or culinary enthusiasts, a high-quality refrigerator enhances your lifestyle by keeping your food fresh and organized, making it a smart and worthwhile investment for any home.`
   },
   {
     tag:'fx',
     name:'Smart Cat Feeders',
     cat:'cat feeder',
     rcm:`Smart cat feeders are a lifesaver for cat owners looking to provide consistent, worry-free meals for their furry friends. These feeders are designed with technology that allows you to schedule feeding times, portion out meals, and even monitor your cat's eating habits remotely through a smartphone app. Ideal for busy pet parents or those with unpredictable schedules, smart cat feeders ensure your cat gets their meals on time, whether you're at work, running errands, or away on a short trip. Many models also come with voice recording options, so you can call your cat to eat, and are equipped with easy-to-clean food compartments for added convenience. With smart cat feeders, you’re giving your cat the care they need while enjoying peace of mind that their mealtime routine is well-managed, no matter where you are.`
   },
   {
     tag:'fx',
     name:'Smart Rice Cookers',
     cat:'rice cooker',
     rcm:`An electrical rice cooker is a must-have for anyone who loves perfectly cooked, fluffy rice without the hassle. This convenient appliance takes the guesswork out of cooking rice, delivering consistent results every time with just the push of a button. Modern rice cookers often come with multiple settings, allowing you to cook different types of rice, steam vegetables, or even prepare whole meals. With features like non-stick interiors, keep-warm functions, and timers, an electric rice cooker makes meal prep easier and more efficient. Ideal for busy families, professionals, or cooking enthusiasts, this versatile appliance is a reliable kitchen companion that saves time and ensures delicious, perfectly cooked rice at every meal.`
   },
]

for(let i=0,x=null; i<cats.length;i++){
/* if(x!==cats[i].tag){
 console.log(cats[i])
 x = cats[i].tag
 }*/
}