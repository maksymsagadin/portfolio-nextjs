const projectOne = {
	topLine: 'React.js',
	headline: 'Dent Removal Website',
	description:
		'Produced a responsive website using React.js that features smooth scrolling NavBar links, animate content onto the page as you scroll into view and a Modal window to display content. Styled Components were used to style all of the components.',
	buttonLabel: 'View',
	linkTo: 'https://a-cut-above-autofilm.vercel.app/',
	img: '/projects/nextjs_blog.png',
	alt: 'React Animated Site',
	backgroundColor: 'linear-gradient(180deg, #f3f4f6 0% , #b4b4bc 100%)',
}

const projectTwo = {
	inverse: true,
	topLine: 'Next.js',
	headline: 'Paint Protection Film Blog',
	description:
		"Developed a modern Blog website using Next.JS that pulls content from GraphCMS via an API call in order to manage all blog content through the simple GraphCMS interface. TailwindCSS was used to style the page and components and create a mobile-first, responsive design.",
	buttonLabel: 'View',

	linkTo: 'https://a-cut-above-autofilm.vercel.app/',
	img: '/projects/nextjs_blog.png',
	alt: 'GraphCMS Nextjs Blog',
	backgroundColor: 'linear-gradient(180deg, #b4b4bc 0% , #3d709b 100%)',
}

const projectThree = {
	textinverse: true,
	topLine: 'Plain Javascript',
	headline: "Stock Media Search",
	description:
		'Created a website that displays high quality photos/videos by using an Ajax request to the Pexels REST API. Processed JSON data from API request using Javascript and DOM methods to dynamically populate the page based on user search input.',
	buttonLabel: 'View',

	linkTo: 'https://maksymsagadin.github.io/photo-search-app/',
	backgroundColor: 'linear-gradient(180deg, #3d709b 0% , #020305 100%)',
	img: '/projects/stock_media.png',
	alt: 'Pixels API Project',
}

const projectFour = {
	inverse: true,
	textinverse: true,
	topLine: 'Plain Javascript',
	headline: 'Website Animation Clone',
	description:
		"Built a responsive animation website clone using Tailwind CSS and Javascript to showcase a sticky navigation panel, image carousel, scrolling image sequence, video preview selector and a fetch API request that dynamically populates data based on dropdown menu selection.",
	buttonLabel: 'View',
	linkTo: 'https://maksym-sagadin-corsair.netlify.app/',
	img: '/projects/website_animation_project.png',
	backgroundColor: 'linear-gradient(180deg, #020305 10% , #020305 100%)',
}

export const projectData = [ projectOne, projectTwo, projectThree, projectFour ]