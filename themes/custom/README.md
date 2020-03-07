# THERAMIND THEME
This theme is a custom web solution by Branon Eusebio for the TheraMind brand clinics.

# POST STRUCTURE
Posting requires a few considerations given the development of this theme.
* COMPONENTS --> posts with a 'type' of 'component' appear throughout the site as the primarty site content on different pages. If you want to edit the site content on any page, simply find its respective post and edit it.
* BLOG --> if you want a new post to appear in the BLOG/NEWS section, add a post and give it a "type" of "blog"
    * Post snippets can display image thumbnails, just include the image path in the "thumbnail" front matter for a given post.
    * Post snippets also accept excerpts, just include a string with the excerpt content in the "excerpt" front matter for a given post.

* POST vs PAGE --> this theme was designed to offer slightly different layouts for Posts vs Pages. 
- A post type of "post" will go through post.ejs, which renders article-full.ejs.
- A post type of "page" will go through page.ejs, which renders page-full.ejs. 


# PAGE TREE STRUCTURE AND CMS UI CONFIGURATION
- Nav menu now programmed to be way smarter! 
- It now takes page information from the site data vs. the config.yml file in Hexo, which allows Netlify CMS to be configured to speak its language.

Two collections added to the CMS UI: 
- Top Level Pages: has new 'children' boolean field, which will slap a dropdown icon in if true, and will loop through to find children pages that have a 'parent' field set to this page
- Lower Level Pages : has new 'parent' string field, which will be used to link this child page to its parent in the navigation
- Both pages also now use 'menulabel' fields, which determine what their name will be in the rendered navigation menu. This allows you to change the title of the page that is rendered to that page, without affecting its place in the page tree. 


# SITE MAP
This site is a bit more complex than the average blog site, as it allows for copy-editing across almost the entire site vs. only the blog posts. Here's a summary of the site map:
* HOME
    --> layout.ejs
            --> homepage.ejs
                --> hero-strip.ejs
                --> about-strip.ejs
                --> conditions-strip.ejs
                --> testimonials-strip.ejs
                        --> testimonials.md [post] (loop through posts with type = 'testimonial')
                --> insurance-strip.ejs
            --> contact-strip.ejs
            --> footer.ejs
* SERVICES
    --> layout.ejs
            --> 
            --> contact-strip.ejs
            --> footer.ejs
* TREATED CONDITIONS
    --> layout.ejs
            --> 
            --> contact-strip.ejs
            --> footer.ejs
* ABOUT
    --> layout.ejs
            --> about.ejs 
                    --> about [page] --> index.md
                    --> providers-strip.ejs
                            --> providers [page] --> index.md
                    --> insurance-strip.ejs
                    --> news-strip.ejs
                            --> news-strip.md [post]
                                    --> news [page] --> index.md
            --> contact-strip.ejs
            --> footer.ejs
* CONTACT
    --> home/contact-strip.ejs [anchor]

