innerHeight<innerWidth?(function(){function a(a,i){const o=document.createElement("div"),t=document.createElement("div"),e=document.createElement("img");t.appendChild(e),o.appendChild(t),innerHeight<500?e.src=`/img/japon/small/${i}.jpg`:innerHeight<900?e.src=`/img/japon/medium/${i}.jpg`:([157,245,216].includes(i)?(o.classList.add("slide__layout"),t.classList.add("dragscroll","dragscroll--small")):[5,203,387].includes(i)&&(o.classList.add("slide__layout"),t.classList.add("dragscroll","dragscroll--big")),e.src=`/img/japon/${i}.jpg`),1!==i&&2!==i&&e.setAttribute("loading","lazy"),a.appendChild(o)}for(let i=1;i<196;i++){const o=document.createElement("div");o.classList.add("slide"),o.id=`slide-${i}`;const t=document.createElement("a");t.classList.add("slide__button","slide__button--prev"),t.id=`prev-${i}`,t.href=1===i?"#slide-195":"#slide-"+(i-1),o.appendChild(t),a(t,2*i-1);const e=document.createElement("a");e.classList.add("slide__button","slide__button--next"),e.id=`next-${i}`,e.href=195===i?"#slide-1":`#slide-${i+1}`,o.appendChild(e),a(e,2*i),document.querySelector(".content--japon").appendChild(o)}const i=document.querySelectorAll(".dragscroll");for(let a of i)a.addEventListener("click",(function(a){a.preventDefault(),a.stopPropagation()}))}(),function(){const a=document.querySelector(".content__nav"),i=document.querySelector(".content__nav--mobile"),o="desktop-content-nav-",t="mobile-content-nav-";function e(a,i,o){for(let t=0;t<a.length;t++){const e=document.createElement("a");e.href=`#slide-${a[t][0]}`,e.id=o+(t+1),e.textContent=a[t][1];const n=document.createElement("li");n.appendChild(e),i.appendChild(n)}}function n(a,i){for(let o=0;o<a.length;o++)document.getElementById(i+(o+1)).addEventListener("click",(function(){document.querySelector(".caption").innerHTML=a[o]}))}e([["1","7.15"],["3","7.17"],["15","7.19"],["23","7.21"],["29","7.23"],["45","7.25"],["65","7.27"],["70","7.29"],["86","7.31"],["104","8.02"],["123","8.04"],["142","8.06"],["158","8.08"],["163","8.10"],["178","8.12"]],a,o),e([["1","7.15"],["10","7.18"],["23","7.21"],["35","7.24"],["65","7.27"],["73","7.30"],["104","8.02"],["136","8.05"],["158","8.08"],["168","8.11"]],i,t),n(["Tokyo, Asakusa, 15 juillet 2019 - 16:33:43",'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:13:34',"Tokyo, Asakusa Line, 19 juillet 2019 - 06:14:02","Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53","Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49<br>Shimoda, Izu Kyūkō Line, 23 juillet 2019 - 11:13:19","Itō, Yawatano, 25 juillet 2019","Hakone, Gora Line, 27 juillet 2019 - 11:53:28","Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39<br>Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:05:53","Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18","Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04","Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00<br>Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47","Shinkansen Sakura 549, 6 août 2019 - 10:45:56","Shinkansen Hikari 442, 8 août 2019 - 11:11:27","Shinkansen, 10 août 2019 - 09:41:29","Tokyo, Ueno, 12 août 2019 - 11:05:49<br>Tokyo, Ueno, 12 août 2019 - 11:27:50"],o),n(["Tokyo, Asakusa, 15 juillet 2019 - 16:33:43","Tokyo, Asakusa, 18 juillet 2019 - 09:47:42","Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53","Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48","Hakone, Gora Line, 27 juillet 2019 - 11:53:28","Fujikawaguchiko, 30 juillet 2019 - 09:57:59","Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04","Osaka, Yoshino, 5 août 2019 - 09:21:01<br>Osaka, Yoshino, 5 août 2019 - 11:00:15","Shinkansen Hikari 442, 8 août 2019 - 11:11:27","Tokyo, Ueno Station, 10 août 2019 - 21:02:33<br>Tokyo, Ueno, 11 août 2019 - 09:42:14"],t)}(),function(){const a=["Tokyo, Asakusa, 15 juillet 2019 - 16:33:43",'Tokyo, Shinjuku, "Purikura", 16 juillet 2019 - 17:43:28<br>Tokyo, Shinjuku, "Purikura", 16 juillet 2019 - 18:00:44','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:13:34','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:14:24<br>Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:15:18','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:15:40','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:16:02','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:30:57<br>Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:32:06','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:34:55','Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:35:08',"Tokyo, Asakusa, 18 juillet 2019 - 09:47:42","Tokyo, Asakusa, 18 juillet 2019 - 10:22:39","Tokyo, Asakusa, 18 juillet 2019 - 11:35:14<br>Tokyo, Aoyama, 18 juillet 2019 - 12:44:57","Tokyo, Samoncho, 18 juillet 2019 - 13:10:58","Tokyo, Yotsuya, 18 juillet 2019 - 13:12:59<br>Tokyo, Shinjuku, 18 juillet 2019 - 15:47:36","Tokyo, Asakusa Line, 19 juillet 2019 - 06:14:02","Shikine-jima, Tomari Beach, 19 juillet 2019<br>Shikine-jima, Jinata Onsen, 19 juillet 2019","Shikine-jima, 亀吉大家, 20 juillet 2019","Shikine-jima, 20 juillet 2019 - 14:28:12","Shikine-jima, 唐人津城, 20 juillet 2019","Shikine-jima, 隈の井, 20 juillet 2019<br>Shikine-jima, 隈の井, 20 juillet 2019","Shikine-jima, 20 juillet 2019","Shikine-jima, 20 juillet 2019","Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53","Shikine-jima, Azalea Ferry, 21 juillet 2019",'Shimoda, "Jizō", 21 juillet 2019<br>Shimoda, 21 juillet 2019',"Shimoda, Aoki, 22 juillet 2019 - 11:31:27","Shimoda, Kisami, 22 juillet 2019","Shimoda, Kisami Ohama Beach, 22 juillet 2019","Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49<br>Shimoda, Izu Kyūkō Line, 23 juillet 2019 - 11:13:19","Kawazu, Tanaka, 23 juillet 2019 - 11:50:41","Kawazu, Seven Waterfalls, 23 juillet 2019 - 13:54:07","Kawazu, Seven Waterfalls, 23 juillet 2019<br>Kawazu, Seven Waterfalls, 23 juillet 2019","Kawazu, Seven Waterfalls, 23 juillet 2019 - 14:35:35","Kawazu, Kawazu Station, 23 juillet 2019 - 16:51:35","Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48","Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:46:58<br>Itō, Yawatano, 24 juillet 2019 - 12:38:37","Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:27<br>Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:38","Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:49:13","Itō, Itō Station, 24 juillet 2019 - 13:08:15","Itō, Saiwaicho, 24 juillet 2019 - 14:46:07","Itō, Matsukawacho, 24 juillet 2019 - 15:01:21<br>Itō, Matsukawacho, 24 juillet 2019 - 15:01:52","Itō, Itō Orange Beach, 24 juillet 2019 - 15:28:29","Itō, Yukawa, 24 juillet 2019 - 18:22:54",'Itō, Higashimatsubaracho, "Rāmen", 24 juillet 2019 - 22:01:40<br>Itō, Izu Kyūkō Line, 24 juillet 2019 - 22:35:57',"Itō, Yawatano, 25 juillet 2019","Itō, Yawatano, 25 juillet 2019 - 09:49:51<br>Jōgasaki Kaigan, 25 juillet 2019","Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52<br>+","Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56<br>+","Jōgasaki Kaigan, 25 juillet 2019 - 12:16:55","Jōgasaki Kaigan, 25 juillet 2019<br>Jōgasaki Kaigan, 25 juillet 2019","Jōgasaki Kaigan, 25 juillet 2019","Jōgasaki Kaigan, Renchakuji-Okunoin, 25 juillet 2019 - 13:54:11<br>Jōgasaki Kaigan, 25 juillet 2019","Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:54:48","Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:59:34","Jōgasaki Kaigan, 25 juillet 2019 - 15:27:11<br>+","Jōgasaki Kaigan, Kadowakitsuri Bridge, 25 juillet 2019 - 15:53:19","Itō, Yukawa, 25 juillet 2019 - 17:25:11<br>Itō, Matsukawacho, 25 juillet 2019","Itō, Izukyu-Line, 25 juillet 2019 - 21:27:56","Itō, Itō Line, 26 juillet 2019 - 10:43:15<br>Itō, Itō Line, 26 juillet 2019 - 11:30:58","Odawara, Odawara Station, 26 juillet 2019 - 11:46:30","Odawara, Odawara Station, 26 juillet 2019 - 11:47:47","Odawara, Odawara Station, 26 juillet 2019 - 12:15:15<br>Odawara, Odawara Station, 26 juillet 2019 - 12:48:59","Hakone, Onshi Hakone Park, 26 juillet 2019 - 17:00:05","Hakone, Hakonemachi Line, 26 juillet 2019 - 18:20:16<br>Hakone, Hakonemachi Line, 26 juillet 2019 - 18:21:02","Hakone, Gora Line, 27 juillet 2019 - 11:53:28","Hakone, Hakone-jinja, 27 juillet 2019 - 12:54:45<br>Hakone, Togendai Line, 27 juillet 2019 - 20:56:56","Gotemba, Gotemba Station, 28 juillet 2019 - 11:27:04<br>Gotemba, Gotemba Station, 28 juillet 2019 - 12:05:55","Fujikawaguchiko, Mount Tenjō Ropeway, 28 juillet 2019 - 15:26:28<br>Fujikawaguchiko, Mount Tenjō, 28 juillet 2019 - 15:47:50","Fujikawaguchiko, Tenjoyama Park, 28 juillet 2019","Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39<br>Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:05:53","Fujikawaguchiko, Kawaguchi, 29 juillet 2019 - 17:05:47","Fujikawaguchiko, Funatsu, 29 juillet 2019 - 19:09:38","Fujikawaguchiko, 30 juillet 2019 - 09:57:59","Yokohama Line, 30 juillet 2019 - 11:35:44<br>Yokohama Line, 30 juillet 2019 - 12:06:45","Shinkansen Hikari 471, 30 juillet 2019 - 12:48:01<br>Shinkansen Hikari 471, 30 juillet 2019 - 12:51:59","Kyoto, Karasuma Line, 30 juillet 2019 - 15:06:23","Kyoto, Ayazaimokucho, 30 juillet 2019 - 16:50:03<br>Kyoto, Nishiki Market, 30 juillet 2019 - 17:10:47","Kyoto, Nishiki Market, 30 juillet 2019 - 17:12:42","Kyoto, Shijoo Bridge, 30 juillet 2019 - 17:52:35<br>Kyoto, Kawabatacho, 30 juillet 2019 - 17:54:08","Kyoto, Higashiyama, 30 juillet 2019 - 18:07:37<br>Kyoto, Higashiyama, 30 juillet 2019 - 18:07:38","Kyoto, Higashiyama, 30 juillet 2019 - 18:45:45","Kyoto, Daikokucho, 30 juillet 2019 - 20:50:12<br>Kyoto, Daikokucho, 30 juillet 2019 - 20:54:45","Kyoto, Daikokucho, 30 juillet 2019 - 21:09:57","Kyoto, Daikokucho, 30 juillet 2019 - 21:13:03<br>Kyoto, Daikokucho, 30 juillet 2019 - 21:19:37","Kyoto, Kasabokocho, 30 juillet 2019 - 22:10:29","Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18","Nara Line, 31 juillet 2019 - 09:32:08","Nara Line, 31 juillet 2019 - 09:46:43<br>Nara, Higashimuki Nakamachi, 31 juillet 2019 - 10:53:50","Nara, Yoshiki-en, 31 juillet 2019 - 11:18:46","Nara, Tōdai-ji, 31 juillet 2019 - 11:59:59<br>Nara, Tōdai-ji, 31 juillet 2019 - 12:47:04","Nara, Nara Park, 31 juillet 2019 - 15:52:36","Nara, Mochiidonocho, 31 juillet 2019 - 16:56:52<br>Nara, Mochiidonocho, 31 juillet 2019 - 17:00:46","Nara, Sanjōchō, 31 juillet 2019 - 17:19:51","Nara, Nara Station, 31 juillet 2019 - 17:27:36<br>Nara, Nara Station, 31 juillet 2019 - 17:34:31","Nara Line, 31 juillet 2019 - 17:56:25","Kyoto, Naginatabokocho, 31 juillet 2019 - 22:38:28","Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:05<br>Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:07","Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:06:29","Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:56:27<br>Kyoto, Fushimi Inari-taisha, 1er août 2019 - 13:21:32","Kyoto, Kyoto Station, 1er août 2019 - 13:54:49","Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:10<br>Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:11","Kyoto, Ginkakujimaecho, 1er août 2019 - 15:30:24<br>Kyoto, Jodoji Kamiminamidacho, 1er août 2019 - 16:39:26","Kyoto, 1er août 2019 - 17:18:36<br>Kyoto, Okazaki Higashitennocho, 1er août 2019 - 17:57:36","Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04","Kyoto, Ryōan-ji, 2 août 2019 - 12:23:30<br>Kyoto, Kinkaku-ji, 2 août 2019 - 13:53:15","Kyoto, Kinugasanishi Goshonouchicho, 2 août 2019 - 14:39:17<br>Kyoto, Murasakino Nishifunaokacho, 2 août 2019 - 14:48:46","Kyoto, 2 août 2019 - 14:54:20","Kyoto, Higashiyama, 2 août 2019 - 16:10:54<br>Kyoto, Higashiyama, 2 août 2019 - 16:10:55","Kyoto, Higashiyama, 2 août 2019 - 16:11:21","Kyoto, Kyoto Station, 3 août 2019 - 10:42:36","Kyoto, Noda Station, 3 août 2019 - 12:37:37<br>Osaka, Ebisunishi, 3 août 2019 - 12:59:50","Osaka, Ebisuhigashi, 3 août 2019 - 13:13:00<br>Osaka, Ebisuhigashi, 3 août 2019 - 13:15:58","Osaka, Ebisuhigashi, 3 août 2019 - 13:16:01<br>Osaka, Nipponbashi, 3 août 2019 - 13:56:26","Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:34:57","Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:40:56<br>Osaka, Kuromon Ichiba Market, 3 août 2019 - 15:47:12","Osaka, Sennichimae, 3 août 2019 - 16:05:58<br>Osaka, Sennichimae, 3 août 2019 - 16:06:04","Osaka, Amerikamura, 3 août 2019 - 17:32:37","Osaka, Amerikamura, 3 août 2019 - 17:53:47","Osaka, Dōtonbori, 3 août 2019 - 18:54:29","Osaka, Dōtonbori, 3 août 2019 - 19:01:36<br>Osaka, Dōtonbori, 3 août 2019 - 19:22:05","Osaka, Dōtonbori, 3 août 2019 - 19:48:52","Osaka, Dōtonbori, 3 août 2019 - 21:51:41<br>Osaka, Dōtonbori, 3 août 2019 - 21:52:11","Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00<br>Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47","Nankai Kōya Line, 4 août 2019 - 09:23:31<br>+","Nankai Kōya Line, 4 août 2019 - 09:27:50<br>Koyasan, Haraigawa Park, 4 août 2019 - 12:03:40","Koyasan, Danjōgaran, 4 août 2019 - 12:51:20","Koyasan, 4 août 2019 - 14:26:41<br>Koyasan, Kongō Sanmai-in, 4 août 2019 - 14:45:46","Koyasan, 4 août 2019<br>Koyasan, 4 août 2019 - 15:06:42","Koyasan, 4 août 2019 - 15:18:31","Koyasan, Jimyo-in, 4 août 2019 - 15:21:31<br>Koyasan, Jimyo-in, 4 août 2019 - 15:21:33","Koyasan, Okunoin Cemetery, 4 août 2019 - 16:46:14","Kōya, Gokurakubashi Station, 4 août 2019 - 19:41:02<br>Osaka, Namba, 4 août 2019 - 20:49:59","Osaka, Dōtonbori, 4 août 2019 - 21:14:29","Osaka, Namba, 4 août 2019 - 21:44:04","Osaka, Namba, 4 août 2019 - 21:45:40","Osaka, Yoshino, 5 août 2019 - 09:21:01<br>Osaka, Yoshino, 5 août 2019 - 11:00:15","Osaka, Yoshino, 5 août 2019 - 11:07:25<br>Osaka, Osaka Castle Park, 5 août 2019 - 12:05:40","Osaka, Tenjinbashi, 5 août 2019 - 13:45:42<br>Osaka, Nishitenma, 5 août 2019 - 13:57:01","Osaka, Nishitenma, 5 août 2019 - 13:58:54","Osaka, 露天神社, 5 août 2019 - 14:22:52<br>Osaka, Umeda, 5 août 2019 - 16:52:00","Osaka, Umeda, 5 août 2019 - 16:55:13<br>Osaka, Tsurunocho, 5 août 2019 - 17:02:25","Shinkansen Sakura 549, 6 août 2019 - 10:45:56","Shinkansen Sakura 549, 6 août 2019 - 10:46:10","Hiroshima, Ebisucho, 6 août 2019 - 11:27:35<br>Hiroshima, Hondori, 6 août 2019 - 12:11:44","Hiroshima, Hondori, 6 août 2019 - 15:17:50<br>Hiroshima, Otemachi, 6 août 2019 - 16:23:53","Hiroshima, Otemachi, 6 août 2019 - 16:28:20","Hiroshima, Motoyasu Bridge, 6 août 2019 - 16:35:54","Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:46:46<br>Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:53:20","Hatsukaichi, Miyajimaguchi, 7 août 2019 - 09:55:08","Itsuku-shima, 7 août 2019","Itsuku-shima, Mount Misen, 7 août 2019 - 13:00:57","Itsuku-shima, Misen Tenboudai, 7 août 2019<br>Itsuku-shima, Misen Tenboudai, 7 août 2019 - 13:25:38",'Itsuku-shima, Daishō-in, "Daruma", 7 août 2019 - 15:05:14<br>Itsuku-shima, Daishō-in, 7 août 2019 - 15:05:19',"Itsuku-shima, 7 août 2019 - 16:32:45",'Itsuku-shima, 7 août 2019 - 17:42:51<br>Itsuku-shima, "Komainu", 7 août 2019 - 18:07:59',"Sanyō Main Line, 7 août 2019 - 19:52:22","Sanyō Main Line, 7 août 2019 - 19:54:24","Shinkansen Hikari 442, 8 août 2019 - 11:11:27","Shinkansen Hikari 442, 8 août 2019 - 11:20:48<br>Nakatsugawa, Nakatsugawa Station, 8 août 2019 - 12:49:16","Magome, 8 août 2019<br>Magome, 8 août 2019","Magome, 8 août 2019 - 17:41:32","Tsumago, 9 août 2019","Shinkansen, 10 août 2019 - 09:41:29","Tokyo, Okachimachi Station, 10 août 2019 - 12:00:34","Tokyo, Ebisu, 10 août 2019 - 13:08:24<br>Tokyo, Shibuya, 10 août 2019 - 17:06:17","Tokyo, Shibuya, 10 août 2019 - 17:07:05<br>Tokyo, Jingūmae, 10 août 2019 - 19:32:27","Tokyo, Yamanote Line, 10 août 2019 - 20:54:47<br>+","Tokyo, Ueno Station, 10 août 2019 - 21:02:33<br>Tokyo, Ueno, 11 août 2019 - 09:42:14","Tokyo, Tokyo Station, 11 août 2019 - 10:03:50","Tokyo, Yokosuka Line, 11 août 2019 - 10:07:59","Kamakura, Komachi, 11 août 2019 - 11:25:52<br>Kamakura, Komachi, 11 août 2019 - 11:27:33","Kamakura, Yukinoshita, 11 août 2019 - 13:40:25<br>Kamakura, Komachi, 11 août 2019 - 15:33:22","Kamakura, Kōtoku-in, 11 août 2019 - 16:30:47","Kamakura, Kōtoku-in, Kamakura Daibutsu, 11 août 2019","Kamakura, Hase, 11 août 2019 - 17:12:10","Kamakura, Yuigahama Beach, 11 août 2019 - 17:25:08<br>Kamakura, Yuigahama Beach, 11 août 2019 - 17:29:53","Kamakura, Yuigahama Beach, 11 août 2019 - 18:33:39","Tokyo, Ueno, 12 août 2019 - 11:05:49<br>Tokyo, Ueno, 12 août 2019 - 11:27:50","Tokyo, Ueno, 12 août 2019 - 12:06:14","Tokyo, Ueno, 12 août 2019 - 12:08:24","Tokyo, Ueno Park, 12 août 2019 - 12:26:07<br>Tokyo, Ueno Park, 12 août 2019 - 12:27:08","Tokyo, Yanaka, 12 août 2019 - 13:42:00","Tokyo, Yanaka, 12 août 2019 - 13:42:00<br>Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13","Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13","Tokyo, Nishi-Nippori, 12 août 2019 - 14:02:18","Tokyo, Nishi-Nippori, 12 août 2019 - 14:24:08<br>Tokyo, Nishi-Nippori, 12 août 2019 - 14:52:58","Tokyo, Nishi-Nippori, 12 août 2019 - 15:00:36<br>Tokyo, Nishi-Nippori, 12 août 2019 - 15:08:23","Tokyo, Nishi-Nippori, 12 août 2019 - 15:14:12","Tokyo, Ueno, 12 août 2019 - 20:12:05<br>Tokyo, Ueno, 12 août 2019 - 23:16:40","Tokyo, Suehirochō Station, 13 août 2019 - 11:23:11","Tokyo, Akihabara, 13 août 2019 - 11:40:05<br>Tokyo, Toyosu, 13 août 2019 - 13:21:24","Tokyo, Tsukiji Market, 13 août 2019 - 13:52:38<br>Tokyo, Tsukiji Market, 13 août 2019 - 13:58:30","Tokyo, Tsukiji Market, 13 août 2019 - 15:30:19<br>Tokyo, Ginza, 13 août 2019 - 15:45:39","Tokyo, Ginza, 13 août 2019 - 16:11:24","Tokyo, Shinjuku Station, 13 août 2019 - 20:06:33"],i=[46,47,54,123,166],o=["Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:41:14<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:29:37<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:22:33<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:19:06<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:58:34<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:05:55<br>Jōgasaki Kaigan, 25 juillet 2019 - 13:24:42","Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56<br>Jōgasaki Kaigan, 25 juillet 2019 - 12:15:12<br>Jōgasaki Kaigan, 25 juillet 2019 - 11:49:27<br>Jōgasaki Kaigan, 25 juillet 2019","Jōgasaki Kaigan, 25 juillet 2019 - 15:27:11<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:13<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:20<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:21<br>Jōgasaki Kaigan, 25 juillet 2019 - 15:27:23","Nankai Kōya Line, 4 août 2019 - 09:23:31<br>Nankai Kōya Line, 4 août 2019 - 09:23:37<br>Nankai Kōya Line, 4 août 2019 - 09:23:50<br>Nankai Kōya Line, 4 août 2019 - 09:24:48","Tokyo, Yamanote Line, 10 août 2019 - 20:54:47<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:52<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:54<br>Tokyo, Yamanote Line, 10 août 2019 - 20:54:56"],t=document.querySelector(".caption");for(let i=1;i<196;i++)document.getElementById(`next-${i}`).addEventListener("click",(function(){t.innerHTML=195===i?a[0]:a[i]})),document.getElementById(`prev-${i}`).addEventListener("click",(function(){t.innerHTML=1===i?a[a.length-1]:a[i-2]}));t.addEventListener("mouseover",(function(){for(let o=0;o<5;o++)t.innerHTML===a[i[o]]&&(t.style.cursor="pointer")})),t.addEventListener("click",(function(){for(let e=0;e<5;e++)t.innerHTML===a[i[e]]&&(t.innerHTML=o[e],t.style.cursor="text")}))}()):function(){function a(a){for(let i=a;i<284;i++)document.querySelector(`#portrait-content-${i}`).addEventListener("click",(function(){document.querySelector(`#portrait-content-${i+1}`).classList.remove("content--japon--portrait__container--hidden")}))}const i=[[1,"7.15"],[13,"7.18"],[30,"7.21"],[45,"7.24"],[87,"7.27"],[99,"7.30"],[146,"8.02"],[195,"8.05"],[228,"8.08"],[244,"8.11"]];!function(){const a=[1,12,13,15,30,46,58,72,82,86,88,92,102,106,108,121,123,132,147,153,154,155,163,169,173,175,183,205,210,213,214,225,228,229,239,245,247,249,263,264,267,271,272,277,278,281,283],i=[4,11,14,16,49,74,85,89,95,101,109,111,137,139,142,156,176,191,203,204,209,215,221,226,227,243,248,250,254,259,265,266,269,279,282],o=[3,6,8,9,19,20,22,23,27,32,34,36,41,48,53,65,66,69,75,79,80,87,90,94,96,98,100,110,112,113,117,120,127,129,131,134,135,136,138,143,144,150,157,158,160,161,166,167,170,172,177,178,180,181,184,185,188,190,192,194,195,196,197,200,202,208,216,217,219,220,222,231,232,234,237,241,242,244,246,255,256,257,262,268,273,275],t=[2,5,10,18,21,26,28,33,35,42,43,45,47,51,54,57,59,67,76,77,78,81,83,84,91,93,97,103,104,105,114,115,116,122,126,128,130,133,145,148,149,152,159,164,165,168,171,174,179,182,186,187,189,198,199,201,211,218,224,230,233,238,240,252,253,258,261,270,274,276,280],e=[38,40,52,68,73,124,141,260],n=[7,17,24,29,31,37,39,44,50,55,56,60,61,71,99,107,118,119,125,140,146,151,162,193,206,207,212,223,235,236,251],l=[25,62,63,64,70],u=[21,32,45,84,92,104,157,208,217,231,236];for(let r=1;r<284;r++){let k,s;a.includes(r)?(k=48,s=7/6):i.includes(r)?(k=80,s=7/6):o.includes(r)?(k=56,s=5/4):t.includes(r)?(k=80,s=5/4):e.includes(r)?(k=56,s=.8):n.includes(r)?(k=80,s=.8):l.includes(r)&&(k=67,s=1.5);const h=document.createElement("img");1!==r&&h.setAttribute("loading","lazy"),innerWidth<500?h.src=`/img/japon/portrait/small/${r}.jpg`:h.src=`/img/japon/portrait/${r}.jpg`;const c=k*s*innerWidth/100;h.style.width=`${k}vw`,h.style.left=Math.floor(Math.random()*(100-k))+"vw",h.style.top=Math.floor(Math.random()*(innerHeight-c))+"px";const j=document.createElement("div");if(j.id=`portrait-content-${r}`,j.classList.add("content--japon--portrait__container"),1===r||u.includes(r)?j.classList.add("content--japon--portrait__container--blank"):h.classList.add("content--japon--portrait__image"),1!==r&&j.classList.add("content--japon--portrait__container--hidden"),283===r){const a=document.createElement("a");a.setAttribute("href","./projet-3.html"),j.appendChild(h),a.appendChild(j),document.querySelector(".content--japon--portrait").appendChild(a)}else j.appendChild(h),document.querySelector(".content--japon--portrait").appendChild(j)}}(),a(1),function(){function o(i,o){for(let a=1;a<284;a++)document.querySelector(`#portrait-content-${a}`).classList.add("content--japon--portrait__container--hidden");document.querySelector(`#portrait-content-${i[o][0]}`).classList.remove("content--japon--portrait__container--hidden"),a(i[o][0])}!function(a){for(let i=0;i<a.length;i++){const o=document.createElement("li");o.textContent=a[i][1],o.id=`portrait-content-nav-${i}`,document.querySelector(".content__nav--portrait").appendChild(o)}}(i);for(let a=0;a<i.length;a++)document.querySelector(`#portrait-content-nav-${a}`).addEventListener("click",(function(){o(i,a)}))}()}();