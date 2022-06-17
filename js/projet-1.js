import { disableRightClick } from "./utils/disable-right-click.js";
import { projectsData } from "./utils/data.js";
import { contentLayout } from "./utils/scroll-layout.js";
import { navLayout } from "./utils/nav-scroll-layout.js";
import { createSpreads } from "./utils/spreads-layout.js";
import { switchLayer } from "./utils/switch-layer.js";
import { randomContentLayout } from "./utils/random-scroll-layout.js";

const projectData = projectsData[projectsData.length - 1];
const contentSelector = document.querySelector(".content--projet-1");
const navSelector = document.querySelector(".content__nav");

disableRightClick();

function createContent() {
    contentLayout(projectData.id, projectData.projectItems, contentSelector);
    navLayout(projectData.id, projectData.projectItems, navSelector);
}

function createRandom() {
    randomContentLayout(
        projectData.id,
        projectData.projectItems,
        contentSelector
    );
    navLayout(projectData.id, projectData.projectItems, navSelector);
}

function createInfo() {
    const infoData = [
        {
            position: "48.88268, 2.34225",
            adress: "96, Boulevard de Rochechouart, 75018 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497321163!6m8!1m7!1sb7v-II7VFYiWglgT8qe7kA!2m2!1d48.88263714498765!2d2.342309659291914!3f45.65!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86548, 2.35658",
            adress: "57, Rue de Turbigo, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498697439!6m8!1m7!1shb306mBsm5_o6Ke_pSRfzA!2m2!1d48.86556735403527!2d2.356550641354059!3f134!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85688, 2.35438",
            adress: "48, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497752201!6m8!1m7!1s-cFZH64ny4L93RrzVrw2sA!2m2!1d48.85684856888626!2d2.3543893334116!3f65.6!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86084, 2.34843",
            adress: "4, Rue Berger, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155025532!6m8!1m7!1s7objXD1th4th-y4DouPaxw!2m2!1d48.86079852914391!2d2.348586489545461!3f299.47!4f-1.0300000000000011!5f0.7820865974627469",
        },
        {
            position: "48.85851, 2.34229",
            adress: "2, Quai du Louvre, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497290871!6m8!1m7!1skeC2wTPzcK8j1zChAOj_Jw!2m2!1d48.85851150023841!2d2.342353257917788!3f21.72!4f-2.8499999999999943!5f0.7820865974627469",
        },
        {
            position: "48.88337, 2.35924",
            adress: "218, Rue du Faubourg Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497040591!6m8!1m7!1sUlFBrkGuUq2sGj1TT-jY1A!2m2!1d48.88344067336971!2d2.359213868266811!3f324.17!4f-1.6599999999999966!5f0.7820865974627469",
        },
        {
            position: "48.8894, 2.37168",
            adress: "2, Rue Archereau, 75019 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653154955011!6m8!1m7!1sP2lHzYrHzNnnRGhUfvAimQ!2m2!1d48.88935805082123!2d2.371532970769042!3f312.4!4f5.8799999999999955!5f0.7820865974627469",
        },
        {
            position: "48.85971, 2.34476",
            adress: "128, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498041395!6m8!1m7!1snsZipgCRIU8COdiieZK83A!2m2!1d48.85964145898221!2d2.344821782985563!3f351.15!4f0!5f0.7820865974627469",
        },
        {
            position: "48.87319, 2.29779",
            adress: "152, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155224910!6m8!1m7!1spBwZV8rNpLK6pzxOIuX-OA!2m2!1d48.87332721263161!2d2.297581518767658!3f274.14!4f-2.8900000000000006!5f0.7820865974627469",
        },
        {
            position: "48.86757, 2.32565",
            adress: "152, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498381983!6m8!1m7!1sjkqE_0AW_6CvYVmQenqi7g!2m2!1d48.86756853233044!2d2.325771161366632!3f204.53!4f-0.37999999999999545!5f0.7820865974627469",
        },
        {
            position: "48.85783, 2.35051",
            adress: "80, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497895835!6m8!1m7!1s2IjoBvYH-C8GmUG8oI7nJw!2m2!1d48.85793498631077!2d2.350173163021927!3f59.18!4f-9.170000000000002!5f0.7820865974627469",
        },
        {
            position: "48.86866, 2.36314",
            adress: "2, Rue Léon Jouhaux, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497235967!6m8!1m7!1sK2MlOoAOF0kcQJsvlK1Zqg!2m2!1d48.86863608785588!2d2.363222367333856!3f351.79!4f-4.230000000000004!5f0.7820865974627469",
        },
        {
            position: "48.8584, 2.34878",
            adress: "92, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497930788!6m8!1m7!1smm2zwn4F3SNf5NzIF_XCfg!2m2!1d48.85839763276787!2d2.348732393052732!3f358.13!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85876, 2.34769",
            adress: "102, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497959920!6m8!1m7!1sx664eEyJ-8Ci8CiXtb8O4Q!2m2!1d48.85878131809699!2d2.347604160462104!3f104.66!4f0!5f0.7820865974627469",
        },
        {
            position: "48.88372, 2.34792",
            adress: "26, Boulevard de Rochechouart, 75018",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497305357!6m8!1m7!1sSek3JNGs3cKgodRLlYi1Vw!2m2!1d48.88368454244862!2d2.347954312648894!3f9.04!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86243, 2.35407",
            adress: "43, Rue Beaubourg, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653154971342!6m8!1m7!1sTOy5EVJfasIk8a9QxtHq0w!2m2!1d48.86239846650108!2d2.354137477937623!3f299.3!4f6.409999999999997!5f0.7820865974627469",
        },
        {
            position: "48.87384, 2.32834",
            adress: "55, Rue de Caumartin, 75009 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155132658!6m8!1m7!1seO7u0hGBWqpqLkprgvW6BA!2m2!1d48.87378577850461!2d2.328368207342991!3f328.51!4f-1.230000000000004!5f0.7820865974627469",
        },
        {
            position: "48.86961, 2.3534",
            adress: "20, Boulevard Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498245051!6m8!1m7!1sLjsAL3PxhHN21aMpQCvpUw!2m2!1d48.86948221396756!2d2.353405672088032!3f358.82!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86971, 2.35288",
            adress: "28, Boulevard Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498257389!6m8!1m7!1sGznNjpHHVv90lBWH38Z4fg!2m2!1d48.86979083819411!2d2.352958352529339!3f228.71!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85895, 2.34707",
            adress: "104, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497973541!6m8!1m7!1szf1RctUnjVJHGXX-PK6XzQ!2m2!1d48.8589270430252!2d2.347075082835281!3f33.42!4f0!5f0.7820865974627469",
        },
        {
            position: "48.88628, 2.38176",
            adress: "123, Rue de Crimée, 75019 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155427100!6m8!1m7!1s2OAWUFsPDQqbA45rTWrF2A!2m2!1d48.88625016476028!2d2.381844782091901!3f270.64!4f-1.1599999999999966!5f0.7820865974627469",
        },
        {
            position: "48.86436, 2.3293",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498585384!6m8!1m7!1snYDXcNCCphaVriDbyr10BA!2m2!1d48.86434650378968!2d2.329298961508127!3f25.71!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85834, 2.34898",
            adress: "90, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497913588!6m8!1m7!1so3TYSogY7N4kxi8BPghvpg!2m2!1d48.85830907233996!2d2.349003738214872!3f9.02!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85146, 2.37567",
            adress: "97, Rue du Faubourg Saint-Antoine, 75011 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653496967060!6m8!1m7!1s-hQyM48M-drglSII1NbMkg!2m2!1d48.85140379039399!2d2.375714789721039!3f47.34!4f-2.930000000000007!5f0.7820865974627469",
        },
        {
            position: "48.86183, 2.33389",
            adress: "Place du Carrousel, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155103518!6m8!1m7!1sCAoSLEFGMVFpcE5INHlPd2k1dGhSU21hMVlMWF9tTFNYQlhHRER0enR4eHlhMzVs!2m2!1d48.86183444141783!2d2.333967356467709!3f2.21!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86263, 2.34736",
            adress: "112, Rue Rambuteau, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497489142!6m8!1m7!1sbL7turwIasNAqdw6FXRmqg!2m2!1d48.86264380383!2d2.34733710469895!3f81.67!4f0!5f0.7820865974627469",
        },
        {
            position: "48.88831, 2.37579",
            adress: "12, Rue Riquet, 75019 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497558478!6m8!1m7!1s5iDVJgNETJ9s5bQuSDaNhw!2m2!1d48.88828467893169!2d2.375864749377187!3f112.75!4f-0.18000000000000682!5f0.7820865974627469",
        },
        {
            position: "48.8575, 2.3517",
            adress: "70, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497794840!6m8!1m7!1szX85jMAh_grmHjjunHr1nA!2m2!1d48.85746519550727!2d2.351526363629139!3f25.2!4f0.8299999999999983!5f0.7820865974627469",
        },
        {
            position: "48.85909, 2.34667",
            adress: "110, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498016697!6m8!1m7!1sPNkxZ6KU9nIV9ghVtbJ5mQ!2m2!1d48.85909138871273!2d2.346578509325412!3f66.28!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86006, 2.34367",
            adress: "134, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498084415!6m8!1m7!1setx8LTjeNCA3RTSqBcCbHg!2m2!1d48.86003093710765!2d2.343671553323301!3f26.64!4f0!5f0.7820865974627469",
        },
        {
            position: "48.8589, 2.34735",
            adress: "1, Rue des Halles, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497134056!6m8!1m7!1s6j4QAPje5HcJlUyosS1s2w!2m2!1d48.85879489855365!2d2.347453725171229!3f354.46!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86867, 2.32362",
            adress: "20, Rue Royale, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498218047!6m8!1m7!1sNC7dg1de7l4cIyIntSRgsw!2m2!1d48.86874384180005!2d2.323385656872561!3f73.82!4f-2.1500000000000057!5f0.7820865974627469",
        },
        {
            position: "48.87239, 2.3561",
            adress: "36, Boulevard de Strasbourg, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498518603!6m8!1m7!1smIo_5BDSJWy8T7C9sohEwQ!2m2!1d48.8724360693145!2d2.356025476783204!3f109.81!4f-2.4200000000000017!5f0.7820865974627469",
        },
        {
            position: "48.86078, 2.34475",
            adress: "22, Rue du Pont Neuf, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497426424!6m8!1m7!1sUmE8Vm5j1y9ur8LgLoyevA!2m2!1d48.86085082061883!2d2.344735948279112!3f62.35!4f-1.7999999999999972!5f0.7820865974627469",
        },
        {
            position: "48.86113, 2.34036",
            adress: "156, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498158987!6m8!1m7!1sj2Sw-vNz3tltr7FWf40W3Q!2m2!1d48.86105202420188!2d2.340608621792216!3f349.94!4f-3.5999999999999943!5f0.7820865974627469",
        },
        {
            position: "48.86131, 2.34794",
            adress: "4, Rue Pierre Lescot, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497396283!6m8!1m7!1s2JOp9uOhboLB_rT8yEmPOA!2m2!1d48.8613685226915!2d2.347927783540979!3f325.33!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86454, 2.32871",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498630832!6m8!1m7!1s9YSZgWesfduzx-q_dqV4Lw!2m2!1d48.86456632133553!2d2.328608590346159!3f292.17!4f-0.9099999999999966!5f0.7820865974627469",
        },
        {
            position: "48.86949, 2.35396",
            adress: "14, Boulevard Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498229653!6m8!1m7!1slLSbRsrLzFWMzbZz3oG_nw!2m2!1d48.86934654478842!2d2.353970312754547!3f51.29!4f1.3799999999999955!5f0.7820865974627469",
        },
        {
            position: "48.86169, 2.33349",
            adress: "Place du Carrousel, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155096226!6m8!1m7!1sCAoSLEFGMVFpcE82SFpWMW93YWNSS0Q4UFVKT2RoRnRjdk5kZGZGbHVRdUgtcWpZ!2m2!1d48.86170509181982!2d2.333570303580399!3f17.45!4f2.780000000000001!5f0.7820865974627469",
        },
        {
            position: "48.85845, 2.34868",
            adress: "94, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497946565!6m8!1m7!1sXzvVJTm6Ws-adBC-bV0bYQ!2m2!1d48.85844014453683!2d2.348598675498156!3f41.97!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86314, 2.33418",
            adress: "182, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498174183!6m8!1m7!1spzRtM5Lc6jdrLe84pOhhRQ!2m2!1d48.86314017727901!2d2.334155557778427!3f56.75!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85945, 2.35776",
            adress: "56, Rue des Francs Bourgeois, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497116748!6m8!1m7!1s-1WzVmblyk-Fs62IUWUZ8g!2m2!1d48.85945250933229!2d2.357764711691442!3f140.07!4f-5.439999999999998!5f0.7820865974627469",
        },
        {
            position: "48.8645, 2.32884",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498613057!6m8!1m7!1smVsRKiUHHEB0XRGDCmaOMQ!2m2!1d48.86462561167587!2d2.328426684652514!3f63.05!4f0!5f0.7820865974627469",
        },
        {
            position: "48.87651, 2.35601",
            adress: "127, Rue du Faubourg Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497025564!6m8!1m7!1sY0YOxLBvMTiHhGM4UKEuKQ!2m2!1d48.87656188161209!2d2.356075163771556!3f337.29!4f-2.7099999999999937!5f0.7820865974627469",
        },
        {
            position: "48.87363, 2.32857",
            adress: "62, Boulevard Haussmann, 75009 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497159503!6m8!1m7!1sdECUOTKhMwHS3RV3skSrKA!2m2!1d48.87352209773577!2d2.328617715967741!3f4.19!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86476, 2.32785",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498665252!6m8!1m7!1s_DsRspzy1bDDPmHQOpU3hg!2m2!1d48.86487362961851!2d2.327606224315089!3f16.16!4f-2.489999999999995!5f0.7820865974627469",
        },
        {
            position: "48.86855, 2.35525",
            adress: "355, Rue Saint-Martin, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498407833!6m8!1m7!1sDEQAjZfpD3-hUKljcTD_yg!2m2!1d48.86868341223668!2d2.35541591191753!3f352.65!4f-0.010000000000005116!5f0.7820865974627469",
        },
        {
            position: "48.87416, 2.33271",
            adress: "31, Rue de la Chaussée d'Antin, 75009 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155352717!6m8!1m7!1sJjMIWcSgmlcOykbjZ2JnIw!2m2!1d48.87409235298095!2d2.332817209671023!3f271.67!4f-4.340000000000003!5f0.7820865974627469",
        },
        {
            position: "48.86197, 2.33424",
            adress: "Place du Carrousel, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155113320!6m8!1m7!1sCAoSLEFGMVFpcE1ndkM5a1FvQkpFMW5MbnRoRlltSWtKUE5NMTc1dk9MeDFESWlm!2m2!1d48.86203976093467!2d2.334422035214163!3f299.02!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86411, 2.35035",
            adress: "18, Rue de Turbigo, 75002 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498684654!6m8!1m7!1sJkuT85C_X9nwCUfTNeHX2g!2m2!1d48.86423895183167!2d2.35046710666289!3f91.69!4f0.8400000000000034!5f0.7820865974627469",
        },
        {
            position: "48.85763, 2.35131",
            adress: "72, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497823537!6m8!1m7!1stboeFsXix54dBTxm_Xogmw!2m2!1d48.85756474636295!2d2.351368295622!3f342.28!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86504, 2.32139",
            adress: "Place de la Concorde, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155410861!6m8!1m7!1sMIS8yrMFllRXmiWRRrq62Q!2m2!1d48.86519283813067!2d2.321323153533863!3f114.66!4f0.20999999999999375!5f0.7820865974627469",
        },
        {
            position: "48.86059, 2.36187",
            adress: "109, Rue Vieille du Temple, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498739790!6m8!1m7!1s9nkFW_3Z7JYrb2ltapu76A!2m2!1d48.86058930339043!2d2.361929692651944!3f319.06!4f-6.299999999999997!5f0.4000000000000002",
        },
        {
            position: "48.86249, 2.34799",
            adress: "100, Rue Rambuteau, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497477664!6m8!1m7!1sC0rCOx0QGY3gnoW0BkiqAg!2m2!1d48.86245469112413!2d2.34801218083657!3f339.66!4f-1.2099999999999937!5f0.7820865974627469",
        },
        {
            position: "48.8668, 2.31727",
            adress: "10, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155147012!6m8!1m7!1suE2U3bbgp_la2RxzfofhfA!2m2!1d48.86673346851974!2d2.317330361789695!3f3.28!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86418, 2.32982",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498573578!6m8!1m7!1s6iobB4hXJ1PmFGnJSQYERA!2m2!1d48.86419410762677!2d2.32979274454172!3f80.51!4f-3.7900000000000063!5f0.7820865974627469",
        },
        {
            position: "48.87761, 2.38135",
            adress: "26, Rue Botzaris, 75019 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155044358!6m8!1m7!1szBy_GY6s6niIZt9KjeJGBg!2m2!1d48.87766914543722!2d2.381419628860729!3f182.88!4f-1.1400000000000006!5f0.7820865974627469",
        },
        {
            position: "48.85697, 2.35985",
            adress: "14, Rue des Rosiers, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498201141!6m8!1m7!1sqoPCFKsBctgfzEKOJRyKJw!2m2!1d48.85698964894843!2d2.359804075828229!3f20.76!4f-7.739999999999995!5f0.7820865974627469",
        },
        {
            position: "48.85242, 2.33934",
            adress: "130, Boulevard Saint-Germain, 75006 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498301247!6m8!1m7!1sPVWMNivxo5kVyvSEG1PdIw!2m2!1d48.85236054355506!2d2.339372068057937!3f24.29!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86109, 2.34878",
            adress: "57, Rue Saint-Denis, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498269145!6m8!1m7!1swDUA5VudiLFpAaw5ThFGaA!2m2!1d48.86113746934785!2d2.34881046978932!3f9.99!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86071, 2.34875",
            adress: "9, Rue Berger, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155035652!6m8!1m7!1shmB-F528ApqaLRF8YD7vBg!2m2!1d48.86069225824451!2d2.348957953828468!3f166.66!4f-0.2600000000000051!5f0.7820865974627469",
        },
        {
            position: "48.85867, 2.348",
            adress: "98, Place du Châtelet, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155345036!6m8!1m7!1s9rlmGmYFcgCYsgp6v0VovQ!2m2!1d48.85862847676538!2d2.348022089216675!3f90.85!4f1.8400000000000034!5f0.7820865974627469",
        },
        {
            position: "48.86216, 2.35392",
            adress: "39, Rue Beaubourg, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653154963600!6m8!1m7!1s7aKs5w-_9GtKvQUYzg3ZBA!2m2!1d48.86205454577853!2d2.353950653170599!3f318.56!4f5.269999999999996!5f0.7820865974627469",
        },
        {
            position: "48.86811, 2.37265",
            adress: "45, Rue de la Fontaine au Roi, 75011 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497085354!6m8!1m7!1siYFS4BVBSDaTUtHwxb_cGg!2m2!1d48.86808952182512!2d2.372674421127543!3f358.48!4f-6.980000000000004!5f0.7820865974627469",
        },
        {
            position: "48.86131, 2.35327",
            adress: "36, Rue Rambuteau, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497464242!6m8!1m7!1s2rxByYV305WYmus6aSCRWA!2m2!1d48.8612544214937!2d2.353307503184798!3f41.1!4f0!5f0.7820865974627469",
        },
        {
            position: "48.87145, 2.34394",
            adress: "30, Boulevard Poissonnière, 75009 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497411923!6m8!1m7!1sZNVk-MU2MfbS_MYilNFzlw!2m2!1d48.87135877971096!2d2.34394518353583!3f69.68!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86775, 2.36395",
            adress: "Place de la République, Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497526112!6m8!1m7!1soUdEz0AxvXnK8JXv7KX5oA!2m2!1d48.8679154024039!2d2.364072967977419!3f220.34!4f0!5f0.7820865974627469",
        },
        {
            position: "48.8881, 2.37734",
            adress: "69, Quai de la Seine, 75019 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498446850!6m8!1m7!1sjE_-tog4I22rZKmkwrnr0g!2m2!1d48.88807541292486!2d2.377369537690216!3f322.89!4f-5.8799999999999955!5f0.7820865974627469",
        },
        {
            position: "48.85774, 2.35079",
            adress: "78, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497880320!6m8!1m7!1sgZ1ki67p7o7ZtJJmj-T5dw!2m2!1d48.85776738149007!2d2.350712266724279!3f54.03!4f-0.14000000000000057!5f0.7820865974627469",
        },
        {
            position: "48.86111, 2.34046",
            adress: "156, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498128488!6m8!1m7!1soXa0Nw_Cc0dfEDsXyMtt2Q!2m2!1d48.86109586764249!2d2.340480845604334!3f48.57!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85948, 2.34684",
            adress: "9, Rue des Halles, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497146988!6m8!1m7!1sbLKVYo8xVa3CEplwlzywkg!2m2!1d48.85958162717747!2d2.346902791762407!3f96.16!4f-1.519999999999996!5f0.7820865974627469",
        },
        {
            position: "48.86468, 2.32816",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498645296!6m8!1m7!1s1qJ7KU2orL6onNNsD-J8MA!2m2!1d48.86479728470866!2d2.327868196182772!3f267.12!4f-0.2600000000000051!5f0.7820865974627469",
        },
        {
            position: "48.85262, 2.33349",
            adress: "31, Rue du Four, 75006 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497102593!6m8!1m7!1sz3gnGWWv0Uk6k4-IPKhlpw!2m2!1d48.85265273202599!2d2.333513779547307!3f119.97!4f-3.1099999999999994!5f0.7820865974627469",
        },
        {
            position: "48.86027, 2.34304",
            adress: "140, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498113291!6m8!1m7!1s3r7yNTGaIUufPFk2d8ShuA!2m2!1d48.86023727700132!2d2.343039416635865!3f15.94!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85312, 2.34409",
            adress: "7, Place Saint-Michel, 75005 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498420678!6m8!1m7!1s03XcVniEoScjoA3_q-BfsA!2m2!1d48.85330782373645!2d2.34407708924153!3f119.22!4f1.8199999999999932!5f0.7820865974627469",
        },
        {
            position: "48.86873, 2.33329",
            adress: "34, Avenue de l'Opéra, 75002 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497352310!6m8!1m7!1s1uOYIIf5BXLKigVn77tf8A!2m2!1d48.86872725610058!2d2.333172682328626!3f75.73!4f0!5f0.7820865974627469",
        },
        {
            position: "48.867, 2.31661",
            adress: "10, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155182264!6m8!1m7!1svXOcE0Zb7TH3s25UUgiT3A!2m2!1d48.86697584152086!2d2.316630803806498!3f22.45!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86602, 2.31963",
            adress: "8, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155140108!6m8!1m7!1szpwE1xQrKDkDtugE3B05WA!2m2!1d48.86601207720314!2d2.319705413624511!3f71.36!4f3.239999999999995!5f0.7820865974627469",
        },
        {
            position: "48.88676, 2.35948 ",
            adress: "33, Rue Marx Dormoy, 75018 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497334581!6m8!1m7!1shoqVZKw9h9nATsA80nF1Mw!2m2!1d48.88684153406813!2d2.359716547755336!3f194.29!4f-4.920000000000002!5f0.7820865974627469",
        },
        {
            position: "48.86678, 2.36492",
            adress: "Place de la République, Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497503757!6m8!1m7!1sT-OvgMkk-2nLjIzLw_6CJw!2m2!1d48.86675536928347!2d2.365119081003592!3f245.28!4f1.1299999999999955!5f0.7820865974627469",
        },
        {
            position: "48.8724, 2.35406",
            adress: "65, Rue du Faubourg Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497012020!6m8!1m7!1sMWt0X0KSYShP0t4reE5pvg!2m2!1d48.87237320472044!2d2.354102502106715!3f277.39!4f-1.9699999999999989!5f0.4000000000000002",
        },
        {
            position: "48.86021, 2.34325",
            adress: "138, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498100792!6m8!1m7!1sCIYNmExHJ4QwbJJBq5Bbvg!2m2!1d48.86016033949704!2d2.343454183836326!3f276.39!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85736, 2.35251",
            adress: "1, Rue du Temple, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498559386!6m8!1m7!1s5CxhnrBETXdAQ-wFJ__vUw!2m2!1d48.85746088010324!2d2.35252358444591!3f15.94!4f-2.819999999999993!5f0.7820865974627469",
        },
        {
            position: "48.85378, 2.333",
            adress: "1671, Boulevard Saint-Germain, 75006 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498315237!6m8!1m7!1sVCDky-h49Hov8cLMqIkANw!2m2!1d48.85365122219732!2d2.332971349077182!3f16.15!4f6.799999999999997!5f0.7820865974627469",
        },
        {
            position: "48.88355, 2.35926",
            adress: "222, Rue du Faubourg Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497055631!6m8!1m7!1sFnapUD88QDzyW2wuRJgD_w!2m2!1d48.88371218748384!2d2.359267788678395!3f50.51!4f1.1599999999999966!5f0.7820865974627469",
        },
        {
            position: "48.87283, 2.35787",
            adress: "90, Rue du Faubourg Saint-Martin, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497070484!6m8!1m7!1sUFqN5nKlVIei6CoQ5Ac0xg!2m2!1d48.87289874622125!2d2.357800063001286!3f263.68!4f-1.5300000000000011!5f0.7820865974627469",
        },
        {
            position: "48.86855, 2.35197",
            adress: "271, Rue Saint-Denis, 75002 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498280060!6m8!1m7!1sWwCOmyBiaIHIbgN0ky9C7A!2m2!1d48.86853254282138!2d2.352044648102948!3f287.5!4f-4.819999999999993!5f0.7820865974627469",
        },
        {
            position: "48.86281, 2.35074",
            adress: "52, Boulevard de Sébastopol, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498432579!6m8!1m7!1snCzVTj2aAAKb8JW0-aaH9A!2m2!1d48.862948366!2d2.350685760900803!3f144.35!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86439, 2.35529",
            adress: "82, Rue Beaubourg, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155008612!6m8!1m7!1sR_1MFr-C_ix1YT-UVx0qEg!2m2!1d48.86450875548537!2d2.355303079255779!3f67!4f-0.29000000000000625!5f0.7820865974627469",
        },
        {
            position: "48.85911, 2.34651",
            adress: "110, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498029854!6m8!1m7!1sleKfSLp_efV5j_38sdJqhA!2m2!1d48.85916003565253!2d2.346508279379144!3f354.63!4f-4.510000000000005!5f0.7820865974627469",
        },
        {
            position: "48.85343, 2.34884",
            adress: "Parvis Notre-Dame, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497366662!6m8!1m7!1sLOMdsxshuF0Ft0OXDTlBjg!2m2!1d48.85345118610956!2d2.349039642617047!3f24.84!4f4.099999999999994!5f0.7820865974627469",
        },
        {
            position: "48.85952, 2.36004",
            adress: "74, Rue Vieille du Temple, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498726288!6m8!1m7!1suMUnb0Sl7sGo6_JgKGIetg!2m2!1d48.8595434916962!2d2.360074750983874!3f12.12!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85733, 2.35247",
            adress: "1, Rue du Temple, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498544225!6m8!1m7!1socq39RrJEf_3LGKpsOyxfQ!2m2!1d48.85733921100504!2d2.35240198646623!3f88.84056872037914!4f-6.955402843601888!5f0.4000000000000002",
        },
        {
            position: "48.86335, 2.33355",
            adress: "184, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498185843!6m8!1m7!1sQ8jpmK_siI9QjKQET9fK5A!2m2!1d48.86323546981004!2d2.333751064228921!3f333.72!4f-1.5900000000000034!5f0.7820865974627469",
        },
        {
            position: "48.88252, 2.33773",
            adress: "20, Boulevard de Clichy, 75018 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155360898!6m8!1m7!1shJWDXOGI_-Hg_u6g4ejbRA!2m2!1d48.88246777325888!2d2.337851930331929!3f46.85!4f2.269999999999996!5f0.7820865974627469",
        },
        {
            position: "48.85536, 2.36011",
            adress: "10, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497695489!6m8!1m7!1svh_KuUfzBoXxgPdVIoP-sQ!2m2!1d48.85550609913724!2d2.35998419700941!3f60.98!4f-3.8799999999999955!5f0.7820865974627469",
        },
        {
            position: "48.85198, 2.37363",
            adress: "61, Rue du Faubourg Saint-Antoine, 75011 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653496947117!6m8!1m7!1smyFaRsSluLmdZxf7f46xfQ!2m2!1d48.85192754388405!2d2.373646029507896!3f50.05!4f-5.959999999999994!5f0.7820865974627469",
        },
        {
            position: "48.87121, 2.35335",
            adress: "39, Rue du Faubourg Saint-Denis, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653496993530!6m8!1m7!1s-iGSB9AZ65I6RA8W1OJF-w!2m2!1d48.87121284057375!2d2.353422308864159!3f309.52!4f-4.510000000000005!5f0.7820865974627469",
        },
        {
            position: "48.86662, 2.3225",
            adress: "2, Boulevard de la Concorde, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155399057!6m8!1m7!1sZdlVU38rY_yPqDDmeJqhFA!2m2!1d48.86657699209901!2d2.322408436903254!3f51.07!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85882, 2.34706",
            adress: "47, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497739332!6m8!1m7!1sKEKG76hMsmIUM1gPCtdVGA!2m2!1d48.85888757753948!2d2.347202619587216!3f180.38!4f-4.140000000000001!5f0.7820865974627469",
        },
        {
            position: "48.85767, 2.35113",
            adress: "74, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497865935!6m8!1m7!1s41a0RImTOTgcEAOlddSfRA!2m2!1d48.85765277816417!2d2.351111831781396!3f21.92!4f-3.5900000000000034!5f0.7820865974627469",
        },
        {
            position: "48.85744, 2.35196",
            adress: "68, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497781032!6m8!1m7!1suZsCwGC8XFAbDjZWPTaDYQ!2m2!1d48.85739721652328!2d2.351805332521821!3f21.66!4f0.8900000000000006!5f0.7820865974627469",
        },
        {
            position: "48.87092, 2.30477",
            adress: "74, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155202325!6m8!1m7!1su1UE0Wg9GYxnUseXuH96gA!2m2!1d48.87079514780271!2d2.304669295097233!3f18.39!4f2.180000000000007!5f0.7820865974627469",
        },
        {
            position: "48.85719, 2.35152",
            adress: "11, Place de l'Hôtel de Ville",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497178558!6m8!1m7!1smCZMVdbk-1ryLuepqewwuQ!2m2!1d48.85728608260456!2d2.35139623751074!3f2.96!4f-0.20999999999999375!5f0.7820865974627469",
        },
        {
            position: "48.88286, 2.33636",
            adress: "36, Boulevard de Clichy, 75018 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155368901!6m8!1m7!1sJA9TGuRiccku-QkGCx-D0w!2m2!1d48.88280117190003!2d2.33638859243666!3f31.24!4f-1.730000000000004!5f0.7820865974627469",
        },
        {
            position: "48.8693, 2.31016",
            adress: "Rond-Point des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155246759!6m8!1m7!1shQLN4vEyrLO-EHTeO8Z_Pw!2m2!1d48.86925035803233!2d2.310125671543668!3f284.36!4f-2.8700000000000045!5f0.7820865974627469",
        },
        {
            position: "48.85924, 2.34958",
            adress: "16, Rue des Lombards, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497269118!6m8!1m7!1snNASotVOLsK_udA3f7p_TQ!2m2!1d48.85922484559439!2d2.349572686500976!3f350.71!4f-8.280000000000001!5f0.7820865974627469",
        },
        {
            position: "48.88405, 2.34109",
            adress: "4, Rue Yvonne le Tac, 75018 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498751365!6m8!1m7!1sPTyNpy9DeV82RFeQTNXWzg!2m2!1d48.88402841961642!2d2.341102690163522!3f73.84!4f1.5999999999999943!5f0.7820865974627469",
        },
        {
            position: "48.85899, 2.34697",
            adress: "106, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497984906!6m8!1m7!1szZJ3v7_ZMrRQ3wVw0QFFaQ!2m2!1d48.8589671430061!2d2.346950343257412!3f336.59!4f-8.790000000000006!5f0.7820865974627469",
        },
        {
            position: "48.86809, 2.35519",
            adress: "318, Rue Saint-Martin, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498395493!6m8!1m7!1sj319NEVagRYCyoRpKDTu0g!2m2!1d48.86813121004655!2d2.355082852015462!3f17.31!4f-0.20999999999999375!5f0.7820865974627469",
        },
        {
            position: "48.87187, 2.35556",
            adress: "41, Boulevard de Strasbourg, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498531322!6m8!1m7!1sJeZ8aUrS4kIW8CKqIQc_9A!2m2!1d48.87184206220957!2d2.355709662653781!3f332.91!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85743, 2.35203",
            adress: "68, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497763931!6m8!1m7!1sufsoOoUvhv_ObdbxBvGg7A!2m2!1d48.85734712719346!2d2.352092303825319!3f359.87!4f0!5f0.7820865974627469",
        },
        {
            position: "48.85904, 2.34678",
            adress: "108, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498001761!6m8!1m7!1s8rXRlDfvtSH4mx88wnSvRQ!2m2!1d48.85905022923426!2d2.346702475143383!3f28.49!4f-1.480000000000004!5f0.7820865974627469",
        },
        {
            position: "48.86413, 2.37134",
            adress: "110, Boulevard Richard-Lenoir, 75011 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497538261!6m8!1m7!1smaLViPW-nuRd0pZRKVY8hQ!2m2!1d48.86419598972895!2d2.371159113788694!3f100.26!4f-0.269999999999996!5f0.7820865974627469",
        },
        {
            position: "48.8639, 2.35766",
            adress: "6, Rue des Vertus, 75003 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498711190!6m8!1m7!1sQlFikdEMo3Ms5Vs5T1OQYg!2m2!1d48.86393791678551!2d2.357679970892822!3f65.86!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86718, 2.316",
            adress: "10, Avenue des Champs-Élysées, 75008 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155192455!6m8!1m7!1sH3xZ6VCTiQhu9ipYay2p1A!2m2!1d48.86712296948575!2d2.316079170536947!3f24.5!4f4.319999999999993!5f0.7820865974627469",
        },
        {
            position: "48.85631, 2.35676",
            adress: "36, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497711992!6m8!1m7!1sHPWC1PtkTYgkQep8cW5XfA!2m2!1d48.85628004885909!2d2.356803769473783!3f7.43!4f0!5f0.7820865974627469",
        },
        {
            position: "48.8622, 2.33453",
            adress: "Place du Carrousel, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653155125139!6m8!1m7!1sXkl12Zr7_qgM1pAmc8aiAg!2m2!1d48.86230514586519!2d2.33474805551207!3f309.29!4f0.9300000000000068!5f0.4000000000000002",
        },
        {
            position: "48.86089, 2.34774",
            adress: "Place Joachim du Bellay, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497201862!6m8!1m7!1saZqoSAVafxCww8IyMqYzqQ!2m2!1d48.86103969243828!2d2.347693844448856!3f180.68!4f0.0799999999999983!5f0.7820865974627469",
        },
        {
            position: "48.85653, 2.3558",
            adress: "42, Rue de Rivoli, 75004 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653497725328!6m8!1m7!1s_Mx_XKJ-qEWLtPheb99-OA!2m2!1d48.85650118799024!2d2.3558405416738!3f43.56!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86976, 2.35439",
            adress: "5, Boulevard de Strasbourg, 75010 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498459652!6m8!1m7!1s_V8VabNRu2ZbZ_Sg7oq1kQ!2m2!1d48.8697238837176!2d2.354495404390693!3f312.04!4f2.3599999999999994!5f0.7820865974627469",
        },
        {
            position: "48.8599, 2.34422",
            adress: "130, Rue de Rivoli, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498065093!6m8!1m7!1sIz22orkgc0yyLURJNAWbjw!2m2!1d48.85991612802844!2d2.344029244134894!3f93.56!4f0!5f0.7820865974627469",
        },
        {
            position: "48.86444, 2.32902",
            adress: "Jardin des Tuileries, 75001 Paris",
            iframe: "https://www.google.com/maps/embed?pb=!4v1653498598181!6m8!1m7!1s3qoy7r8OyPVPvmrMi4ydbQ!2m2!1d48.86442270783792!2d2.329066991763066!3f356.74!4f0!5f0.7820865974627469",
        },
    ];
    const projectLayer = ".nav__info";
    const infoLayer = ".info__background";
    const visibleClass = "info__background--on";
    const infoElements = ".info__element";

    for (let i = 0; i < infoData.length; i++) {
        const li = document.createElement("li");
        const picture = infoData[i];
        li.classList.add(`info__container--projet-1--${i + 1}`);
        li.innerHTML = `${picture.adress}<span> — ${picture.position}</span>`;
        document.querySelector(".info__container--projet-1").appendChild(li);
    }

    for (let i = 0; i < infoData.length; i++) {
        document
            .querySelector(`.info__container--projet-1--${i + 1}`)
            .addEventListener(
                "click",
                (e) => {
                    e.stopPropagation();
                    document.querySelector("iframe").src = infoData[i].iframe;
                },
                false
            );
    }

    switchLayer(projectLayer, infoLayer, visibleClass, infoElements);
}

(function projectOne() {
    const titleSelector = document.querySelector(".nav__title");
    const randomSelector = document.querySelector(".nav__random");

    function resetContent() {
        contentSelector.innerHTML = "";
        navSelector.innerHTML = "";
    }

    function toggleClasses() {
        titleSelector.classList.toggle("nav__current");
        titleSelector.classList.toggle("nav__event");
        randomSelector.classList.toggle("nav__current");
    }

    createContent();
    createSpreads(projectData);
    createInfo();

    randomSelector.addEventListener("click", () => {
        resetContent();

        if (!randomSelector.classList.contains("nav__current")) {
            toggleClasses();
        }

        createRandom();
    });

    titleSelector.addEventListener("click", () => {
        if (!titleSelector.classList.contains("nav__current")) {
            resetContent();
            toggleClasses();
            createContent();
        }
    });
})();
