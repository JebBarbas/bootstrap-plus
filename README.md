# Bootstrap Plus
Add new styles (components) and colors to Bootstrap.

## Warning
These are experimental stylesheets I made while was learning SASS. I don't know if they are compatible with all browsers and I'd be very happy if you send me feedback.

## Diferences between normal and minified files
- normal files are formatted. (Good for know how works)
- minified files are in one line and weight less. (Faster, good for only use it)

## Instalation
To use bootstrap-plus you need to first have bootstrap. You need to add bootstrap css, bootstrap js, bootstrap-plus css and bootstrap-plus js. You can add the files or the jsDelivr CDN.

### Full Kit
You can add the 4 necesary files only writting the bsp.js file and adding the class "add-full-kit"
```html
<script src="https://cdn.jsdelivr.net/gh/jebbarbas/bootstrap-plus@v1.0.0/bsp.min.js" class="add-full-kit"></script>
```
Or you can add the scripts manually following the next instructions.

### CSS
Add this in your `<head>...</head>`.
```html
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/jebbarbas/bootstrap-plus@v1.0.0/bsp.min.css">
</head>
```

### JS
Don't forget to add the .js file too (some components of bootstrap and bootstrap-plus need this).
```html
<head>
    <script src="https://cdn.jsdelivr.net/gh/jebbarbas/bootstrap-plus@v1.0.0/bsp.min.js"></script>
</head>
<body>
    ...
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</body>
```

## How to use - Quick start
Once you have Bootstrap, use it normally, but you can use the colors:  'magic', 'juice', 'ocean', 'cake',
'brick', 'blood', 'mustard', 'militar', 'lapislazuli', 'grass', 'leaf', 'coral', 'love', 'clay', 'chocolate', 'elegant', 'silver', 'neonblue', 'neongreen', 'neoncyan', 'neonred', 'neonmagenta', 'neonyellow' and 'rgb' (rgb uses JS).
And then put them when normally you put 'primary' or 'success'

### Example
```html
<button class="btn btn-magic">Magic Button</button>
<div class="alert alert-juice">Juice Alert</div>
<button class="btn btn-outline-ocean btn-sm">Small Outline Ocean Button</button>
<span class="text-blood">Some text in blood color</span>
<div class='bg-rgb'>Rgb Background</div>
```

## New things added
Bootstrap-plus adds lots of things to bootstrap, like new colors and new styles, here is all that adds.

### New colors
- 'magic' color.
- 'juice' color.
- 'ocean' color.
- 'cake' color.
- 'brick' color.
- 'blood' color.
- 'mustard' color.
- 'militar' color.
- 'lapislazuli' color.
- 'grass' color.
- 'leaf' color.
- 'coral' color.
- 'love' color.
- 'clay' color.
- 'chocolate' color.
- 'elegant' color.
- 'silver' color.
- 'neonblue' color.
- 'neongreen' color.
- 'neoncyan' color.
- 'neonred' color.
- 'neonmagenta' color.
- 'neonyellow' color.
- 'rgb' color.

### New styles (components)
- 'Callout' component.
- 'Circle' component.
- 'Circle-State' component.
- 'Icon Margin' style.
- 'Jumbotron' component (for bs-5).
- 'Form-Check' component (for bs-5 'form-switch').
- 'Login' component.
- 'Minilert' component.
- 'Neonbutton' component (uses JS).
- 'Sidebar' component (uses JS).
- 'Opacity' style.

## Full Documentation.
I'm working in a full documentation, but if you have any question, you can send me a DM on Instagram @jebbarbas.prog.