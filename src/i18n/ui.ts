export const languages = {
	en: "English",
	"zh-cn": "简体中文",
} as const;

export const defaultLang = "en" as const;
export type Lang = keyof typeof languages;

export const ui = {
	en: {
		"nav.screenshots": "Screenshots",
		"nav.install": "Install",
		"nav.stars": "3.1k",

		"hero.title.1": "A simple",
		"hero.title.2": "third-party Jellyfin",
		"hero.title.3": "client for Linux.",
		"hero.cta": "Install Tsukimi",
		"hero.meta": "v26.7.3 · GPL-3.0 · Flathub / AUR / nixpkgs / COPR",
		"hero.shot.alt": "Tsukimi playing Fate/Zero with the episode list open",

		"tech.gtk": "Native desktop UI",
		"tech.mpv": "Video playback",
		"tech.gst": "Music playback",
		"tech.danmaku": "Danmaku support",
		"tech.gpl": "Free & open source",

		"gallery.title": "Screenshots",
		"gallery.library": "Library",
		"gallery.library.alt": "Tsukimi library view with a poster grid",
		"gallery.player": "Player, with danmaku",
		"gallery.player.alt": "Tsukimi video player with danmaku comments overlaid",
		"gallery.music": "Music",
		"gallery.music.alt": "Tsukimi music player showing an album tracklist",

		"install.title": "Install",
		"install.tabs": "Installation methods",
		"install.copy": "Copy",
		"install.copied": "Copied",
		"install.flathub.note": "# then run: flatpak run moe.tsuna.tsukimi",
		"install.arch.note": "# latest commit: paru -S tsukimi-git",
		"install.nix.note": "# in nixpkgs since 24.11",
		"install.gentoo.note": "# sync first: sudo emerge --sync gentoo-zh",

		"footer.copyright": "© 2026 Tsukimi Contributors",

		"meta.title": "Tsukimi — A simple third-party Jellyfin client for Linux",
		"meta.description":
			"Tsukimi is a simple third-party Jellyfin client for Linux. Native GTK4 UI, MPV GPU-NEXT video playback, GStreamer music playback and danmaku support.",
	},
	"zh-cn": {
		"nav.screenshots": "界面预览",
		"nav.install": "安装",
		"nav.stars": "3.1k",

		"hero.title.1": "一款简洁的",
		"hero.title.2": "第三方 Jellyfin",
		"hero.title.3": "Linux 客户端",
		"hero.cta": "安装 Tsukimi",
		"hero.meta": "v26.7.3 · GPL-3.0 · Flathub / AUR / nixpkgs / COPR",
		"hero.shot.alt": "Tsukimi 正在播放 Fate/Zero，剧集列表已展开",

		"tech.gtk": "原生桌面体验",
		"tech.mpv": "视频播放",
		"tech.gst": "音乐播放",
		"tech.danmaku": "弹幕支持",
		"tech.gpl": "自由开源软件",

		"gallery.title": "界面预览",
		"gallery.library": "媒体库",
		"gallery.library.alt": "Tsukimi 媒体库海报墙视图",
		"gallery.player": "播放器（支持弹幕）",
		"gallery.player.alt": "Tsukimi 视频播放器，画面上叠加弹幕",
		"gallery.music": "音乐播放",
		"gallery.music.alt": "Tsukimi 音乐播放器，显示专辑曲目列表",

		"install.title": "安装",
		"install.tabs": "安装方式",
		"install.copy": "复制",
		"install.copied": "已复制",
		"install.flathub.note": "# 运行应用：flatpak run moe.tsuna.tsukimi",
		"install.arch.note": "# 最新开发版：paru -S tsukimi-git",
		"install.nix.note": "# 自 24.11 起已收录于 nixpkgs",
		"install.gentoo.note": "# 需先同步 gentoo-zh：sudo emerge --sync gentoo-zh",

		"footer.copyright": "© 2026 Tsukimi Contributors",

		"meta.title": "Tsukimi — 简洁的第三方 Jellyfin Linux 客户端",
		"meta.description":
			"Tsukimi 是一款简洁优雅的第三方 Jellyfin Linux 客户端。原生 GTK4 界面、MPV GPU-NEXT 视频播放、GStreamer 音乐播放与弹幕支持。",
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
