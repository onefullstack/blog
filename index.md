---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---


<div class="post-date">
  {{ site.posts.last.date | date: '%w %b %Y' }}
</div>

# {{ site.posts.last.title }}
[Read More]({{ site.posts.last.url }})
{{ site.posts.last.content }}