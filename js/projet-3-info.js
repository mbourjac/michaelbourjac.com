for (let i = 1; i < 301; i++) {
    const info = [
        'Tokyo, Asakusa, 15 juillet 2019 - 16:33:43',
        'Tokyo, Shinjuku, "Purikura", 16 juillet 2019 - 17:43:28',
        'Tokyo, Shinjuku, "Purikura", 16 juillet 2019 - 18:00:44',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:13:34',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:14:24',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:15:18',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:15:40',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:16:02',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:30:57',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:32:06',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:34:55',
        'Tokyo, Shibuya, "Purikura", 17 juillet 2019 - 22:35:08',
        'Tokyo, Asakusa, 18 juillet 2019 - 09:47:42',
        'Tokyo, Asakusa, 18 juillet 2019 - 10:22:39',
        'Tokyo, Asakusa, 18 juillet 2019 - 11:35:14',
        'Tokyo, Aoyama, 18 juillet 2019 - 12:44:57',
        'Tokyo, Samoncho, 18 juillet 2019 - 13:10:58',
        'Tokyo, Yotsuya, 18 juillet 2019 - 13:12:59',
        'Tokyo, Shinjuku, 18 juillet 2019 - 15:47:36',
        'Tokyo, <span class="documents__link" id="link-1">Asakusa Line</span>, 19 juillet 2019 - 06:14:02',
        '<span class="documents__link" id="link-2">Shikine-jima</span>, Tomari Beach, 19 juillet 2019',
        'Shikine-jima, Jinata Onsen, 19 juillet 2019',
        'Shikine-jima, 亀吉大家, 20 juillet 2019',
        'Shikine-jima, 20 juillet 2019 - 14:28:12',
        'Shikine-jima, 唐人津城, 20 juillet 2019',
        'Shikine-jima, 隈の井, 20 juillet 2019',
        'Shikine-jima, 隈の井, 20 juillet 2019',
        'Shikine-jima, 20 juillet 2019',
        'Shikine-jima, 20 juillet 2019',
        'Shikine-jima, Nobushi Port, 21 juillet 2019 - 12:43:53',
        'Shikine-jima, Azalea Ferry, 21 juillet 2019',
        'Shimoda, "Jizō", 21 juillet 2019',
        '<span class="documents__link" id="link-3">Shimoda</span>, 21 juillet 2019',
        'Shimoda, Aoki, 22 juillet 2019 - 11:31:27',
        'Shimoda, Kisami, 22 juillet 2019',
        'Shimoda, Kisami Ohama Beach, 22 juillet 2019',
        'Shimoda, Irita Beach, 22 juillet 2019 - 16:01:49',
        'Shimoda, <span class="documents__link" id="link-4">Izu Kyūkō Line</span>, 23 juillet 2019 - 11:13:19',
        'Kawazu, Tanaka, 23 juillet 2019 - 11:50:41',
        'Kawazu, <span class="documents__link" id="link-5">Seven Waterfalls</span>, 23 juillet 2019 - 13:54:07',
        'Kawazu, Seven Waterfalls, 23 juillet 2019',
        'Kawazu, Seven Waterfalls, 23 juillet 2019',
        'Kawazu, Seven Waterfalls, 23 juillet 2019 - 14:35:35',
        'Kawazu, Kawazu Station, 23 juillet 2019 - 16:51:35',
        'Itō, Izu-Kōgen Station, 24 juillet 2019 - 11:43:48',
        'Itō, <span class="documents__link" id="link-6">Izu-Kōgen Station</span>, 24 juillet 2019 - 11:46:58',
        'Itō, Yawatano, 24 juillet 2019 - 12:38:37',
        'Itō, <span class="documents__link" id="link-7">Izu Kyūkō Line</span>, 24 juillet 2019 - 12:48:27',
        'Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:48:38',
        'Itō, Izu Kyūkō Line, 24 juillet 2019 - 12:49:13',
        '<span class="documents__link" id="link-8">Itō</span>, Itō Station, 24 juillet 2019 - 13:08:15',
        'Itō, Saiwaicho, 24 juillet 2019 - 14:46:07',
        'Itō, Matsukawacho, 24 juillet 2019 - 15:01:21',
        'Itō, Matsukawacho, 24 juillet 2019 - 15:01:52',
        'Itō, Itō Orange Beach, 24 juillet 2019 - 15:28:29',
        'Itō, Yukawa, 24 juillet 2019 - 18:22:54',
        'Itō, Higashimatsubaracho, "Rāmen", 24 juillet 2019 - 22:01:40',
        'Itō, Izu Kyūkō Line, 24 juillet 2019 - 22:35:57',
        'Itō, Yawatano, 25 juillet 2019',
        'Itō, Yawatano, 25 juillet 2019 - 09:49:51',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, 25 juillet 2019 - 11:17:52',
        'Jōgasaki Kaigan, 25 juillet 2019 - 11:41:14',
        'Jōgasaki Kaigan, 25 juillet 2019 - 12:29:37',
        'Jōgasaki Kaigan, 25 juillet 2019 - 13:22:33',
        'Jōgasaki Kaigan, 25 juillet 2019 - 13:19:06',
        'Jōgasaki Kaigan, 25 juillet 2019 - 11:58:34',
        'Jōgasaki Kaigan, 25 juillet 2019 - 12:05:55',
        'Jōgasaki Kaigan, 25 juillet 2019 - 13:24:42',
        'Jōgasaki Kaigan, 25 juillet 2019 - 13:25:56',
        'Jōgasaki Kaigan, 25 juillet 2019 - 12:15:12',
        'Jōgasaki Kaigan, 25 juillet 2019 - 11:49:27',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, 25 juillet 2019 - 12:16:55',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, Renchakuji-Okunoin, 25 juillet 2019 - 13:54:11',
        'Jōgasaki Kaigan, 25 juillet 2019',
        'Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:54:48',
        'Jōgasaki Kaigan, Izu Oceanic Park, 25 juillet 2019 - 14:59:34',
        'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:11',
        'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:13',
        'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:20',
        'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:21',
        'Jōgasaki Kaigan, 25 juillet 2019 - 15:27:23',
        'Jōgasaki Kaigan, Kadowakitsuri Bridge, 25 juillet 2019 - 15:53:19',
        'Itō, Yukawa, 25 juillet 2019 - 17:25:11',
        'Itō, Matsukawacho, 25 juillet 2019',
        'Itō, Izukyu-Line, 25 juillet 2019 - 21:27:56',
        'Itō, <span class="documents__link" id="link-9">Itō Line</span>, 26 juillet 2019 - 10:43:15',
        'Itō, Itō Line, 26 juillet 2019 - 11:30:58',
        'Odawara, Odawara Station, 26 juillet 2019 - 11:46:30',
        'Odawara, Odawara Station, 26 juillet 2019 - 11:47:47',
        'Odawara, Odawara Station, 26 juillet 2019 - 12:15:15',
        'Odawara, Odawara Station, 26 juillet 2019 - 12:48:59',
        'Hakone, Onshi Hakone Park, 26 juillet 2019 - 17:00:05',
        'Hakone, <span class="documents__link" id="link-10">Hakonemachi Line</span>, 26 juillet 2019 - 18:20:16',
        'Hakone, <span class="documents__link" id="link-11">Hakonemachi Line</span>, 26 juillet 2019 - 18:21:02',
        'Hakone, Gora Line, 27 juillet 2019 - 11:53:28',
        'Hakone, Hakone-jinja, 27 juillet 2019 - 12:54:45',
        'Hakone, Togendai Line, 27 juillet 2019 - <span class="documents__link" id="link-12">20:56:56</span>',
        'Gotemba, Gotemba Station, 28 juillet 2019 - 11:27:04',
        'Gotemba, Gotemba Station, 28 juillet 2019 - 12:05:55',
        'Fujikawaguchiko, <span class="documents__link" id="link-13">Mount Tenjō Ropeway</span>, 28 juillet 2019 - 15:26:28',
        'Fujikawaguchiko, Mount Tenjō, 28 juillet 2019 - 15:47:50',
        'Fujikawaguchiko, Tenjoyama Park, 28 juillet 2019',
        'Fujikawaguchiko, Mount Tenjō, 29 juillet 2019 - 11:04:39',
        'Fujikawaguchiko, <span class="documents__link" id="link-14">Mount Tenjō</span>, 29 juillet 2019 - 11:05:53',
        'Fujikawaguchiko, Kawaguchi, 29 juillet 2019 - 17:05:47',
        'Fujikawaguchiko, Funatsu, 29 juillet 2019 - 19:09:38',
        'Fujikawaguchiko, 30 juillet 2019 - 09:57:59',
        'Yokohama Line, 30 juillet 2019 - 11:35:44',
        'Yokohama Line, 30 juillet 2019 - 12:06:45',
        '<span class="documents__link" id="link-15">Shinkansen Hikari 471</span>, 30 juillet 2019 - 12:48:01',
        'Shinkansen Hikari 471, 30 juillet 2019 - 12:51:59',
        'Kyoto, Karasuma Line, 30 juillet 2019 - 15:06:23',
        'Kyoto, Ayazaimokucho, 30 juillet 2019 - 16:50:03',
        'Kyoto, Nishiki Market, 30 juillet 2019 - 17:10:47',
        'Kyoto, Nishiki Market, 30 juillet 2019 - 17:12:42',
        'Kyoto, Shijoo Bridge, 30 juillet 2019 - 17:52:35',
        'Kyoto, Kawabatacho, 30 juillet 2019 - 17:54:08',
        'Kyoto, Higashiyama, 30 juillet 2019 - 18:07:37',
        'Kyoto, Higashiyama, 30 juillet 2019 - 18:07:38',
        'Kyoto, Higashiyama, 30 juillet 2019 - 18:45:45',
        'Kyoto, Daikokucho, 30 juillet 2019 - 20:50:12',
        'Kyoto, Daikokucho, 30 juillet 2019 - 20:54:45',
        'Kyoto, Daikokucho, 30 juillet 2019 - 21:09:57',
        'Kyoto, Daikokucho, 30 juillet 2019 - 21:13:03',
        'Kyoto, Daikokucho, 30 juillet 2019 - 21:19:37',
        'Kyoto, Kasabokocho, 30 juillet 2019 - 22:10:29',
        'Kyoto, Myodenjicho, 31 juillet 2019 - 08:55:18',
        'Nara Line, 31 juillet 2019 - 09:32:08',
        'Nara Line, 31 juillet 2019 - 09:46:43',
        'Nara, Higashimuki Nakamachi, 31 juillet 2019 - 10:53:50',
        'Nara, Yoshiki-en, 31 juillet 2019 - 11:18:46',
        'Nara, <span class="documents__link" id="link-16">Tōdai-ji</span>, 31 juillet 2019 - 11:59:59',
        'Nara, Tōdai-ji, 31 juillet 2019 - 12:47:04',
        'Nara, Nara Park, 31 juillet 2019 - 15:52:36',
        'Nara, Mochiidonocho, 31 juillet 2019 - 16:56:52',
        'Nara, Mochiidonocho, 31 juillet 2019 - 17:00:46',
        'Nara, Sanjōchō, 31 juillet 2019 - 17:19:51',
        'Nara, Nara Station, 31 juillet 2019 - 17:27:36',
        'Nara, Nara Station, 31 juillet 2019 - 17:34:31',
        'Nara Line, 31 juillet 2019 - 17:56:25',
        'Kyoto, Naginatabokocho, 31 juillet 2019 - 22:38:28',
        'Kyoto, <span class="documents__link" id="link-17">Fushimi Inari-taisha</span>, 1er août 2019 - 10:07:05',
        'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 10:07:07',
        'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:06:29',
        'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 11:56:27',
        'Kyoto, Fushimi Inari-taisha, 1er août 2019 - 13:21:32',
        'Kyoto, Kyoto Station, 1er août 2019 - 13:54:49',
        'Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:10',
        'Kyoto, Kitashirakawa Higashikubotacho, 1er août 2019 - 15:23:11',
        'Kyoto, Ginkakujimaecho, 1er août 2019 - 15:30:24',
        'Kyoto, Jodoji Kamiminamidacho, 1er août 2019 - 16:39:26',
        'Kyoto, 1er août 2019 - 17:18:36',
        'Kyoto, Okazaki Higashitennocho, 1er août 2019 - 17:57:36',
        'Kyoto, <span class="documents__link" id="link-18">Tenryū-ji</span>, 2 août 2019 - 09:33:04',
        'Kyoto, <span class="documents__link" id="link-19">Ryōan-ji</span>, 2 août 2019 - 12:23:30',
        'Kyoto, Kinkaku-ji, 2 août 2019 - 13:53:15',
        'Kyoto, Kinugasanishi Goshonouchicho, 2 août 2019 - 14:39:17',
        'Kyoto, Murasakino Nishifunaokacho, 2 août 2019 - 14:48:46',
        'Kyoto, 2 août 2019 - 14:54:20',
        'Kyoto, Higashiyama, 2 août 2019 - 16:10:54',
        'Kyoto, Higashiyama, 2 août 2019 - 16:10:55',
        'Kyoto, Higashiyama, 2 août 2019 - 16:11:21',
        'Kyoto, Kyoto Station, 3 août 2019 - 10:42:36',
        'Kyoto, Noda Station, 3 août 2019 - 12:37:37',
        'Osaka, Ebisunishi, 3 août 2019 - 12:59:50',
        'Osaka, Ebisuhigashi, 3 août 2019 - 13:13:00',
        'Osaka, Ebisuhigashi, 3 août 2019 - 13:15:58',
        'Osaka, Ebisuhigashi, 3 août 2019 - 13:16:01',
        'Osaka, Nipponbashi, 3 août 2019 - 13:56:26',
        'Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:34:57',
        'Osaka, Kuromon Ichiba Market, 3 août 2019 - 14:40:56',
        'Osaka, Kuromon Ichiba Market, 3 août 2019 - 15:47:12',
        'Osaka, Sennichimae, 3 août 2019 - 16:05:58',
        'Osaka, Sennichimae, 3 août 2019 - 16:06:04',
        'Osaka, Amerikamura, 3 août 2019 - 17:32:37',
        'Osaka, Amerikamura, 3 août 2019 - 17:53:47',
        'Osaka, Dōtonbori, 3 août 2019 - 18:54:29',
        'Osaka, Dōtonbori, 3 août 2019 - 19:01:36',
        'Osaka, Dōtonbori, 3 août 2019 - 19:22:05',
        'Osaka, Dōtonbori, 3 août 2019 - 19:48:52',
        'Osaka, Dōtonbori, 3 août 2019 - 21:51:41',
        'Osaka, Dōtonbori, 3 août 2019 - 21:52:11',
        'Osaka, Shin-Imamiya Station, 4 août 2019 - 08:38:00',
        'Osaka, Shin-Imamiya Station, 4 août 2019 - 08:39:47',
        'Nankai Kōya Line, 4 août 2019 - 09:23:31',
        'Nankai Kōya Line, 4 août 2019 - 09:23:37',
        'Nankai Kōya Line, 4 août 2019 - 09:23:50',
        'Nankai Kōya Line, 4 août 2019 - 09:24:48',
        '<span class="documents__link" id="link-20">Nankai Kōya Line</span>, 4 août 2019 - 09:27:50',
        '<span class="documents__link" id="link-21">Koyasan</span>, Haraigawa Park, 4 août 2019 - 12:03:40',
        'Koyasan, Danjōgaran, 4 août 2019 - 12:51:20',
        'Koyasan, 4 août 2019 - 14:26:41',
        'Koyasan, Kongō Sanmai-in, 4 août 2019 - 14:45:46',
        'Koyasan, 4 août 2019',
        'Koyasan, 4 août 2019 - 15:06:42',
        'Koyasan, 4 août 2019 - 15:18:31',
        'Koyasan, Jimyo-in, 4 août 2019 - 15:21:31',
        'Koyasan, Jimyo-in, 4 août 2019 - 15:21:33',
        'Koyasan, Okunoin Cemetery, 4 août 2019 - 16:46:14',
        'Kōya, Gokurakubashi Station, 4 août 2019 - 19:41:02',
        'Osaka, Namba, 4 août 2019 - 20:49:59',
        'Osaka, Dōtonbori, 4 août 2019 - 21:14:29',
        'Osaka, Namba, 4 août 2019 - 21:44:04',
        'Osaka, Namba, 4 août 2019 - 21:45:40',
        'Osaka, Yoshino, 5 août 2019 - 09:21:01',
        'Osaka, Yoshino, 5 août 2019 - 11:00:15',
        'Osaka, Yoshino, 5 août 2019 - 11:07:25',
        'Osaka, Osaka Castle Park, 5 août 2019 - 12:05:40',
        'Osaka, Tenjinbashi, 5 août 2019 - 13:45:42',
        'Osaka, Nishitenma, 5 août 2019 - 13:57:01',
        'Osaka, Nishitenma, 5 août 2019 - 13:58:54',
        'Osaka, 露天神社, 5 août 2019 - 14:22:52',
        'Osaka, Umeda, 5 août 2019 - 16:52:00',
        'Osaka, Umeda, 5 août 2019 - 16:55:13',
        'Osaka, Tsurunocho, 5 août 2019 - 17:02:25',
        '<span class="documents__link" id="link-22">Shinkansen Sakura 549</span>, 6 août 2019 - 10:45:56',
        'Shinkansen Sakura 549, 6 août 2019 - 10:46:10',
        '<span class="documents__link" id="link-23">Hiroshima</span>, Ebisucho, 6 août 2019 - 11:27:35',
        'Hiroshima, Hondori, 6 août 2019 - 12:11:44',
        'Hiroshima, Hondori, 6 août 2019 - 15:17:50',
        'Hiroshima, Otemachi, <span class="documents__link" id="link-24">6 août 2019</span> - 16:23:53',
        'Hiroshima, Otemachi, 6 août 2019 - 16:28:20',
        'Hiroshima, <span class="documents__link" id="link-25">Motoyasu Bridge</span>, 6 août 2019 - 16:35:54',
        'Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:46:46',
        'Hiroshima, Hiroden Miyajima Line, 7 août 2019 - 08:53:20',
        'Hatsukaichi, Miyajimaguchi, 7 août 2019 - 09:55:08',
        '<span class="documents__link" id="link-26">Itsuku-shima</span>, 7 août 2019',
        'Itsuku-shima, <span class="documents__link" id="link-27">Mount Misen</span>, 7 août 2019 - 13:00:57',
        'Itsuku-shima, Misen Tenboudai, 7 août 2019',
        'Itsuku-shima, <span class="documents__link" id="link-28">Misen Tenboudai</span>, 7 août 2019 - 13:25:38',
        'Itsuku-shima, Daishō-in, "Daruma", 7 août 2019 - 15:05:14',
        'Itsuku-shima, Daishō-in, 7 août 2019 - 15:05:19',
        'Itsuku-shima, 7 août 2019 - 16:32:45',
        'Itsuku-shima, 7 août 2019 - 17:42:51',
        'Itsuku-shima, "Komainu", 7 août 2019 - 18:07:59',
        'Sanyō Main Line, 7 août 2019 - 19:52:22',
        'Sanyō Main Line, 7 août 2019 - 19:54:24',
        '<span class="documents__link" id="link-29">Shinkansen Hikari 442</span>, 8 août 2019 - 11:11:27',
        'Shinkansen Hikari 442, 8 août 2019 - 11:20:48',
        'Nakatsugawa, <span class="documents__link" id="link-30">Nakatsugawa Station</span>, 8 août 2019 - 12:49:16',
        'Magome, 8 août 2019',
        'Magome, 8 août 2019',
        'Magome, 8 août 2019 - 17:41:32',
        'Tsumago, <span class="documents__link" id="link-31">9 août 2019</span>',
        'Shinkansen, 10 août 2019 - 09:41:29',
        'Tokyo, Okachimachi Station, 10 août 2019 - 12:00:34',
        'Tokyo, Ebisu, 10 août 2019 - 13:08:24',
        'Tokyo, Shibuya, 10 août 2019 - 17:06:17',
        'Tokyo, Shibuya, 10 août 2019 - 17:07:05',
        'Tokyo, Jingūmae, 10 août 2019 - 19:32:27',
        'Tokyo, Yamanote Line, 10 août 2019 - 20:54:47',
        'Tokyo, Yamanote Line, 10 août 2019 - 20:54:52',
        'Tokyo, Yamanote Line, 10 août 2019 - 20:54:54',
        'Tokyo, Yamanote Line, 10 août 2019 - 20:54:56',
        'Tokyo, Ueno Station, 10 août 2019 - 21:02:33',
        'Tokyo, <span class="documents__link" id="link-32">Ueno</span>, 11 août 2019 - 09:42:14',
        'Tokyo, Tokyo Station, 11 août 2019 - 10:03:50',
        'Tokyo, Yokosuka Line, 11 août 2019 - 10:07:59',
        'Kamakura, Komachi, 11 août 2019 - 11:25:52',
        'Kamakura, Komachi, 11 août 2019 - 11:27:33',
        'Kamakura, Yukinoshita, 11 août 2019 - 13:40:25',
        'Kamakura, Komachi, 11 août 2019 - 15:33:22',
        'Kamakura, Kōtoku-in, 11 août 2019 - 16:30:47',
        'Kamakura, Kōtoku-in, <span class="documents__link" id="link-33">Kamakura Daibutsu</span>, 11 août 2019',
        'Kamakura, Hase, 11 août 2019 - 17:12:10',
        'Kamakura, Yuigahama Beach, 11 août 2019 - 17:25:08',
        'Kamakura, Yuigahama Beach, 11 août 2019 - 17:29:53',
        'Kamakura, Yuigahama Beach, 11 août 2019 - 18:33:39',
        'Tokyo, Ueno, 12 août 2019 - 11:05:49',
        'Tokyo, Ueno, 12 août 2019 - 11:27:50',
        'Tokyo, Ueno, 12 août 2019 - 12:06:14',
        'Tokyo, Ueno, 12 août 2019 - 12:08:24',
        'Tokyo, Ueno Park, 12 août 2019 - 12:26:07',
        'Tokyo, Ueno Park, 12 août 2019 - 12:27:08',
        'Tokyo, <span class="documents__link" id="link-34">Yanaka</span>, 12 août 2019 - 13:42:00',
        'Tokyo, Yanaka, 12 août 2019 - 13:42:00',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 14:00:13',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 14:02:18',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 14:24:08',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 14:52:58',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 15:00:36',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 15:08:23',
        'Tokyo, Nishi-Nippori, 12 août 2019 - 15:14:12',
        'Tokyo, Ueno, 12 août 2019 - 20:12:05',
        'Tokyo, Ueno, 12 août 2019 - 23:16:40',
        'Tokyo, Suehirochō Station, 13 août 2019 - 11:23:11',
        'Tokyo, Akihabara, 13 août 2019 - 11:40:05',
        'Tokyo, Toyosu, 13 août 2019 - 13:21:24',
        'Tokyo, Tsukiji Market, 13 août 2019 - 13:52:38',
        'Tokyo, Tsukiji Market, 13 août 2019 - 13:58:30',
        'Tokyo, Tsukiji Market, 13 août 2019 - 15:30:19',
        'Tokyo, Ginza, 13 août 2019 - 15:45:39',
        'Tokyo, Ginza, 13 août 2019 - 16:11:24',
        'Tokyo, Shinjuku Station, 13 août 2019 - 20:06:33'
    ];

    const li = document.createElement("li");

    if (i < 10) {
        li.innerHTML = '00' + i + '&emsp;' + info[i - 1];
    } else if (i < 100) {
        li.innerHTML = '0' + i + '&emsp;' + info[i - 1];
    } else {
        li.innerHTML = i + '&emsp;' + info[i - 1];
    }
    
    document.querySelector(".info__container").appendChild(li);
}

const popUp = function(i, height, ratio) {
    document.querySelector("#link-" + i).addEventListener("click", function() {
        const img = document.createElement("img");
        img.src = "/img/japon/documents/" + i + ".jpg";
        img.id = "doc-" + i;
        img.classList.add("documents__doc");
        document.querySelector(".documents").appendChild(img);

        const doc = document.querySelector("#doc-" + i);

        doc.style.height = height + "vh";

        doc.style.top = Math.floor(Math.random() * (100 - height)) + "vh";

        const widthVh = height * ratio;

        const widthPx = (widthVh * innerHeight) / 100;

        doc.style.left = Math.floor(Math.random() * (innerWidth - widthPx)) + "px";

        doc.style.display = "inline";

        doc.addEventListener("click", function() {
            doc.style.display = "none";
        });
    });
};

for(let i = 1; i < 35; i++) {
    if (i === 1 || i === 26) {
        const height = 50;
        const ratio = 29.7 / 21;
        popUp(i, height, ratio);
    } else if (i === 10) {
        const height = 50;
        const ratio = 29.7 / 21;
        popUp(i, height, ratio);
    } else if (i === 2) {
        const height = 70;
        const ratio = 21 / 29.7;
        popUp(i, height, ratio);
    } else if (i === 17 || i === 30) {
        const height = 50;
        const ratio = 21 / 29.7;
        popUp(i, height, ratio);
    } else if (i === 5) {
        const height = 70;
        const ratio = 21 / 29.7;
        popUp(i, height, ratio);
    }else if (i === 3) {
        const height = 50;
        const ratio = 7 / 6;
        popUp(i, height, ratio);
    } else if (i === 4) {
        const height = 60;
        const ratio = 9 / 16;
        popUp(i, height, ratio);
    } else if (i === 6) {
        const height = 30;
        const ratio = 16 / 10;
        popUp(i, height, ratio);
    } else if (i === 7) {
        const height = 40;
        const ratio = 10 / 16;
        popUp(i, height, ratio);
    } else if (i === 8) {
        const height = 50;
        const ratio = 4 / 3;
        popUp(i, height, ratio);
    } else if (i === 9 || i === 15 || i === 22 || i === 29) {
        const height = 30;
        const ratio = 3 / 2;
        popUp(i, height, ratio);
    } else if (i === 11) {
        const height = 30;
        const ratio = 1 / 1;
        popUp(i, height, ratio);
    } else if (i === 12) {
        const height = 40;
        const ratio = 3 / 2;
        popUp(i, height, ratio);
    } else if (i === 13) {
        const height = 50;
        const ratio = 1 / 2;
        popUp(i, height, ratio);
    } else if (i === 14) {
        const height = 70;
        const ratio = 21 / 29.7;
        popUp(i, height, ratio);
    } else if (i === 16) {
        const height = 40;
        const ratio = 8814 / 4707;
        popUp(i, height, ratio);
    } else if (i === 18) {
        const height = 20;
        const ratio = 2.7 / 1;
        popUp(i, height, ratio);
    } else if (i === 19) {
        const height = 20;
        const ratio = 2.8 / 1;
        popUp(i, height, ratio);
    } else if (i === 20) {
        const height = 20;
        const ratio = 16 / 9;
        popUp(i, height, ratio);
    } else if (i === 21) {
        const height = 30;
        const ratio = 7260 / 15089;
        popUp(i, height, ratio);
    } else if (i === 23) {
        const height = 50;
        const ratio = 6206 / 13149;
        popUp(i, height, ratio);
    } else if (i === 24) {
        const height = 30;
        const ratio = 4375 / 7484;
        popUp(i, height, ratio);
    }  else if (i === 25 || i === 32 || i === 34) {
        const height = 90;
        const ratio = 21 / 29.7;
        popUp(i, height, ratio);
    } else if (i === 27) {
        const height = 40;
        const ratio = 12063 / 13166;
        popUp(i, height, ratio);
    } else if (i === 28) {
        const height = 30;
        const ratio = 8074 / 3879;
        popUp(i, height, ratio);
    } else if (i === 31) {
        const height = 40;
        const ratio = 5922 / 6599;
        popUp(i, height, ratio);
    } else if (i === 33) {
        const height = 60;
        const ratio = 1 / 3;
        popUp(i, height, ratio);
    }
}