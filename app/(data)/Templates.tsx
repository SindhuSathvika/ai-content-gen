export default[
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depending on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet wise based on given niche & outline topic and give me result in Rich text editor format include the heading and outline each step',
        slug: 'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title depending on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
        aiPrompt: 'Generate blog content based on the topic and outline in bullet points',
        slug: 'blog-content-generation',
        form:[
            {
                label:'Enter your blog topic',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label:'Enter blog Outline here',
                field:'textarea',
                name:'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title depending on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiPrompt: 'Generate top 5 Blog Topic Ideas in bullet points based on the given niche',
        slug: 'blog-topic-ideas',
        form:[
            {
                label:'Enter your Niche',
                field:'input',
                name:'niche',
                required:true
            },
            
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title depending on your blog information',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/17520/17520262.png',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 tile ideas based on the given keywords and description',
        slug: 'Youtube-seo-title',
        form:[
            {
                label:'Enter your Youtube video topic keywords',
                field:'input',
                name:'keywords',
                required:true
            },
            {
                label: 'Enter youtube description Outline here',
                field: 'textarea',
                name: 'outline'
            }
            
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title depending on your blog information',
        category:'Youtube Tools',
        icon:'https://cdn-icons-png.flaticon.com/128/10885/10885022.png',
        aiPrompt: 'Generate Youtube video description with emoji under 4-5 lines based in the given topic or title',
        slug: 'Youtube-description',
        form:[
            {
                label:'Enter your Youtube topic/title',
                field:'input',
                name:'topic',
                required:true
            },
            {
                label: 'Enter youtube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagriarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog post',
        category:'Rewriting Tool',
        icon:'https://cdn-icons-png.flaticon.com/128/9639/9639915.png',
        aiPrompt: 'Rewrite the given article without any plagiarism in rich text editor format.',
        slug: 'rewrite-article',
        form:[
            {
                label:'🤖 Provide your Article/BlogPost or any other file',
                field:'textarea',
                name:'article',
                required:true
            },
            {
                label: 'Provide Article here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
]