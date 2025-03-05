import {
  createRouter,
  createWebHistory
} from "vue-router";
import Main from "@/views/Main.vue";
import Account from "@/views/Account.vue";
import MainBlank from "../components/Main_Blank.vue";
import MainSlide from "../components/Main_Slide.vue";
import MainList from "../components/Main_List.vue";
import MainGrid from "../components/Main_Grid.vue";
import MainQR from "../components/Qrcode.vue"
import AccountView from "../components/Account_View.vue";
import passwordOG from "../components/Account_Pwd_OG.vue";
import pwdChange from "../components/Account_Pwd_Change.vue";
import inquiry from "../components/Account_Inquiry.vue";
import modify from "../components/Account_Modify.vue";
import GuideView from "@/views/Guide.vue";
import Guide from "../components/Guide.vue";
import joinview from "@/views/Join.vue";
import Login from "../components/Join_Login.vue"
import Nickname from "../components/Join_Nickname.vue"
import Email from "../components/Join_Email.vue"
import Password from "../components/Join_Password.vue"
import PwdConfirm from "../components/Join_PwdConfirm.vue"
import Terms from "../components/Join_Terms.vue"
import Notify from "@/views/Notify.vue";
import NotifyList from "../components/Notify_List.vue";
import NotifyText from "../components/Notify_Text.vue";
import QRView from "@/views/QR.vue";
import Album from "@/views/Album.vue";
import AlbumTop from "@/components/Album_Top.vue";
import AlbumTrack from "@/components/Album_Track.vue";
import AlbumVideo from "@/components/Album_Video.vue";
import AlbumPic from "@/components/Album_Pic.vue";
import Player from "@/components/Player.vue";
import MP from "@/components/Main_Player.vue";


const routes = [{
    path: "/",
    name: "Main",
    component: Main,
    children: [{
        path: '',
        name: "앨범없음",
        component: MainBlank,
      },
      {
        path: 'slide',
        name: "앨범슬라이드",
        component: MainSlide,
      },
      {
        path: 'list',
        name: "앨범리스트",
        component: MainList,
      },
      {
        path: 'grid',
        name: "앨범그리드",
        component: MainGrid,
      },

    ]
  },
  {
    path: "/",
    name: "QR",
    component: QRView,
    children: [{
      path: 'QR',
      name: "QR화면",
      component: MainQR,
    }]
  },
 {
   path: "/player",
   name: "Player",
   component: Player,
   props: (route) => ({
     track: route.params.track ? JSON.parse(decodeURIComponent(route.params.track)) : null
   }),
 },
  {
    path: "/album",
    name: "album",
    component: Album,
    props: (route) => ({
      cardData: route.params.cardData
    }),
    children: [{
        path: 'track',
        name: "트랙",
        component: AlbumTrack,
      },
      {
        path: 'video',
        name: "영상",
        component: AlbumVideo,
      },
      {
        path: 'pic',
        name: "사진",
        component: AlbumPic,
      },
    ],
  },
  {
    path: "/guide",
    name: "가이드",
    component: GuideView,
    children: [{
      path: 'main',
      name: "가이드",
      component: Guide,
    }]
  },
  {
    path: "/notify",
    name: "알림",
    component: Notify,
    children: [{
        path: 'list',
        name: "알림목록",
        component: NotifyList,
      },
      {
        path: 'board/:id',
        name: '알림글',
        component: NotifyText,
      }
    ]
  },
  {
    path: "/join",
    name: "회원가입",
    component: joinview,
    children: [{
        path: 'login',
        name: "로그인",
        component: Login,
      },
      {
        path: 'Nickname',
        name: "가입-닉네임",
        component: Nickname,
      },
      {
        path: 'Email',
        name: "가입-이메일",
        component: Email,
      },
      {
        path: 'Password',
        name: "가입-비밀번호",
        component: Password,
      },
      {
        path: 'PwdConfirm',
        name: "가입-비밀번호확인",
        component: PwdConfirm,
      },
      {
        path: 'Terms',
        name: "가입-약관",
        component: Terms,
      },
    ]
  },
  {
    path: "/MP",
    name: "MainPlayer",
    component: MP,
  },
  {
    path: "/account",
    name: "회원정보",
    component: Account,
    children: [{
        path: 'accountview',
        name: "회원정보",
        component: AccountView,
      },
      {
        path: 'passwordOG',
        name: "기존 비밀번호",
        component: passwordOG,
      },
      {
        path: 'pwdChange',
        name: "비밀번호 변경",
        component: pwdChange,
      },
      {
        path: 'inquiry',
        name: "1:1 문의",
        component: inquiry,
      },
      {
        path: 'modify',
        name: "회원정보 수정",
        component: modify,
      },

    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // Scroll to the top of the page
  next();
});

export default router;