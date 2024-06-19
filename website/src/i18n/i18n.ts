
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
   TransactionHistory: TransactionHistory_En

  },
  vi: {
    home: Home_Vi,
    footer: Footer_Vi,
    PageSendJewelry: PageSendJewelry_Vi,
    Contact: Contact_Vi,
    MyAccountStaff: MyAccountStaff_Vi,
    MyAccount: MyAccount_Vi,
    MyAccountDetail: MyAccountDetail_Vi,

    Modal : Modal_Vi,
    ChangePassword : ChangePassword_Vi,
    TransactionHistory: TransactionHistory_Vi


  },
};

const defaultNS = 'home'; //khong truyen namespace thi se lay defaultNS


i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // ngôn ngữ mặc định
  ns: ['home', 'footer', 'PageSendJewelry', 'Contact','MyAccountStaff',' MyAccount','MyAccountDetail','Modal','ChangePassword','TransactionHistory'], // thêm namespace vào đây
//   fallbackLng: "vi", // nếu không nhận được ngôn ngữ nào thì mặc định là tiếng Việt
defaultNS, //thay fallbackLng
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
