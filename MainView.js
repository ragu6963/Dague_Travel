
var loca_image = [
{ id: 1, img: "Assets/location/place1.jpg" },
{ id: 2, img: "Assets/location/place2.jpg" },
{ id: 3, img: "Assets/location/place3.jpg" },
{ id: 4, img: "Assets/location/place4.jpg" },
{ id: 5, img: "Assets/location/place5.jpg" },
{ id: 6, img: "Assets/location/place6.jpg" },
{ id: 7, img: "Assets/location/place7.jpg" },
{ id: 8, img: "Assets/location/place8.jpg" },
{ id: 9, img: "Assets/location/place9.jpg" },
{ id: 10, img: "Assets/location/place10.jpg" },
{ id: 11, img: "Assets/location/place11.jpg" },
{ id: 12, img: "Assets/location/place12.jpg" }
];

var food_image = [
{ id: 1, img: "Assets/food/food1.jpg" },
{ id: 2, img: "Assets/food/food2.jpg" },
{ id: 3, img: "Assets/food/food3.jpg" },
{ id: 4, img: "Assets/food/food4.jpg" },
{ id: 5, img: "Assets/food/food5.jpg" },
{ id: 6, img: "Assets/food/food6.jpg" },
{ id: 7, img: "Assets/food/food7.jpg" },
{ id: 8, img: "Assets/food/food8.jpg" },
{ id: 9, img: "Assets/food/food9.jpg" },
{ id: 10, img: "Assets/food/food10.jpg" } 
];

var location = {
	1: {
		name: "비슬산",
		info: "1986년 2월 22일 달성군 군립공원으로 지정되었다. 국내에서 가장 큰 규모의 천연기념물 435호로 지정된 달성 비슬산 암괴류가 산정상에서부터 산아래까지 긴 돌강을 이루고 있어 장관을 연출하는 곳이다. 천왕봉·대견봉·조화봉·관기봉 사이에는 341㏊에 달하는 비슬산 자연휴양림이 있어 삼림욕과 휴식을 즐길 수 있다. 또 봄이면 고지 30만 평에 걸쳐 진달래꽃이 흐드러지게 피어 장관을 연출한다. 매년 4∼5월에 참꽃축제를 열고, 민속놀이·먹을거리 장터 등의 부대 행사를 개최한다. 그 밖에 여름에는 안개 계곡, 가을에는 단풍과 참억새, 겨울에는 얼음 동산이 유명하다. 공원 안에는 유가사(瑜伽寺)·용연사(龍淵寺)·소재사(逍災寺) 등의 고찰과 해발 1000m 고지에 위치한 대견사(大見寺)가 있고 현재 대견사까지는 전기차가 운행중이다.",
		img: "Assets/location/place1.jpg",
	},
	2: {
		name: "국채보상운동기념공원",
		info: "대구에서 처음 시작된 국채보상운동의 정신이 깃든 도심 속 쉼터 ‣ 총면적 42,509㎡에 잔디광장과 녹지 공간, 오솔길, 분수, 정자 등을 갖추고 있다. 곳곳에 벤치와 휴식 공간이 많아 시민은 물론 여행객들도 많이 찾는다 ‣ 달구벌 대종과 독립지사 흉상, 국채보상운동 여성기념비 등이 있고, 공원 한 쪽에 국채보상운동 기념관도 자리해 있다.",
		img: "Assets/location/place2.jpg",
	},
	3: {
		name: "강정고령보",
		info: "물과 자연과 문화가 오롯이 담긴 건축예술품 ‣ 강과 물, 자연을 모티브로 건축한 디아크는 예술적인 외관으로 사랑 받는다 ‣ 디아크 주변으로 조성된 수변 공간, 자전거길은 주민의 녹색쉼터로 활용 ‣ 지하 1층 전시관은 4대강문화관으로 꾸며진다. 1층과 2층은 생명의 순환을 테마로 하는 서클영상존이다. 최고의 힐링 장소는 디아크의 3층 전망대",
		img: "Assets/location/place3.jpg",
	},
	4: {
		name: "신천",
		info: "도심을 품고 아우르는 생명의 젖줄 대구 도심을 가로지르는 하천경관의 축으로서 신천(新川)은 남측 비슬산과 최정산에서 시작하여 가창 용계에 이르러서는 팔조령 부근에서 시작하는 대천과 합류하여 침산동을 거쳐 금호강에 이르는 지방하천으로 총길이 12.5㎞, 유역면적은 165.3㎢에 이른다. 신천에는 13개의 교량이 가로지르며, 산책로와 자전거도로를 따라 시민의 휴식과 운동의 기회를 제공하며, 특히 한여름 더위를 식혀주는 물놀이장과 한겨울의 운치를 더해주는 스케이트장은 어릴 적 추억을 되살려 준다. 아울러 시민의 사회공간으로서 공연장, 축제의 장 등 여러 행사가 이루어지는 장소로 자연과 인간이 어우러지는 도시형 생태하천으로 주목받고 있다.",
		img: "Assets/location/place4.jpg",
	},
	5: {
		name: "수성못",
		info: "수변 산책과 분수쇼, 야경을 한 자리에서 즐기기 ‣ 둘레 2km의 수성못을 따라 바늘꽃, 연꽃, 갈대 등이 어우러진 수변 데크 로드와 울창한 왕벚나무, 버드나무 가로수길이 펼쳐진다 ‣ 밤에는 물 위에 비친 조명이 물감을 풀어 놓은 듯 아름답게 반짝인다. 하루 4회 영상음악분수가 가동되어 볼거리를 더한다",
		img: "Assets/location/place5.jpg",
	},
	6: {
		name: "팔공산",
		info: "경상북도와 대구광역시에 걸쳐 있는 산으로 높이는 1,192m이다. 대구광역시 중심부에서 북동쪽으로 약 20㎞ 떨어진 지점에 솟은 대구의 명산으로 널리 알려져 있다. 주봉인 비로봉(毘盧峰)을 중심으로 동 / 서로 20㎞에 걸쳐 능선이 이어진다. 예로부터 신라시대에는 부악(父岳), 중악(中岳), 공산(公山), 동수산(桐藪山) 등 여러 이름으로 불렸으며 고려시대에는 공산으로 불려지다가 조선시대에 와서 지금의 팔공산으로 명하고 있다. <좀 더 알아보기> 팔공산은 대구광역시의 중심에서 북동 방향으로 약 20km 지점에 태백산맥이 남으로 힘차게 내딛다가 낙동강과 금호강이 만나는 곳에 우뚝 멈추어 장엄하게 솟은 산으로 해발 1,192m의 비로봉을 중심으로 동봉(일명, 미타봉 1,155m)과 서봉(일명, 삼성봉 1,150m)이 어깨를 나란히 웅자를 겨루고 있으며 행정구역으로는 대구광역시 동구에 속하고 영천시, 경산시, 칠곡군, 등 4개 시.군을 경계로 총면적이 30.593㎢이다. 팔공산은 신라시대에는 부악(父岳), 중악(中岳) 또는 공산(公山)이라 했으며, 고려시대에는 “공산”이라고 하다가 조선시대에 들어 지금의 팔공산이라는 이름으로 불리워지고 있다. 또한 이 곳은 불교 문화의 중심지로서, 대한불교 조계종 제9교구 본사인 동화사를 비롯한 수많은 사찰이 산재해 있으며 많은 기암과 계곡이 있어 봄에는 진달래 영산홍이 피고 여름에는 울창한 숲과 맑은 물이 흐르고 가을은 아름다운 단풍거리가 순환도로를 따라 16.3km에 걸쳐 전개되어 진풍경을 연출하고 있으며, 겨울은 설경과 설화가 아름답게 조화를 이루는 곳으로, 팔공산은 연중 볼거리가 풍부하여 탐방객이 끊이지 않는 명산이다.",
		img: "Assets/location/place6.jpg",
	},
	7: {
		name: "경상감영공원",
		info: "도심 한복판 숲과 정원을 거닐며 역사공부 ‣ 조선 선조 34년(1601) 경상감영이 있던 곳. 1970년 대구시가 중앙공원으로 개장 ‣ 대구의 중심부에 위치한 도심 속 정원이다. 하늘을 가릴 만큼 키 높은 나무와 꽃밭, 잔디광장, 구불구불 이어지는 산책로를 걸으며 피로와 스트레스를 해소하기 좋은 장소 ‣ 경상도 관찰사의 집무실인 선화당(유형문화재 제1호)과 처소로 사용한 징청각(유형문화재 제2호)등 문화유산을 둘러보며 역사공부도 할 수 있다.",
		img: "Assets/location/place7.jpg",
	},
	8: {
		name: "83타워",
		info: "도심 속에 우뚝 솟은 대구의 랜드마크 두류공원(頭流公園) 내에 위치한 유럽형 테마공원에 조성된 83타워(높이 202m)는 대구 전경을 한눈에 내려다 불 수 있는 관광명소로 다보탑 형태의 팔각형 탑신을 자랑하며 한국의 전통 건축미를 재현하고 있다.",
		img: "Assets/location/place8.jpg",
	},
	9: {
		name: "서문시장",
		info: "대구 최대의 상설시장, 야시장도 인기 ‣ 조선시대 평양장, 강경장과 함께 전국 3대 장터의 하나로 이름 떨친 전통시장 ‣ 건해산물상가, 아진상가 등 8개 지구로 구성되고, 약 5,522여 개의 점포가 들어서 있다 ‣ 주 거래품목인 주단, 포목 등을 비롯해 그릇, 청과, 건어물, 해산물 등 다양한 상품이 거래되는 큰 시장이다",
		img: "Assets/location/place9.jpg",
	},
	10: {
		name: "대구스타디움",
		info: "2002년 한일월드컵 대회, 2003대구하계유니버시아드대회를 성공적으로 개최하였으며 2011년 세계육상선수권대회를 유치하고 있다. 또한 주변의 수려한 자연환경과 깨끗한 시설로 주변시민들 뿐만 아니라 타지에서도 많은 관광객이 찾아오는 대구의 새로운 명소로 떠오르고 있다. 체육시설을 개방하여 체력단련 및 휴식공간으로 활용할수 있도록 하고 있으며, 체육 및 문화예술 행사를 유치하여 시민들에게 한층 더 가까이 다가 가도록 노력하고 있다.",
		img: "Assets/location/place10.jpg",
	},
	11: {
		name: "동성로",
		info: "젊은 기운이 살아 숨쉬는 도심의 가로광장 동성로(東城路)는 사성로 중에서 대구역네거리와 중앙치안센터 사이 구간(900m)으로서 대구의 대표적인 중심번화가 중의 하나이다. 본래 대구읍성 동쪽의 성곽지였으나 1907년 헐리고 도로가 되면서 현재에 이르렀다. 동성로는 대구백화점 앞 야외무대를 중심으로 옛 성곽의 이미지를 재현하는 장대석 띠포장의 보행자전용거리를 따라 교동 귀금속거리, 떡볶이골목, 가방골목, 야시골목, 구제골목 등 각종 골목상권을 이루고 있다. 또한 2009년에 조성된 국내 최초의‘대중교통전용지구’(반월당네거리~대구역네거리, 1.05km)는 친인간적, 친환경적인 가로로 다양한 상권과 흥미로운 디자인에 의하여 동성로와 더불어 명품가로로 자리매김하고 있다.",
		img: "Assets/location/place11.jpg",
	},
	12: {
		name: "달성공원",
		info: "역사의 흔적을 품은 공원, 대구에서 가장 오래된 도심 공원 ‣ 사적 제 62호로 지정. 공원 안에 옛 토성과 지방문화재 자료 제3호인 관풍루가 자리 ‣ 사슴과 타조, 물개, 호랑이 등을 관람할 수 있는 동물사가 있어 가족여행객에게 인기. 곳곳에 벤치와 휴식 공간이 많으며 공원 둘레는 한 바퀴 도는 오솔길이 조성되어 있어 천천히 산책하며 쉬어가기 좋다",
		img: "Assets/location/place12.jpg",
	}
};

var food = {
	1: {
		name: "대구육개장",
		info: "전국에서 얼큰하면서도 다양한 버전의 쇠고기국을 가진 도시는 대구가 유일하다. 대구육개장 의 특징 중 하나는 붉고 걸쭉한 고추기름. 국이 끓을때 고춧가루를 넣지 않고 녹인 쇠기름으로 고추기름을 만들어 양념으로 넣는다. 대구는 삼복에는 엄청나게 땀을 흘리고 겨울에는 사람을 동태로 만들 정도의 혹한이다. 고춧가루에 들어있는 캡사이신 성분이 여름에는 땀을 배출해 주고, 겨울에는 찬 몸을 덥혀주는 구실을 한다. 1929년 12월 종합 잡지 '별건곡'에도 '대구가 육개장의 고장'이었음을 알려 주고 있으며 최남선의 “조선상식 문답”에도 육개장을 대구의 명물로 소개하고 있다 1946년부터 한일극장 공터 나무시장에서 국에 밥을 말아 팔던 국일식당은 사골과 사태를 밤새도록 고아 우려낸 육수에 대파와 무를 넣고 고추가루와 다진 마늘을 듬뿍 넣어 얼큰하고 매운 듯하면서 개운한 뒷맛이 일품이었다. 6.25전쟁이 나자 전국 각처에서 피란민이 대구로 모이면서 국밥 형태의 상차림을 싫어하는 사람들이 ‘밥따로 국따로’를 주문하면서 생겨난 것이 따로국밥이다. 따로국밥은 육개장의 상차림의 형태를 말하는 것으로써 '얼큰 화끈'한 대구만의 맛을 대변하는 대구 향토음식의 좌장격으로 전국에서 몰려온 피난민들 사이에서 폭발적 인기를 끌었다.",
		img: "Assets/food/food1.jpg",
	},
	2: {
		name: "막창구이",
		info: "70년대 초부터 유행한 막창은 소주와 가장 궁합이 잘 맞는 안주로서 소의 네 번째 위인 홍창을 연탄이나 숯불에 구워 특별히 제조된 된장소스에 마늘과 쪽파를 곁들여 먹는 것이 특징이다. 저지방 고단백 음식으로서 칼슘함량이 쇠고기 보다 월등히 높아 어린이 성장발육에도 좋다. 유독 대구에서만 발달된 막창문화가 근래에는 전국에 폭발적으로 번져가는 추세이고 요즘에는 돼지막창도 즐겨 먹는다. 옛 미도극장 근처 황금막창(현재 남구 영남이공대학정문 맞은편으로 이전)을 출발로, 서울막창, 삼일막창, 상동막창 시대를 거쳐 IMF환란 직후 두산동 아리조나 막창 등 식당들이 '막창붐 릴레이'를 벌였다.",
		img: "Assets/food/food2.jpg",
	},
	3: {
		name: "뭉티기",
		info: "1950년대 후반 처지개살 (사태살의 일종으로 소 뒷다리 안쪽의 허벅지살)을 뭉텅뭉텅 썰어 참기름, 마늘, 굵게 빻은 고춧가루 등을 섞은 양념에 푹 담궈 먹는 조리법의 생고기는 대구가 유일하다. 싱싱하지 않으면 판매를 하지 않기 때문에 싱싱한 한우의 참맛을 그대로 느낄 수 있다. 전국적으로는 육회가 보편적인 술안주로 인기를 끌고 있지만 한우 생고기인 뭉티기는 대구가 원조이다. '뭉티기'란 '엄지손가락 한마디 크기만하게 뭉텅뭉텅 썰어 낸다'고 뭉티기라고 불렀다. 고기에 양 념을 전혀 하지 않아도 자체 풍미가 있어 싱겁지가 않다. 양념장은 감칠맛을 더하고 육질의 쫀득함과 부드러움의 복합적인 맛을 낸다. 뭉티기는 대구사람들의 기쁨·고통·한숨이 서려 있는, 대구사람들에 의해 피워낸 붉은 장미꽃 같은 음식으로 외지서 친한 친구라도 찾아오면 반드시 찾아가는 코스이기도 하다. 인절미보다 더 차지기 때문에 담긴 채로 접시를 뒤집어도 흘러내리지 않는다.",
		img: "Assets/food/food3.jpg",
	},
	4: {
		name: "동인도찜갈비",
		info: "70년대부터 중구 동인동 주택가에서 찌그러진 양은 냄비에 푹 익힌 소갈비를 담아 매운 고춧 가루와 다진 마늘을 주 양념으로 비벼먹는 동인동 찜갈비는 간장으로만 맛을 내는 갈비찜과는 판이하게 다른 대구에만 있는 스타일이다. 술안주로도 알맞으며 식사 후 남은 양념에 밥을 비벼 먹는 맛이 맵싸하고 화끈한 것이 특징이 다. 서울.경기권의 갈비찜과는 달리 혀가 얼얼할 정도로 매우면서도 달짝지근한 맛이 일품이다.",
		img: "Assets/food/food4.jpg",
	},
	5: {
		name: "논메기매운탕",
		info: "살아있는 메기를 다시마와 무로 우려낸 육수에 마늘, 고추가루를 많이 넣어 얼큰하게 끓여낸 대구발 신개념 매운탕이다. 저렴한 가격에 푸짐한 양과 얼큰한 국물 맛이 일품이며, 특히 수제비를 넣어 먹으면 국물과 어우러져 더욱 깊은 맛을 낸다. 지하철2호선 문양역 앞 다사읍 부곡리 일대 논메기 매운탕 20여 집이 성업 중이다. 다사읍 부곡리는 목가적인 농촌마을로 90년대 초 한 농가에서 농촌 소득원을 찾다가 농촌지도소의 도움을 받아 논농사 대신 논메기 양식을 시작하였다. 그러나 수지타산이 맞지 않아 유료 낚시터를 만들면서 낚시꾼들이 모여 들었다. 일부 낚시꾼들이 자신이 잡은 논메기를 가지고 주인에게 매운탕을 끓여줄 것을 부탁하면서 양식장 옆 한쪽에 비닐하우스로 매운탕 집을 만들었다. 교통의 요지인 탓도 있지만 얼큰하면서 시원한 맛에 매료된 미식가들로 항상 북적댔다. 인근주민들도 너도나도 논메기 매운탕 집을 열어 마을 전체 25가구 중 14가구가 전답을 팔아 논메기매운탕 집을 열었다. 푸짐하고 저렴한 가격에 특별한 향신료를 쓰지 않아도 전혀 비린내가 없으며 맵지 않고 적당하게 얼큰한 맛을 낸다.",
		img: "Assets/food/food5.jpg",
	},
	6: {
		name: "복어불고기",
		info: "1970년대 후반 복어요리라고는 기껏해야 탕 종류 정도밖에 없을 때 매콤한 양념과 콩나물, 양파, 대파를 곁들여 빨갛게 볶아 먹는 복어불고기가 대구의 한 음식점에서 개발되었다. 매콤한 양념이 쏘옥 배인 복어살과 야채를 곁들여 술 한 잔하고 남은 양념에는 밥을 볶아 먹는다. 부드러우면서 매운맛이 대구사람들의 입맛에는 제격이다. 마냥 매운맛은 아니다. 뒷맛은 달콤한 맛이다. 복어는 은복만을 쓴다. 쫄깃쫄깃하면서도 지방이 없고 담백한 맛으로 달착지근하면서 감칠맛이 있다. 지금은 대구의 대부분 복어요리집에서 취급하는 메뉴이고, 갓 숨죽은 아삭아삭한 콩 나물과 부드러운 복어살이 입안에 섞이면서 색다른 맛을 연출한다.",
		img: "Assets/food/food6.jpg",
	},
	7: {
		name: "누른 국수",
		info: "우리나라에서 국수 소비량이 가장 많은 지역이 대구일정도로 대구사람들의 국수 사랑은 유별나다, 누른국수는 대구지역을 대표하는 면 요리로 전국에서 유일하게 진하게 우려낸 멸치국물을 다시로 쓴다. 누른국수는 다시를 쓰지 않는 안동의 건진국수와는 다르며, 밀가루와 적당한 량의 콩가루를 섞어 얇고 널찍하게 밀고 겹쳐 가늘게 채 썬 다음 멸치 다시에 넣고 끓인 것으로 60~70년 분식장려기간 동안 비약적인 성장을 했다. '누른국수'는 경상도 칼국수라는 별칭으로 사골, 해물 등이 들어가지 않고 멸치국물을 맛국물로 쓴다는게 특징이다. 밀리오레 뒷 골목은 한때 칼국수골목으로 유명했고 거기서 '암뽕에 소주 한병 바람'이 일었다.",
		img: "Assets/food/food7.jpg",
	},
	8: {
		name: "무침 회",
		info: "대구는 내륙지방이기 때문에 80년대 이전에는 싱싱한 활어를 맛볼 수 없는 지방이다. 활어회의 대체식품으로 삶은 오징어와 소라, 논고둥, 아나고 등을 무채, 미나리와 함께 고추가루와 마늘, 생강을 넣어 즉석에서 버무려 낸 무침회는 40여년 전부터 대구에만 맛 볼 수 있는 독특한 명물 음식이다. 바다에서 나는 오징어, 소라와 논에서 나는 논고둥은 데치고, 아나고는 생것으로 넣은 것이 특징이다. 푸짐하면서도 저렴하고 맵고 화끈한 맛에 남녀노소에 이르도록 아무에게도 편중되지 않는 메뉴이다. 한때 불로동 일대에서 붐을 이루다가 성서지역이 공단으로 활성화되면서 지금은 서구 내당동 반고개 무침회 골목으로 호남식당과 충무식당 등 15개 식당이 타운을 형성하고 있다.",
		img: "Assets/food/food8.jpg",
	},
	9: {
		name: "야끼우동",
		info: "야끼우동은 70년대에 대구에서 처음 개발된 얼큰하고 매운 대구식 볶음 우동이다. 고운 고추가루와 마늘의 매운 양념을 기본으로 양파, 배추, 호박, 숙주나물, 목이버섯과 여름에 는 부추, 겨울에는 시금치에 새우, 오징어, 돼지고기를 넣어 센 불에 즉석에서 볶아내는 국물 없는 음식으로 40년 전 이탈리아 파스타에 대적할만한 대구판 매운 우동볶음으로 탄생 했다. 그러나 마냥 맵기만 한 것은 아니다. 적당히 매운맛에 뒷맛은 달착지근하다. 센 불에 재빨리 볶아 면을 넣기 때문에 재료마다 향이 그대로 살아있다. 매콤 달콤하면서 약간의 중독성이 있다.",
		img: "Assets/food/food9.jpg",
	},
	10: {
		name: "납작만두",
		info: "납작만두는 무미에 가까운 듯한 맛이 특징이다. 얇은 만두피에 당면을 넣고 반달모양으로 빚어 물에 한번 삶은 다음 구워서 간장을 술술 뿌려 먹는 납작만두는 대구에만 있는 것으로, 요즘에는 떡볶이나 매운 야채를 섞어 매콤하게 즐기기도 하는 별미음식이다. 기존 중국만두의 느끼한 맛을 제거하기 위해 60년대 초 식물성 만두소를 넣어 만들어진 신개 념 만두로써 대구에서 처음 선보였는데, 당면, 부추, 당근, 양배추, 파 등의 만두소를 넣는 듯 마 는 듯 사용하는 것이 기존 만두와 다른 점이다.",
		img: "Assets/food/food10.jpg",
	}
};

var InterApp = require('FuseJS/InterApp');
var Observable = require('FuseJS/Observable');

var loca_id = Observable(1);
var loca_name = Observable();
var loca_info = Observable();
var loca_img = Observable();

var food_id = Observable(1);
var food_name = Observable();
var food_info = Observable();
var food_img = Observable();

loca_name.value = location[loca_id.value].name;
loca_info.value = location[loca_id.value].info;
loca_img.value = location[loca_id.value].img;

food_name.value = food[food_id.value].name;
food_info.value = food[food_id.value].info;
food_img.value = food[food_id.value].img;

function location_click(e) {
	loca_id.value = e.data.id;
	loca_name.value = location[loca_id.value].name;
	loca_info.value = location[loca_id.value].info;
	loca_img.value = location[loca_id.value].img;
	InterApp.launchUri("https://naver.com");
};
function food_click(e) { 
	food_id.value = e.data.id;
	food_name.value = food[food_id.value].name;
	food_info.value = food[food_id.value].info;
	food_img.value = food[food_id.value].img;
};
function food_mark(){
	console.log("https://tour.daegu.go.kr/kor/contents.do?IDX=54&seIDX=27&grIDX=6");
	InterApp.launchUri("https://tour.daegu.go.kr/kor/contents.do?IDX=54&seIDX=27&grIDX=6");
};
function loca_mark(){
	console.log("https://tour.daegu.go.kr/kor/contents.do?IDX=19&seIDX=19&grIDX=4");
	InterApp.launchUri("https://tour.daegu.go.kr/kor/contents.do?IDX=19&seIDX=19&grIDX=4");
};
module.exports = { 
	loca_id : loca_id,
	loca_name: loca_name,
	loca_info: loca_info,
	loca_img: loca_img,
	loca_image: loca_image,
	food_id : food_id,
	food_name: food_name,
	food_info: food_info,
	food_img: food_img,
	food_image:food_image,
	location_click,
	food_click,
	food_mark,
	loca_mark
};
