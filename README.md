# Earthships

The first website I ever built, a responsive site about earth-ships, built as part of a class MDDN-352 at [Victoria University](http://www.victoria.ac.nz/design). Currently hosted at [ryanloader.me/earthships](http://ryanloader.me/earthships/).

I host the site on [Amazon Web Services](https://aws.amazon.com/) for about ~55c a month. I make use of the [S3](https://aws.amazon.com/s3/) service for content storage and distribution as described in [this article](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) and [Route 53](https://aws.amazon.com/route53/) for DNS.

### Features ###

* *Responsive layout that's optimised for iPhone, iPad and desktop viewing*
* *Custom navigation that presents as tabs on phones and tablets and hides on desktop*
* *A spinning tire (for some reason)*

### TODO ###

We were given four weeks to build this site (including concept development) and in that time I went from not knowing what a server was to having a working website. I learnt a lot and really valued the experience, but if I ever get time to revisit it there are a number of things I would change;

* USE SMALLER (web optimised) IMAGES
* Improve the content (was not the focus of the paper so fell by the way-side)
* Add a fair bit more padding - particularly on the desktop layout
* Lazy load the extra desktop content (gallery and links) - phones don't need this download initially.
