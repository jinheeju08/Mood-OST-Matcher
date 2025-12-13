const ostData = [
    // 1. 지브리 스튜디오 (Studio Ghibli)
    { id: 1, category: "지브리", title: "인생의 회전목마", movie: "하울의 움직이는 성", mood: "설렘", url: "https://www.youtube.com/watch?v=NXt-YY3Xt8Q&list=RDNXt-YY3Xt8Q&start_radio=1" },
    { id: 2, category: "지브리", title: "언제나 몇 번이라도", movie: "센과 치히로의 행방불명", mood: "평화", url: "https://www.youtube.com/watch?v=_7o2YoeA3MM&list=RD_7o2YoeA3MM&start_radio=1" },
    { id: 3, category: "지브리", title: "산책", movie: "이웃집 토토로", mood: "기쁨", url: "https://www.youtube.com/watch?v=MRaM0OmDgok&list=RDMRaM0OmDgok&start_radio=1" },
    { id: 4, category: "지브리", title: "너를 태우고", movie: "천공의 성 라퓨타", mood: "용기", url: "https://www.youtube.com/watch?v=D2CRlGawlOI&list=RDD2CRlGawlOI&start_radio=1" },
    { id: 5, category: "지브리", title: "바다가 보이는 마을", movie: "마녀 배달부 키키", mood: "설렘", url: "https://www.youtube.com/watch?v=zajkxWnnAaI&list=RDzajkxWnnAaI&start_radio=1" },
    { id: 6, category: "지브리", title: "원령공주", movie: "모노노케 히메", mood: "장엄", url: "https://www.youtube.com/watch?v=HwfgXNdl5sY&list=RDHwfgXNdl5sY&start_radio=1" },
    { id: 7, category: "지브리", title: "벼랑 위의 포뇨", movie: "벼랑 위의 포뇨", mood: "기쁨", url: "https://www.youtube.com/watch?v=3EP8qjwfNQo&list=RD3EP8qjwfNQo&start_radio=1" },
    { id: 8, category: "지브리", title: "가끔은 옛날 이야기를", movie: "붉은 돼지", mood: "추억", url: "https://www.youtube.com/watch?v=7sZI-V6kW6M&list=RD7sZI-V6kW6M&start_radio=1" },
    { id: 9, category: "지브리", title: "바람이 지나가는 길", movie: "이웃집 토토로", mood: "평화", url: "https://www.youtube.com/watch?v=vTW8Z9e36ZE&list=RDvTW8Z9e36ZE&start_radio=1" },
    { id: 10, category: "지브리", title: "지구본", movie: "그대들은 어떻게 살것인가", mood: "슬픔", url: "https://www.youtube.com/watch?v=zuGLqv2_bcI&list=RDzuGLqv2_bcI&start_radio=1" },

    // 2. 디즈니 (Disney)
    { id: 11, category: "디즈니", title: "A Whole New World", movie: "알라딘", mood: "설렘", url: "https://www.youtube.com/watch?v=eitDnP0_83k&list=RDeitDnP0_83k&start_radio=1" },
    { id: 12, category: "디즈니", title: "Let It Go", movie: "겨울왕국", mood: "용기", url: "https://www.youtube.com/watch?v=L0MK7qz13bU&list=RDL0MK7qz13bU&start_radio=1" },
    { id: 13, category: "디즈니", title: "Under the Sea", movie: "인어공주", mood: "기쁨", url: "https://www.youtube.com/watch?v=GC_mV1IpjWA&list=RDGC_mV1IpjWA&start_radio=1" },
    { id: 14, category: "디즈니", title: "Remember Me", movie: "코코", mood: "그리움", url: "https://www.youtube.com/watch?v=KP_XkN2v7OM&list=RDKP_XkN2v7OM&start_radio=1" },
    { id: 15, category: "디즈니", title: "Reflection", movie: "뮬란", mood: "소심", url: "https://www.youtube.com/watch?v=nd5GMzxrGYs&list=RDnd5GMzxrGYs&start_radio=1" },
    { id: 16, category: "디즈니", title: "Part of Your World", movie: "인어공주", mood: "설렘", url: "https://www.youtube.com/watch?v=dSlnHz86tew&list=RDdSlnHz86tew&start_radio=1" },
    { id: 17, category: "디즈니", title: "Beauty and the Beast", movie: "미녀와 야수", mood: "평화", url: "https://www.youtube.com/watch?v=gjVW0qU0qCY&list=RDgjVW0qU0qCY&start_radio=1" },
    { id: 18, category: "디즈니", title: "Steal The Show", movie: "엘리멘탈", mood: "사랑", url: "https://www.youtube.com/watch?v=AJsvGtGgI6M&list=RDAJsvGtGgI6M&start_radio=1" },
    { id: 19, category: "디즈니", title: "You've Got a Friend in Me", movie: "토이 스토리", mood: "우정", url: "https://www.youtube.com/watch?v=1MPZRcyTrcU&list=RD1MPZRcyTrcU&start_radio=1" },
    { id: 20, category: "디즈니", title: "zoo", movie: "주토피아2", mood: "용기", url: "https://www.youtube.com/watch?v=Xry6B0I3pT8&list=RDXry6B0I3pT8&start_radio=1" },

    // 3. 신카이 마코토 (Makoto Shinkai)
    { id: 21, category: "신카이마코토", title: "전전전세 (Nandemonaiya)", movie: "너의 이름은.", mood: "설렘", url: "https://www.youtube.com/watch?v=FYHSiSqUwDI&list=RDFYHSiSqUwDI&start_radio=1" },
    { id: 22, category: "신카이마코토", title: "아무것도 아니야", movie: "너의 이름은.", mood: "슬픔", url: "https://www.youtube.com/watch?v=uL_4Ur696MU&list=RDuL_4Ur696MU&start_radio=1" },
    { id: 23, category: "신카이마코토", title: "Sparkle", movie: "너의 이름은.", mood: "설렘", url: "https://www.youtube.com/watch?v=_KoB4onMgQk&list=RD_KoB4onMgQk&start_radio=1" },
    { id: 24, category: "신카이마코토", title: "사랑이 할 수 있는 일이 아직 있을까", movie: "날씨의 아이", mood: "웅장", url: "https://www.youtube.com/watch?v=KBGNMKVASiQ&list=RDKBGNMKVASiQ&start_radio=1" },
    { id: 25, category: "신카이마코토", title: "Grand Escape", movie: "날씨의 아이", mood: "용기", url: "https://www.youtube.com/watch?v=XVPK16aYaPA&list=RDXVPK16aYaPA&start_radio=1" },
    { id: 26, category: "신카이마코토", title: "스즈메", movie: "스즈메의 문단속", mood: "신비", url: "https://www.youtube.com/watch?v=7kVu6Io4A4Y&list=RD7kVu6Io4A4Y&start_radio=1" },
    { id: 27, category: "신카이마코토", title: "Rain", movie: "언어의 정원", mood: "평화", url: "https://www.youtube.com/watch?v=O_bzem-nERw&list=RDO_bzem-nERw&start_radio=1" },
    { id: 28, category: "신카이마코토", title: "One more time, One more chance", movie: "초속 5센티미터", mood: "그리움", url: "https://www.youtube.com/watch?v=bFhHJvUePzs&list=RDbFhHJvUePzs&start_radio=1" },
    { id: 29, category: "신카이마코토", title: "저 멀리", movie: "스즈메의 문단속", mood: "설렘", url: "https://www.youtube.com/watch?v=RlNiGXzQNcY&list=RDRlNiGXzQNcY&start_radio=1" },
    { id: 30, category: "신카이마코토", title: "괜찮아", movie: "날씨의 아이", mood: "위로", url: "https://www.youtube.com/watch?v=P_HFGz7k-LU&list=RDP_HFGz7k-LU&start_radio=1" }
];