let ndata = [
    {
        title:"Intel’s Arrow Lake CPUs Release",
        date:"17-10-2024",
        dsc:`
          Intel has officially launched its next-gen Arrow Lake processors today. 
          The initial lineup includes the Core Ultra 9 285K, Ultra 7 265K, and Ultra 5 245K chips, catering to high-performance computing enthusiasts. 
          These CPUs are expected to compete directly with AMD’s Ryzen 9000 series, which has been underwhelming in some benchmarks. 
          Arrow Lake represents Intel’s response to AMD, with further non-overclockable versions expected in early 2025.
        `,
        img:"https://www.cclonline.com/images/articles/Intel-Arrow-Lake-S-Desktop-CPUs.png?width=1250",
    },
    {
        title:"Infineon's OktoberTech Silicon Valley Event",
        date:"17-10-2024",
        dsc:`
          Infineon is hosting its prestigious OktoberTech event today at the Computer History Museum in Silicon Valley. 
          The event will highlight over 60 technological innovations, with keynote talks on industry reinvention and live demonstrations of cutting-edge semiconductor technologies. 
          It serves as a major collaboration forum for innovators and tech leaders.
        `,
        img:"https://www.infineon.com/export/sites/default/_images/promopages/OktoberTechs/Stage-Banner_OktoberTech-2024_768x432px.jpg_1459425146.jpg",
    },
    {
        title:"AI and Cybersecurity",
        date:"18-10-2024",
        dsc:`
        AI continues to be crucial in cybersecurity, with the U.S. Treasury using AI systems to recover over $1 billion from check fraud cases. 
        This highlights the increasing role of AI in fraud detection and prevention.
        `,
        img:"https://img.freepik.com/free-photo/ai-cybersecurity-virus-protection-machine-learning_53876-129788.jpg?t=st=1729260407~exp=1729264007~hmac=de78b4ebc03b2853950f36f6a07244e692d56cd6e34210ba5be76f133d9be4cf&w=740"
        
    },
    {
        title:"YouTube's New Subscription",
        date:"18-10-2024",
        dsc:`
        YouTube is testing a new "Premium Lite" subscription plan that would cut out most ads but at a lower price point than its full Premium service, making it more affordable for users who want an ad-free experience.
        `,
        img:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/540x360/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23986639/acastro_STK092_03.jpg",
    },
    {
        title:"Advanced Robotics",
        date:"18-10-2024",
        dsc:`
        Moley Robotics introduced a high-end robot arm that can cook meals, representing a leap in home automation. 
        While currently priced at $105,000, it showcases the potential of robotics in daily life.
        `,
        img:"https://www.moley.com/wp-content/themes/moley/webp/3.webp"
    },
    {
        title:"AI Generated Content",
        date:"18-10-2024",
        dsc:`
        The field of synthetic media, including AI-generated content like deepfakes and virtual influencers, is rapidly advancing. 
        This raises both creative possibilities and ethical concerns as such content becomes increasingly realistic.
        `,
        img:"https://4k-soft.com/uploads/news/1111-cover.-Ag_rkYzHgmMooZ1hed0q1G5Ay7CmfFq.png"
    },
    {
        title:"Gartner's Top Trends For 2024",
        date:"18-10-2024",
        dsc:`
        Gartner's report highlights major strategic tech trends such as "AI Trust, Risk, and Security Management" and "Democratized Generative AI," which will shape the future of industries and IT investments.
        `,
        img:"https://emt.gartnerweb.com/ngw/globalassets/en/articles/images/top-strategic-technology-trends-2024-1.png?_gl=1*oz3t9g*_ga*MzAzMzk3OTk3LjE3MjkyNjE3NTU.*_ga_R1W5CE5FEV*MTcyOTI2MTc1NC4xLjEuMTcyOTI2MTc4OS4yNS4wLjA.*_gcl_au*MTQ5NjU5MTY0My4xNzI5MjYxNzYz"
    },
    {
        title:"GE Profile Smart Indoor Smoker",
        date:"13-11-2024",
        dsc:`
        GE unveiled an indoor smoker designed to bring outdoor cooking flavors to home kitchens without the hassle of traditional smoke. This innovative appliance uses wood pellets to generate smoky flavors in a closed environment, keeping smoke levels low while preserving taste.
        `,
        img:"https://i.shgcdn.com/74ec6ca3-7e38-4db3-b228-97bcee9ddfd9/-/format/auto/-/preview/3000x3000/-/quality/lighter/-/resize/1080x/"
    },
    {
        title:"ASUS Zenbook Duo UX8406",
        date:"13-11-2024",
        dsc:`
        The latest ASUS Zenbook Duo enhances productivity with dual OLED displays and a 120Hz refresh rate, making multitasking seamless. Equipped with Intel’s AI-powered Ultra processors, the laptop supports up to 32GB of RAM and 2TB of storage, a game-changer for professionals.
        `,
        img:"https://www.paklap.pk/media/catalog/product/cache/2cc443e44e97595ea39006016c876eaa/7/1/71xzukl5dyl._ac_sl1500_.jpg.webp"
    },
     {
        title:"LG Signature Transparent OLED TV",
        date:"13-11-2024",
        dsc:`
        LG’s Signature Transparent OLED T TV combines advanced display technology with a sleek design, becoming transparent when turned off. The TV's aesthetic appeal is matched by high-quality 4K visuals, making it a luxury item for modern interiors.
        `,
        img:"https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x750/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25211083/DSCF5928.jpg"
    },
    {
        title:"Lockly Visage Smart Lock",
        date:"13-11-2024",
        dsc:`
        The Lockly Visage smart lock offers secure, keyless entry through facial recognition and compatibility with Apple HomeKit. Its compact design and built-in Wi-Fi allow users to control it remotely, improving both convenience and home security.
        `,
        img:"https://media.wired.com/photos/66e209417c8c389d5e0a7bc9/master/w_640,c_limit/Lockly-Visage-Zeno-Series-Smart-Lock-Abstract-Background-SOURCE-Lockly.jpg"
    },
    {
        title:"Bitcoin Reaches New High",
        date:"13-11-2024",
        dsc:`
        Bitcoin reached a record $90,000, sparking debates around cryptocurrency market trends and regulation. The surge is attributed to growing investor interest, with Bitcoin continuing to gain mainstream acceptance as a viable asset.
        `,
        img:"https://www.investopedia.com/thmb/rLgf7GOa12jki6IC1OtgCPfKaM8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/INV_BitcoinIllustration_GettyImages-2158757103-55a742841f634b6cb5865e89b942ab1c.jpg"
    },
    
]