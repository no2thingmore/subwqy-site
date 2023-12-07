// type 종류 :
// 1: 사이트&앱이용, 2: 서브카드&포인트, 3: 제품, 4: 매장이용

const FaQ_List = [
    {
        id: 1,
        type: 1,
        title: '실명 정보(이름, 생년월일 등)를 수정하고 싶습니다.',
        text: `개명, 주민등록번호 발급·수정 등의 이유로 실명 정보(이름, 생년월일, 성별)가 변경된 경우에 한하여
        정보 변경이 완료된 본인 명의 휴대폰으로 본인인증하여 직접 수정할 수 있습니다.
        단, 이름/생년월일/개인고유식별정보(암호화된 동일인식별정보) 중 일치하는 정보가 있어야 수정이 가능하며,
        타인의 정보로는 수정할 수 없습니다.`,
    },
    {
        id: 2,
        type: 2,
        title: '포인트는 무엇이고 어떻게 적립ㆍ사용하나요?',
        text: `앱 사용이 가능한 매장이라면 어느 매장에서든 앱 주문 및 매장 주문 시에 적립ㆍ사용하실 수 있는 통합 포인트 서비스이며,
        써브웨이 앱 또는 홈페이지를 통해 회원가입하시면, 서비스를 이용하실 수 있습니다.`,
    },
    {
        id: 3,
        type: 2,
        title: '서브카드란 무엇이고 어떻게 충전ㆍ사용하나요?',
        text: `써브카드란 써브웨이에서 사용할 수 있는 모바일 선불 카드로 회원 가입 후 자동 발급됩니다.

        앱ㆍ홈페이지의 "MY-SUB → 써브카드→충전하기"를 통해 충전하시거나, 앱이 사용가능한 매장에서
        써브카드 충전을 요청하여 앱의 QR코드를 리딩 및 충전 금액을 기타 결제 수단으로 결제하여 사용하실 수 있습니다.`,
    },
    {
        id: 4,
        type: 2,
        title: 'e-Gift는 무엇인가요?',
        text: `e-Gift란 모바일 써브카드를 선물 할 수 있는 서비스입니다.
        최소 5,000원부터 최대 5만원까지 선물하기가 가능합니다.
        e-Gift를 선물 받으시는 분은 문자 혹은 카카오톡을 통해 등록 url을 받게 되시고,
        써브웨이 앱을 통해 선물받으신 e-Gift를 등록 후 사용하실 수 있습니다.`,
    },
    {
        id: 5,
        type: 2,
        title: '오프라인 구매 시 포인트 적립을 하지 못했습니다. 추후 적립이 가능한가요?',
        text: `현장 적립을 하지 못하신 경우, 구매일로부터 7일 이내로 영수증을 지참하여 구매 매장에 방문하시면 추후 적립을 받으실 수 있습니다.
        (예) 7월 1일 구매 시 7월 8일까지 추후적립 가능`,
    },
    {
        id: 6,
        type: 2,
        title: '서브카드 잔액을 환불하고 싶습니다.',
        text:`써브카드의 잔액 환불은 아래와 같이 진행할 수 있습니다.
        • PC 홈페이지: 로그인 후 화면 우측 상단의 "MY-SUB→써브카드→카드관리→환불신청" 선택 후 환불신청사이트에서
        환불 신청금액, 환불 신청 계좌 정보 기입 후 제출
        • 모바일 앱: "MY-SUB→써브카드→환불" 선택 후 환불신청사이트에서 환불 신청금액, 환불 신청 계좌 정보 기입 후 제출`,
    },
    {
        id: 7,
        type: 2,
        title: '서브카드를 충전하려면 어떻게 해야 하나요?',
        text:`써브카드 충전은 각 매장 및 온라인(모바일 앱, 웹사이트)에서 100원 단위로 1회 최소 5천원 최대 10만원까지 충전이 가능합니다.

        홈페이지: 로그인 후 홈페이지 상단의 "MY-SUB → 써브카드→충전하기"에서 써브카드 충전을 하실 수 있습니다.
        앱: 로그인 후 좌측 메인 메뉴 내의 "MY-SUB→써브카드→ 충전하기"에서 써브카드 충전을 하실 수 있습니다.`,
    },
    {
        id: 8,
        type: 2,
        title: '오프라인 구매 시에도 포인트 적립 및 사용이 가능한가요?',
        text:`네, 앱 사용이 가능한 매장에서 구매하신 경우 포인트 적립 및 사용이 가능합니다.

        (1) 포인트 적립: 주문 후 결제 시 포인트 충전을 요청하시고, 써브웨이 앱의 QR코드를 리딩 또는
        가입하신 휴대폰 번호를 말씀 해주시면 구매 금액에 대한 포인트를 적립받으실 수 있습니다.
        (2) 포인트 사용: 결제 시 포인트 사용을 요청하시고, 써브웨이 앱의 QR코드를 리딩하여 포인트로 결제하실 수 있습니다.`,
    },
    {
        id: 9,
        type: 1,
        title: '온라인 주문이 가능한가요?',
        text:`써브웨이 회원이라면 홈페이지 상단의 "온라인 주문 → FAST-SUB / HOME-SUB"또는
        써브웨이 앱을 통해 온라인 주문서비스를 이용하실 수 있습니다.

        온라인 주문 서비스는 매장에서 픽업할 수 있는 "FAST-SUB"과 딜리버리 서비스인 "HOME-SUB"이 준비되어 있습니다.
        다만, 일부 매장에 한해 서비스 이용이 어려울 수 있으며, 서비스 이용 불가 매장은
        "새소식 → 뉴스ㆍ공지사항 → 써브웨이 앱 출시 및 앱 사용 불가 매장 안내"에서 확인하실 수 있습니다.`,
    },
    {
        id: 10,
        type: 1,
        title: '서브웨이 앱은 어떤 서비스를 제공하나요?',
        text:`써브웨이 앱은 HOME-SUB(배달주문), FAST-SUB(매장 선주문), 써브카드(선불카드), 멤버십 포인트, 선물하기 등
        써브웨이를 보다 빠르고 편리하게 이용할 수 있는 써브웨이의 공식 애플리케이션입니다.`,
    },
    {
        id: 11,
        type: 1,
        title: '회원 정보 입력 시 이메일 주소를 잘못 입력했습니다. 어디에서 변경할 수 있나요?',
        text:`회원 가입 시 입력하신 이메일 주소는 고객님의 고유 ID로 변경이 불가한 항목입니다.
        다만 기존에 사용되고 있거나, 탈퇴한 아이디로의 변경은 불가하며, 단순 변심으로 인한 메일 주소 변경은 불가합니다.
        또한 변경까지 수 일이 소요될 수 있는 점 양해 부탁드립니다.`,
    },
    {
        id: 12,
        type: 1,
        title: '비밀번호를 분실했습니다.',
        text:`로그인 창에서 '비밀번호 찾기'를 통해 본인 인증 후 비밀번호를 재설정 하실 수 있습니다.`,
    },
    {
        id: 13,
        type: 2,
        title: '회원 탈퇴를 하고 싶어요.',
        text:`아래 메뉴를 통해 회원 탈퇴를 하실 수 있습니다.
        - 웹사이트: 로그인 후 홈페이지 상단의 "MY-SUB → 회원정보변경→회원탈퇴"
        - 앱: 로그인 후 "MY-SUB →화면의 본인 이름→페이지 하단의 회원탈퇴"
        회원 탈퇴 후 7일간 재가입이 제한되며, 잔여 포인트는 모두 소멸됩니다.`,
    },
]

export default FaQ_List