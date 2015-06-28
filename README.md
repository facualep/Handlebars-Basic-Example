# Handlebars-Basic-Example

Handlebars lets you send inside your html or js files templates in html syntax that you can render whenever yo need. You can also prerender them in order to improve performance. Content for these templates can be stored in arrays (which can be send on request or via ajax) and is used just like yo do with emberjs or django.

For example:

```
var data = {
    "title": "TITLE",
    "subtitle": "Just some lorem ipsum here"
}
```

You could use it like this

# {{ data.title }}
## {{ data.subtitle }}

And this would be rendered as it follows

```
<h1> TITLE </h1>
<h2> Just some lorem ipsum here </h2>
```
