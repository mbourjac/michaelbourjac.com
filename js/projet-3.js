import { disableRightClick } from "./utils/disable-right-click.js";
import { projectsData } from "./utils/data.js";
import { responsiveLoading } from "./utils/responsive-loading.js";
import { slidesLayout } from "./utils/slides-layout.js";
import { createSpreads } from "./utils/spreads-layout.js";

const projectData = projectsData[projectsData.length - 3];

disableRightClick();

function createSlides() {
    const picturesData = [
        {},
        {
            caption: "Tokyo, Shinjuku, 16 juillet 2019 - 17:43:28",
            width: 100,
        },
        {
            caption: "Tokyo, Shinjuku, 16 juillet 2019 - 18:00:44",
            width: 100,
        },
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:14:24",
            width: 150,
        },
        {},
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:15:18",
            width: 150,
        },
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:16:02",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:30:57",
            width: 100,
        },
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:32:06",
            width: 150,
        },
        {},
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:34:55",
            width: 150,
        },
        {
            caption: "Tokyo, Shibuya, 17 juillet 2019 - 22:35:08",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Asakusa, 18 juillet 2019 - 09:47:42",
            width: 100,
        },
        {},
        {},
        {
            caption: "Tokyo, Asakusa, 18 juillet 2019 - 10:22:39",
            width: 150,
        },
        {
            caption: "Tokyo, Asakusa, 18 juillet 2019 - 11:35:14",
            width: 100,
        },
        {
            caption: "Tokyo, Aoyama, 18 juillet 2019 - 12:44:57",
            width: 150,
        },
        {},
        {
            caption: "Tokyo, Samoncho, 18 juillet 2019 - 13:10:58",
            width: 150,
        },
        {
            caption: "Tokyo, Yotsuya, 18 juillet 2019 - 13:12:59",
            width: 150,
        },
        {
            caption: "Tokyo, Shinjuku, 18 juillet 2019 - 15:47:36",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Asakusa Line, 19 juillet 2019 - 06:14:02",
            width: 100,
        },
        {
            caption: "Shikine-jima, Tomari Beach, 19 juillet 2019",
            width: 150,
        },
        {
            caption: "Shikine-jima, Jinata Onsen, 19 juillet 2019",
            width: 100,
        },
        {},
        {
            caption: "Shikine-jima, 亀吉大家, 20 juillet 2019",
            width: 100,
        },
        {},
        {
            caption: "Shikine-jima, 20 juillet 2019 - 14:28:12",
            width: 150,
        },
        {
            caption: "Shikine-jima, 唐人津城, 20 juillet 2019",
            width: 150,
        },
        {},
        {
            caption: "Shikine-jima, 隈の井, 20 juillet 2019",
            width: 150,
        },
        {
            caption: "Shikine-jima, 隈の井, 20 juillet 2019",
            width: 100,
        },
        {
            caption: "Shikine-jima, 20 juillet 2019",
            width: 150,
        },
        {},
        {},
        {
            caption: "Shikine-jima, 20 juillet 2019",
            width: 150,
        },
        {
            caption: "Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53",
            width: 100,
        },
        {},
        {},
        {
            caption: "Shikine-jima, Azalea Ferry, 21 juillet 2019",
            width: 150,
        },
        {
            caption: "Shimoda, Jizō, 21 juillet 2019",
            width: 100,
        },
        {
            caption: "Shimoda, 21 juillet 2019",
            width: 150,
        },
        {
            caption: "Shimoda, Aoki, 22 juillet 2019 - 11:31:27",
            width: 100,
        },
        {},
        {},
        {
            caption: "Shimoda, Kisami, 22 juillet 2019",
            width: 150,
        },
        {},
        {
            caption: "Shimoda, Kisami Ohama Beach, 22 juillet 2019",
            width: 100,
        },
        {
            caption: "Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49",
            width: 150,
        },
        {
            caption: "Shimoda, Izu Kyūkō Line, 23 juillet 2019 - 11:13:19",
            width: 100,
        },
        {
            caption: "Kawazu, Tanaka, 23 juillet 2019 - 11:50:41",
            width: 150,
        },
        {},
        {},
        {
            caption: "Kawazu, Seven Waterfalls, 23 juillet 2019 - 13:54:07",
            width: 100,
        },
        {
            caption: "Kawazu, Seven Waterfalls, 23 juillet 2019",
            width: 100,
        },
        {
            caption: "Kawazu, Seven Waterfalls, 23 juillet 2019",
            width: 150,
        },
        {},
        {
            caption: "Kawazu, Kawazu Station, 23 juillet 2019 - 16:51:35",
            width: 150,
        },
        {},
        {
            caption: "Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48",
            width: 150,
        },
        {
            caption: "Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:46:58",
            width: 100,
        },
        {
            caption: "Itō, Yawatano, 24 juillet 2019 - 12:38:37",
            width: 150,
        },
        {
            caption: "Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:27",
            width: 100,
        },
        {
            caption: "Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:38",
            width: 150,
        },
        {},
        {
            caption: "Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:49:13",
            width: 150,
        },
        {
            caption: "Itō, Itō Station, 24 juillet 2019 - 13:08:15",
            width: 150,
        },
        {},
        {},
        {
            caption: "Itō, Saiwaicho, 24 juillet 2019 - 14:46:07",
            width: 100,
        },
        {
            caption: "Itō, Matsukawacho, 24 juillet 2019 - 15:01:21",
            width: 100,
        },
        {
            caption: "Itō, Matsukawacho, 24 juillet 2019 - 15:01:52",
            width: 150,
        },
        {},
        {
            caption: "Itō, Itō Orange Beach, 24 juillet 2019 - 15:28:29",
            width: 150,
        },
        {
            caption: "Itō, Yukawa, 24 juillet 2019 - 18:22:54",
            width: 150,
        },
        {},
        {
            caption: "Itō, Higashimatsubaracho, 24 juillet 2019 - 22:01:40",
            width: 150,
        },
        {
            caption: "Itō, Izu Kyūkō Line, 24 juillet 2019 - 22:35:57",
            width: 100,
        },
        {},
        {
            caption: "Itō, Yawatano, 25 juillet 2019",
            width: 150,
        },
        {
            caption: "Itō, Yawatano, 25 juillet 2019 - 09:49:51",
            width: 150,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019",
            width: 100,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52",
            width: 150,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019 - 13:24:42",
            width: 150,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56",
            width: 150,
        },
        {},
        {},
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019 - 12:16:55",
            width: 100,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019",
            width: 100,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019",
            width: 150,
        },
        {},
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019",
            width: 100,
        },
        {
            caption:
                "Jōgasaki Kaigan, Renchakuji-Okunoin, 25 juillet 2019 - 13:54:11",
            width: 100,
        },
        {
            caption: "Jōgasaki Kaigan, 25 juillet 2019",
            width: 150,
        },
        {},
        {
            caption:
                "Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:54:48",
            width: 150,
        },
        {
            caption:
                "Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:59:34",
            width: 100,
        },
        {
            caption:
                "Jōgasaki Kaigan, Kadowakitsuri Bridge, 25 juillet 2019 - 15:53:19",
            width: 150,
        },
        {
            caption: "Itō, Yukawa, 25 juillet 2019 - 17:25:11",
            width: 100,
        },
        {
            caption: "Itō, Matsukawacho, 25 juillet 2019",
            width: 150,
        },
        {},
        {
            caption: "Itō, Izukyu-Line, 25 juillet 2019 - 21:27:56",
            width: 150,
        },
        {
            caption: "Itō, Itō Line, 26 juillet 2019 - 10:43:15",
            width: 150,
        },
        {
            caption: "Itō, Itō Line, 26 juillet 2019 - 11:30:58",
            width: 100,
        },
        {
            caption: "Odawara, Odawara Station, 26 juillet 2019 - 11:46:30",
            width: 100,
        },
        {},
        {},
        {
            caption: "Odawara, Odawara Station, 26 juillet 2019 - 11:47:47",
            width: 150,
        },
        {
            caption: "Odawara, Odawara Station, 26 juillet 2019 - 12:15:15",
            width: 100,
        },
        {
            caption: "Odawara, Odawara Station, 26 juillet 2019 - 12:48:59",
            width: 150,
        },
        {
            caption: "Hakone, Onshi Hakone Park, 26 juillet 2019 - 17:00:05",
            width: 150,
        },
        {},
        {
            caption: "Hakone, Hakonemachi Line, 26 juillet 2019 - 18:20:16",
            width: 150,
        },
        {
            caption: "Hakone, Hakonemachi Line, 26 juillet 2019 - 18:21:02",
            width: 100,
        },
        {
            caption: "Hakone, Gora Line, 27 juillet 2019 - 11:53:28",
            width: 100,
        },
        {},
        {
            caption: "Hakone, Hakone-jinja, 27 juillet 2019 - 12:54:45",
            width: 100,
        },
        {
            caption: "Hakone, Togendai Line, 27 juillet 2019 - 20:56:56",
            width: 150,
        },
        {
            caption: "Gotemba, Gotemba Station, 28 juillet 2019 - 11:27:04",
            width: 100,
        },
        {
            caption: "Gotemba, Gotemba Station, 28 juillet 2019 - 12:05:55",
            width: 150,
        },
        {
            caption:
                "Fujikawaguchiko, Mount Tenjō Ropeway, 28 juillet 2019 - 15:26:28",
            width: 100,
        },
        {
            caption: "Fujikawaguchiko, Mount Tenjō, 28 juillet 2019 - 15:47:50",
            width: 150,
        },
        {
            caption: "Fujikawaguchiko, Tenjoyama Park, 28 juillet 2019",
            width: 100,
        },
        {},
        {
            caption: "Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39",
            width: 100,
        },
        {
            caption: "Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:05:53",
            width: 150,
        },
        {},
        {
            caption: "Fujikawaguchiko, Funatsu, 29 juillet 2019 - 19:09:38",
            width: 100,
        },
        {},
        {
            caption: "Fujikawaguchiko, 30 juillet 2019 - 09:57:59",
            width: 150,
        },
        {
            caption: "Yokohama Line, 30 juillet 2019 - 11:35:44",
            width: 100,
        },
        {
            caption: "Yokohama Line, 30 juillet 2019 - 12:06:45",
            width: 150,
        },
        {},
        {
            caption: "Shinkansen Hikari 471, 30 juillet 2019 - 12:51:59",
            width: 150,
        },
        {},
        {
            caption: "Kyoto, Karasuma Line, 30 juillet 2019 - 15:06:23",
            width: 100,
        },
        {
            caption: "Kyoto, Ayazaimokucho, 30 juillet 2019 - 16:50:03",
            width: 150,
        },
        {
            caption: "Kyoto, Nishiki Market, 30 juillet 2019 - 17:10:47",
            width: 100,
        },
        {
            caption: "Kyoto, Shijoo Bridge, 30 juillet 2019 - 17:52:35",
            width: 100,
        },
        {
            caption: "Kyoto, Kawabatacho, 30 juillet 2019 - 17:54:08",
            width: 150,
        },
        {
            caption: "Kyoto, Higashiyama, 30 juillet 2019 - 18:07:37",
            width: 100,
        },
        {
            caption: "Kyoto, Higashiyama, 30 juillet 2019 - 18:07:38",
            width: 150,
        },
        {
            caption: "Kyoto, Higashiyama, 30 juillet 2019 - 18:45:45",
            width: 100,
        },
        {},
        {
            caption: "Kyoto, Daikokucho, 30 juillet 2019 - 20:50:12",
            width: 100,
        },
        {
            caption: "Kyoto, Daikokucho, 30 juillet 2019 - 20:54:45",
            width: 150,
        },
        {},
        {
            caption: "Kyoto, Daikokucho, 30 juillet 2019 - 21:09:57",
            width: 100,
        },
        {
            caption: "Kyoto, Daikokucho, 30 juillet 2019 - 21:13:03",
            width: 150,
        },
        {
            caption: "Kyoto, Daikokucho, 30 juillet 2019 - 21:19:37",
            width: 100,
        },
        {
            caption: "Kyoto, Kasabokocho, 30 juillet 2019 - 22:10:29",
            width: 150,
        },
        {},
        {},
        {
            caption: "Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18",
            width: 150,
        },
        {},
        {
            caption: "Nara Line, 31 juillet 2019 - 09:32:08",
            width: 100,
        },
        {
            caption: "Nara Line, 31 juillet 2019 - 09:46:43",
            width: 100,
        },
        {
            caption: "Nara, Higashimuki Nakamachi, 31 juillet 2019 - 10:53:50",
            width: 150,
        },
        {},
        {
            caption: "Nara, Yoshiki-en, 31 juillet 2019 - 11:18:46",
            width: 100,
        },
        {
            caption: "Nara, Tōdai-ji, 31 juillet 2019 - 11:59:59",
            width: 100,
        },
        {
            caption: "Nara, Tōdai-ji, 31 juillet 2019 - 12:47:04",
            width: 150,
        },
        {
            caption: "Nara, Nara Park, 31 juillet 2019 - 15:52:36",
            width: 150,
        },
        {},
        {
            caption: "Nara, Mochiidonocho, 31 juillet 2019 - 16:56:52",
            width: 100,
        },
        {
            caption: "Nara, Mochiidonocho, 31 juillet 2019 - 17:00:46",
            width: 150,
        },
        {},
        {
            caption: "Nara, Sanjōchō, 31 juillet 2019 - 17:19:51",
            width: 100,
        },
        {
            caption: "Nara, Nara Station, 31 juillet 2019 - 17:27:36",
            width: 150,
        },
        {
            caption: "Nara, Nara Station, 31 juillet 2019 - 17:34:31",
            width: 100,
        },
        {
            caption: "Nara Line, 31 juillet 2019 - 17:56:25",
            width: 100,
        },
        {},
        {},
        {
            caption: "Kyoto, Naginatabokocho, 31 juillet 2019 - 22:38:28",
            width: 150,
        },
        {
            caption: "Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:05",
            width: 150,
        },
        {
            caption: "Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:07",
            width: 100,
        },
        {},
        {
            caption: "Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:06:29",
            width: 100,
        },
        {
            caption: "Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:56:27",
            width: 150,
        },
        {
            caption: "Kyoto, Fushimi Inari-taisha, 1er août 2019 - 13:21:32",
            width: 100,
        },
        {},
        {
            caption: "Kyoto, Kyoto Station, 1er août 2019 - 13:54:49",
            width: 150,
        },
        {
            caption:
                "Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:10",
            width: 150,
        },
        {
            caption:
                "Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:11",
            width: 100,
        },
        {
            caption: "Kyoto, Ginkakujimaecho, 1er août 2019 - 15:30:24",
            width: 150,
        },
        {
            caption: "Kyoto, Jodoji Kamiminamidacho, 1er août 2019 - 16:39:26",
            width: 100,
        },
        {
            caption: "Kyoto, 1er août 2019 - 17:18:36",
            width: 100,
        },
        {
            caption: "Kyoto, Okazaki Higashitennocho, 1er août 2019 - 17:57:36",
            width: 150,
        },
        {},
        {
            caption: "Kyoto, Tenryū-ji, 2 août 2019 - 09:33:04",
            width: 150,
        },
        {
            caption: "Kyoto, Ryōan-ji, 2 août 2019 - 12:23:30",
            width: 100,
        },
        {
            caption: "Kyoto, Kinkaku-ji, 2 août 2019 - 13:53:15",
            width: 150,
        },
        {
            caption:
                "Kyoto, Kinugasanishi Goshonouchicho, 2 août 2019 - 14:39:17",
            width: 150,
        },
        {
            caption:
                "Kyoto, Murasakino Nishifunaokacho, 2 août 2019 - 14:48:46",
            width: 100,
        },
        {
            caption: "Kyoto, 2 août 2019 - 14:54:20",
            width: 150,
        },
        {},
        {
            caption: "Kyoto, Higashiyama, 2 août 2019 - 16:10:54",
            width: 150,
        },
        {
            caption: "Kyoto, Higashiyama, 2 août 2019 - 16:10:55",
            width: 100,
        },
        {},
        {
            caption: "Kyoto, Higashiyama, 2 août 2019 - 16:11:21",
            width: 100,
        },
        {
            caption: "Kyoto, Kyoto Station, 3 août 2019 - 10:42:36",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Noda Station, 3 août 2019 - 12:37:37",
            width: 150,
        },
        {
            caption: "Osaka, Ebisunishi, 3 août 2019 - 12:59:50",
            width: 100,
        },
        {
            caption: "Osaka, Ebisuhigashi, 3 août 2019 - 13:13:00",
            width: 100,
        },
        {
            caption: "Osaka, Ebisuhigashi, 3 août 2019 - 13:15:58",
            width: 150,
        },
        {
            caption: "Osaka, Ebisuhigashi, 3 août 2019 - 13:16:01",
            width: 100,
        },
        {
            caption: "Osaka, Nipponbashi, 3 août 2019 - 13:56:26",
            width: 100,
        },
        {
            caption: "Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:34:57",
            width: 150,
        },
        {},
        {
            caption: "Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:40:56",
            width: 100,
        },
        {
            caption: "Osaka, Kuromon Ichiba Market, 3 août 2019 - 15:47:12",
            width: 150,
        },
        {
            caption: "Osaka, Sennichimae, 3 août 2019 - 16:05:58",
            width: 150,
        },
        {
            caption: "Osaka, Sennichimae, 3 août 2019 - 16:06:04",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Amerikamura, 3 août 2019 - 17:32:37",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Amerikamura, 3 août 2019 - 17:53:47",
            width: 150,
        },
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 18:54:29",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 19:01:36",
            width: 100,
        },
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 19:22:05",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 19:48:52",
            width: 100,
        },
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 21:51:41",
            width: 100,
        },
        {
            caption: "Osaka, Dōtonbori, 3 août 2019 - 21:52:11",
            width: 150,
        },
        {
            caption: "Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00",
            width: 100,
        },
        {
            caption: "Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47",
            width: 150,
        },
        {
            caption: "Nankai Kōya Line, 4 août 2019 - 09:23:31",
            width: 150,
        },
        {
            caption: "Nankai Kōya Line, 4 août 2019 - 09:24:48",
            width: 150,
        },
        {
            caption: "Nankai Kōya Line, 4 août 2019 - 09:27:50",
            width: 150,
        },
        {
            caption: "Koyasan, Haraigawa Park, 4 août 2019 - 12:03:40",
            width: 100,
        },
        {},
        {
            caption: "Koyasan, Danjōgaran, 4 août 2019 - 12:51:20",
            width: 100,
        },
        {
            caption: "Koyasan, 4 août 2019 - 14:26:41",
            width: 150,
        },
        {
            caption: "Koyasan, Kongō Sanmai-in, 4 août 2019 - 14:45:46",
            width: 100,
        },
        {
            caption: "Koyasan, 4 août 2019",
            width: 100,
        },
        {
            caption: "Koyasan, 4 août 2019 - 15:06:42",
            width: 100,
        },
        {},
        {
            caption: "Koyasan, 4 août 2019 - 15:18:31",
            width: 150,
        },
        {
            caption: "Koyasan, Jimyo-in, 4 août 2019 - 15:21:31",
            width: 150,
        },
        {
            caption: "Koyasan, Jimyo-in, 4 août 2019 - 15:21:33",
            width: 100,
        },
        {
            caption: "Koyasan, Okunoin Cemetery, 4 août 2019 - 16:46:14",
            width: 100,
        },
        {
            caption: "Kōya, Gokurakubashi Station, 4 août 2019 - 19:41:02",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Dōtonbori, 4 août 2019 - 21:12:51",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Namba, 4 août 2019 - 21:44:04",
            width: 150,
        },
        {
            caption: "Osaka, Namba, 4 août 2019 - 21:45:40",
            width: 100,
        },
        {},
        {
            caption: "Osaka, Yoshino, 5 août 2019 - 09:21:01",
            width: 100,
        },
        {
            caption: "Osaka, Yoshino, 5 août 2019 - 11:00:15",
            width: 100,
        },
        {
            caption: "Osaka, Yoshino, 5 août 2019 - 11:07:25",
            width: 100,
        },
        {
            caption: "Osaka, Osaka Castle Park, 5 août 2019 - 12:05:40",
            width: 150,
        },
        {
            caption: "Osaka, Tenjinbashi, 5 août 2019 - 13:45:42",
            width: 150,
        },
        {
            caption: "Osaka, Nishitenma, 5 août 2019 - 13:57:01",
            width: 100,
        },
        {
            caption: "Osaka, Nishitenma, 5 août 2019 - 13:58:54",
            width: 150,
        },
        {},
        {
            caption: "Osaka, 露天神社, 5 août 2019 - 14:22:52",
            width: 100,
        },
        {
            caption: "Osaka, Umeda, 5 août 2019 - 16:52:00",
            width: 150,
        },
        {
            caption: "Osaka, Umeda, 5 août 2019 - 16:55:13",
            width: 150,
        },
        {
            caption: "Osaka, Tsurunocho, 5 août 2019 - 17:02:25",
            width: 100,
        },
        {},
        {
            caption: "Shinkansen Sakura 549, 6 août 2019 - 10:45:56",
            width: 150,
        },
        {},
        {
            caption: "Shinkansen Sakura 549, 6 août 2019 - 10:46:10",
            width: 150,
        },
        {
            caption: "Hiroshima, Ebisucho, 6 août 2019 - 11:27:35",
            width: 100,
        },
        {
            caption: "Hiroshima, Hondori, 6 août 2019 - 12:11:44",
            width: 150,
        },
        {
            caption: "Hiroshima, Hondori, 6 août 2019 - 15:17:50",
            width: 100,
        },
        {
            caption: "Hiroshima, Otemachi, 6 août 2019 - 16:23:53",
            width: 150,
        },
        {},
        {
            caption: "Hiroshima, Otemachi, 6 août 2019 - 16:28:20",
            width: 150,
        },
        {
            caption: "Hiroshima, Motoyasu Bridge, 6 août 2019 - 16:35:54",
            width: 100,
        },
        {},
        {
            caption: "Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:46:46",
            width: 100,
        },
        {
            caption: "Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:53:20",
            width: 150,
        },
        {
            caption: "Hatsukaichi, Miyajimaguchi, 7 août 2019 - 09:55:08",
            width: 100,
        },
        {},
        {},
        {
            caption: "Itsuku-shima, 7 août 2019",
            width: 100,
        },
        {},
        {
            caption: "Itsuku-shima, Mount Misen, 7 août 2019 - 13:00:57",
            width: 150,
        },
        {
            caption: "Itsuku-shima, Misen Tenboudai, 7 août 2019",
            width: 100,
        },
        {
            caption: "Itsuku-shima, Misen Tenboudai, 7 août 2019 - 13:25:38",
            width: 100,
        },
        {
            caption: "Itsuku-shima, Daishō-in, 7 août 2019 - 15:05:14",
            width: 150,
        },
        {
            caption: "Itsuku-shima, Daishō-in, 7 août 2019 - 15:05:19",
            width: 100,
        },
        {},
        {
            caption: "Itsuku-shima, 7 août 2019 - 16:32:45",
            width: 150,
        },
        {
            caption: "Itsuku-shima, 7 août 2019 - 17:42:51",
            width: 150,
        },
        {
            caption: "Itsuku-shima, Komainu, 7 août 2019 - 18:07:59",
            width: 100,
        },
        {
            caption: "Sanyō Main Line, 7 août 2019 - 19:52:22",
            width: 150,
        },
        {},
        {
            caption: "Sanyō Main Line, 7 août 2019 - 19:54:24",
            width: 150,
        },
        {},
        {},
        {
            caption: "Shinkansen Hikari 442, 8 août 2019 - 11:11:27",
            width: 100,
        },
        {
            caption: "Shinkansen Hikari 442, 8 août 2019 - 11:20:48",
            width: 100,
        },
        {
            caption: "Nakatsugawa, Nakatsugawa Station, 8 août 2019 - 12:49:16",
            width: 150,
        },
        {
            caption: "Magome, 8 août 2019",
            width: 100,
        },
        {
            caption: "Magome, 8 août 2019",
            width: 100,
        },
        {},
        {
            caption: "Magome, 8 août 2019 - 17:41:32",
            width: 150,
        },
        {
            caption: "Tsumago, 9 août 2019",
            width: 100,
        },
        {},
        {
            caption: "Shinkansen, 10 août 2019 - 09:41:29",
            width: 150,
        },
        {},
        {},
        {
            caption: "Tokyo, Okachimachi Station, 10 août 2019 - 12:00:34",
            width: 150,
        },
        {
            caption: "Tokyo, Ebisu, 10 août 2019 - 13:08:24",
            width: 100,
        },
        {
            caption: "Tokyo, Shibuya, 10 août 2019 - 17:06:17",
            width: 150,
        },
        {
            caption: "Tokyo, Shibuya, 10 août 2019 - 17:07:05",
            width: 100,
        },
        {
            caption: "Tokyo, Jingūmae, 10 août 2019 - 19:32:27",
            width: 150,
        },
        {
            caption: "Tokyo, Yamanote Line, 10 août 2019 - 20:54:47",
            width: 150,
        },
        {
            caption: "Tokyo, Yamanote Line, 10 août 2019 - 20:54:56",
            width: 150,
        },
        {
            caption: "Tokyo, Ueno Station, 10 août 2019 - 21:02:33",
            width: 150,
        },
        {
            caption: "Tokyo, Ueno, 11 août 2019 - 09:42:14",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Tokyo Station, 11 août 2019 - 10:03:50",
            width: 100,
        },
        {
            caption: "Tokyo, Yokosuka Line, 11 août 2019 - 10:07:59",
            width: 100,
        },
        {},
        {
            caption: "Kamakura, Komachi, 11 août 2019 - 11:25:52",
            width: 100,
        },
        {
            caption: "Kamakura, Komachi, 11 août 2019 - 11:27:33",
            width: 150,
        },
        {
            caption: "Kamakura, Yukinoshita, 11 août 2019 - 13:40:25",
            width: 100,
        },
        {
            caption: "Kamakura, Komachi, 11 août 2019 - 15:33:22",
            width: 150,
        },
        {},
        {
            caption: "Kamakura, Kōtoku-in, 11 août 2019 - 16:30:47",
            width: 150,
        },
        {},
        {
            caption: "Kamakura, Kōtoku-in, Kamakura Daibutsu, 11 août 2019",
            width: 150,
        },
        {
            caption: "Kamakura, Hase, 11 août 2019 - 17:12:10",
            width: 150,
        },
        {},
        {
            caption: "Kamakura, Yuigahama Beach, 11 août 2019 - 17:25:08",
            width: 150,
        },
        {
            caption: "Kamakura, Yuigahama Beach, 11 août 2019 - 17:29:53",
            width: 100,
        },
        {
            caption: "Kamakura, Yuigahama Beach, 11 août 2019 - 18:33:39",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 11:05:49",
            width: 100,
        },
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 11:27:50",
            width: 150,
        },
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 12:06:14",
            width: 150,
        },
        {},
        {},
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 12:08:24",
            width: 150,
        },
        {
            caption: "Tokyo, Ueno Park, 12 août 2019 - 12:26:07",
            width: 150,
        },
        {
            caption: "Tokyo, Ueno Park, 12 août 2019 - 12:27:08",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Yanaka, 12 août 2019 - 13:42:00",
            width: 100,
        },
        {
            caption: "Tokyo, Yanaka, 12 août 2019 - 13:42:00",
            width: 100,
        },
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13",
            width: 150,
        },
        {},
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13",
            width: 150,
        },
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 14:02:18",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 14:24:08",
            width: 100,
        },
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 14:52:58",
            width: 150,
        },
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 15:00:36",
            width: 150,
        },
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 15:08:23",
            width: 100,
        },
        {},
        {
            caption: "Tokyo, Nishi-Nippori, 12 août 2019 - 15:14:12",
            width: 100,
        },
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 20:12:05",
            width: 100,
        },
        {
            caption: "Tokyo, Ueno, 12 août 2019 - 23:16:40",
            width: 150,
        },
        {},
        {
            caption: "Tokyo, Suehirochō Station, 13 août 2019 - 11:23:11",
            width: 100,
        },
        {
            caption: "Tokyo, Akihabara, 13 août 2019 - 11:40:05",
            width: 150,
        },
        {
            caption: "Tokyo, Toyosu, 13 août 2019 - 13:21:24",
            width: 100,
        },
        {
            caption: "Tokyo, Tsukiji Market, 13 août 2019 - 13:52:38",
            width: 100,
        },
        {
            caption: "Tokyo, Tsukiji Market, 13 août 2019 - 13:58:30",
            width: 150,
        },
        {
            caption: "Tokyo, Tsukiji Market, 13 août 2019 - 15:30:19",
            width: 150,
        },
        {
            caption: "Tokyo, Ginza, 13 août 2019 - 15:45:39",
            width: 100,
        },
        {
            caption: "Tokyo, Ginza, 13 août 2019 - 16:11:24",
            width: 150,
        },
        {},
        {},
        {
            caption: "Tokyo, Shinjuku Station, 13 août 2019 - 20:06:33",
            width: 100,
        },
    ];
    const numberOfSlides = projectData.layoutSpreads;
    const contentSelector = ".content--projet-3";
    let index = 1;

    function pageLayout(selector, number) {
        const page = document.createElement("div");
        page.classList.add("slide__page");

        if (picturesData[number - 1].hasOwnProperty("caption")) {
            const img = document.createElement("img");
            const caption = document.createElement("p");

            caption.textContent = picturesData[number - 1].caption;

            if (number % 2 === 0) {
                caption.classList.add(
                    "slide__caption",
                    "slide__caption--right"
                );
            } else {
                caption.classList.add("slide__caption", "slide__caption--left");
            }

            if (picturesData[number - 1].width === 150) {
                img.classList.add("slide__image--big");
            } else {
                img.classList.add("slide__image--small");
            }

            if (number !== 2) {
                img.setAttribute("loading", "lazy");
            }

            img.addEventListener("click", (e) => {
                e.stopPropagation();
                e.preventDefault();
                e.target.classList.toggle("slide__image--big");
                e.target.classList.toggle("slide__image--small");
            });

            responsiveLoading(img, projectData.id, index);

            page.appendChild(caption);
            page.appendChild(img);
            index++;
        }

        selector.appendChild(page);
    }

    slidesLayout(numberOfSlides, contentSelector, pageLayout);
}

function createNav() {
    const leftNavData = [
        ["1", "7.16"],
        ["13", "7.19"],
        ["24", "7.22"],
        ["42", "7.25"],
        ["62", "7.28"],
    ];
    const rightNavData = [
        ["79", "7.31"],
        ["103", "8.03"],
        ["134", "8.06"],
        ["154", "8.09"],
        ["170", "8.12"],
    ];
    const leftSelector = document.querySelector(".content--projet-3__nav--1");
    const rightSelector = document.querySelector(".content--projet-3__nav--2");

    function navLayout(array, selector) {
        for (let i = 0; i < array.length; i++) {
            const anchor = document.createElement("a");
            const navItem = document.createElement("li");

            anchor.href = `#slide-${array[i][0]}`;
            anchor.textContent = array[i][1];

            navItem.appendChild(anchor);
            selector.appendChild(navItem);
        }
    }

    navLayout(leftNavData, leftSelector);
    navLayout(rightNavData, rightSelector);
}

function createContent() {
    createSlides();
    createNav();
}

(function projectThree() {
    createContent();
    createSpreads(projectData);
})();
