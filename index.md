---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---


<div class="post-date">
  {{ site.posts.last.date | date: '%w %b %Y' }}
</div>

# [{{ site.posts.last.title }}]({{site.posts.last.url}})

<div class="py-2">
  {% include social.html url=page.url title=page.title %}
</div>
{{ site.posts.last.content }}
{% include comments.html id=site.posts.last.id %}