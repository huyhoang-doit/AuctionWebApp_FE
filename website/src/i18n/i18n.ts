
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home_En from '.././locales/en/Home.json'
import Home_Vi from '.././locales/vi/Home.json'
import Footer_En from '.././locales/en/Footer.json'
import Footer_Vi from '.././locales/vi/Footer.json'
import PageSendJewelry_En from '.././locales/en/PageSendJewelry.json'
import PageSendJewelry_Vi from '.././locales/vi/PageSendJewelry.json'
import Contact_En from '.././locales/en/Contact.json'
import Contact_Vi from '.././locales/vi/Contact.json'
import MyAccountStaff_En from '.././locales/en/MyAccountStaff.json'
import MyAccountStaff_Vi from '.././locales/vi/MyAccountStaff.json'
import MyAccount_En from '.././locales/en/MyAccount.json'
import MyAccount_Vi from '.././locales/vi/MyAccount.json'
import MyAccountDetail_En from '.././locales/en/MyAccountDetail.json'
import MyAccountDetail_Vi from '.././locales/vi/MyAccountDetail.json'
import Modal_En from '.././locales/en/Modal.json'
import Modal_Vi from '.././locales/vi/Modal.json'
import ChangePassword_En from '.././locales/en/ChangePassword.json'
import ChangePassword_Vi from '.././locales/vi/ChangePassword.json'
import TransactionHistory_En from '.././locales/en/TransactionHistory.json'
import TransactionHistory_Vi from '.././locales/vi/TransactionHistory.json'
import MyJewellryList_En from '.././locales/en/MyJewellryList.json'
import MyJewellryList_Vi from '.././locales/vi/MyJewellryList.json'
import MyBidHistoryList_Vi from '.././locales/vi/MyBidHistoryList.json'
import MyBidHistoryList_En from '.././locales/en/MyBidHistoryList.json'
import MyJewelryRequestList_En from '.././locales/en/MyJewelryRequestList.json'
import MyJewelryRequestList_Vi from '.././locales/vi/MyJewelryRequestList.json'
import Login_En from '.././locales/en/Login.json'
import Login_Vi from '.././locales/vi/Login.json'
import Register_En from '.././locales/en/Register.json'
import Register_Vi from '.././locales/vi/Register.json'
import About_En from '.././locales/en/About.json'
import About_Vi from '.././locales/vi/About.json'
import Components_En from '.././locales/en/Components.json'
import Components_Vi from '.././locales/vi/Components.json'
import Staff_En from '.././locales/en/Staff.json'
import Staff_Vi from '.././locales/vi/Staff.json'
import Hooks_En from '.././locales/en/Hooks.json'
import Hooks_Vi from '.././locales/vi/Hooks.json'
import AuctionDetail_En from '.././locales/en/AuctionDetail.json'
import AuctionDetail_Vi from '.././locales/vi/AuctionDetail.json'
export const locales = {
  en: 'English',
  vi: 'Tiếng Việt',
}

const resources = {
  en: {

   home: Home_En,  //home is the namespace
   footer: Footer_En,
   PageSendJewelry: PageSendJewelry_En,
   Contact : Contact_En,
   MyAccountStaff: MyAccountStaff_En,
   MyAccount: MyAccount_En,
   MyAccountDetail: MyAccountDetail_En,
   Modal : Modal_En,
   ChangePassword : ChangePassword_En,
   TransactionHistory: TransactionHistory_En,
   MyJewellryList: MyJewellryList_En,
    MyBidHistoryList: MyBidHistoryList_En,
    MyJewelryRequestList : MyJewelryRequestList_En,
    Login: Login_En,
    Register: Register_En,
    About : About_En,
    Components : Components_En,
    Staff : Staff_En,
    Hooks : Hooks_En,
    AuctionDetail : AuctionDetail_En

  },
  vi: {
    home: Home_Vi,
    footer: Footer_Vi,
    PageSendJewelry: PageSendJewelry_Vi,
    Contact: Contact_Vi,
    MyAccountStaff: MyAccountStaff_Vi,
    MyAccount: MyAccount_Vi,
    MyAccountDetail: MyAccountDetail_Vi,
    MyBidHistoryList: MyBidHistoryList_Vi,
    Login: Login_Vi,
    Modal : Modal_Vi,
    ChangePassword : ChangePassword_Vi,
    TransactionHistory: TransactionHistory_Vi,
    MyJewellryList: MyJewellryList_Vi,
    MyJewelryRequestList : MyJewelryRequestList_Vi,
    Register: Register_Vi,
    About : About_Vi,
    Components : Components_Vi,
    Staff : Staff_Vi,
    Hooks : Hooks_Vi,
    AuctionDetail : AuctionDetail_Vi
   
   


  },
};

const defaultNS = 'home'; //khong truyen namespace thi se lay defaultNS


i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // ngôn ngữ mặc định
  ns: ['home', 'footer', 'PageSendJewelry', 'Contact','MyAccountStaff',' MyAccount','MyAccountDetail','Modal','ChangePassword','TransactionHistory','MyJewellryList','MyBidHistoryList','MyJewelryRequestList','Login','Register','About','Components','Staff','Hooks','AuctionDetail'], // thêm namespace vào đây
//   fallbackLng: "vi", // nếu không nhận được ngôn ngữ nào thì mặc định là tiếng Việt
defaultNS, //thay fallbackLng
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
