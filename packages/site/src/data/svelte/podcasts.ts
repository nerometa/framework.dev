import { Podcast } from '@framework/system/src/models/podcast'

export const podcastTags = ['general'] as const

export const podcasts: Podcast<(typeof podcastTags)[number]>[] = [
	{
		title: 'Modern Web',
		image:
			'https://pbcdn1.podbean.com/imglogo/image-logo/984467/modern_web_9bpnd.jpg',
		hosts: ['This Dot Media'],
		description:
			'Modern Web is a podcast that explores next generation frameworks, standards, and techniques.',
		rss: 'https://feed.podbean.com/modernweb/feed.xml',
		href: 'https://modernweb.podbean.com',
		tags: ['general'],
	},
	{
		title: 'Svelte Radio',
		image:
			'https://is2-ssl.mzstatic.com/image/thumb/Podcasts125/v4/aa/0e/a5/aa0ea55d-8062-f108-8795-e6235bfc2981/mza_13727194331333927580.jpg/500x500bb.jpg',
		hosts: ['Antony', 'Brittney', 'Shawn', 'Kevin'],
		description:
			'Svelte Radio is a podcast about Svelte. We (Antony, Brittney, Shawn and Kevin) meet up once every two weeks or so and discuss the latest in Svelte. Sometimes we also have interesting guests on.',
		rss: 'https://feeds.transistor.fm/svelte-radio',
		href: 'https://www.svelteradio.com/',
		tags: ['general'],
	},
	{
		title: 'HTML All Things: Svelte Is Here to Stay',
		image:
			'https://uploads-ssl.webflow.com/5f188c7c01b1cd56e383610e/611580f35095d16fc5b11f7a_hatt_logo_transparency_white-p-500.png',
		hosts: ['Matt', 'Mike'],
		description:
			"In this episode Matt and Mike discuss Svelte, a JavaScript framework that compiles when you build your app. Other frameworks like Vue and React do a lot of their work in the browser, Svelte's compile step does that work instead. The duo discuss Mike's impressions of Svelte and where it's going in the future, followed by Matt's recent introduction to Svelte and JavaScript frameworks in general.",
		rss: 'https://podcast.htmlallthethings.com/feed.xml',
		href: 'https://www.htmlallthethings.com/podcasts/svelte-is-here-to-stay',
		tags: ['general'],
	},
	{
		title: 'Svelte with Rich Harris',
		image:
			'https://assets.fireside.fm/file/fireside-images/podcasts/images/3/3911462c-bca2-48c2-9103-610ba304c673/episodes/8/8a485d85-aea7-4811-86c6-de00f8399413/cover_medium.jpg?v=1',
		hosts: ['Rich Harris'],
		description:
			"We interview Rich Harris about Svelte's position in the landscape of frameworks, how other popular frameworks are becoming more Svelte-like, how Svelte handles state, how SvelteKit works, and more",
		rss: 'https://podrocket.logrocket.com/rss',
		href: 'https://podrocket.logrocket.com/rich-harris',
		tags: ['general'],
	},
	{
		title: 'How To Do Things In Svelte',
		image: 'https://syntax.fm/static/logo.png',
		hosts: ['Wes Bos', 'Scott Tolinski'],
		description:
			'In this Hasty Treat, Wes and Scott talk about how to do things in Svelte.',
		rss: 'http://feed.syntax.fm/rss',
		href: 'https://syntax.fm/show/413/how-to-do-things-in-svelte',
		tags: ['general'],
	},
	{
		title: 'Build IT Better',
		image:
			'https://deow9bq0xqvbj.cloudfront.net/image-logo/15574924/Logo_49ei9w.jpg',
		hosts: ['This Dot Media'],
		description:
			'Build it Better is a podcast that focuses on advanced architecture and web development. In each episode, experts in these fields share their insights and knowledge on the latest technologies, techniques, and trends in the industry.',
		rss: 'https://feed.podbean.com/builditbetter/feed.xml',
		href: 'https://builditbetter.podbean.com',
		tags: ['general'],
	},
	{
		title: 'JavaScript Air',
		image:
			'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/68/98/c5/6898c591-1df3-dbdf-7173-72d66cc191ea/mza_12268657556293204019.png/626x0w.webp',
		hosts: ['Kent C. Dodds'],
		description: 'The live broadcast podcast all about JavaScript',
		rss: 'https://feed.podbean.com/audio.javascriptair.com/feed.xml',
		href: 'https://podcasts.apple.com/us/podcast/javascript-air/id1066446588',
		tags: ['general'],
	},
	{
		title: 'JS Party',
		image:
			'https://cdn.changelog.com/uploads/covers/js-party-original.png?v=63725770332',
		hosts: [
			'Jerod Santo',
			'Feross Aboukhadijeh',
			'Amelia Wattenberger',
			'Kevin Ball',
			'Nick Nisi',
			'Divya',
			'Mikeal Rogers',
			'Christopher Hiller',
			'Amal Hussein',
		],
		description: 'a weekly celebration of JavaScript and the web',
		rss: 'https://jsparty.fm/rss',
		href: 'https://changelog.com/topic/svelte/podcasts',
		tags: ['general'],
	},
]
