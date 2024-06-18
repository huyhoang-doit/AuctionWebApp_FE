
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Home_En from '.././locales/en/home.json'
import Home_Vi from '.././locales/vi/home.json'
import Footer_En from '.././locales/en/Footer.json'
import Footer_Vi from '.././locales/vi/Footer.json'
import PageSendJewelry_En from '.././locales/en/PageSendJewelry.json'
import PageSendJewelry_Vi from '.././locales/vi/PageSendJewelry.json'
import Contact_En from '.././locales/en/Contact.json'
import Contact_Vi from '.././locales/vi/Contact.json'
import MyAccountStaff_En from '.././locales/en/MyAccountStaff.json'
import MyAccountStaff_Vi from '.././locales/vi/MyAccountStaff.json'
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
   MyAccountStaff: MyAccountStaff_En
  },
  vi: {
    home: Home_Vi,
    footer: Footer_Vi,
    PageSendJewelry: PageSendJewelry_Vi,
    Contact : Contact_Vi,
    MyAccountStaff: MyAccountStaff_Vi

  },
};

const defaultNS = 'home'; //khong truyen namespace thi se lay defaultNS

i18n.use(initReactI18next).init({
  resources,
  lng: "vi", // ngôn ngữ mặc định
  ns: ['home', 'footer', 'PageSendJewelry', 'Contact','MyAccountStaff'], // thêm namespace vào đây
//   fallbackLng: "vi", // nếu không nhận được ngôn ngữ nào thì mặc định là tiếng Việt
defaultNS, //thay fallbackLng
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
