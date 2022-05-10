import { toggleNav } from "./utils/toggle-nav.js";

toggleNav(false);

function landscapeContent() {

    let path = window.location.pathname;
    let page = path.split("/").pop();

    const caption = document.querySelector(".caption");
    const altCaptionUp = document.querySelector(".caption--one--top");
    const altCaptionMid = document.querySelector(".caption--one--mid");
    const altCaptionBottom = document.querySelector(".caption--one--bottom");
    const secondAltCaption = document.querySelector(".caption--two");
    
    function slideLayout() {
        function pageLayout(element, number) {
            const smallDragscroll = [157, 245, 216];
            const bigDragscroll = [5, 203, 387];
        
            const page = document.createElement("div");
            const container = document.createElement("div");
            const image = document.createElement("img");
        
            container.appendChild(image);
            page.appendChild(container);
        
            if (innerHeight < 500) {
                image.src = `/img/japon/small/${number}.jpg`;
            } else if (innerHeight < 900) {
                image.src = `/img/japon/medium/${number}.jpg`;
            } else {
                if (smallDragscroll.includes(number)) {
                    page.classList.add("slide__layout");
                    container.classList.add("dragscroll", "dragscroll--small");
                } else if (bigDragscroll.includes(number)) {
                    page.classList.add("slide__layout");
                    container.classList.add("dragscroll", "dragscroll--big");
                }
                image.src = `/img/japon/${number}.jpg`;
            }
        
            if (number !== 1 && number !== 2) {
                image.setAttribute("loading", "lazy");
            }
            
            element.appendChild(page);
        }
    
        for (let i = 1; i < 196; i++) {
            const slide = document.createElement("div");
            slide.classList.add("slide");
            slide.id = `slide-${i}`;
    
            const previousSlide = document.createElement("a");
            previousSlide.classList.add("slide__button", "slide__button--prev");
            previousSlide.id = `prev-${i}`;
    
            if (i === 1) {
                previousSlide.href = "#slide-195";
            } else {
                previousSlide.href = `#slide-${i - 1}`;
            }
            
            slide.appendChild(previousSlide);
    
            let j = (i * 2) - 1;
            pageLayout(previousSlide, j);
            
            const nextSlide = document.createElement("a");
            nextSlide.classList.add("slide__button", "slide__button--next");
            nextSlide.id = `next-${i}`;
    
            if (i === 195) {
                nextSlide.href = "#slide-1";
            } else {
                nextSlide.href = `#slide-${i + 1}`;
            }
    
            slide.appendChild(nextSlide);
    
            let k = (i * 2);
            pageLayout(nextSlide, k);
    
            document.querySelector(".content--japon").appendChild(slide);
        }
    
        const dragscrollImages = document.querySelectorAll(".dragscroll");
    
        for (let dragscrollImage of dragscrollImages) {
            dragscrollImage.addEventListener("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
            });
        }
    }
    
    function landscapeNav() {
        const desktopContent = document.querySelector(".content__nav");
        const mobileContent = document.querySelector(".content__nav--mobile");
        
        const desktopAnchorId = "desktop-content-nav-";
        const mobileAnchorId = "mobile-content-nav-";
    
        const desktopLandscapeNav = [
            ["1", "7.15"],
            ["3", "7.17"],
            ["15", "7.19"],
            ["23", "7.21"],
            ["29", "7.23"],
            ["45", "7.25"],
            ["65", "7.27"],
            ["70", "7.29"],
            ["86", "7.31"],
            ["104", "8.02"],
            ["123", "8.04"],
            ["142", "8.06"],
            ["158", "8.08"],
            ["163", "8.10"],
            ["178", "8.12"]
        ];
        
        const mobileLandscapeNav = [
            ["1", "7.15"],
            ["10", "7.18"],
            ["23", "7.21"],
            ["35", "7.24"],
            ["65", "7.27"],
            ["73", "7.30"],
            ["104", "8.02"],
            ["136", "8.05"],
            ["158", "8.08"],
            ["168", "8.11"]
        ];
    
        const desktopNavCaptions = [
            ['Tokyo, Asakusa, 15 juillet 2019 - 16:33:43', '<span>Tokyo, </span>Asakusa,', '15', 'juill. <span>2019</span> 16:33:43', ''],
            ['Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:13:34', 'Tokyo, Shibuya,', '17', 'juill. <span>2019</span> 22:13:34', ''],
            ['Tokyo, Asakusa Line, 19 juillet 2019 - 06:14:02', '<span>Tokyo, </span>Asakusa Line,', '19 juill. <span>2019</span>', '06:14:02', ''],
            ['Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53', '<span>Shikine-jima, </span>Nobushi', 'Port, 21', 'juill. <span>2019</span> 12:43:53', ''],
            ['Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49<br>Shimoda, Izu Kyūkō Line, 23 juillet 2019 - 11:13:19', 'Shimoda, Irita', 'Beach, 22 juill. <span>2019</span>', '16:01:49', 'Shimoda, Izu Kyūkō Line, 23 juill. <span>2019</span> - 11:13:19'],
            ['Itō, Yawatano, 25 juillet 2019', 'Itō, Yawatano,', '25', 'juill. 2019', ''],
            ['Hakone, Gora Line, 27 juillet 2019 - 11:53:28', 'Hakone, Gora', 'Line, 27', 'juill. <span>2019</span> 11:53:28', ''],
            ['Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39<br>Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:05:53', 'Fujikawaguchiko,', '29 juill.', '<span>2019</span> 11:04:39', 'Fujikawaguchiko, Mont Tenjō, 29 juill. <span>2019</span> - 11:05:53'],
            ['Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18', '<span>Kyoto, </span>Myodenjicho,', '31 juill.', '<span>2019</span> 08:55:18', ''],
            ['Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04', 'Kyoto, Tenryū-ji,', '2 août <span>2019</span>', '09:33:04', ''],
            ['Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00<br>Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47', '<span>Osaka, </span>Shin-Imamiya', 'Station, 4', 'août <span>2019</span> 08:38:00', 'Osaka, Shin-Imamiya Station, 4 août <span>2019</span> - 08:39:47'],
            ['Shinkansen Sakura 549, 6 août 2019 - 10:45:56', '<span>Shinkansen </span>Sakura', '549,', '6 août <span>2019</span> 10:45:56', ''],
            ['Shinkansen Hikari 442, 8 août 2019 - 11:11:27', 'Shinkansen,', '8', 'août <span>2019</span> 11:11:27', ''],
            ['Shinkansen, 10 août 2019 - 09:41:29', 'Shinkansen, 10', 'août', '<span>2019</span> 09:41:29', ''],
            ['Tokyo, Ueno, 12 août 2019 - 11:05:49<br>Tokyo, Ueno, 12 août 2019 - 11:27:50', 'Tokyo, Ueno,', '12 août', '<span>2019</span> 11:05:49', 'Tokyo, Ueno, 12 août <span>2019</span> - 11:27:50']
        ];
        
        const mobileNavCaptions = [
            'Tokyo, Asakusa, 15 juillet 2019 - 16:33:43',
            'Tokyo, Asakusa, 18 juillet 2019 - 09:47:42',
            'Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53',
            'Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48',
            'Hakone, Gora Line, 27 juillet 2019 - 11:53:28',
            'Fujikawaguchiko, 30 juillet 2019 - 09:57:59',
            'Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04',
            'Osaka, Yoshino, 5 août 2019 - 09:21:01<br>Osaka, Yoshino, 5 août 2019 - 11:00:15',
            'Shinkansen Hikari 442, 8 août 2019 - 11:11:27',
            'Tokyo, Ueno Station, 10 août 2019 - 21:02:33<br>Tokyo, Ueno, 11 août 2019 - 09:42:14'
        ];
    
        function landscapeNavLayout(array, selector, id) {
            for (let i = 0; i < array.length; i++) {
                const anchor = document.createElement("a");
                anchor.href = `#slide-${array[i][0]}`;
                anchor.id = id + (i + 1);
                anchor.textContent = array[i][1];
        
                const navItem = document.createElement("li");
                navItem.appendChild(anchor);
        
                selector.appendChild(navItem);
            }
        }
        
        function landscapeNavCaptions(array, id) {
            for (let i = 0; i < array.length; i++) {
                document.getElementById(id + (i + 1)).addEventListener("click", function () {
                    if (page === "projet-3.html") {
                        caption.innerHTML = array[i][0];
                    } else if (page === "projet-3-2.html") {
                        altCaptionUp.innerHTML = array[i][1];
                        altCaptionMid.innerHTML = array[i][2];
                        altCaptionBottom.innerHTML = array[i][3];
                        secondAltCaption.innerHTML = array[i][4];
                    }
                });
            }
        }
    
        landscapeNavLayout(desktopLandscapeNav, desktopContent, desktopAnchorId);
        landscapeNavLayout(mobileLandscapeNav, mobileContent, mobileAnchorId);
        landscapeNavCaptions(desktopNavCaptions, desktopAnchorId);
        landscapeNavCaptions(mobileNavCaptions, mobileAnchorId);
    }
    
    function captionSwitch() {

        const captionInfo = [
            'Tokyo, Asakusa, 15 juillet 2019 - 16:33:43',
            'Tokyo, Shinjuku, 16 juillet 2019 - 17:43:28<br>Tokyo, Shinjuku, 16 juillet 2019 - 18:00:44',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:13:34',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:14:24<br>Tokyo, Shibuya, 17 juillet 2019 - 22:15:18',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:15:40',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:16:02',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:30:57<br>Tokyo, Shibuya, 17 juillet 2019 - 22:32:06',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:34:55',
            'Tokyo, Shibuya, 17 juillet 2019 - 22:35:08',
            'Tokyo, Asakusa, 18 juillet 2019 - 09:47:42',
            'Tokyo, Asakusa, 18 juillet 2019 - 10:22:39',
            'Tokyo, Asakusa, 18 juillet 2019 - 11:35:14<br>Tokyo, Aoyama, 18 juillet 2019 - 12:44:57',
            'Tokyo, Samoncho, 18 juillet 2019 - 13:10:58',
            'Tokyo, Yotsuya, 18 juillet 2019 - 13:12:59<br>Tokyo, Shinjuku, 18 juillet 2019 - 15:47:36',
            'Tokyo, Asakusa Line, 19 juillet 2019 - 06:14:02',
            'Shikine-jima, Tomari Beach, 19 juillet 2019<br>Shikine-jima, Jinata Onsen, 19 juillet 2019',
            'Shikine-jima, 亀吉大家, 20 juillet 2019',
            'Shikine-jima, 20 juillet 2019 - 14:28:12',
            'Shikine-jima, 唐人津城, 20 juillet 2019',
            'Shikine-jima, 隈の井, 20 juillet 2019<br>Shikine-jima, 隈の井, 20 juillet 2019',
            'Shikine-jima, 20 juillet 2019',
            'Shikine-jima, 20 juillet 2019',
            'Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53',
            'Shikine-jima, Azalea Ferry, 21 juillet 2019',
            'Shimoda, Jizō, 21 juillet 2019<br>Shimoda, 21 juillet 2019',
            'Shimoda, Aoki, 22 juillet 2019 - 11:31:27',
            'Shimoda, Kisami, 22 juillet 2019',
            'Shimoda, Kisami Ohama Beach, 22 juillet 2019',
            'Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49<br>Shimoda, Izu Kyūkō Line, 23 juillet 2019 - 11:13:19',
            'Kawazu, Tanaka, 23 juillet 2019 - 11:50:41',
            'Kawazu, Seven Waterfalls, 23 juillet 2019 - 13:54:07',
            'Kawazu, Seven Waterfalls, 23 juillet 2019<br>Kawazu, Seven Waterfalls, 23 juillet 2019',
            'Kawazu, Seven Waterfalls, 23 juillet 2019 - 14:35:35',
            'Kawazu, Kawazu Station, 23 juillet 2019 - 16:51:35',
            'Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48',
            'Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:46:58<br>Itō, Yawatano, 24 juillet 2019 - 12:38:37',
            'Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:27<br>Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:38',
            'Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:49:13',
            'Itō, Itō Station, 24 juillet 2019 - 13:08:15',
            'Itō, Saiwaicho, 24 juillet 2019 - 14:46:07',
            'Itō, Matsukawacho, 24 juillet 2019 - 15:01:21<br>Itō, Matsukawacho, 24 juillet 2019 - 15:01:52',
            'Itō, Itō Orange Beach, 24 juillet 2019 - 15:28:29',
            'Itō, Yukawa, 24 juillet 2019 - 18:22:54',
            'Itō, Higashimatsubaracho, 24 juillet 2019 - 22:01:40<br>Itō, Izu Kyūkō Line, 24 juillet 2019 - 22:35:57',
            'Itō, Yawatano, 25 juillet 2019',
            'Itō, Yawatano, 25 juillet 2019 - 09:49:51<br>Jōgasaki Kaigan, 25 juillet 2019',
            'Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52<br>+',
            'Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56<br>+',
            'Jōgasaki Kaigan, 25 juillet 2019 - 12:16:55',
            'Jōgasaki Kaigan, 25 juillet 2019<br>Jōgasaki Kaigan, 25 juillet 2019',
            'Jōgasaki Kaigan, 25 juillet 2019',
            'Jōgasaki Kaigan, Renchakuji-Okunoin, 25 juillet 2019 - 13:54:11<br>Jōgasaki Kaigan, 25 juillet 2019',
            'Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:54:48',
            'Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:59:34',
            'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:11<br>+',
            'Jōgasaki Kaigan, Kadowakitsuri Bridge, 25 juillet 2019 - 15:53:19',
            'Itō, Yukawa, 25 juillet 2019 - 17:25:11<br>Itō, Matsukawacho, 25 juillet 2019',
            'Itō, Izukyu-Line, 25 juillet 2019 - 21:27:56',
            'Itō, Itō Line, 26 juillet 2019 - 10:43:15<br>Itō, Itō Line, 26 juillet 2019 - 11:30:58',
            'Odawara, Odawara Station, 26 juillet 2019 - 11:46:30',
            'Odawara, Odawara Station, 26 juillet 2019 - 11:47:47',
            'Odawara, Odawara Station, 26 juillet 2019 - 12:15:15<br>Odawara, Odawara Station, 26 juillet 2019 - 12:48:59',
            'Hakone, Onshi Hakone Park, 26 juillet 2019 - 17:00:05',
            'Hakone, Hakonemachi Line, 26 juillet 2019 - 18:20:16<br>Hakone, Hakonemachi Line, 26 juillet 2019 - 18:21:02',
            'Hakone, Gora Line, 27 juillet 2019 - 11:53:28',
            'Hakone, Hakone-jinja, 27 juillet 2019 - 12:54:45<br>Hakone, Togendai Line, 27 juillet 2019 - 20:56:56',
            'Gotemba, Gotemba Station, 28 juillet 2019 - 11:27:04<br>Gotemba, Gotemba Station, 28 juillet 2019 - 12:05:55',
            'Fujikawaguchiko, Mount Tenjō Ropeway, 28 juillet 2019 - 15:26:28<br>Fujikawaguchiko, Mount Tenjō, 28 juillet 2019 - 15:47:50',
            'Fujikawaguchiko, Tenjoyama Park, 28 juillet 2019',
            'Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39<br>Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:05:53',
            'Fujikawaguchiko, Kawaguchi, 29 juillet 2019 - 17:05:47',
            'Fujikawaguchiko, Funatsu, 29 juillet 2019 - 19:09:38',
            'Fujikawaguchiko, 30 juillet 2019 - 09:57:59',
            'Yokohama Line, 30 juillet 2019 - 11:35:44<br>Yokohama Line, 30 juillet 2019 - 12:06:45',
            'Shinkansen Hikari 471, 30 juillet 2019 - 12:48:01<br>Shinkansen Hikari 471, 30 juillet 2019 - 12:51:59',
            'Kyoto, Karasuma Line, 30 juillet 2019 - 15:06:23',
            'Kyoto, Ayazaimokucho, 30 juillet 2019 - 16:50:03<br>Kyoto, Nishiki Market, 30 juillet 2019 - 17:10:47',
            'Kyoto, Nishiki Market, 30 juillet 2019 - 17:12:42',
            'Kyoto, Shijoo Bridge, 30 juillet 2019 - 17:52:35<br>Kyoto, Kawabatacho, 30 juillet 2019 - 17:54:08',
            'Kyoto, Higashiyama, 30 juillet 2019 - 18:07:37<br>Kyoto, Higashiyama, 30 juillet 2019 - 18:07:38',
            'Kyoto, Higashiyama, 30 juillet 2019 - 18:45:45',
            'Kyoto, Daikokucho, 30 juillet 2019 - 20:50:12<br>Kyoto, Daikokucho, 30 juillet 2019 - 20:54:45',
            'Kyoto, Daikokucho, 30 juillet 2019 - 21:09:57',
            'Kyoto, Daikokucho, 30 juillet 2019 - 21:13:03<br>Kyoto, Daikokucho, 30 juillet 2019 - 21:19:37',
            'Kyoto, Kasabokocho, 30 juillet 2019 - 22:10:29',
            'Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18',
            'Nara Line, 31 juillet 2019 - 09:32:08',
            'Nara Line, 31 juillet 2019 - 09:46:43<br>Nara, Higashimuki Nakamachi, 31 juillet 2019 - 10:53:50',
            'Nara, Yoshiki-en, 31 juillet 2019 - 11:18:46',
            'Nara, Tōdai-ji, 31 juillet 2019 - 11:59:59<br>Nara, Tōdai-ji, 31 juillet 2019 - 12:47:04',
            'Nara, Nara Park, 31 juillet 2019 - 15:52:36',
            'Nara, Mochiidonocho, 31 juillet 2019 - 16:56:52<br>Nara, Mochiidonocho, 31 juillet 2019 - 17:00:46',
            'Nara, Sanjōchō, 31 juillet 2019 - 17:19:51',
            'Nara, Nara Station, 31 juillet 2019 - 17:27:36<br>Nara, Nara Station, 31 juillet 2019 - 17:34:31',
            'Nara Line, 31 juillet 2019 - 17:56:25',
            'Kyoto, Naginatabokocho, 31 juillet 2019 - 22:38:28',
            'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:05<br>Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:07',
            'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:06:29',
            'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:56:27<br>Kyoto, Fushimi Inari-taisha, 1er août 2019 - 13:21:32',
            'Kyoto, Kyoto Station, 1er août 2019 - 13:54:49',
            'Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:10<br>Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:11',
            'Kyoto, Ginkakujimaecho, 1er août 2019 - 15:30:24<br>Kyoto, Jodoji Kamiminamidacho, 1er août 2019 - 16:39:26',
            'Kyoto, 1er août 2019 - 17:18:36<br>Kyoto, Okazaki Higashitennocho, 1er août 2019 - 17:57:36',
            'Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04',
            'Kyoto, Ryōan-ji, 2 août 2019 - 12:23:30<br>Kyoto, Kinkaku-ji, 2 août 2019 - 13:53:15',
            'Kyoto, Kinugasanishi Goshonouchicho, 2 août 2019 - 14:39:17<br>Kyoto, Murasakino Nishifunaokacho, 2 août 2019 - 14:48:46',
            'Kyoto, 2 août 2019 - 14:54:20',
            'Kyoto, Higashiyama, 2 août 2019 - 16:10:54<br>Kyoto, Higashiyama, 2 août 2019 - 16:10:55',
            'Kyoto, Higashiyama, 2 août 2019 - 16:11:21',
            'Kyoto, Kyoto Station, 3 août 2019 - 10:42:36',
            'Kyoto, Noda Station, 3 août 2019 - 12:37:37<br>Osaka, Ebisunishi, 3 août 2019 - 12:59:50',
            'Osaka, Ebisuhigashi, 3 août 2019 - 13:13:00<br>Osaka, Ebisuhigashi, 3 août 2019 - 13:15:58',
            'Osaka, Ebisuhigashi, 3 août 2019 - 13:16:01<br>Osaka, Nipponbashi, 3 août 2019 - 13:56:26',
            'Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:34:57',
            'Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:40:56<br>Osaka, Kuromon Ichiba Market, 3 août 2019 - 15:47:12',
            'Osaka, Sennichimae, 3 août 2019 - 16:05:58<br>Osaka, Sennichimae, 3 août 2019 - 16:06:04',
            'Osaka, Amerikamura, 3 août 2019 - 17:32:37',
            'Osaka, Amerikamura, 3 août 2019 - 17:53:47',
            'Osaka, Dōtonbori, 3 août 2019 - 18:54:29',
            'Osaka, Dōtonbori, 3 août 2019 - 19:01:36<br>Osaka, Dōtonbori, 3 août 2019 - 19:22:05',
            'Osaka, Dōtonbori, 3 août 2019 - 19:48:52',
            'Osaka, Dōtonbori, 3 août 2019 - 21:51:41<br>Osaka, Dōtonbori, 3 août 2019 - 21:52:11',
            'Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00<br>Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47',
            'Nankai Kōya Line, 4 août 2019 - 09:23:31<br>+',
            'Nankai Kōya Line, 4 août 2019 - 09:27:50<br>Koyasan, Haraigawa Park, 4 août 2019 - 12:03:40',
            'Koyasan, Danjōgaran, 4 août 2019 - 12:51:20',
            'Koyasan, 4 août 2019 - 14:26:41<br>Koyasan, Kongō Sanmai-in, 4 août 2019 - 14:45:46',
            'Koyasan, 4 août 2019<br>Koyasan, 4 août 2019 - 15:06:42',
            'Koyasan, 4 août 2019 - 15:18:31',
            'Koyasan, Jimyo-in, 4 août 2019 - 15:21:31<br>Koyasan, Jimyo-in, 4 août 2019 - 15:21:33',
            'Koyasan, Okunoin Cemetery, 4 août 2019 - 16:46:14',
            'Kōya, Gokurakubashi Station, 4 août 2019 - 19:41:02<br>Osaka, Namba, 4 août 2019 - 20:49:59',
            'Osaka, Dōtonbori, 4 août 2019 - 21:14:29',
            'Osaka, Namba, 4 août 2019 - 21:44:04',
            'Osaka, Namba, 4 août 2019 - 21:45:40',
            'Osaka, Yoshino, 5 août 2019 - 09:21:01<br>Osaka, Yoshino, 5 août 2019 - 11:00:15',
            'Osaka, Yoshino, 5 août 2019 - 11:07:25<br>Osaka, Osaka Castle Park, 5 août 2019 - 12:05:40',
            'Osaka, Tenjinbashi, 5 août 2019 - 13:45:42<br>Osaka, Nishitenma, 5 août 2019 - 13:57:01',
            'Osaka, Nishitenma, 5 août 2019 - 13:58:54',
            'Osaka, 露天神社, 5 août 2019 - 14:22:52<br>Osaka, Umeda, 5 août 2019 - 16:52:00',
            'Osaka, Umeda, 5 août 2019 - 16:55:13<br>Osaka, Tsurunocho, 5 août 2019 - 17:02:25',
            'Shinkansen Sakura 549, 6 août 2019 - 10:45:56',
            'Shinkansen Sakura 549, 6 août 2019 - 10:46:10',
            'Hiroshima, Ebisucho, 6 août 2019 - 11:27:35<br>Hiroshima, Hondori, 6 août 2019 - 12:11:44',
            'Hiroshima, Hondori, 6 août 2019 - 15:17:50<br>Hiroshima, Otemachi, 6 août 2019 - 16:23:53',
            'Hiroshima, Otemachi, 6 août 2019 - 16:28:20',
            'Hiroshima, Motoyasu Bridge, 6 août 2019 - 16:35:54',
            'Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:46:46<br>Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:53:20',
            'Hatsukaichi, Miyajimaguchi, 7 août 2019 - 09:55:08',
            'Itsuku-shima, 7 août 2019',
            'Itsuku-shima, Mount Misen, 7 août 2019 - 13:00:57',
            'Itsuku-shima, Misen Tenboudai, 7 août 2019<br>Itsuku-shima, Misen Tenboudai, 7 août 2019 - 13:25:38',
            'Itsuku-shima, Daishō-in, "Daruma", 7 août 2019 - 15:05:14<br>Itsuku-shima, Daishō-in, 7 août 2019 - 15:05:19',
            'Itsuku-shima, 7 août 2019 - 16:32:45',
            'Itsuku-shima, 7 août 2019 - 17:42:51<br>Itsuku-shima, Komainu, 7 août 2019 - 18:07:59',
            'Sanyō Main Line, 7 août 2019 - 19:52:22',
            'Sanyō Main Line, 7 août 2019 - 19:54:24',
            'Shinkansen Hikari 442, 8 août 2019 - 11:11:27',
            'Shinkansen Hikari 442, 8 août 2019 - 11:20:48<br>Nakatsugawa, Nakatsugawa Station, 8 août 2019 - 12:49:16',
            'Magome, 8 août 2019<br>Magome, 8 août 2019',
            'Magome, 8 août 2019 - 17:41:32',
            'Tsumago, 9 août 2019',
            'Shinkansen, 10 août 2019 - 09:41:29',
            'Tokyo, Okachimachi Station, 10 août 2019 - 12:00:34',
            'Tokyo, Ebisu, 10 août 2019 - 13:08:24<br>Tokyo, Shibuya, 10 août 2019 - 17:06:17',
            'Tokyo, Shibuya, 10 août 2019 - 17:07:05<br>Tokyo, Jingūmae, 10 août 2019 - 19:32:27',
            'Tokyo, Yamanote Line, 10 août 2019 - 20:54:47<br>+',
            'Tokyo, Ueno Station, 10 août 2019 - 21:02:33<br>Tokyo, Ueno, 11 août 2019 - 09:42:14',
            'Tokyo, Tokyo Station, 11 août 2019 - 10:03:50',
            'Tokyo, Yokosuka Line, 11 août 2019 - 10:07:59',
            'Kamakura, Komachi, 11 août 2019 - 11:25:52<br>Kamakura, Komachi, 11 août 2019 - 11:27:33',
            'Kamakura, Yukinoshita, 11 août 2019 - 13:40:25<br>Kamakura, Komachi, 11 août 2019 - 15:33:22',
            'Kamakura, Kōtoku-in, 11 août 2019 - 16:30:47',
            'Kamakura, Kōtoku-in, Kamakura Daibutsu, 11 août 2019',
            'Kamakura, Hase, 11 août 2019 - 17:12:10',
            'Kamakura, Yuigahama Beach, 11 août 2019 - 17:25:08<br>Kamakura, Yuigahama Beach, 11 août 2019 - 17:29:53',
            'Kamakura, Yuigahama Beach, 11 août 2019 - 18:33:39',
            'Tokyo, Ueno, 12 août 2019 - 11:05:49<br>Tokyo, Ueno, 12 août 2019 - 11:27:50',
            'Tokyo, Ueno, 12 août 2019 - 12:06:14',
            'Tokyo, Ueno, 12 août 2019 - 12:08:24',
            'Tokyo, Ueno Park, 12 août 2019 - 12:26:07<br>Tokyo, Ueno Park, 12 août 2019 - 12:27:08',
            'Tokyo, Yanaka, 12 août 2019 - 13:42:00',
            'Tokyo, Yanaka, 12 août 2019 - 13:42:00<br>Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13',
            'Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13',
            'Tokyo, Nishi-Nippori, 12 août 2019 - 14:02:18',
            'Tokyo, Nishi-Nippori, 12 août 2019 - 14:24:08<br>Tokyo, Nishi-Nippori, 12 août 2019 - 14:52:58',
            'Tokyo, Nishi-Nippori, 12 août 2019 - 15:00:36<br>Tokyo, Nishi-Nippori, 12 août 2019 - 15:08:23',
            'Tokyo, Nishi-Nippori, 12 août 2019 - 15:14:12',
            'Tokyo, Ueno, 12 août 2019 - 20:12:05<br>Tokyo, Ueno, 12 août 2019 - 23:16:40',
            'Tokyo, Suehirochō Station, 13 août 2019 - 11:23:11',
            'Tokyo, Akihabara, 13 août 2019 - 11:40:05<br>Tokyo, Toyosu, 13 août 2019 - 13:21:24',
            'Tokyo, Tsukiji Market, 13 août 2019 - 13:52:38<br>Tokyo, Tsukiji Market, 13 août 2019 - 13:58:30',
            'Tokyo, Tsukiji Market, 13 août 2019 - 15:30:19<br>Tokyo, Ginza, 13 août 2019 - 15:45:39',
            'Tokyo, Ginza, 13 août 2019 - 16:11:24',
            'Tokyo, Shinjuku Station, 13 août 2019 - 20:06:33'
        ];
    
        const extendableCaptionIndexes = [46, 47, 54, 123, 166];
    
        const extendedCaptions = [
            'Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:41:14<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:29:37<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:22:33<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:19:06<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:58:34<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:05:55<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:24:42',
            'Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:15:12<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:49:27<br>Jōgasaki Kaigan, 25 juillet 2019',
            'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:11<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:13<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:20<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:21<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:23',
            'Nankai Kōya Line, 4 août 2019 - 09:23:31<br>Nankai Kōya Line, 4 août 2019 - 09:23:37<br>Nankai Kōya Line, 4 août 2019 - 09:23:50<br>Nankai Kōya Line, 4 août 2019 - 09:24:48',
            'Tokyo, Yamanote Line, 10 août 2019 - 20:54:47<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:52<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:54<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:56'
        ];

        const altCaptionInfo = [
            [['<span>Tokyo, </span>Asakusa,', '15', 'juill. <span>2019</span> 16:33:43'],['']],
            [['<span>Tokyo, </span>Shinjuku, 16', 'juill.', '<span>2019</span> 17:43:28'],['Tokyo, Shinjuku, 16 juill. <span>2019</span> - 18:00:44']],
            [['Tokyo, Shibuya,', '17', 'juill. <span>2019</span> 22:13:34'],['']],
            [['Tokyo, Shibuya,', '17 juill.', '<span>2019</span> 22:14:24'],['Tokyo, Shibuya, 17 juill. <span>2019</span> - 22:15:18']],
            [['<span>Tokyo, </span>Shibuya,', '17', '<span>2019</span> 22:15:40'],['']],
            [['<span>Tokyo, </span>Shibuya,', '17', '<span>2019</span> 22:16:02'],['']],
            [['<span>Tokyo, </span>Shibuya, 17', 'juill.', '<span>2019</span> 22:30:57'],['Tokyo, Shibuya, 17 juill. <span>2019</span> - 22:32:06']],
            [['<span>Tokyo, </span>Shibuya,', '17', 'juill. <span>2019</span> 22:34:55'],['']],
            [['<span>Tokyo, </span>Shibuya,', '17', 'juill. <span>2019</span> 22:35:08'],['']],
            [['Tokyo,', 'Asakusa, 17 juill.', '<span>2019</span> 09:47:42'],['']],
            [['<span>Tokyo, </span>Asakusa,', '18', 'juill. <span>2019</span> 10:22:39'],['']],
            [['Tokyo,', 'Asakusa, 18 juill.', '<span>2019</span> 11:35:14'],['Tokyo, Aoyama, 18 juill. <span>2019</span> - 12:44:57']],
            [['<span>Tokyo, </span>Samoncho,', '18', 'juill. <span>2019</span> 13:10:58'],['']],
            [['<span>Tokyo, </span>Yotsuya, 18', 'juill.', '<span>2019</span> 13:12:59'], ['Tokyo, Shinjuku, 18 juill. <span>2019</span> - 15:47:36']],
            [['<span>Tokyo, </span>Asakusa Line,', '19 juill. <span>2019</span>', '06:14:02'], ['']],
            [['Shikine-jima,', 'Tomari Beach, 19', 'juill. <span>2019</span>'], ['Shikine-jima, Jinata Onsen, 19 juill. <span>2019</span>']],
            [['<span>Shikine-jima, </span>亀吉大家,', '20', 'juill. <span>2019</span>'], ['']],
            [['Shikine-jima,', '20', 'juill. <span>2019</span> 14:28:12'], ['']],
            [['<span>Shikine-jima, </span>唐人津城,', '20', 'juill. <span>2019</span>'], ['']],
            [['Shikine-jima,', '隈の井, 20 juill.', '2019'], ['Shikine-jima, 隈の井, 20 juill. <span>2019</span>']],
            [['Shikine-jima, 20', 'juill. <span>2019</span>', '<span class="hidden>.</span>'], ['']],
            [['Shikine-jima,', '20', 'juill. <span>2019</span>'], ['']],
            [['<span>Shikine-jima, </span>Nobushi', 'Port, 21', 'juill. <span>2019</span> 12:43:53'], ['']],
            [['<span>Shikine-jima, </span>Azalea Ferry,', '21', 'juill. <span>2019</span>'], ['']],
            [['Shimoda, Jizō,', '21', 'juill. <span>2019</span>'], ['Shimoda, 21 juill. <span>2019</span>']],
            [['Shimoda, Aoki, 22', 'juill.', '<span>2019</span> 11:31:27'], ['']],
            [['Shimoda, Kisami,', '22', 'juill. <span>2019</span>'], ['']],
            [['<span>Shimoda, </span>Kisami', 'Ohama Beach, 22', 'juill. <span>2019</span>'], ['']],
            [['Shimoda, Irita', 'Beach, 22 juill. <span>2019</span>', '16:01:49'], ['Shimoda, Izu Kyūkō Line, 23 juill. <span>2019</span> - 11:13:19']],
            [['<span>Kawazu, </span>Tanaka,', '23', 'juill. <span>2019</span> 11:50:41'], ['']],
            [['<span>Kawazu, </span>Seven', 'Waterfalls, 23 juill.', '<span>2019</span> 13:54:07'], ['']],
            [['<span>Kawazu, </span>Seven', 'Waterfalls, 23 juill.', '2019'], ['Kawazu, Seven Waterfalls, 23 juill. <span>2019</span>']],
            [['<span>Kawazu, </span>Seven', 'Waterfalls, 23', 'juill. <span>2019</span> 14:35:35'], ['']],
            [['<span>Kawazu, </span>Kawazu', 'Station, 23 juill. <span>2019</span>', '16:51:35'], ['']],
            [['<span>Itō, </span>Izu-Kōgen', 'Station, 24 juill. <span>2019</span>', '11:43:48'], ['']],
            [['<span>Itō, </span>Izu-Kōgen', 'Station, 24 juill. <span>2019</span>', '11:46:58'], ['Itō, Yawatano, 24 juill. <span>2019</span> - 12:38:37']],
            [['<span>Itō, </span>Izu Kyūkō', 'Line, 24 juill. <span>2019</span>', '12:48:27'], ['Itō, Izu Kyūkō Line, 24 juill. <span>2019</span> - 12:48:38']],
            [['<span>Itō, </span>Izu Kyūkō', 'Line, 24 juill. <span>2019</span>', '12:49:13'], ['']],
            [['<span>Itō, </span>Itō Station, 24', 'juill.', '<span>2019</span> 13:08:15'], ['']],
            [['Itō, Saiwaicho,', '24', 'juill. <span>2019</span> 14:46:07'], ['']],
            [['<span>Itō, </span>Matsukawacho,', '24 juill.', '<span>2019</span> 15:01:21'], ['Itō, Matsukawacho, 24 juill. <span>2019</span> - 15:01:52']],
            [['<span>Itō, </span>Itō Orange', 'Beach, 24', 'juill. <span>2019</span> 15:28:29'], ['']],
            [['Itō, Yukawa, 24', 'juill.', '<span>2019</span> 18:22:54'], ['']],
            [['Itō, 24', 'juill.', '<span>2019</span> 22:01:40'], ['Itō, Izu Kyūkō Line, 24 juill. <span>2019</span> - 22:35:57']],
            [['Itō, Yawatano,', '25', 'juill. 2019'], ['']],
            [['Itō, Yawatano, 25', 'juill.', '<span>2019</span> 09:49:51'], ['Jōgasaki Kaigan, 25 juill. <span>2019</span>']],
            [['Jōgasaki Kaigan,', '25', 'juill. <span>2019</span>'], ['']],
            [['Jōgasaki Kaigan,', '25', 'juill. <span>2019</span>'], ['']],
            [['Jōgasaki Kaigan,', '25', 'juill. <span>2019</span> 12:16:55'], ['']],
            [['Jōgasaki Kaigan,', '25', 'juill. <span>2019</span>'], ['Jōgasaki Kaigan, 25 juill. <span>2019</span>']],
            [['Jōgasaki Kaigan,', '25', 'juill. 2019'], ['']],
            [['Jōgasaki Kaigan,', '25 juill.', '<span>2019</span> 13:54:11'], ['Jōgasaki Kaigan, 25 juill. <span>2019</span>']],
            [['<span>Jōgasaki Kaigan, </span>Izu Oceanic', 'Park, 25', 'juill. <span>2019</span> 14:54:48'], ['']],
            [['<span>Jōgasaki Kaigan, </span>Izu Oceanic', 'Park, 25', 'juill. <span>2019</span> 14:59:34'], ['']],
            [['Jōgasaki Kaigan,', '25 juill.', '<span>2019</span> 15:27:11'], ['']],
            [['Jōgasaki Kaigan,', '25', 'juill. <span>2019</span> 15:53:19'], ['']],
            [['Itō, Yukawa, 25', 'juill.', '<span>2019</span> 17:25:11'], ['Itō, Matsukawacho, 25 juill. <span>2019</span>']],
            [['Itō, Izukyu-Line,', '25 juill. <span>2019</span>', '21:27:56'], ['']],
            [['Itō, Itō Line, 26', 'juill.', '<span>2019</span> - 10:43:15'], ['Itō, Itō Line, 26 juill. <span>2019</span> - 11:30:58']],
            [['<span>Odawara, </span>Odawara', 'Station, 26 juill. <span>2019</span>', '11:46:30'], ['']],
            [['<span>Odawara, </span>Odawara', 'Station, 26 juill. <span>2019</span>', '11:47:47'], ['']],
            [['<span>Odawara, </span>Odawara', 'Station, 26 juill. <span>2019</span>', '12:15:15'], ['Odawara, Odawara Station, 26 juill. <span>2019</span> - 12:48:59']],
            [['<span>Hakone, </span>Onshi Hakone', 'Park, 26', 'juill. <span>2019</span> 17:00:05'], ['']],
            [['<span>Hakone, </span>Hakonemachi', 'Line, 26 juill. <span>2019</span>', '18:20:16'], ['Hakone, Hakonemachi Line, 26 juill. <span>2019</span> - 18:21:02']],
            [['Hakone, Gora', 'Line, 27', 'juill. <span>2019</span> 11:53:28'], ['']],
            [['<span>Hakone, </span>Hakone-jinja,', '27 juill.', '<span>2019</span> 12:54:45'], ['Hakone, Togendai Line, 27 juill. <span>2019</span> - 20:56:56']],
            [['<span>Gotemba, </span>Gotemba', 'Station, 28 juill. <span>2019</span>', '11:27:04'], ['Gotemba, Gotemba Station, 28 juill. <span>2019</span> - 12:05:55']],
            [['Fujikawaguchiko,', '28 juill.', '<span>2019</span> 15:26:28'], ['Fujikawaguchiko, Mont Tenjō, 28 juill. <span>2019</span> - 15:47:50']],
            [['<span>Fujikawaguchiko, </span>Tenjoyama', 'Park,', '28 juill. <span>2019</span>'], ['']],
            [['Fujikawaguchiko,', '29 juill.', '<span>2019</span> 11:04:39'], ['Fujikawaguchiko, Mont Tenjō, 29 juill. <span>2019</span> - 11:05:53']],
            [['<span>Fujikawaguchiko,</span>Kawaguchi,', '29 juill. <span>2019</span>', '17:05:47'], ['']],
            [['<span>Fujikawaguchiko,</span>Funatsu,', '29 juill.', '<span>2019</span> 19:09:38'], ['']],
            [['Fujikawaguchiko,', '30', 'juill. <span>2019</span> 09:57:59'], ['']],
            [['Yokohama Line,', '30 juill. <span>2019</span>', '11:35:44'], ['Yokohama Line, 30 juill. <span>2019</span> - 12:06:45']],
            [['Shinkansen, 30', 'juill.', '<span>2019</span> 12:48:01'], ['Shinkansen Hikari 471, 30 juill. <span>2019</span> - 12:51:59']],
            [['<span>Kyoto, </span>Karasuma Line,', '30', 'juill. <span>2019</span> 15:06:23'], ['']],
            [['Kyoto, 30', 'juill.', '<span>2019</span> 16:50:03'], ['Kyoto, Nishiki Market, 30 juill. <span>2019</span> - 17:10:47']],
            [['Kyoto, Nishiki', 'Market, 30', 'juill. <span>2019</span> 17:12:42'], ['']],
            [['Kyoto, Shijoo', 'Bridge, 30 juill. <span>2019</span>', '17:52:35'], ['Kyoto, Kawabatacho, 30 juill. <span>2019</span> - 17:54:08']],
            [['<span>Kyoto, </span>Higashiyama,', '30 juill.', '<span>2019</span> 18:07:37'], ['Kyoto, Higashiyama, 30 juill. <span>2019</span> - 18:07:38']],
            [['<span>Kyoto, </span>Higashiyama,', '30 juill. <span>2019</span>', '18:45:45'], ['']],
            [['<span>Kyoto, </span>Daikokucho, 30', 'juill.', '<span>2019</span> 20:50:12'], ['Kyoto, Daikokucho, 30 juill. <span>2019</span> - 20:54:45']],
            [['<span>Kyoto, </span>Daikokucho, 30', 'juill.', '<span>2019</span> 21:09:57'], ['']],
            [['<span>Kyoto, </span>Daikokucho, 30', 'juill.', '<span>2019</span> 21:13:03'], ['Kyoto, Daikokucho, 30 juill. <span>2019</span> - 21:19:37']],
            [['<span>Kyoto, </span>Kasabokocho,', '30 juill. <span>2019</span>', '22:10:29'], ['']],
            [['<span>Kyoto, </span>Myodenjicho,', '31 juill.', '<span>2019</span> 08:55:18'], ['']],
            [['Nara Line,', '31', 'juill. <span>2019</span> 09:32:08'], ['']],
            [['Nara Line,', '31', 'juill. <span>2019</span> 09:46:43'], ['Nara, Higashimuki Nakamachi, 31 juill. <span>2019</span> - 10:53:50']],
            [['Nara,', 'Yoshiki-en, 31', 'juill. <span>2019</span> 11:18:46'], ['']],
            [['Nara, Tōdai-ji,', '31', 'juill. <span>2019</span> 11:59:59'], ['Nara, Tōdai-ji, 31 juill. <span>2019</span> - 12:47:04']],
            [['Nara, Nara Park,', '31 juill.', '<span>2019</span> 15:52:36'], ['']],
            [['Nara, 31 juill.', '2019', '16:56:52'], ['Nara, Mochiidonocho, 31 juill. <span>2019</span> - 17:00:46']],
            [['Nara, Sanjōchō,', '31', 'juill. <span>2019</span> 17:19:51'], ['']],
            [['Nara, Nara', 'Station, 31 juill. <span>2019</span>', '17:27:36'], ['Nara, Nara Station, 31 juill. <span>2019</span> - 17:34:31']],
            [['Nara Line, 31', 'juill.', '<span>2019</span> 17:56:25'], ['']],
            [['Kyoto,', '31', 'juill. <span>2019</span> 22:38:28'], ['']],
            [['<span>Kyoto, </span>Fushimi Inari-', 'taisha, 1er août <span>2019</span>', '10:07:05'], ['Kyoto, Fushimi Inari-taisha, 1er août <span>2019</span> - 10:07:07']],
            [['<span>Kyoto, </span>Fushimi Inari-', 'taisha, 1er août <span>2019</span>', '11:06:29'], ['']],
            [['<span>Kyoto, </span>Fushimi Inari-', 'taisha, 1er août <span>2019</span>', '11:56:27'], ['Kyoto, Fushimi Inari-taisha, 1er août <span>2019</span> - 13:21:32']],
            [['Kyoto, Kyoto', 'Station, 1er août', '<span>2019</span> 13:54:49'], ['']],
            [['Kyoto,', '1er', 'août <span>2019</span> 15:23:10'], ['Kyoto, Kitashirakawa Higashikubotacho, 1er août <span>2019</span> - 15:23:11']],
            [['Kyoto,', '1er', 'août <span>2019</span> 15:30:24'], ['Kyoto, Jodoji Kamiminamidacho, 1er août <span>2019</span> - 16:39:26']],
            [['Kyoto,', '1er', 'août <span>2019</span> 17:18:36'], ['Kyoto, Okazaki Higashitennocho, 1er août <span>2019</span> - 17:57:36']],
            [['Kyoto, Tenryū-ji,', '2 août <span>2019</span>', '09:33:04'], ['']],
            [['Kyoto, Ryōan-ji,', '2', 'août <span>2019</span> 12:23:30'], ['Kyoto, Kinkaku-ji, 2 août <span>2019</span> - 13:53:15']],
            [['Kyoto,', 'Kinugasa,', '2 août <span>2019</span> 14:39:17'], ['Kyoto, Murasakino Nishifunaokacho, 2 août <span>2019</span> - 14:48:46']],
            [['<span class="hidden>K</span>', 'Kyoto, 2 août <span>2019</span>', '14:54:20'], ['']],
            [['<span>Kyoto, </span>Higashiyama,', '2', 'août <span>2019</span> 16:10:54'], ['Kyoto, Higashiyama, 2 août <span>2019</span> - 16:10:55']],
            [['<span>Kyoto, </span>Higashiyama,', '2', 'août <span>2019</span> 16:11:21'], ['']],
            [['Kyoto, Kyoto', 'Station, 3 août <span>2019</span>', '10:42:36'], ['']],
            [['Kyoto, Noda', 'Station, 3 août <span>2019</span>', '12:37:37'], ['Osaka, Ebisunishi, 3 août <span>2019</span> - 12:59:50']],
            [['<span>Osaka, </span>Ebisuhigashi,', '3 août', '<span>2019</span> 13:13:00'], ['Osaka, Ebisuhigashi, 3 août <span>2019</span> - 13:15:58']],
            [['<span>Osaka, </span>Ebisuhigashi,', '3 août', '<span>2019</span> 13:16:01'], ['Osaka, Nipponbashi, 3 août <span>2019</span> - 13:56:26']],
            [['<span>Osaka, </span>Kuromon', 'Ichiba Market,', '3 août <span>2019</span> 14:34:57'], ['']],
            [['<span>Osaka, </span>Kuromon', 'Ichiba Market,', '3 août <span>2019</span> 14:40:56'], ['Osaka, Kuromon Ichiba Market, 3 août <span>2019</span> - 15:47:12']],
            [['<span>Osaka, </span>Sennichimae,', '3', 'août <span>2019</span> 16:05:58'], ['Osaka, Sennichimae, 3 août <span>2019</span> - 16:06:04']],
            [['<span>Osaka, </span>Amerikamura,', '3', 'août <span>2019</span> 17:32:37'], ['']],
            [['Osaka,', 'Amerikamura,', '3 août <span>2019</span> 17:53:47'], ['']],
            [['Osaka,', 'Dōtonbori,', '3 août <span>2019</span> 18:54:29'], ['']],
            [['<span>Osaka, </span>Dōtonbori,', '3', 'août <span>2019</span> 19:01:36'], ['Osaka, Dōtonbori, 3 août <span>2019</span> - 19:22:05']],
            [['Osaka,', 'Dōtonbori, 3 août', '<span>2019</span> 19:48:52'], ['']],
            [['Osaka,', 'Dōtonbori, 3 août', '<span>2019</span> 21:51:41'], ['Osaka, Dōtonbori, 3 août <span>2019</span> - 21:52:11']],
            [['<span>Osaka, </span>Shin-Imamiya', 'Station, 4', 'août <span>2019</span> 08:38:00'], ['Osaka, Shin-Imamiya Station, 4 août <span>2019</span> - 08:39:47']],
            [['Nankai Kōya', 'Line,', '4 août <span>2019</span> 09:23:31'], ['']],
            [['Nankai Kōya', 'Line, 4', 'août <span>2019</span> 09:27:50'], ['Koyasan, Haraigawa Park, 4 août <span>2019</span> - 12:03:40']],
            [['<span>Koyasan, </span>Danjōgaran,', '4', 'août <span>2019</span> 12:51:20'], ['']],
            [['Koyasan,', '4', 'août <span>2019</span> 14:26:41'], ['Koyasan, Kongō Sanmai-in, 4 août <span>2019</span> - 14:45:46']],
            [['Koyasan,', '4', 'août 2019'], ['Koyasan, 4 août <span>2019</span> - 15:06:42']],
            [['Koyasan, 4 août <span>2019</span>', '15:18:31'], ['']],
            [['Koyasan,', 'Jimyo-in, 4 août <span>2019</span>', '15:21:31'], ['Koyasan, Jimyo-in, 4 août <span>2019</span> - 15:21:33']],
            [['<span>Koyasan, </span>Okunoin', 'Cemetery,', '4 août <span>2019</span> 16:46:14'], ['']],
            [['<span>Kōya, </span>Gokurakubashi', 'Station,', '4 août <span>2019</span> 19:41:02'], ['Osaka, Namba, 4 août <span>2019</span> - 20:49:59']],
            [['<span>Osaka, </span>Dōtonbori,', '4', 'août <span>2019</span> 21:14:29'], ['']],
            [['Osaka, Namba,', '4', 'août <span>2019</span> 21:44:04'], ['']],
            [['Osaka,', 'Namba,', '4 août <span>2019</span> 21:45:40'], ['']],
            [['Osaka,', 'Yoshino, 5 août <span>2019</span>', '09:21:01'], ['Osaka, Yoshino, 5 août <span>2019</span> - 11:00:15']],
            [['Osaka, Yoshino,', '5', 'août <span>2019</span> 11:07:25'], ['Osaka, Osaka Castle Park, 5 août <span>2019</span> - 12:05:40']],
            [['Osaka,', 'Tenjinbashi, 5', 'août <span>2019</span> 13:45:42'], ['Osaka, Nishitenma, 5 août <span>2019</span> - 13:57:01']],
            [['Osaka,', 'Nishitenma, 5', 'août <span>2019</span> 13:58:54'], ['']],
            [['Osaka, 露天神社,', '5 août', '<span>2019</span> 14:22:52'], ['Osaka, Umeda, 5 août <span>2019</span> - 16:52:00']],
            [['Osaka, Umeda,', '5', 'août <span>2019</span> 16:55:13'], ['Osaka, Tsurunocho, 5 août <span>2019</span> - 17:02:25']],
            [['<span>Shinkansen </span>Sakura', '549,', '6 août <span>2019</span> 10:45:56'], ['']],
            [['<span>Shinkansen </span>Sakura', '549,', '6 août <span>2019</span> 10:46:10'], ['']],
            [['Hiroshima,', 'Ebisucho, 6 août', '<span>2019</span> 11:27:35'], ['Hiroshima, Hondori, 6 août <span>2019</span> - 12:11:44']],
            [['<span>Hiroshima, </span>Hondori,', '6', 'août <span>2019</span> 15:17:50'], ['Hiroshima, Otemachi, 6 août <span>2019</span> - 16:23:53']],
            [['Hiroshima,', 'Otemachi, 6 août', '<span>2019</span> 16:28:20'], ['']],
            [['<span>Hiroshima,</span>Motoyasu', 'Bridge,', '6 août <span>2019</span> 16:35:54'], ['']],
            [['<span>Hiroshima, </span>Miyajima', 'Line,', '7 août <span>2019</span> 08:46:46'], ['Hiroshima, Hiroden Miyajima Line, 7 août <span>2019</span> - 08:53:20']],
            [['<span>Hatsukaichi, </span>Miyajima', 'guchi,', '7 août <span>2019</span> 09:55:08'], ['']],
            [['Itsuku-shima,', '7', 'août <span>2019</span>'], ['']],
            [['<span>Itsuku-shima, </span>Mont Misen,', '7', 'août <span>2019</span> 13:00:57'], ['']],
            [['Itsuku-shima,', 'Misen Tenboudai,', '7 août <span>2019</span>'], ['Itsuku-shima, Misen Tenboudai, 7 août <span>2019</span> - 13:25:38']],
            [['Itsuku-shima,', 'Daruma,', '7 août <span>2019</span> 15:05:14'], ['Itsuku-shima, Daishō-in, 7 août <span>2019</span> - 15:05:19']],
            [['Itsuku-shima,', '7 août', '<span>2019</span> 16:32:45'], ['']],
            [['Itsuku-shima,', '7', 'août <span>2019</span> 17:42:51'], ['Itsuku-shima, Komainu, 7 août <span>2019</span> - 18:07:59']],
            [['Sanyō Main', 'Line,', '7 août <span>2019</span> 19:52:22'], ['']],
            [['Sanyō Main Line,', '7 août', '<span>2019</span> 19:54:24'], ['']],
            [['Shinkansen,', '8', 'août <span>2019</span> 11:11:27'], ['']],
            [['Shinkansen,', '8', 'août <span>2019</span> 11:20:48'], ['Nakatsugawa, Nakatsugawa Station, 8 août <span>2019</span> - 12:49:16']],
            [['<span>Magome, </span>Nakasendō', '8', 'août <span>2019</span>'], ['Magome, Nakasendō, 8 août <span>2019</span>']],
            [['<span>Magome, </span>Nakasendō', '8', 'août <span>2019</span> 17:41:32'], ['']],
            [['<span>Tsumago, </span>Nakasendō', '9', 'août <span>2019</span>'], ['']],
            [['Shinkansen, 10', 'août', '<span>2019</span> 09:41:29'], ['']],
            [['<span>Tokyo, </span>Okachimachi', 'Station, 10 août <span>2019</span>', '12:00:34'], ['']],
            [['Tokyo,', 'Ebisu, 10', 'août <span>2019</span> 13:08:24'], ['Tokyo, Shibuya, 10 août <span>2019</span> - 17:06:17']],
            [['Tokyo, Shibuya,', '10', 'août <span>2019</span> 17:07:05'], ['Tokyo, Jingūmae, 10 août <span>2019</span> - 19:32:27']],
            [['<span>Tokyo, </span>Yamanote Line,', '10', 'août <span>2019</span> 20:54:47'], ['']],
            [['<span>Tokyo, </span>Ueno Station,', '10', 'août <span>2019</span> 21:02:33'], ['Tokyo, Ueno, 11 août <span>2019</span> - 09:42:14']],
            [['Tokyo, Tokyo', 'Station, 11 août <span>2019</span>', '10:03:50'], ['']],
            [['Tokyo, Yokosuka', 'Line, 11', 'août <span>2019</span> 10:07:59'], ['']],
            [['Kamakura,', 'Komachi, 11 août', '<span>2019</span> 11:25:52'], ['Kamakura, Komachi, 11 août <span>2019</span> - 11:27:33']],
            [['Kamakura,', 'Yukinoshita, 11', 'août <span>2019</span> 13:40:25'], ['Kamakura, Komachi, 11 août <span>2019</span> - 15:33:22']],
            [['Kamakura,', 'Kōtoku-in, 11', 'août <span>2019</span> 16:30:47'], ['']],
            [['Kamakura', 'Daibutsu, 11 août', '2019'], ['']],
            [['Kamakura, Hase,', '11 août <span>2019</span>', '17:12:10'], ['']],
            [['Kamakura,', 'Yuigahama, 11', 'août <span>2019</span> 17:25:08'], ['Kamakura, Yuigahama Beach, 11 août <span>2019</span> - 17:29:53']],
            [['<span>Kamakura ,</span>Yuigahama,', '11 août', '<span>2019</span> 18:33:39'], ['']],
            [['Tokyo, Ueno,', '12 août', '<span>2019</span> 11:05:49'], ['Tokyo, Ueno, 12 août <span>2019</span> - 11:27:50']],
            [['Tokyo,', 'Ueno, 12 août <span>2019</span>', '12:06:14'], ['']],
            [['<span>Tokyo</span>, Ueno, 12', 'août', '<span>2019</span> 12:08:24'], ['']],
            [['Tokyo, Ueno Park,', '12', 'août <span>2019</span> 12:26:07'], ['Tokyo, Ueno Park, 12 août <span>2019</span> - 12:27:08']],
            [['Tokyo, Yanaka,', '12', 'août <span>2019</span> 13:42:00'], ['']],
            [['Tokyo,', 'Yanaka, 12 août <span>2019</span>', '13:42:00'], ['Tokyo, Nishi-Nippori, 12 août <span>2019</span> - 14:00:13']],
            [['Tokyo, Nishi-', 'Nippori, 12', 'août <span>2019</span> 14:00:13'], ['']],
            [['Tokyo, Nishi-', 'Nippori, 12 août', '<span>2019</span> 14:02:18'], ['']],
            [['Tokyo, Nishi-', 'Nippori, 12 août', '<span>2019</span> 14:24:08'], ['Tokyo, Nishi-Nippori, 12 août <span>2019</span> - 14:52:58']],
            [['Tokyo, Nishi-', 'Nippori, 12', 'août <span>2019</span> 15:00:36'], ['Tokyo, Nishi-Nippori, 12 août <span>2019</span> - 15:08:23']],
            [['Tokyo, Nishi-', 'Nippori, 12 août', '<span>2019</span> 15:14:12'], ['']],
            [['Tokyo,', 'Ueno, 12', 'août <span>2019</span> 20:12:05'], ['Tokyo, Ueno, 12 août <span>2019</span> - 23:16:40']],
            [['<span>Tokyo, </span>Suehirochō', 'Station, 13 août <span>2019</span>', '11:23:11'], ['']],
            [['Tokyo, Akihabara,', '13 août <span>2019</span>', '11:40:05'], ['Tokyo, Toyosu, 13 août <span>2019</span> - 13:21:24']],
            [['Tokyo, Tsukiji', 'Market, 13 août <span>2019</span>', '13:52:38'], ['Tokyo, Tsukiji Market, 13 août <span>2019</span> - 13:58:30']],
            [['Tokyo, Tsukiji', 'Market, 13 août <span>2019</span>', '15:30:19'], ['Tokyo, Ginza, 13 août <span>2019</span> - 15:45:39']],
            [['Tokyo, Ginza, 13', 'août', '<span>2019</span> 16:11:24'], ['']],
            [['<span>Tokyo, </span>Shinjuku', 'Station, 13 août <span>2019</span>', '0:06:33'], ['']]
        ];
    
        const timeCaptionInfo = [
            '16:33:43',
            '<span>17:43:28</span><br>18:00:44',
            '22:13:34',
            '<span>22:14:24</span><br>22:15:18',
            '22:15:40',
            '22:16:02',
            '<span>22:30:57</span><br>22:32:06',
            '22:34:55',
            '22:35:08',
            '09:47:42',
            '10:22:39',
            '<span>11:35:14</span><br>12:44:57',
            '13:10:58',
            '<span>13:12:59</span><br>15:47:36',
            '06:14:02',
            '',
            '',
            '14:28:12',
            '',
            '',
            '',
            '',
            '12:43:53',
            '',
            '',
            '11:31:27',
            '',
            '',
            '<span>16:01:49</span><br>11:13:19',
            '11:50:41',
            '13:54:07',
            '',
            '14:35:35',
            '16:51:35',
            '11:43:48',
            '<span>11:46:58</span><br>12:38:37',
            '<span>12:48:27</span><br>12:48:38',
            '12:49:13',
            '13:08:15',
            '14:46:07',
            '<span>15:01:21</span><br>15:01:52',
            '15:28:29',
            '18:22:54',
            '<span>22:01:40</span><br>22:35:57',
            '',
            '09:49:51',
            '<span>11:17:52</span><br>13:24:42',
            '<span>11:49:27</span><br>13:25:56',
            '12:16:55',
            '',
            '',
            '13:54:11',
            '14:54:48',
            '14:59:34',
            '<span>15:27:11</span><br>15:27:23',
            '15:53:19',
            '17:25:11',
            '21:27:56',
            '<span>10:43:15</span><br>11:30:58',
            '11:46:30',
            '11:47:47',
            '<span>12:15:15</span><br>12:48:59',
            '17:00:05',
            '<span>18:20:16</span><br>18:21:02',
            '11:53:28',
            '<span>12:54:45</span><br>20:56:56',
            '<span>11:27:04</span><br>12:05:55',
            '<span>15:26:28</span><br>15:47:50',
            '',
            '<span>11:04:39</span><br>11:05:53',
            '17:05:47',
            '19:09:38',
            '09:57:59',
            '<span>11:35:44</span><br>12:06:45',
            '<span>12:48:01</span><br>12:51:59',
            '15:06:23',
            '<span>16:50:03</span><br>17:10:47',
            '17:12:42',
            '<span>17:52:35</span><br>17:54:08',
            '<span>18:07:37</span><br>18:07:38',
            '18:45:45',
            '<span>20:50:12</span><br>20:54:45',
            '21:09:57',
            '<span>21:13:03</span><br>21:19:37',
            '22:10:29',
            '08:55:18',
            '09:32:08',
            '<span>09:46:43</span><br>10:53:50',
            '11:18:46',
            '<span>11:59:59</span><br>12:47:04',
            '15:52:36',
            '<span>16:56:52</span><br>17:00:46',
            '17:19:51',
            '<span>17:27:36</span><br>17:34:31',
            '17:56:25',
            '22:38:28',
            '<span>10:07:05</span><br>10:07:07',
            '11:06:29',
            '<span>11:56:27</span><br>13:21:32',
            '13:54:49',
            '<span>15:23:10</span><br>15:23:11',
            '<span>15:30:24</span><br>16:39:26',
            '<span>17:18:36</span><br>17:57:36',
            '09:33:04',
            '<span>12:23:30</span><br>13:53:15',
            '<span>14:39:17</span><br>14:48:46',
            '14:54:20',
            '<span>16:10:54</span><br>16:10:55',
            '16:11:21',
            '10:42:36',
            '<span>12:37:37</span><br>12:59:50',
            '<span>13:13:00</span><br>13:15:58',
            '<span>13:16:01</span><br>13:56:26',
            '14:34:57',
            '<span>14:40:56</span><br>15:47:12',
            '<span>16:05:58</span><br>16:06:04',
            '17:32:37',
            '17:53:47',
            '18:54:29',
            '<span>19:01:36</span><br>19:22:05',
            '19:48:52',
            '<span>21:51:41</span><br>21:52:11',
            '<span>08:38:00</span><br>08:39:47',
            '<span>09:23:31</span><br>09:24:48',
            '<span>09:27:50</span><br>12:03:40',
            '12:51:20',
            '<span>14:26:41</span><br>14:45:46',
            '15:06:42',
            '15:18:31',
            '<span>15:21:31</span><br>15:21:33',
            '16:46:14',
            '<span>19:41:02</span><br>20:49:59',
            '21:14:29',
            '21:44:04',
            '21:45:40',
            '<span>09:21:01</span><br>11:00:15',
            '<span>11:07:25</span><br>12:05:40',
            '<span>13:45:42</span><br>13:57:01',
            '13:58:54',
            '<span>14:22:52</span><br>16:52:00',
            '<span>16:55:13</span><br>17:02:25',
            '10:45:56',
            '10:46:10',
            '<span>11:27:35</span><br>12:11:44',
            '<span>15:17:50</span><br>16:23:53',
            '16:28:20',
            '16:35:54',
            '<span>08:46:46</span><br>08:53:20',
            '09:55:08',
            '',
            '13:00:57',
            '13:25:38',
            '<span>15:05:14</span><br>15:05:19',
            '16:32:45',
            '<span>17:42:51</span><br>18:07:59',
            '19:52:22',
            '19:54:24',
            '11:11:27',
            '<span>11:20:48</span><br>12:49:16',
            '',
            '17:41:32',
            '',
            '09:41:29',
            '12:00:34',
            '<span>13:08:24</span><br>17:06:17',
            '<span>17:07:05</span><br>19:32:27',
            '<span>20:54:47</span><br>20:54:56',
            '<span>21:02:33</span><br>09:42:14',
            '10:03:50',
            '10:07:59',
            '<span>11:25:52</span><br>11:27:33',
            '<span>13:40:25</span><br>15:33:22',
            '16:30:47',
            '',
            '17:12:10',
            '<span>17:25:08</span><br>17:29:53',
            '18:33:39',
            '<span>11:05:49</span><br>11:27:50',
            '12:06:14',
            '12:08:24',
            '<span>12:26:07</span><br>12:27:08',
            '13:42:00',
            '<span>13:42:00</span><br>14:00:13',
            '14:00:13',
            '14:02:18',
            '<span>14:24:08</span><br>14:52:58',
            '<span>15:00:36</span><br>15:08:23',
            '15:14:12',
            '<span>20:12:05</span><br>23:16:40',
            '11:23:11',
            '<span>11:40:05</span><br>13:21:24',
            '<span>13:52:38</span><br>13:58:30',
            '<span>15:30:19</span><br>15:45:39',
            '16:11:24',
            '20:06:33'
        ];

        if (page === "projet-3.html") {
            for (let i = 1; i < 196; i++) {
                document.getElementById(`next-${i}`).addEventListener("click", function () {
                    if (i === 195) {
                        caption.innerHTML = captionInfo[0];
                    } else {
                        caption.innerHTML = captionInfo[i];
                    } 
                });
        
                document.getElementById(`prev-${i}`).addEventListener("click", function () {
                    if (i === 1) {
                        caption.innerHTML = captionInfo[captionInfo.length - 1];
                    } else {
                        caption.innerHTML = captionInfo[i - 2];
                    }
                });
            }
        
            caption.addEventListener("mouseover", function() {
                for (let i = 0; i < 5; i++) {
                    if (caption.innerHTML === captionInfo[extendableCaptionIndexes[i]]) {
                        caption.style.cursor = "pointer";
                    } 
                }
            });
        
            caption.addEventListener("click", function() {
                for (let i = 0; i < 5; i++) {
                    if (caption.innerHTML === captionInfo[extendableCaptionIndexes[i]]) {
                        caption.innerHTML = extendedCaptions[i];
                        caption.style.cursor = "text";
                    } 
                }
            });
        } else if (page === "projet-3-2.html") {
            for (let i = 1; i < 196; i++) {
                document.getElementById(`next-${i}`).addEventListener("click", function () {
                    if (i === 195) {
                        altCaptionUp.innerHTML = altCaptionInfo[0][0][0];
                        altCaptionMid.innerHTML = altCaptionInfo[0][0][1];
                        altCaptionBottom.innerHTML = altCaptionInfo[0][0][2];
                        secondAltCaption.innerHTML = altCaptionInfo[0][1][0];
                    } else {
                        altCaptionUp.innerHTML = altCaptionInfo[i][0][0];
                        altCaptionMid.innerHTML = altCaptionInfo[i][0][1];
                        altCaptionBottom.innerHTML = altCaptionInfo[i][0][2];
                        secondAltCaption.innerHTML = altCaptionInfo[i][1][0];
                    } 
                });
        
                document.getElementById(`prev-${i}`).addEventListener("click", function () {
                    if (i === 1) {
                        altCaptionUp.innerHTML = altCaptionInfo[altCaptionInfo.length - 1][0][0];
                        altCaptionMid.innerHTML = altCaptionInfo[altCaptionInfo.length - 1][0][1];
                        altCaptionBottom.innerHTML = altCaptionInfo[altCaptionInfo.length - 1][0][2];
                        secondAltCaption.innerHTML = altCaptionInfo[altCaptionInfo.length - 1][1][0];
                    } else {
                        altCaptionUp.innerHTML = altCaptionInfo[i - 2][0][0];
                        altCaptionMid.innerHTML = altCaptionInfo[i - 2][0][1];
                        altCaptionBottom.innerHTML = altCaptionInfo[i - 2][0][2];
                        secondAltCaption.innerHTML = altCaptionInfo[i - 2][1][0];
                    }
                });
            }
        }
    }

    slideLayout();
    landscapeNav();
    captionSwitch();
}

function portraitContent() {

    function portraitLayout() {

        const smallHalftone = [1, 12, 13, 15, 30, 46, 58, 72, 82, 86, 88, 92, 102, 106, 108, 121, 123, 132, 147, 153, 154, 155, 163, 169, 173, 175, 183, 205, 210, 213, 214, 225, 228, 229, 239, 245, 247, 249, 263, 264, 267, 271, 272, 277, 278, 281, 283];
        const bigHalftone = [4, 11, 14, 16, 49, 74, 85, 89, 95, 101, 109, 111, 137, 139, 142, 156, 176, 191, 203, 204, 209, 215, 221, 226, 227, 243, 248, 250, 254, 259, 265, 266, 269, 279, 282];
        const smallPortrait = [3, 6, 8, 9, 19, 20, 22, 23, 27, 32, 34, 36, 41, 48, 53, 65, 66, 69, 75, 79, 80, 87, 90, 94, 96, 98, 100, 110, 112, 113, 117, 120, 127, 129, 131, 134, 135, 136, 138, 143, 144, 150, 157, 158, 160, 161, 166, 167, 170, 172, 177, 178, 180, 181, 184, 185, 188, 190, 192, 194, 195, 196, 197, 200, 202, 208, 216, 217, 219, 220, 222, 231, 232, 234, 237, 241, 242, 244, 246, 255, 256, 257, 262, 268, 273, 275];
        const bigPortrait = [2, 5, 10, 18, 21, 26, 28, 33, 35, 42, 43, 45, 47, 51, 54, 57, 59, 67, 76, 77, 78, 81, 83, 84, 91, 93, 97, 103, 104, 105, 114, 115, 116, 122, 126, 128, 130, 133, 145, 148, 149, 152, 159, 164, 165, 168, 171, 174, 179, 182, 186, 187, 189, 198, 199, 201, 211, 218, 224, 230, 233, 238, 240, 252, 253, 258, 261, 270, 274, 276, 280];
        const smallLandscape = [38, 40, 52, 68, 73, 124, 141, 260];
        const bigLandscape = [7, 17, 24, 29, 31, 37, 39, 44, 50, 55, 56, 60, 61, 71, 99, 107, 118, 119, 125, 140, 146, 151, 162, 193, 206, 207, 212, 223, 235, 236, 251];
        const twoThirds = [25, 62, 63, 64, 70];
        const blank  = [21, 32, 45, 84, 92, 104, 157, 208, 217, 231, 236];
    
        for (let i = 1; i < 284; i++) {
    
            let imageWidth;
            let imageRatio;
    
            if (smallHalftone.includes(i)) {
                imageWidth = 48;
                imageRatio = 7 / 6;
            } else if (bigHalftone.includes(i)) {
                imageWidth = 80;
                imageRatio = 7 / 6;
            } else if (smallPortrait.includes(i)) {
                imageWidth = 56;
                imageRatio = 5 / 4;
            } else if (bigPortrait.includes(i)) {
                imageWidth = 80;
                imageRatio = 5 / 4;
            } else if (smallLandscape.includes(i)) {
                imageWidth = 56;
                imageRatio = 4 / 5;
            } else if (bigLandscape.includes(i)) {
                imageWidth = 80;
                imageRatio = 4 / 5;
            } else if (twoThirds.includes(i)) {
                imageWidth = 67;
                imageRatio = 3 / 2;
            } 
    
            const image = document.createElement("img");
    
            if (i !== 1) {
                image.setAttribute("loading", "lazy");
            }
            
            if (innerWidth < 500) {
                image.src = `/img/japon/portrait/small/${i}.jpg`;
            } else {
                image.src = `/img/japon/portrait/${i}.jpg`;
            }
    
            const vwHeight = imageWidth * imageRatio;
            const pxHeight = (vwHeight * innerWidth) / 100;
    
            image.style.width = `${imageWidth}vw`;
            image.style.left = Math.floor(Math.random() * (100 - imageWidth)) + "vw";
            image.style.top = Math.floor(Math.random() * (innerHeight - pxHeight)) + "px";
    
            const container = document.createElement("div");
            container.id = `portrait-content-${i}`;
            container.classList.add("content--japon--portrait__container");
    
            if (i === 1 || blank.includes(i)) {
                container.classList.add("content--japon--portrait__container--blank");
            } else {
                image.classList.add("content--japon--portrait__image");
            }
    
            if (i !== 1) {
                container.classList.add("content--japon--portrait__container--hidden");
            }
    
            if (i === 283) {
                const reset = document.createElement("a");
                reset.setAttribute("href", "./projet-3.html");
                container.appendChild(image);
                reset.appendChild(container);
                document.querySelector(".content--japon--portrait").appendChild(reset);
            } else {
                container.appendChild(image);
                document.querySelector(".content--japon--portrait").appendChild(container);
            }
        }
    }
    
    function portraitSwitch(start) {
        for (let i = start; i < 284; i++) {
            document.querySelector(`#portrait-content-${i}`).addEventListener("click", function () {
                document.querySelector(`#portrait-content-${i + 1}`).classList.remove("content--japon--portrait__container--hidden");
            });
        }
    }
    
    const portraitNavInfo = [
        [1, "7.15"],
        [13, "7.18"],
        [30, "7.21"],
        [45, "7.24"],
        [87, "7.27"],
        [99, "7.30"],
        [146, "8.02"],
        [195, "8.05"],
        [228, "8.08"],
        [244, "8.11"]
    ]; 
    
    function portraitNav() {
        
        function portraitNavLayout(array) {
            for (let i = 0; i < array.length; i++) {
                const navItem = document.createElement("li");
                navItem.textContent = array[i][1];
                navItem.id = `portrait-content-nav-${i}`;
    
                document.querySelector(".content__nav--portrait").appendChild(navItem);
            }
        }
    
        portraitNavLayout(portraitNavInfo);
    
        function portraitNavReset(array, index) {
            for (let i = 1; i < 284; i++) {
                document.querySelector(`#portrait-content-${i}`).classList.add("content--japon--portrait__container--hidden");
            }
            document.querySelector(`#portrait-content-${array[index][0]}`).classList.remove("content--japon--portrait__container--hidden");
            portraitSwitch(array[index][0]);
        }
    
        for (let i = 0; i < portraitNavInfo.length; i++) {
            document.querySelector(`#portrait-content-nav-${i}`).addEventListener("click", function() {
                portraitNavReset(portraitNavInfo, i);
            });
        }
    }

    portraitLayout();
    portraitSwitch(1);
    portraitNav();
}

if (innerHeight < innerWidth) {
    landscapeContent();
} else {
    portraitContent();
}